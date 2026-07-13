// ページ別 SEO メタデータ。旧 server/_core/prerender.ts の PAGE_META の「中身」を移植。
// ロケール×ページで title / description を返し、JSON-LD はページ単位で生成する。
// UA判定の仕組みは移植しない（全UAに同一HTMLを配信するため不要）。
// 構造化データ（LodgingBusiness 等）は旧サイトと違い全言語版に付与する。

import type { Locale } from "../i18n/config";
import { PROPERTIES, RATING_AS_OF } from "../data/properties";
import { PRESS } from "../data/pressData";

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

export const BASE_URL = "https://yah.homes";
export const OG_IMAGE = `${BASE_URL}/manus-storage/kiyokawa-exterior_18a3409b.webp`;

// 運営会社（ユーザー確認済み 2026-07-13）— GEO: AIが「運営会社は?」に正しく答えるための一次情報
export const OPERATOR = {
  name: "Bonfire Inc.",
  alternateName: "ボンファイア株式会社",
  foundingDate: "2018",
  ceo: "Kazuyoshi Yamada",
} as const;

// Organization JSON-LD（全ページ共通・sameAs でエンティティ接続）
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: OPERATOR.name,
    alternateName: OPERATOR.alternateName,
    foundingDate: OPERATOR.foundingDate,
    founder: { "@type": "Person", name: OPERATOR.ceo, jobTitle: "CEO / Director" },
    url: BASE_URL,
    logo: `${BASE_URL}/manus-storage/logo_yah_2dbf971f.svg`,
    sameAs: [
      "https://www.instagram.com/yah.homes/",
      PROPERTIES.kiyokawa.airbnbUrl,
      PROPERTIES.takasago.airbnbUrl,
      PROPERTIES.kiyokawa.bookingUrl,
      PROPERTIES.takasago.bookingUrl,
      ...PRESS.map((p) => p.url),
    ],
  };
}

export type PageKey =
  | "home"
  | "about"
  | "locals"
  | "booking"
  | "kiyokawa"
  | "takasago"
  | "thankyou";

type LocaleText = Record<Locale, { title: string; description: string }>;

const HOME: LocaleText = {
  en: {
    title:
      "yah.homes | Whole-House Villa Rental Fukuoka — Private Home for Group/Family Trip",
    description:
      "yah.homes offers whole-house villa rentals in Fukuoka, Japan. Kiyokawa (7 guests) and Takasago (6 guests) — privately designed homes perfect for group trips, family vacations, and workcations. Book on Airbnb or Booking.com.",
  },
  ja: {
    title: "yah.homes | 福岡の一棟貸しヴィラ — グループ・家族旅行のための貸切の家",
    description:
      "yah.homesは福岡の都心部（中央区）にある新築の一棟貸し・貸別荘ヴィラ。清川（最大7名）と高砂（最大6名）——グループ旅行・家族旅行・ワーケーションに最適な、まるごと貸切のプライベートな家。AirbnbまたはBooking.comで予約できます。",
  },
  ko: {
    title: "yah.homes | 후쿠오카 통째 빌라 렌탈 — 가족·단체 여행 전용 주택",
    description:
      "yah.homes는 일본 후쿠오카의 통째 빌라 렌탈 브랜드입니다. 기요카와(최대 7명)와 다카사고(최대 6명) — 가족 여행, 단체 여행에 완벽한 독립 주택. Airbnb 또는 Booking.com에서 예약 가능.",
  },
  zh: {
    title: "yah.homes | 福岡包棟民宿・整棟別墅 — 家庭·團體旅行專用住宿",
    description:
      "yah.homes 是福岡市中心的包棟民宿品牌。清川（最多7人）和高砂（最多6人）——適合家庭旅行、親子住宿、團體旅遊的整棟包棟別墅。可透過 Airbnb 或 Booking.com 預訂。",
  },
  th: {
    title:
      "yah.homes | เช่าวิล่าทั้งหลังฟุกุโอกะ — ที่พักส่วนตัวสำหรับครอบครัว/กลุ่มเพื่อน",
    description:
      "yah.homes คือแบรนด์เช่าวิล่าทั้งหลังในฟุกุโอกะ ประเทศญี่ปุ่น คิโยกาวะ (สูงสุด 7 คน) และทาคาซาโกะ (สูงสุด 6 คน) — เหมาะสำหรับทริปครอบครัวและกลุ่มเพื่อน จองผ่าน Airbnb หรือ Booking.com",
  },
};

