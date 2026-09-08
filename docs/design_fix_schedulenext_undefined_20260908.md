# design_fix_schedulenext_undefined_20260908 — 消し込み帳「完了」で次回起票が落ちる

起票日: 2026-09-08 ／ 状態: **承認済み**（2026-09-08 チャットで発注者「進めて」・実装済み）

## 背景・目的

yah.OS メンテナンスカードの消し込み帳で「完了」を押すと、画面に
`Value for argument "data" is not a valid Firestore document. Cannot use "undefined" as a Firestore value (found in field "budget")`
が出る。完了（verified への遷移）自体は成立するが、続く**次回分の自動起票（scheduleNext）だけが失敗**し、
「一度登録したら思い出さなくてよい」が壊れる。

原因: `functions/src/agency/engine.ts` の `scheduleNext()` が schedules ドキュメントの
`budget` / `statutory` / `vendorId` をそのままコピーしており、未設定（undefined）だと Firestore が書き込みを拒否する。
予算が空欄の定期作業を完了させると必ず再現する。

## 対象ファイルと変更

- `functions/src/agency/engine.ts`（scheduleNext のみ）
  - `budget: s.budget ?? 0` / `statutory: s.statutory ?? false` / `vendorId: s.vendorId ?? ""`

`ignoreUndefinedProperties` の全体有効化は採らない（undefined の握りつぶしが全書き込みに及ぶため）。
初回起票の `createDrafts()` 側は元から `?? 0` 等で防いでおり変更不要。

## 影響範囲・リスク

- 影響は次回分ジョブの自動起票のみ。既定値（0円・法定でない・業者未定）は初回起票側と同じ扱い。
- リスクなし（書けなかったものが書けるようになるだけ）。

## 検証

- `functions` で `npm run build`（tsc）通過。
- 本番反映後、予算未設定の定期作業を完了→次回分ジョブが作られることを確認する。

## デプロイ

agencyApi は main への push で CI がデプロイ（S3）。dev にコミット済み。main への反映は発注者指示で行う。
