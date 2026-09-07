/**
 * GSC（Search Console）定点の蓄積 — agency/gscDaily・gscQuery・gscPage
 * spec_ads_gsc_teiten_20260825.md（2026-08-25 発注者承認）
 *
 * GSCのデータ保持は16ヶ月。放置すると古い月から消えるため、Firestoreへ写して永久保存にする。
 * 初回実行が16ヶ月ぶんのバックフィルになる。
 *
 * データは3日ほど遅れて確定するので、毎朝「7日前〜2日前」の窓を取り直す（GA4と同じ思想）。
 * ctr・position はGSCが返す値をそのまま保存する（自分で割らない＝GSCの定義に合わせる）。
 * クエリ・ページは上位100件/日だけ持つ——裾は表示1回が大半で、判断に使わない。
 */
import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions/v2";
import { FieldValue } from "firebase-admin/firestore";
import { agencyDb } from "./agency/engine.js";
import { SA } from "./beds24Client.js";
import { createHash } from "node:crypto";

const SITE = "sc-domain:yah.homes";        // ドメインプロパティ。URLプレフィクスなら "https://yah.homes/"
const TOP_N = 100;

async function metaToken(scope: string): Promise<string> {
  const r = await fetch(
    "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token"
    + "?scopes=" + encodeURIComponent(scope),
    { headers: { "Metadata-Flavor": "Google" } }).then((x) => x.json() as Promise<{ access_token?: string }>);
  if (!r.access_token) throw new Error("metadata token unavailable");
  return r.access_token;
}
const gscToken = () => metaToken("https://www.googleapis.com/auth/webmasters.readonly");

/* 定点シートの gsc タブ（2026-09-07 追加）。
   従来この列は手元の scripts/gsc-weekly.mjs が書いており、実行をやめた 2026-08-13 で
   記録が止まっていた。クラウド側は Firestore にしか書いておらず、シートを見ている人には
   「止まった」ようにしか見えない。取り直しの窓（7日前〜2日前）ぶんを毎日上書きする。 */
const TEITEN_SHEET_ID = "1DxniZSvdzb5s4Zjt_6MYgWkkFq7q7HlCxyIUZn6hMfk";

