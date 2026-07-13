// 追加UI文字列（translations.ts に無い・英語ハードコードだった箇所の多言語化）
// ※「Pickup Reviews」「Local Guide — Fukuoka」等はブランド上の英語ラベルとして意図的に据え置き
import type { Locale } from "./config";

export interface UiStrings {
  /** /booking・/thankyou の見出し（2行） */
  bookingHeadline: [string, string];
  /** 戻るボタン */
  backToHome: string;
}

export const uiStrings: Record<Locale, UiStrings> = {
  en: {
    bookingHeadline: ["We are truly looking forward", "to having you stay with us."],
    backToHome: "Back to Home",
  },
  ko: {
    bookingHeadline: ["여러분의 방문을", "진심으로 기다리고 있습니다."],
    backToHome: "홈으로 돌아가기",
  },
  zh: {
    bookingHeadline: ["我們由衷期待", "您的光臨。"],
    backToHome: "返回首頁",
  },
  th: {
    bookingHeadline: ["เราตั้งตารอ", "ที่จะได้ต้อนรับคุณ"],
    backToHome: "กลับสู่หน้าแรก",
  },
};
