# ホームCTA最適化 設計書 — HERO 2棟化 × 計測強化

> 作成: 2026-07-16 / 対象: yah.homes-v2 トップページ（`/`）のCTA配置とGA4計測
> ステータス: **設計提案・実装前**。§6の判断だけ発注者確認が残っている。

---

## 1. 背景（2026-07-16 実サイト調査）

- **現状のHERO CTA**: 「Book on Airbnb」赤ピル **1個のみ** → 清川（room 1427842426961787667）に直行。
  高砂へ行く動線がHEROに無い＝**高砂の一次接触をHEROで取りこぼしている**。
- **CTA総数が少ない**: 縦長のトップ（Hero→Properties→Features→Access→Review→Compare→Story→Locals→FAQ→Press→Contact→BookingCTA）に対し、
  予約CTAが出るのは実質 **HERO・PropertiesSection・末尾BookingCTA の3箇所**。中盤（Review直後・Compare直後）に離脱を拾うCTAが無い。
- **GA4計測は既に基盤あり**（`BaseLayout.astro`）: クリック委譲で `href` にドメイン判定し `click_airbnb` / `click_booking_com` / `click_booking_calendar` を送信。
  物件判定は **room ID または現在ページのパス**で `kiyokawa` / `takasago` / `general` を付与。
  → **HEROに両棟のroom ID付きリンクを置けば、追加コード無しで棟別に計測される**（既存の仕組みがそのまま効く）。
- 既知のroom ID: 清川 `1427842426961787667` / 高砂 `1497546315476018480`（PropertiesSection・properties.ts と一致）。

## 2. 決定方針（原則）

1. **HEROは「2棟へ分岐」**: 「Book on Airbnb — Kiyokawa」「Book on Airbnb — Takasago」の2ボタン。最初の意思決定（どっちの棟か）をHEROで取る。
2. **CTAは増やすが、密度を上げすぎない**: 読み物の流れを壊さない位置（セクションの区切り）に、意味のあるCTAだけ足す。
3. **計測は既存イベントを再利用**（`click_airbnb` + `property`）。新イベントは増やさず、**配置場所を`cta_location`パラメータで区別**して「どの位置のCTAが効くか」を測る。
4. **色の規律**: Airbnbピルの赤（#FF5A5F）は「予約」専用色。それ以外の誘導（記事・ローカル）はモノクロのまま（ブランド維持）。

## 3. HERO CTA（2棟化）

### 3-1. 見た目
- 赤ピルを2つ横並び（スマホは縦積み）。ラベル: **「Airbnb — 清川 / Kiyokawa」「Airbnb — 高砂 / Takasago」**（各言語のproperties.ktext流用）。
- Airbnbロゴ（既存SVG）は各ボタン先頭に維持。ボタン幅はテキスト長に追従。
- 補助行（任意）: ピルの下に小さく「★4.77 清川・★4.67 高砂」（信頼シグナルを即出し）。

### 3-2. リンク先
| ボタン | href | 計測(自動付与) |
|---|---|---|
| 清川 | `airbnbUrl(kiyokawa)`（room 1427842426961787667・パラメータ付き） | `click_airbnb` property=kiyokawa |
| 高砂 | `airbnbUrl(takasago)`（room 1497546315476018480・パラメータ付き） | `click_airbnb` property=takasago |

- URLは **HeroSection内にハードコードせず PROPERTIES から参照**（PropertiesSectionと単一ソース化・現状HeroだけURL直書きなので統一する）。

## 4. CTA追加配置（増やす）

トップの「読み進めるほど買いたくなる」導線に沿って、**離脱しやすい谷**にCTAを足す。優先度順。

| # | 位置 | CTA | 理由 | 計測 |
|---|---|---|---|---|
| ★1 | **OurReview直後**（レビューで信頼が上がった瞬間） | 両棟Airbnbピル（HEROと同型・小さめ） | 心理的に最も予約に近い地点 | `click_airbnb` + `cta_location=after_review` |
| ★2 | **ComparisonTable直後**（清川vs高砂を見比べた直後） | 「この2棟を見る」→両棟ピル or 各行にミニCTA | 比較＝意思決定の瞬間。棟が決まっている | `cta_location=after_compare` |
| 3 | **スマホ限定・追従バー**（下部固定） | 「空室・料金を見る（Airbnb）」1本＋棟選択 | モバイルの離脱を常時拾う。PCは出さない | `cta_location=sticky_mobile` |
| 4 | 末尾BookingCTA（既存） | 2棟化して統一 | 現状の最終CTAを2棟対応に | `cta_location=footer_cta` |

