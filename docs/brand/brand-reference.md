# yah. ブランドリファレンス（デザイン時に必ず参照）

一次ソース: [Brandguidelines_yah.pdf](./Brandguidelines_yah.pdf)（Updated May 2025 / © Eko Hayashi）。
本ファイルはその要点の書き起こし。齟齬があれば PDF が正。

## カラーパレット（これ以外の色を使わない）

| 名称 | HEX | RGB | 用途 |
|---|---|---|---|
| Black | `#000000` | 0.0.0 | テキスト・ボタン・アクセント |
| White | `#FFFFFF` | 255.255.255 | 背景・ダーク面上のボタン/テキスト |
| Light Gray | `#F7F7F7` | 247.247.247 | セクション背景 |
| Gray | `#D7D7D7` | 215.215.215 | ボーダー・補助 |

- 🚨 **モノクローム4色のみ。青・赤・金などの差し色はパレット外**（旧サイトの LAMP_BLUE `#2B5BE8` / `#1a56db` は違反として2026-07に全廃済み）。
- 実装上、本文テキスト `#111111`・ボーダー `#e8e8e8` 等の近傍グレーは Black / Gray の運用値として許容（新規に増やさない）。

## タイポグラフィ

| 言語 | 書体 | 見出し | 本文 |
|---|---|---|---|
| EN | **National 2**（Klim Type Foundry・正規ライセンス済） | National 2 Medium | National 2 Regular / Light |
| JP | 游明朝（Primary）／游ゴシック | Yu Gothic Medium / Bold | Yu Gothic Medium |

- WOFF2 自ホスト: `public/fonts/national-2-{regular,medium}.woff2`
- ロゴの書体・形状は改変禁止（下記）。

## ロゴ

- インラインSVG実装: `src/components/LogoYah.astro`（Navbar/Footer 共通パス）
- ファイル: `public/manus-storage/logo_yah_2dbf971f.svg`・`logo_yah_CMYK_cifo_0ad89aa7.svg`（タグライン付き）
- 余白: ロゴ高さAに対し四方 1/5A 以上を確保
- 最小サイズ（Digital）: Primary 20px / タグライン付き 31〜34px
- Don'ts: 変形・回転・アウトライン化・エフェクト・色変更・グラデーション・透過変更・字体変更・要素の位置/サイズ変更 すべて禁止

## 写真のトーン

自然光・生活感のある「日常」のトーン（過度な加工をしない）。

## 運用ルール

- 新しい UI 色が必要になったら、まず上記4色（+運用グレー）で解決できないか検討する。できない場合はユーザーに相談（勝手にパレット外の色を足さない）。
- ダーク背景上のCTA: White ボタン + Black テキスト（例: `/booking` のAirbnbボタン、Locals のマップリストボタン）。
- ライト背景上のCTA: Black ボタン + White テキスト（例: ギャラリーボタン、PDFダウンロード）。
