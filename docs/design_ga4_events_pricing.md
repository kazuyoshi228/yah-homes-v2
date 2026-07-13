# 設計図：GA4イベント計測＋料金の手がかり＋高砂住所

- 作成日: 2026-07-13 / ステータス: **承認済み（ユーザー指示）→ 実装**

## 1. GA4 イベント計測（BaseLayout に委譲リスナー1本）

クリック委譲でリンク先ドメイン判定 → gtag('event', ...)。ページ速度影響ゼロ（既存gtag利用・追加リクエストなし）。

| イベント名 | トリガー | パラメータ |
|---|---|---|
| `click_airbnb` | href に airbnb を含むリンク | `property`（URLのroom IDで清川/高砂判定）・`page_path` |
| `click_booking_com` | booking.com リンク | 同上 |
| `click_booking_calendar` | `a[href="#booking"]`（Beds24誘導・ユーザー指定） | `property`・`page_path` |
| `click_instagram` | instagram.com リンク | `page_path` |
| `click_press` | prtimes.jp リンク | `page_path` |
| `contact_submit` | 問い合わせ送信成功（ContactSection内） | `lang` |

## 2. 料金の手がかり

- LodgingBusiness JSON-LD に `priceRange: "¥¥¥"`（両物件）
- FAQ に「1泊いくら? どこで予約?」を4言語追加 — 具体額は捏造せず「季節・人数で変動、Airbnb/予約カレンダーで日付入力すると正確な料金」＋清掃費・最低泊数の参照先を案内
- ※具体的な目安額（例: ¥30,000〜/泊）をユーザーが提供すれば追記可（GEO効果大）

## 3. 高砂の住所（GBP登録値より）

- LodgingBusiness(takasago) に streetAddress "Takasago 1-18-7" / postalCode "810-0011" / addressLocality "Chuo-ku, Fukuoka" を追加

## 検証
- dist: gtagイベントリスナー存在・priceRange・高砂住所をgrep
- 手動: devでAirbnbクリック→GA4リアルタイムのイベント確認（ユーザー側でも可能）