- **やらないこと**: 全セクションにCTAを挿す（押し売り感・CVR低下）。Features/Access/Story等の"読ませる"セクションには入れない。
- ★1★2を最優先（実装軽・効果大）。3のスマホ追従は次段。

## 5. GA4計測設計

### 5-1. 既存イベントを活かす（新規イベントを増やさない）
- `click_airbnb` は既に稼働。**`cta_location` パラメータを追加**して「どの配置が効くか」を分離計測。
  - 実装: 各CTAリンクに `data-cta-location="hero|after_review|after_compare|sticky_mobile|footer_cta"` を付け、
    BaseLayoutの委譲ハンドラで `a.dataset.ctaLocation` を読んで event paramに載せる（1箇所の改修で全CTA対応）。
- 既存の `property`（kiyokawa/takasago）判定はそのまま流用（room ID判定が効く）。

### 5-2. GA4側の設定（発注者作業・コード外）
- `cta_location` を**カスタムディメンションに登録**（GA4管理画面）→ レポートで位置別のクリック比較が可能に。
- **主要コンバージョン**: 現状どおり `click_airbnb`（Airbnb送客）をコンバージョン扱い。MS3で自社決済 `purchase` が入ったらそちらを主に昇格（design_booking_p1.md §10）。
- Google Ads: HERO 2棟化で「棟別のクリック単価・CVR」が広告経由でも分離できる（キャンペーン最適化の材料）。

### 5-3. 計測の受入基準
- [ ] HEROの清川/高砂ボタンが `click_airbnb` に `property` 正しく載る（GA4 DebugViewで確認）
- [ ] `cta_location` が5種で分離して記録される
- [ ] 既存の `click_booking_com` / `click_instagram` 等が壊れていない（委譲ロジック改修の副作用チェック）

## 6. 確定事項（2026-07-16 発注者決定）

1. **HERO補助行を出す** — 「★4.77 清川（47件）・★4.67 高砂（36件）｜{RATING_AS_OF} 時点」。
   評価・件数・計測日はすべて **`src/data/properties.ts` の `RATING_AS_OF` / `PROPERTIES.*.rating` / `reviewCount` を単一ソースに参照**（二重管理しない）。
2. **スマホ追従バー（配置3）は入れない** — 確定。
3. **末尾セクション（`BookingCTASection`）は現状「見出しのみ・CTAなしの空枠」**。今回そこに両棟ピルを**初めて追加**してCTA化する（「2棟化」ではなく「CTA新設」）。

## 7. 実装範囲（コード）

- `src/components/home/HeroSection.astro` — CTA 2棟化・PROPERTIES参照化・`data-cta-location="hero"`
- `src/layouts/BaseLayout.astro` — 委譲ハンドラに `cta_location` パラメータ追加（1箇所）
- **新規** `src/components/home/InlineBookingCta.astro`（両棟ピルの共通部品）— ★1★2・末尾で再利用
- `src/pages/[...locale]/index.astro` — OurReview直後・Compare直後に `<InlineBookingCta>` 挿入
- （配置3を含める場合）`src/components/home/StickyMobileCta.astro` 新規
- i18n: ボタンラベル（既存 `t.properties.airbnbBtn` + 棟名）を流用、不足分のみ追加

## 8. リスクと手当て

| リスク | 手当て |
|---|---|
| CTA増で押し売り感・CVR低下 | 読み物セクションには入れない。★1★2の区切り位置限定。A/Bは実測（GA4のcta_location比較）で判断 |
| 委譲ハンドラ改修で既存計測が壊れる | §5-3の受入チェック（他イベント回帰）を必ず通す |
| HERO 2ボタンでLCP/CLS悪化 | ピルはテキスト＋軽量SVGのみ・画像なし。LCPはH1維持（現行の即時描画方針を踏襲） |
| 赤ピル多用でブランドの色規律が緩む | 赤=予約専用を厳守。記事/ローカル誘導はモノクロ |