const ABOUT: LocaleText = {
  en: {
    title: "About yah.homes | Design Philosophy & Director",
    description:
      "Learn about yah.homes — a Fukuoka whole-house rental brand personally designed by Director Kazuyoshi Yamada. Every property is tested by the director himself before welcoming guests.",
  },
  ja: {
    title: "yah.homesについて | デザイン哲学とディレクター",
    description:
      "yah.homesは、ディレクター山田一慶が自ら設計した福岡の一棟貸しブランド。すべての部屋にディレクター自身が泊まり込み、確かめてからゲストをお迎えしています。",
  },
  ko: {
    title: "yah.homes 소개 | 디자인 철학 & 디렉터",
    description:
      "yah.homes — 디렉터 카즈요시 야마다가 직접 디자인한 후쿠오카 통째 빌라 브랜드. 모든 숙소는 디렉터가 직접 체험 후 게스트를 맞이합니다.",
  },
  zh: {
    title: "關於 yah.homes | 設計理念與總監",
    description:
      "yah.homes — 由總監山田一慶親自設計的福岡整棟別墅品牌。每間房間都由總監親身體驗後才迎接客人。",
  },
  th: {
    title: "เกี่ยวกับ yah.homes | ปรัชญาการออกแบบ",
    description:
      "yah.homes — แบรนด์ที่พักทั้งหลังในฟุกุโอกะ ออกแบบโดย Director Kazuyoshi Yamada ด้วยตนเอง",
  },
};

const LOCALS: LocaleText = {
  en: {
    title: "Local Guide — Kiyokawa, Fukuoka | yah.homes",
    description:
      "Discover 16 hand-picked local spots near yah.homes Kiyokawa — cafes, restaurants, markets, and cultural sites in Fukuoka's vibrant Kiyokawa district. Live like a local.",
  },
  ja: {
    title: "ローカルガイド — 福岡・清川 | yah.homes",
    description:
      "yah.homes清川の徒歩圏から、実際に歩いて選んだ16のスポット——カフェ、食堂、市場、文化スポット。暮らすように福岡を楽しむためのガイドです。",
  },
  ko: {
    title: "로컬 가이드 — 기요카와, 후쿠오카 | yah.homes",
    description:
      "yah.homes 기요카와 근처 16곳의 로컬 스팟 — 카페, 레스토랑, 시장, 문화 명소. 현지인처럼 후쿠오카를 즐기세요.",
  },
  zh: {
    title: "在地指南 — 清川，福岡 | yah.homes",
    description:
      "探索 yah.homes 清川附近精選的16個在地景點——咖啡廳、餐廳、市場和文化景點。像當地人一樣體驗福岡。",
  },
  th: {
    title: "คู่มือท้องถิ่น — คิโยกาวะ ฟุกุโอกะ | yah.homes",
    description:
      "ค้นพบ 16 สถานที่แนะนำใกล้ yah.homes คิโยกาวะ — คาเฟ่ ร้านอาหาร ตลาด และสถานที่วัฒนธรรม",
  },
};

// /booking はコンバージョンページ（Airbnb予約CTA）— description も実態に一致させる
const BOOKING: LocaleText = {
  en: {
    title: "Book Your Stay | yah.homes — Whole-House Stays in Fukuoka",
    description:
      "Reserve your stay at yah.homes Fukuoka on Airbnb — Kiyokawa (up to 7 guests) and Takasago (up to 6 guests). Newly built whole-house rentals with SIMMONS mattresses and full kitchens.",
  },
  ja: {
    title: "ご予約 | yah.homes — 福岡の一棟貸しの宿",
    description:
      "yah.homes福岡をAirbnbで予約——清川（最大7名）・高砂（最大6名）。シモンズ製マットレスとフルキッチンを備えた新築の一棟貸しです。",
  },
  ko: {
    title: "예약하기 | yah.homes — 후쿠오카 통째 빌라",
    description:
      "yah.homes 후쿠오카를 Airbnb에서 예약하세요 — 기요카와(최대 7명)·다카사고(최대 6명). SIMMONS 매트리스와 풀 키친을 갖춘 신축 통째 빌라입니다.",
  },
  zh: {
    title: "立即預訂 | yah.homes — 福岡包棟民宿",
    description:
      "透過 Airbnb 預訂 yah.homes 福岡 — 清川（最多7人）與高砂（最多6人）。配備 SIMMONS 床墊與完整廚房的新建整棟住宿。",
  },
  th: {
    title: "จองที่พัก | yah.homes — ที่พักทั้งหลังในฟุกุโอกะ",
    description:
      "จอง yah.homes ฟุกุโอกะผ่าน Airbnb — คิโยกาวะ (สูงสุด 7 คน) และทาคาซาโกะ (สูงสุด 6 คน) บ้านพักใหม่ทั้งหลังพร้อมที่นอน SIMMONS และครัวครบครัน",
  },
};

