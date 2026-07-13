// 追加UI文字列（translations.ts に無い・英語ハードコードだった箇所の多言語化）
// ※「Pickup Reviews」「Local Guide — Fukuoka」等はブランド上の英語ラベルとして意図的に据え置き
import type { Locale } from "./config";

export interface UiStrings {
  /** /booking・/thankyou の見出し（2行） */
  bookingHeadline: [string, string];
  /** 戻るボタン */
  backToHome: string;
  /** GEO: 直接回答ブロック（定義文+数値）。{kr}{kc}{tr}{tc} は評価/件数のプレースホルダ */
  directAnswer: string;
  /** 評価の取得日ラベル（{date} 置換） */
  ratingAsOf: string;
}

export const uiStrings: Record<Locale, UiStrings> = {
  en: {
    bookingHeadline: ["We are truly looking forward", "to having you stay with us."],
    backToHome: "Back to Home",
    directAnswer:
      "yah.homes operates two newly built whole-house rentals in central Fukuoka, Japan — Kiyokawa (up to 7 guests, ★{kr} from {kc} Airbnb reviews) and Takasago (up to 6 guests, ★{tr} from {tc} reviews) — about 20 minutes by car from Fukuoka Airport and within walking distance of Tenjin.",
    ratingAsOf: "Ratings as of {date}",
  },
  ko: {
    bookingHeadline: ["여러분의 방문을", "진심으로 기다리고 있습니다."],
    backToHome: "홈으로 돌아가기",
    directAnswer:
      "yah.homes는 일본 후쿠오카 중심부에서 신축 통째 빌라 2채를 운영합니다 — 기요카와(최대 7명, Airbnb ★{kr}·후기 {kc}개)와 다카사고(최대 6명, ★{tr}·후기 {tc}개). 후쿠오카 공항에서 차로 약 20분, 텐진까지 도보권입니다.",
    ratingAsOf: "평점 기준일: {date}",
  },
  zh: {
    bookingHeadline: ["我們由衷期待", "您的光臨。"],
    backToHome: "返回首頁",
    directAnswer:
      "yah.homes 在日本福岡市中心經營兩棟新建整棟出租住宅 — 清川（最多7人，Airbnb ★{kr}·{kc}則評價）與高砂（最多6人，★{tr}·{tc}則評價）。距福岡機場車程約20分鐘，步行可達天神。",
    ratingAsOf: "評分截至 {date}",
  },
  th: {
    bookingHeadline: ["เราตั้งตารอ", "ที่จะได้ต้อนรับคุณ"],
    backToHome: "กลับสู่หน้าแรก",
    directAnswer:
      "yah.homes ดำเนินการบ้านเช่าทั้งหลังสร้างใหม่ 2 หลังในใจกลางฟุกุโอกะ ประเทศญี่ปุ่น — คิโยกาวะ (สูงสุด 7 คน, Airbnb ★{kr} จาก {kc} รีวิว) และทาคาซาโกะ (สูงสุด 6 คน, ★{tr} จาก {tc} รีวิว) — ประมาณ 20 นาทีโดยรถยนต์จากสนามบินฟุกุโอกะ และเดินถึงเทนจินได้",
    ratingAsOf: "คะแนน ณ วันที่ {date}",
  },
};
