# 設計図：Astro 雛形の作成と UI 資産の移植（Phase 1 基盤）

- 作成日: 2026-07-13
- ステータス: **承認済み（2026-07-13・§8 の4点回答で確定）→ 実装可**
- 対象リポジトリ: `kazuyoshi228/yah-homes-v2`（ブランチ `dev`）
- 関連資料: [SEO診断・移行レポート](./seo-diagnosis-and-firebase-migration.html)、`../CLAUDE.md`

---

## 1. 背景・目的

旧 yah.homes（Manus 製・React 19 + Vite の完全CSR + Express/tRPC）は、全ページが空の HTML シェルを返すため検索エンジンに中身が見えず、google/organic が月28ユーザーに留まっている。本プロジェクトは**検索・AI に正しく評価される静的サイトへの作り直し**であり、その最初の一歩として **Astro（SSG）の雛形を作り、旧実装の再利用可能な UI 資産を移植する**。

このフェーズのゴール：**公開ページ（言語別）が、JS 実行なしで本文・見出し・メタを含む完全な HTML として `dist/` にビルドされる状態**を作る。Firebase 接続・デプロイは次フェーズ（別設計図）とし、本設計図では**ローカルでビルド・プレビューできるところまで**を範囲とする。

---

## 2. スコープ

### 含む（Phase 1）
- Astro プロジェクトの雛形作成（`package.json` / `astro.config` / `tsconfig` / Tailwind 設定）
- 言語別ルーティング（en/ko/zh/th）の骨格
- **管理画面（`/admin/*`）の「枠」だけ作成**（下記 3-5）。認証・tRPC 連携・実データは次フェーズ。プレースホルダ＋ナビ構造のみ・`noindex`
- 旧実装からの資産移植：
  - Tailwind v4 + shadcn/ui スタイル基盤（`index.css` のトークン）
  - UI コンポーネント（`components/ui/` の Radix ベース 53 点のうち、公開ページで使うもの）
  - 翻訳（`i18n/translations.ts`）と物件・ローカルデータ（`data/*.ts`）
  - ページ別メタ・JSON-LD の**中身**（旧 `prerender.ts` の `PAGE_META`）
- 公開ページの静的化（下記 3-1 の7種 × 4言語）
- SEO 資産のビルド生成方針（sitemap / hreflang / canonical / robots / llms.txt）

### 含まない（別フェーズ／別設計図）
- 🟡 **管理画面の中身** — 認証・tRPC ルーター連携（analytics / metaAds / instagram / reservations / documents / correlation）・実データ表示は Phase 1 では作らない。Phase 1 は**枠（ルート・レイアウト・ナビ・プレースホルダ）のみ**（3-5）。中身は今後のフェーズで反映。
- Firebase 接続・`firebase init`・Hosting/Functions デプロイ（次フェーズ）
- 独自ドメイン接続・DNS 切替
- Beds24 webhook・予約データ取り込みバックエンド（管理系のため上記と同じく後回し）
- magazine.yah.mobi 記事の `/locals` への取り込み連携（コンテンツ連携フェーズで別途設計）

---

## 3. 提案する構成

### 3-1. 公開ページ（SSG 対象・4言語で展開）

旧 `App.tsx` のルート表と実データに基づく。予約は**自前エンジンではなく Airbnb ディープリンク＋Beds24 iframe 埋め込み**（実コードで確認済み）なので、予約ページも静的コンテンツ＋外部iframe＋外部リンクで成立する。

| ページ | ルート（en/ko/zh/th） | 内容 | 動的要素 |
|---|---|---|---|
| Home | `/`, `/ko/`, `/zh/`, `/th/` | ヒーロー・物件紹介・レビュー・FAQ・問い合わせ | FAQアコーディオン・言語切替・(問い合わせ) |
| About | `/about`, `/ko/about`, … | ディレクター・設計思想 | なし |
| Locals | `/locals`, `/ko/locals`, … | 清川ローカルガイド16選 | なし（将来 magazine 連携） |
| Booking（選択） | `/booking`, `/ko/booking`, … | 2棟の選択・Airbnbリンク | 外部リンクのみ |
| Kiyokawa | `/booking/kiyokawa`, … | 物件詳細＋Beds24 iframe＋Airbnb | Beds24 iframe（外部） |
| Takasago | `/booking/takasago`, … | 同上 | Beds24 iframe（外部） |
| Thankyou | `/thankyou` | 問い合わせ完了 | なし |

- **合計 ≈ 7種 × 4言語（Thankyou 等一部は言語共通）= 約26〜28ページ**。旧レポートの「28ページ」と整合。
- **レガシーリダイレクト**：`/home`, `/ko/home`, `/zh/home`, `/th/home`, `/korean` は **Firebase Hosting の `redirects`（実 HTTP 301）** で処理（次フェーズの `firebase.json`）。Astro 側ではルートを作らない。
- `/404` は Astro の `src/pages/404.astro` で生成。

### 3-2. i18n・URL 戦略（重要・要承認）

