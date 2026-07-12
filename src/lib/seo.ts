// ページ別 SEO メタデータ。旧 server/_core/prerender.ts の PAGE_META の「中身」を移植し、
// ロケール×ページで title / description / JSON-LD を返す。
// UA判定の仕組みは移植しない（全UAに同一HTMLを配信するため不要）。

import type { Locale } from "../i18n/config";

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

export const BASE_URL = "https://yah.homes";
export const OG_IMAGE = `${BASE_URL}/manus-storage/kiyokawa-exterior_18a3409b.webp`;

// ページキー（論理パスに対応）。追加ページはここに足す。
export type PageKey = "home" | "about" | "locals" | "booking" | "kiyokawa" | "takasago";

// home のロケール別メタ（旧 PAGE_META の "/", "/ko/", "/zh/", "/th/" 由来）
const HOME: Record<Locale, PageMeta> = {
  en: {
    title:
      "yah.homes | Whole-House Villa Rental Fukuoka — Private Home for Group/Family Trip",
    description:
      "yah.homes offers whole-house villa rentals in Fukuoka, Japan. Kiyokawa (7 guests) and Takasago (6 guests) — privately designed homes perfect for group trips, family vacations, and workcations. Book on Airbnb or Booking.com.",
  },
  ko: {
    title: "yah.homes | 후쿠오카 통째 빌라 렌탈 — 가족·단체 여행 전용 주택",
    description:
      "yah.homes는 일본 후쿠오카의 통째 빌라 렌탈 브랜드입니다. 기요카와(최대 7명)와 다카사고(최대 6명) — 가족 여행, 단체 여행에 완벽한 독립 주택. Airbnb 또는 Booking.com에서 예약 가능.",
  },
  zh: {
    title: "yah.homes | 福岡整棟別墅租賃 — 家庭旅行·團體旅遊專用住宿",
    description:
      "yah.homes 是日本福岡的整棟別墅租賃品牌。清川（最多7人）和高砂（最多6人）——適合家庭旅行、團體旅遊的全棟專用住宿。可透過 Airbnb 或 Booking.com 預訂。",
  },
  th: {
    title:
      "yah.homes | เช่าวิล่าทั้งหลังฟุกุโอกะ — ที่พักส่วนตัวสำหรับครอบครัว/กลุ่มเพื่อน",
    description:
      "yah.homes คือแบรนด์เช่าวิล่าทั้งหลังในฟุกุโอกะ ประเทศญี่ปุ่น คิโยกาวะ (สูงสุด 7 คน) และทาคาซาโกะ (สูงสุด 6 คน) — เหมาะสำหรับทริปครอบครัวและกลุ่มเพื่อน จองผ่าน Airbnb หรือ Booking.com",
  },
};

// LodgingBusiness / WebSite などの JSON-LD は各ページ実装時に拡張する。
// ここでは home のみ最小構成。今後 about/locals/kiyokawa/takasago を追加。
const REGISTRY: Partial<Record<PageKey, Record<Locale, PageMeta>>> = {
  home: HOME,
};

// 指定ページ・ロケールのメタを返す。未定義なら home にフォールバック（暫定）。
export function getPageMeta(page: PageKey, locale: Locale): PageMeta {
  const byLocale = REGISTRY[page] ?? HOME;
  return { ogImage: OG_IMAGE, ...byLocale[locale] };
}
