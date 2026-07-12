# CLAUDE.md — yah.homes 開発ガイド（AI/開発者向け）

yah.homes（福岡の一棟貸し・ヴィラ／宿泊ブランドサイト＋直接予約）。旧サイト（Manus 製・React 19 + Vite の完全CSR + Express/tRPC）を廃し、**検索・AI に正しく評価される静的サイトとして作り直す**プロジェクト。フロント **Astro（SSG）+ React アイランド**、バックエンド Firebase（Cloud Functions v2 / Firestore / Auth / Storage / Hosting）。Firebase プロジェクト: **`yah-homes`**（[コンソール](https://console.firebase.google.com/u/0/project/yah-homes/overview)）。magazine.yah.mobi とは**別プロジェクト**（データ・権限・課金・障害を分離）。

## このプロジェクトの存在理由（最重要の設計原則）

旧 yah.homes は「サイトはあるが検索の入口に接続されていない」状態だった。作り直しはこの一点を解くためにある。以下は機能要件ではなく**憲法**として扱う。

- 🚨 **インデックス対象の全ページは、JS 実行なしで本文・見出し・メタが読める完全な HTML を返す（SSG）。** コア内容をクライアントサイドのみでレンダリングしない。「ブラウザで見えるからOK」ではなく「curl / Googlebot で中身が返るか」で判断する。
- 🚨 **UA（User-Agent）でボットと人間に別 HTML を出し分けない。** 旧実装の `prerender.ts` 方式（クローキング的・バグの温床）は復活させない。全 UA に同一の HTML を配信する。
- **リダイレクトは Firebase Hosting の `redirects`（実 HTTP 301）で行う。** JS（`<Redirect>` 等）でのクライアント側リダイレクトをインデックス対象パスに使わない。旧サイトはこれで 11 ページが未インデックス化していた。
- **title / meta description / canonical / hreflang / JSON-LD はビルド時にページごとへ焼き込む。** 全ページ同一タイトルにしない（旧サイトの既知バグ）。多言語（en / ko / zh / th）は hreflang と canonical を機械生成で実体と一致させる。
- **sitemap・robots.txt・llms.txt はビルドで自動生成し、実在ページと一致させる。** 存在しないパス（旧 `/zh-cn/` 等）を宣言しない。
- React アイランドは「動く部分だけ」（予約カレンダー・問い合わせフォーム・言語切替 UI 等）に限定し、コンテンツ本体は静的 HTML に置く。

判断に迷う変更は「Googlebot がこの URL を curl したとき、意図した中身が返るか」を基準にする。

## 参照元（旧実装）

- `_reference_original/` に旧 Manus 実装一式を保管（**参照専用・ビルド対象外**）。UI コンポーネント（`client/src/components/ui/` の Radix ベース 53 点）、翻訳（`client/src/i18n/translations.ts`）、物件・ローカルデータ（`client/src/data/*.ts`）、ページ別メタ／JSON-LD の**中身**（旧 `server/_core/prerender.ts` の `PAGE_META`）は再利用価値が高い。
- 🚨 再利用は「中身（データ・マークアップ・スキーマ）」に限る。**仕組み（UA 判定ミドルウェア・wouter ルーティング・Express/tRPC/Drizzle 層）は移植しない。** コピーではなく、Astro/SSG 前提で組み直す。

## ブランチ運用（重要）

- GitHub: `kazuyoshi228/yah-homes-v2`（リモート origin は SSH：`git@github.com:kazuyoshi228/yah-homes-v2.git`）。
- 開発は **`dev` ブランチ**にコミットする。**`main` へ直接コミットしない。**
- 本番リリース時のみ `dev` → `main` にマージする（`main` は初回リリース時に作成）。

## デプロイ運用（重要 — 取り違え厳禁）

| 対象 | ブランチ | コマンド | 反映先 URL |
|---|---|---|---|
| 確認用（dev） | `dev` | `firebase hosting:channel:deploy dev --expires 30d` | 🔧 TODO（初回チャンネルデプロイ後に確定・以後固定） |
| 本番 | `main` | `firebase deploy --only hosting` | https://yah.homes （＝ 🔧 TODO: `yah-homes.web.app`） |

- 🚨 **本番リリース（`firebase deploy --only hosting` / `main`）は、必ずユーザーの明示的な指示があるときのみ実行する。AI は自発的に本番へデプロイしてはならない。** 変更が完成しても、デプロイは提案にとどめ、「デプロイして」等の指示を待つ。
- `dev` の内容は dev チャンネル URL にのみデプロイする。本番（`firebase deploy`）は `main` をリリースするときだけ。
- dev チャンネル URL のハッシュはチャンネル固定（再デプロイしても不変）。プレビューチャンネルは失効するため `--expires 30d` を付け、必要に応じ再デプロイで延長。
- 🔧 TODO: 独自ドメイン `yah.homes` の Hosting 接続（DNS 切替）後、本番 URL をここに確定させる。移行前後で URL 構造を変えない（リダイレクト設計を最小化する）。

## dev チャンネルの注意点

- **バックエンドは本番と共有**：dev チャンネルも Firestore / Functions / Auth は `yah-homes` プロジェクトの同一データを使う。dev での予約・問い合わせ送信は本番データに書き込まれる。
- 🔧 TODO: App Check / bot 保護（reCAPTCHA 等）を導入する場合、dev チャンネル URL を許可ドメインに追加しないとフォーム系がブロックされる。導入時にここへ明記する。

## 実装フロー（設計図の承認が必須）

🚨 **コード実装に入る前に、必ず「実装に向けた実施設計図（設計書）」を Markdown で作成し、ユーザーの承認を得てから実装に進む。承認前にコードは変更しない。**

1. 設計図を Markdown で作成する（保存先：`docs/design_<トピック>.md`）。最低限、次を含める：
   - 背景・目的（何を・なぜ）
   - 対象ファイルと変更方針（実コードを確認したうえでの、実際のファイル／該当箇所）
   - 影響範囲・リスク・代替案
   - テスト／検証計画（型チェック・テスト・ビルド出力の HTML 確認・プレビュー確認）
   - **SEO 影響（インデックス対象なら、生成 HTML に title/meta/canonical/hreflang/JSON-LD が正しく焼き込まれるか）**
   - 作業指示書がある場合は、実コードとの差異を明記する
2. 設計図を提示し、ユーザーの承認（「これで進めて」等の明示的な合意）を得る。**承認を得るまでコードには着手しない。**
3. 承認後に実装 → 検証（型チェック＋テスト＋ビルド＋プレビュー）→ `dev` にコミット、という順で進める。
4. 設計図の粒度は変更規模に比例させてよい（小さな修正は簡潔で可）。ただし「作成 → 提示 → 承認」の手順は省略しない。
5. 本番デプロイは、実装・検証・dev 確認のあと、別途ユーザーの明示指示で行う（上記デプロイ運用参照）。

## ビルド / 環境

- **Node 22 必須**。ローカルは PATH にバージョンマネージャ配下を追加して使う：
  - node / npm：`~/node22/bin`（v22.13.0）
  - pnpm / firebase：`~/node-lts/bin`
  - 非対話シェルで `node: command not found` になる場合は、コマンド先頭で `export PATH="/Users/kazuyoshi228/node22/bin:/Users/kazuyoshi228/node-lts/bin:$PATH"` を通す。
- 依存管理は **pnpm**。パッケージ追加は `pnpm add <pkg>`。🚨 `npm install` / `npm add` は `node_modules`（.pnpm レイアウト）と衝突するため使わない（`npm run <script>` の実行は可）。
- 🔧 TODO（雛形確定後に更新）：
  - ビルド：`pnpm build`（Astro。出力 `dist/`）。Hosting の `public` は `dist`。
  - 型チェック：`pnpm exec astro check` ＋ `pnpm exec tsc --noEmit`
  - テスト：`pnpm exec vitest run`
  - プレビュー：`pnpm dev`（Astro dev server / 右ビューア）
- `functions/` は別管理（独自 `package-lock.json`、npm）。依存は `functions/` 内で `npm install`、ビルドは `npm run build`（tsc）、テストは `npm test`。
- Firestore エミュレータ用に Java（`~/jdk21`）を使用。エミュレータ起動：`firebase emulators:start`。

## 運用ルール（AI が守ること）

- **本番デプロイはユーザー指示が必須**（上記デプロイ節参照）。dev チャンネルへのデプロイも、明示指示または合意のうえで行う。
- **本番データを変更する前に、必ず読み取り専用で現状を確認する。** 移行スクリプトは実行前にドライラン相当の確認をし、対象 0 件なら実行しない。
- **作業指示書／仕様書は古いスナップショット前提のことがある。** 旧 `_reference_original/` のパスやファイル構成（Express/tRPC/wouter 前提）は新構成と異なる。**実コードを確認してから実装し、差異はユーザーに報告する。**
- **インデックス対象ページを変更したら、ビルド後の生成 HTML を確認する**（`dist/` を grep、または curl でローカルプレビュー）。「ブラウザ表示」だけで判断しない。
- UI 変更はプレビュー（Astro dev server / 右ビューア）で確認してからコミットする。
- コミット前に型チェック＋関連テスト＋ビルドを通す。
- **firebase CLI の認証切れ（invalid_rapt / reauth 要求）は AI 側で解決できない。** ユーザーに `firebase login --reauth` を依頼する。
- Storage への新規アセットは公開 ACL（allUsers:READER）を付与し、Cache-Control 1 年で配信されるため差し替え時は新ファイル名にしてキャッシュ汚染を避ける。
- **シークレットは扱わない・貼らない・コミットしない**（reCAPTCHA シークレット鍵、GitHub PAT `ghp_...` 等）。reCAPTCHA サイトキーは公開値なので可。`.env` は gitignore。
- コミットメッセージは**日本語＋種別プレフィックス**（feat/fix/perf 等）。末尾に `Co-Authored-By: Claude <noreply@anthropic.com>` を付与。

## 変更してはいけない / 前提

- 🚨 **セキュリティルール（`firestore.rules`）／ Cloud Functions（`functions/src/*`）／ Storage ルール（`storage.rules`）は、ユーザーの許可なく変更しない。** セキュリティ・課金・データ整合に直結するため、変更が必要な場合はまず内容を提案し、承認を得てから実施する（デプロイも同様にユーザー指示が必須）。
- 🔧 **Beds24 連携（予約カレンダー同期・webhook）** は旧実装（`_reference_original/server/webhooks/`）を参照しつつ Functions へ移植予定。認証・鍵の扱いは設計図で確定させるまで実装しない。
- **magazine.yah.mobi との連携**：`/locals` 等でグルメ・ローカル記事を magazine 側の Firestore から取り込む構想（コンテンツの一次ソースは magazine に一本化）。SEO 上重要な埋め込みは**必ず SSG でビルド時に焼き込む**（クライアント fetch は AI クローラーに見えない）。magazine 記事更新をトリガーに再ビルドする方式を設計図で決める。

## リポジトリ構成メモ

- 🔧 TODO：Astro 雛形の確定後に実構成を追記する。想定：
  - フロント：`src/pages/`（ルート＝URL・言語別）、`src/components/`（静的＋ React アイランド）、`src/layouts/`、`src/i18n/`、`src/data/`
  - SEO 資産：`src/pages/sitemap.xml.ts` 等でビルド生成、`public/robots.txt`・`public/llms.txt`
  - バックエンド：`functions/src/`（問い合わせ送信・予約・Beds24 webhook などの動的処理のみ。ページ配信は Functions を使わず Hosting から静的配信）
  - 共有：`shared/`（types / schemas。Firebase Callable は undefined→null 変換のため任意項目は zod `.nullish()`）
- 物件は現状 **Kiyokawa（清川・最大7名）** と **Takasago（高砂・最大6名）** の2棟。データは `_reference_original/client/src/data/{kiyokawaData,takasagoData,localsData}.ts` を移植元とする。

---

### 現在地（2026-07 時点の進行メモ）

- 方針確定：Astro + React アイランドの SSG／別 Firebase プロジェクト `yah-homes`／旧環境への応急パッチはせず移行に一本化。
- 済：git 初期化（`dev` ブランチ）・GitHub リモート `yah-homes-v2`（SSH）紐付け・`_reference_original/` は gitignore。
- 未了：Astro 雛形・`firebase init`・独自ドメイン接続・dev チャンネル初回デプロイ（URL 未確定）。`firebase login --reauth` 待ち。
- 次アクション候補：①Astro 雛形作成と UI 資産の移植設計図 → ②`firebase init`（Hosting/Functions/Firestore を `yah-homes` に紐付け）→ ③28 ページ（7×4 言語）の SSG 化。