- **en をルート（`/`）、ko/zh/th を接頭辞（`/ko/` `/zh/` `/th/`）**。これは旧実装と同一で、**既にインデックスされている URL を変えない**ため（URL を変えると移行時に評価を失う）。
- 各ページに `hreflang`（en/ko/zh/th + x-default）と `canonical` を**ビルド時に機械生成**し、実在ページと一致させる。旧サイトの「全ページ同一タイトル」「canonical不統一」「存在しない `/zh-cn/` 宣言」は繰り返さない。
- Astro のルーティングは `src/pages/` のファイルベース。言語別は下記いずれかを設計段階で確定：
  - **案A（推奨）**：`src/pages/[lang]/...` の動的ルート＋`getStaticPaths()` で en/ko/zh/th を静的生成。翻訳データを1箇所で回せる。
  - 案B：言語ごとに物理ディレクトリを複製。単純だが重複が多い。
  - → **案A を推奨**（DRY・翻訳データ駆動）。承認時に確定。

### 3-3. ディレクトリ構成（雛形）

```
yah.homes-v2/
├─ CLAUDE.md / .gitignore（作成済み）
├─ docs/                      … 設計図・レポート
├─ _reference_original/       … 旧実装（gitignore・参照専用）
├─ astro.config.mjs
├─ tailwind.config / postcss（Tailwind v4 方式に準拠）
├─ tsconfig.json
├─ package.json               … pnpm 管理
├─ public/                    … robots.txt, llms.txt, favicon 等（旧 public から移植）
└─ src/
   ├─ pages/
   │   ├─ [lang]/index.astro          … Home
   │   ├─ [lang]/about.astro
   │   ├─ [lang]/locals.astro
   │   ├─ [lang]/booking/index.astro
   │   ├─ [lang]/booking/kiyokawa.astro
   │   ├─ [lang]/booking/takasago.astro
   │   ├─ thankyou.astro
   │   ├─ sitemap.xml.ts               … ビルド生成
   │   └─ 404.astro
   ├─ layouts/BaseLayout.astro         … <head> メタ・hreflang・JSON-LD 注入
   ├─ components/
   │   ├─ ui/                          … 旧 components/ui から移植（Radix）
   │   └─ islands/                     … JS が要る部分だけ React アイランド
   ├─ i18n/translations.ts             … 移植
   ├─ data/{kiyokawa,takasago,locals}Data.ts … 移植
   └─ lib/seo.ts                       … PAGE_META 相当（title/desc/canonical/jsonLd）
```

### 3-5. 管理画面の「枠」（Phase 1 は骨格のみ）

旧実装の6ページに対応するルートとレイアウトだけ先に用意し、中身は「準備中」プレースホルダにする。認証・データ連携は次フェーズ。

- ルート：`/admin`（→ `/admin/menu` へ）、`/admin/menu`, `/admin/dashboard`, `/admin/instagram`, `/admin/analytics`, `/admin/inbox`, `/admin/docs`
- **言語展開しない**（管理画面は多言語不要）。公開ページの `[lang]` 系とは別に `src/pages/admin/` 配下に置く。
- **全 admin ページに `<meta name="robots" content="noindex,nofollow">`** を付け、検索対象から除外（sitemap にも含めない）。
- 共通の `AdminLayout.astro`（サイドナビ＋ヘッダ）を作り、各ページは見出し＋「準備中」を表示するのみ。
- 認証は Phase 1 では未実装。**この枠は公開 URL に出るため、実データ・機密は一切載せない**（プレースホルダのみ）。認証ゲートは中身を入れるフェーズで設計する。

### 3-4. React アイランドの最小化

コンテンツ本体は静的 `.astro`。**JS が本当に要る部分だけ** `client:*` ディレクティブでアイランド化する：

| 要素 | アイランド化 | 理由 |
|---|---|---|
| 言語切替・モバイルメニュー | 必要（`client:idle`） | 操作が要る |
| FAQ アコーディオン | 必要（`client:visible`） | 開閉。ただし静的に全文を DOM に出し、JS は開閉だけ（AI/検索が全文読める形を維持） |
| 画像カルーセル | 必要（`client:visible`） | embla。ただし主要画像は静的 `<img>` で先に出す |
| Beds24 予約 | 不要 | 外部 `<iframe>` を静的に埋め込むだけ |
| 問い合わせフォーム | 要判断（下記4） | 送信先バックエンドの有無で決まる |

原則：**インデックスさせたいテキストは必ず静的 HTML に含める**。アコーディオンやカルーセルで「JS 実行後に初めて現れる」状態にしない。

---

## 4. 動的処理（Cloud Functions）の扱い

- 公開サイトで唯一バックエンドが要りうるのは**問い合わせフォーム送信**。旧実装に `server/routers/contact.ts` があるが、Home のフォームが実際に送信しているか（あるいは外部リンク/メールか）は**要確認**。
- **本設計図（Phase 1）では Functions を作らない。** 問い合わせは次フェーズで「Cloud Function（`contact`）へ POST」する形に設計する。Phase 1 ではフォーム UI を静的に置き、送信ハンドラは stub（無効化またはメールリンク）とする。
- → **確認事項①**：Phase 1 で問い合わせ送信まで動かすか、UI のみ（送信は次フェーズ）で良いか。