const KIYOKAWA: LocaleText = {
  en: {
    title: "yah.homes Kiyokawa | Book Direct — Whole-House Villa in Fukuoka",
    description:
      "Book yah.homes Kiyokawa directly. Newly built whole-house villa for up to 7 guests in Kiyokawa, Fukuoka. 3 bedrooms, SIMMONS mattresses, full kitchen, private parking. Rated 4.77/5 on Airbnb.",
  },
  ja: {
    title: "yah.homes 清川 | 福岡の新築一棟貸しヴィラ — 最大7名",
    description:
      "yah.homes清川のご予約。福岡市清川・那珂川沿いの新築一棟貸しヴィラ、最大7名。寝室3室、シモンズ製マットレス、フルキッチン、専用駐車場。Airbnb評価4.77/5。",
  },
  ko: {
    title: "yah.homes 기요카와 | 직접 예약 — 후쿠오카 통째 빌라",
    description:
      "yah.homes 기요카와 직접 예약. 후쿠오카 기요카와의 신축 통째 빌라, 최대 7명. 침실 3개, SIMMONS 매트리스, 풀 키친, 전용 주차장. Airbnb 평점 4.77/5.",
  },
  zh: {
    title: "yah.homes 清川 | 福岡包棟民宿 — 最多7人・直接預訂",
    description:
      "直接預訂 yah.homes 清川。福岡市中心的新建包棟民宿，最多7人。3間臥室，SIMMONS頂級床墊，完整廚房，私人停車場。Airbnb評分4.77/5。",
  },
  th: {
    title: "yah.homes คิโยกาวะ | จองตรง — วิลล่าทั้งหลังในฟุกุโอกะ",
    description:
      "จอง yah.homes คิโยกาวะโดยตรง วิลล่าทั้งหลังใหม่สำหรับสูงสุด 7 คน ในคิโยกาวะ ฟุกุโอกะ 3 ห้องนอน ที่นอน SIMMONS ครัวครบ ที่จอดรถส่วนตัว คะแนน Airbnb 4.77/5",
  },
};

const TAKASAGO: LocaleText = {
  en: {
    title: "yah.homes Takasago | Book Direct — Whole-House Stay in Fukuoka",
    description:
      "Book yah.homes Takasago directly. Whole-house rental for up to 6 guests in Fukuoka. 3 bedrooms, SIMMONS mattresses, full kitchen, high-speed Wi-Fi. Rated 4.67/5 on Airbnb.",
  },
  ja: {
    title: "yah.homes 高砂 | 福岡・薬院エリアの一棟貸し — 最大6名",
    description:
      "yah.homes高砂のご予約。渡辺通駅徒歩5〜10分・薬院徒歩圏の一棟貸し、最大6名。寝室3室、シモンズ製マットレス、大型車可の専用駐車場。Airbnb評価4.67/5。",
  },
  ko: {
    title: "yah.homes 다카사고 | 직접 예약 — 후쿠오카 통째 빌라",
    description:
      "yah.homes 다카사고 직접 예약. 후쿠오카의 통째 빌라, 최대 6명. 침실 3개, SIMMONS 매트리스, 풀 키친. Airbnb 평점 4.67/5.",
  },
  zh: {
    title: "yah.homes 高砂 | 福岡包棟民宿 — 最多6人・直接預訂",
    description:
      "直接預訂 yah.homes 高砂。福岡市中心的包棟民宿，最多6人。3間臥室，SIMMONS床墊，渡邊通站步行5～10分鐘。Airbnb評分4.67/5。",
  },
  th: {
    title: "yah.homes ทาคาซาโกะ | จองตรง — ที่พักทั้งหลังในฟุกุโอกะ",
    description:
      "จอง yah.homes ทาคาซาโกะโดยตรง ที่พักทั้งหลังสำหรับสูงสุด 6 คนในฟุกุโอกะ 3 ห้องนอน ที่นอน SIMMONS ครัวครบ คะแนน Airbnb 4.67/5",
  },
};

const THANKYOU: LocaleText = {
  en: { title: "Thank You | yah.homes", description: "Thank you for contacting yah.homes." },
  ja: { title: "ありがとうございます | yah.homes", description: "yah.homesへのお問い合わせありがとうございます。" },
  ko: { title: "감사합니다 | yah.homes", description: "yah.homes에 문의해 주셔서 감사합니다." },
  zh: { title: "感謝您 | yah.homes", description: "感謝您聯繫 yah.homes。" },
  th: { title: "ขอบคุณ | yah.homes", description: "ขอบคุณที่ติดต่อ yah.homes" },
};

const TEXT: Record<PageKey, LocaleText> = {
  home: HOME,
  about: ABOUT,
  locals: LOCALS,
  booking: BOOKING,
  kiyokawa: KIYOKAWA,
  takasago: TAKASAGO,
  thankyou: THANKYOU,
};

