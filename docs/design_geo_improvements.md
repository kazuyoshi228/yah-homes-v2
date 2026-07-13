# 設計図：GEO（生成エンジン最適化）改善 — P0/P1

- 作成日: 2026-07-13
- ステータス: **承認済み（2026-07-13）→ 実装完了。評価はAirbnb実測値(清川4.77/47・高砂4.67/36)で単一ソース化。Phase B(Beds24 API自動化)は未着手**
- 背景: GEO監査（Perplexity引用エンジン観点）で特定した改善。技術基盤（静的HTML・robots・JSON-LD・4言語）は完成済みで、残るは「事実の正確性」と「引用されやすい中身」。
- 根拠データ: magazine Blueprint §1-4 の実測則 — 定義文開始 +2.1倍 / 数値記載 +40% / エンジン別引用経路

---

## P0-1 🚨 llms.txt / llms-full.txt の事実修正（運営会社）

**問題**: 両ファイルに旧運営者「AIRSTAR Inc.（2014年創業・CEO: Ryutaro Sugimoto）」が計9箇所。PR TIMES・NewsArticle JSON-LD の「ボンファイア株式会社」と矛盾し、AIが誤った運営会社を回答する燃料になっている。

**修正（ユーザー確認済み 2026-07-13）**:
- Operated by **Bonfire Inc.**（**founded 2018**, CEO: **Kazuyoshi Yamada**）
- 日本語表記: ボンファイア株式会社
- Director と CEO は同一人物（Kazuyoshi Yamada）— Director 記述は既存のまま維持

## P0-2 llms.txt / llms-full.txt のビルド生成化

**問題**: 現在は旧サイトからコピーした静的ファイル（Last updated: 2026-06-19 固定）。評価・件数・日付がサイト本体とズレていく構造。

**方針**: Astro のエンドポイント（`src/pages/llms.txt.ts`・`src/pages/llms-full.txt.ts`）でビルド時に生成。
- ナラティブ部分（ブランドストーリー・ローカルガイド等）は編集可能なテンプレート文字列として `src/data/llmsContent.ts` に保持
- **数値（評価・レビュー件数）は `data/properties.ts` から注入** — サイト表示と常に一致
- Last updated はビルド日を自動挿入
- `public/llms*.txt` は削除（エンドポイントに置換・URL不変）

## P0-3 Organization JSON-LD（運営会社の明示）

全ページの JSON-LD に正しい運営者エンティティを追加（BaseLayout で一括）:
```json
{ "@type": "Organization", "name": "Bonfire Inc.", "alternateName": "ボンファイア株式会社",
  "foundingDate": "2018", "founder": {"@type":"Person","name":"Kazuyoshi Yamada"},
  "url": "https://yah.homes", "sameAs": [PR TIMES 3本, Airbnb×2, Booking.com×2] }
```

## P1-1 sameAs によるエンティティ接続

`seo.ts` の LodgingBusiness（清川・高砂）に `sameAs` を追加:
- Airbnb リスティングURL（清川・高砂それぞれ）
- Booking.com 共有リンク（Share-Tyhode / Share-K2G3CO）
- 該当物件の PR TIMES リリース
- Instagram（🔧 アカウントURLの提供があれば追加）

## P1-2 直接回答ブロック（定義文＋数値）

**Home**: ヒーロー直下（Wonder Here ブロックの冒頭）に、機械抽出可能な定義文を1段落追加（4言語）:
> 例（EN）: "yah.homes operates two newly built whole-house rentals in central Fukuoka, Japan — Kiyokawa (up to 7 guests, ★4.88 / 41 reviews) and Takasago (up to 6 guests, ★4.6 / 34 reviews) — about 20 minutes by car from Fukuoka Airport and walking distance to Tenjin."

**物件詳細**: About This Space の intro 冒頭は既に定義文に近いので、数値（評価・徒歩分数）を先頭文に含む形に微修正。

## P1-3 数値ファクト表（By the numbers）

抽出率が最も高い「表」形式で主要数値を提示する共有コンポーネント `FactTable.astro`（4言語）:
| 項目 | Kiyokawa | Takasago |（定員 / 寝室 / ベッド構成 / 天神まで / 博多駅まで / 空港から / Airbnb評価）
- 配置: Home の ComparisonTable は既に同役割を担っている → **Home は既存比較表に「Airbnb評価」行を追加するだけ**とし、新コンポーネントは作らない（重複回避）
- 物件詳細: 概要カード4枚が既にあるため追加不要

→ 実質作業: ComparisonTable に評価行を1行追加（`comparisonTable` 翻訳にラベル追加）

## P1-4 FAQ に自然文クエリを追加

Home FAQ（faqData.ts）に各言語 2 問追加 — AIへの実際の質問文に一致させる:
1. 「福岡で7人が一緒に泊まれる宿はある？」→ Kiyokawa の回答（数値入り）
2. 「天神・博多駅の近くで一棟貸しはある？」→ 徒歩分数入りの回答
（EN/KO/ZH/TH 各言語で自然な言い回しに翻訳）

## P1-5 dateModified

- LodgingBusiness JSON-LD（物件詳細）に `dateModified`（ビルド日）を追加
- llms.txt の Last updated 自動化（P0-2 に含む）

---

## 対象ファイル

| ファイル | 変更 |
|---|---|
| `public/llms.txt`・`public/llms-full.txt` | 削除（エンドポイントへ移行） |
| `src/data/llmsContent.ts` | 新規（テンプレート・P0-1 の事実修正込み） |
| `src/pages/llms.txt.ts`・`src/pages/llms-full.txt.ts` | 新規（ビルド生成） |
| `src/lib/seo.ts` | Organization 定義・sameAs・dateModified |
| `src/layouts/BaseLayout.astro` | Organization JSON-LD 注入 |
| `src/i18n/uiStrings.ts` or translations | 直接回答ブロック文言（4言語） |
| `src/components/home/PropertiesSection.astro` | 直接回答ブロック挿入 |
| `src/components/home/ComparisonTable.astro` | Airbnb評価行の追加 |
| `src/data/faqData.ts` | 自然文クエリ 2問×4言語 追加 |

## 検証計画

- build 後: `curl dist` 相当で llms.txt に Bonfire Inc. / 最新日付 / 正しい評価数値が出ること・AIRSTAR が全ファイルからゼロであること（grep）
- dist HTML: Organization JSON-LD・sameAs・直接回答ブロックが4言語に存在
- `astro check` 0 エラー / 35ページ生成不変 / sitemap 不変

## SEO/GEO 影響

- URL 変更なし・既存メタ不変（追加のみ）→ リスクなし
- 誤情報（旧運営者）の供給停止は即効性のある品質改善

## 要承認

1. この範囲（P0-1〜P1-5）で実装して良いか
2. Instagram の公式アカウントURL（sameAs 用）— あれば教えてください（無ければ省略で進行）