async function writeGscSheet(days: { date: string; clicks: number; impressions: number; ctr: number; position: number }[]) {
  if (!days.length) return "対象なし";
  const tok = await metaToken("https://www.googleapis.com/auth/spreadsheets");
  const sheet = (path: string, init?: RequestInit) =>
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${TEITEN_SHEET_ID}${path}`,
      { ...init, headers: { authorization: `Bearer ${tok}`, "content-type": "application/json", ...(init?.headers ?? {}) } });

  const col = await sheet("/values/gsc!A:A?valueRenderOption=FORMATTED_VALUE").then((r) => r.json()) as { values?: string[][] };
  const at = new Map<string, number>();
  (col.values ?? []).forEach((r, i) => { const v = (r[0] ?? "").trim(); if (v) at.set(v, i + 1); });

  const row = (d: typeof days[number]) =>
    [d.date, d.clicks, d.impressions, `${(d.ctr * 100).toFixed(2)}%`, Math.round(d.position * 10) / 10];
  const update: { range: string; values: (string | number)[][] }[] = [];
  const append: (string | number)[][] = [];
  for (const d of days) {
    const r = at.get(d.date);
    if (r) update.push({ range: `gsc!A${r}:E${r}`, values: [row(d)] });
    else append.push(row(d));
  }
  if (update.length) {
    const r = await sheet("/values:batchUpdate", { method: "POST", body: JSON.stringify({ valueInputOption: "USER_ENTERED", data: update }) });
    if (!r.ok) throw new Error(`gsc sheet update ${r.status}: ${(await r.text()).slice(0, 160)}`);
  }
  if (append.length) {
    const r = await sheet("/values/gsc!A:E:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS",
      { method: "POST", body: JSON.stringify({ values: append.sort((a, b) => String(a[0]).localeCompare(String(b[0]))) }) });
    if (!r.ok) throw new Error(`gsc sheet append ${r.status}: ${(await r.text()).slice(0, 160)}`);
  }
  return `更新${update.length}行 / 追加${append.length}行`;
}

type Row = { keys?: string[]; clicks: number; impressions: number; ctr: number; position: number };

async function query(tok: string, body: unknown): Promise<Row[]> {
  const r = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
    { method: "POST", headers: { authorization: `Bearer ${tok}`, "content-type": "application/json" },
      body: JSON.stringify(body) }).then((x) => x.json() as Promise<{ rows?: Row[]; error?: unknown }>);
  if (r.error) throw new Error(`gsc: ${JSON.stringify(r.error).slice(0, 300)}`);
  return r.rows ?? [];
}

const hash = (s: string) => createHash("sha1").update(s).digest("hex").slice(0, 12);
/** JSTのn日前。UTCで計算すると朝8時（＝前日23時UTC）に1日ずれる（2026-08-26 修正） */
const day = (offset: number) =>
  new Date(Date.now() + 9 * 3600e3 - offset * 864e5).toISOString().slice(0, 10);

export const gscSync = onSchedule(
  { schedule: "15 8 * * *", timeZone: "Asia/Tokyo", region: "asia-northeast1",
    serviceAccount: SA, timeoutSeconds: 540 },
  async () => {
    const db = agencyDb();
    const daily = db.collection("gscDaily");
    const existing = (await daily.count().get()).data().count;
    /* 初回＝16ヶ月バックフィル。2回目以降＝7日前〜2日前の取り直し（確定が3日遅れるため） */
    const end = day(2);
    const start = existing < 10 ? day(480) : day(7);

    const tok = await gscToken();
    let dailyN = 0, qN = 0, pN = 0;

    /* ① サイト全体の日次 */
    const rows = await query(tok, { startDate: start, endDate: end, dimensions: ["date"], rowLimit: 1000 });
    let batch = db.batch(), n = 0;
    const flush = async () => { if (n) { await batch.commit(); batch = db.batch(); n = 0; } };
    const sheetDays: { date: string; clicks: number; impressions: number; ctr: number; position: number }[] = [];
    for (const r of rows) {
      const d = r.keys?.[0];
      if (!d) continue;
      // シートは取り直しの窓（通常6日ぶん）だけ反映する。初回の480日バックフィルは流し込まない。
      if (existing >= 10) sheetDays.push({ date: d, clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position });
      batch.set(daily.doc(d), {
        date: d, clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
        source: `Search Console API（${SITE}）`, syncedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
      dailyN++; if (++n >= 400) await flush();
    }
    await flush();

    /* ② 日 × クエリ／ページ の上位。1日ずつ引く（日付を跨いだ集計にしないため） */
    const days = rows.map((r) => r.keys?.[0]).filter(Boolean) as string[];
    for (const d of days) {
      for (const [dim, coll, counter] of [
        ["query", db.collection("gscQuery"), "q"], ["page", db.collection("gscPage"), "p"],
      ] as const) {
        const rs = await query(tok, {
          startDate: d, endDate: d, dimensions: [dim],
          rowLimit: TOP_N, orderBy: [{ field: "clicks", descending: true }],
        });
        for (const r of rs) {
          const key = r.keys?.[0];
          if (!key) continue;
          batch.set(coll.doc(`${d}_${hash(key)}`), {
            date: d, [dim]: key, clicks: r.clicks, impressions: r.impressions,
            ctr: r.ctr, position: r.position, syncedAt: FieldValue.serverTimestamp(),
          }, { merge: true });
          if (counter === "q") qN++; else pN++;
          if (++n >= 400) await flush();
        }
        /* クエリはプライバシー閾値で欠ける。件数を日次側に残して欠測を明示する */
        if (dim === "query") {
          batch.set(daily.doc(d), { queryRows: rs.length }, { merge: true });
          if (++n >= 400) await flush();
        }
      }
    }
    await flush();
    let sheetNote = "スキップ（初回バックフィル）";
    // シート書き込みが失敗しても Firestore の蓄積は成立させる（本体を巻き込まない）
    try { sheetNote = await writeGscSheet(sheetDays); }
    catch (e) { sheetNote = `失敗: ${String(e).slice(0, 160)}`; logger.error("gscSync シート書き込み失敗", e); }
    logger.info(`gscSync: ${start}〜${end} 日次${dailyN} クエリ${qN} ページ${pN} / 定点シート ${sheetNote}`);
  });