// ── JSON-LD ジェネレータ（ページ単位・全言語共通の構造化データ）──
function lodgingJsonLd(opts: {
  name: string;
  url: string;
  description: string;
  streetAddress?: string;
  addressLocality: string;
  postalCode?: string;
  rating: string;
  reviewCount: string;
  capacity: number;
  rooms: number;
  sameAs?: string[];
}): Record<string, unknown> {
  const address: Record<string, unknown> = {
    "@type": "PostalAddress",
    addressLocality: opts.addressLocality,
    addressCountry: "JP",
  };
  if (opts.streetAddress) address.streetAddress = opts.streetAddress;
  if (opts.postalCode) address.postalCode = opts.postalCode;
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: opts.name,
    url: opts.url,
    description: opts.description,
    address,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: opts.rating,
      reviewCount: opts.reviewCount,
      bestRating: "5",
    },
    maximumAttendeeCapacity: opts.capacity,
    numberOfRooms: opts.rooms,
    // 料金の手がかり（具体額は季節変動のためレンジ表記）
    priceRange: "¥¥¥",
    // 鮮度シグナル（評価取得日）とエンティティ接続
    dateModified: RATING_AS_OF,
    ...(opts.sameAs ? { sameAs: opts.sameAs } : {}),
    provider: { "@type": "Organization", name: OPERATOR.name, alternateName: OPERATOR.alternateName },
  };
}

function jsonLdFor(page: PageKey): Record<string, unknown> | undefined {
  switch (page) {
    case "kiyokawa":
      return lodgingJsonLd({
        name: "yah.homes Kiyokawa",
        url: `${BASE_URL}/booking/kiyokawa/`,
        description:
          "Newly built whole-house villa for up to 7 guests in Kiyokawa, Chuo-ku, Fukuoka. 3 bedrooms, SIMMONS PREMIUM mattresses, full kitchen, private parking.",
        streetAddress: "Kiyokawa 3-3-1",
        addressLocality: "Chuo-ku, Fukuoka",
        postalCode: "810-0011",
        // 評価は data/properties.ts を単一ソースに（取得日: RATING_AS_OF）
        rating: PROPERTIES.kiyokawa.rating,
        reviewCount: PROPERTIES.kiyokawa.reviewCount,
        capacity: PROPERTIES.kiyokawa.capacity,
        rooms: PROPERTIES.kiyokawa.bedrooms,
        sameAs: [
          PROPERTIES.kiyokawa.airbnbUrl,
          PROPERTIES.kiyokawa.bookingUrl,
          ...PRESS.filter((p) => p.property === "kiyokawa").map((p) => p.url),
        ],
      });
    case "takasago":
      return lodgingJsonLd({
        name: "yah.homes Takasago",
        url: `${BASE_URL}/booking/takasago/`,
        description:
          "Whole-house rental for up to 6 guests in Fukuoka. 3 bedrooms, SIMMONS mattresses, full kitchen, high-speed Wi-Fi.",
        // 住所は Google ビジネスプロフィール登録値（2026-07-13 確認）
        streetAddress: "Takasago 1-18-7",
        addressLocality: "Chuo-ku, Fukuoka",
        postalCode: "810-0011",
        rating: PROPERTIES.takasago.rating,
        reviewCount: PROPERTIES.takasago.reviewCount,
        capacity: PROPERTIES.takasago.capacity,
        rooms: PROPERTIES.takasago.bedrooms,
        sameAs: [
          PROPERTIES.takasago.airbnbUrl,
          PROPERTIES.takasago.bookingUrl,
          ...PRESS.filter((p) => p.property === "takasago").map((p) => p.url),
        ],
      });
    case "about":
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About yah.homes",
        url: `${BASE_URL}/about/`,
        description:
          "yah.homes is a whole-house rental brand in Fukuoka, Japan. Director Kazuyoshi Yamada personally designs and tests every property.",
        mainEntity: {
          "@type": "Person",
          name: "Kazuyoshi Yamada",
          jobTitle: "Director",
          worksFor: { "@type": "Organization", name: "yah.homes" },
        },
      };
    case "locals":
      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Local Guide Vol.1 — Kiyokawa, Fukuoka",
        description:
          "16 hand-picked local spots within walking distance of yah.homes Kiyokawa",
        url: `${BASE_URL}/locals/`,
        numberOfItems: 16,
      };
    default:
      return undefined;
  }
}

// 指定ページ・ロケールのメタを返す。
export function getPageMeta(page: PageKey, locale: Locale): PageMeta {
  const t = TEXT[page][locale];
  return {
    title: t.title,
    description: t.description,
    ogImage: OG_IMAGE,
    jsonLd: jsonLdFor(page),
  };
}