---

## 5. 移植する資産（旧 → 新）

| 資産 | 旧パス（`_reference_original/`） | 移植方針 |
|---|---|---|
| スタイルトークン | `client/src/index.css` | Tailwind v4（`@import "tailwindcss"`）＋ CSS 変数。ほぼそのまま |
| UI コンポーネント | `client/src/components/ui/`（53点） | 公開ページで使う分のみ移植。Radix はそのまま動く |
| 翻訳 | `client/src/i18n/translations.ts` | 型ごと移植。データとして流用 |
| 物件・ローカルデータ | `client/src/data/{kiyokawa,takasago,locals}Data.ts`（計3671行） | 型ごと移植。`Record<Lang, ...>` 構造は Astro の getStaticPaths と相性良好 |
| ページ別メタ・JSON-LD | `server/_core/prerender.ts` の `PAGE_META` | **中身のみ**を `src/lib/seo.ts` へ。UA判定の仕組みは捨てる |
| SEO 静的ファイル | `client/public/{robots.txt,llms.txt,llms-full.txt,manifest.json,favicon*}` | `public/` へ移植。sitemap は動的生成に変更 |

🚨 再利用は「中身」に限る。**仕組み（`server/`・`App.tsx` の wouter ルーティング・tRPC/Drizzle・`prerender.ts` の UA 判定）は移植しない。**

---

## 6. 影響範囲・リスク・代替案

- **影響範囲**：新規ファイル生成のみ。既存の稼働サイト（Manus 上の本番）には一切触れない。`dev` ブランチで完結。
- **リスク**
  - Tailwind v4 の Astro 統合が旧 Vite 構成と設定方法が異なる → 公式 `@astrojs/tailwind` or Vite プラグイン方式を検証しながら進める。
  - shadcn/ui コンポーネントの一部が Astro の島境界で状態を持つ場合、`client:*` 指定漏れで動かない → 移植は「まず静的表示、次にアイランド」の順で確認。
  - 翻訳・データファイルが旧 `Lang` 型・相対 import に依存 → import パスを新構成に合わせて調整。
- **代替案**：Next.js static export も検討したが、Firebase Hosting での SSG 運用は Astro の方が軽量・単純（レポート04章の結論）。**Astro + React アイランドで確定済み**。

---

## 7. テスト／検証計画

1. **ビルド**：`pnpm build` が成功し `dist/` に各言語ページが生成される。
2. **SSG の実証（最重要）**：`dist/` の各 HTML を grep し、**JS 実行なしで** `<title>`（言語別・ページ別に異なる）・`<h1>`・本文・`hreflang`・`canonical`・JSON-LD が含まれることを確認。旧サイトの「空シェル」「全ページ同一タイトル」が再発していないことを機械的にチェック。
3. **型チェック**：`pnpm exec astro check` ＋ `tsc --noEmit`。
4. **プレビュー**：`pnpm dev` で右ビューア表示。言語切替・FAQ・カルーセル・Beds24 iframe の動作確認。
5. **リンク健全性**：内部リンクが言語接頭辞を正しく保持しているか。
6. （Firebase 接続は次フェーズのため、本フェーズではデプロイ検証は行わない）

---

## 8. 要承認・確認事項 → **確定（2026-07-13）**

1. **スコープ**：管理画面（`/admin/*`）は **枠だけ作成**（ルート・レイアウト・ナビ・プレースホルダ・noindex）。中身は今後のフェーズで反映。✅
2. **i18n URL**：en=ルート `/`、ko/zh/th=接頭辞の旧構成を踏襲（URL を変えない）。ルーティングは **案A（`[lang]` 動的ルート＋getStaticPaths）**。✅
3. **問い合わせフォーム**：Phase 1 は **UI のみ**（送信処理は次フェーズ）。✅
4. **Astro バージョン**：**最新安定版（Astro 5系）**。✅

---

## 9. 承認後の作業ステップ（実装順）

1. Astro 雛形作成（`pnpm create astro` ベース）＋ Tailwind v4 統合 ＋ React インテグレーション
2. `index.css` トークン・`components/ui`・`i18n`・`data` の移植
3. `BaseLayout.astro`（メタ/hreflang/canonical/JSON-LD 注入）＋ `lib/seo.ts`
4. `[lang]` ルーティングと Home ページ1枚を先に完成 → SSG 検証（項目7-2）で方式を確定
5. 残りページ（About/Locals/Booking/Kiyokawa/Takasago/Thankyou）を横展開
6. sitemap.xml 動的生成・`public/` SEO ファイル配置
7. 型チェック＋ビルド＋プレビュー → `dev` にコミット

各ステップはこの設計図に沿って進め、大きな設計変更が生じた場合は再度提示する。

---

**この設計図で進めてよいか、特に §8 の4点についてご判断ください。承認後に実装（ステップ9）へ進みます。**
