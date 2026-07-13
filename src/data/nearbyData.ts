// yah.homes — 周辺スポット距離表（GEO: AI引用・地図系クエリ対応）
// 対象5スポットはユーザー指定（2026-07-14）。距離は地図実測ベースの概算。
import type { Locale } from "../i18n/config";

export interface NearbyRow {
  /** スポット名（各言語） */
  name: string;
  /** 清川からの距離・所要時間 */
  kiyokawa: string;
  /** 高砂からの距離・所要時間 */
  takasago: string;
}

export interface NearbyData {
  title: string;
  rows: NearbyRow[];
}

export const nearbyData: Record<Locale, NearbyData> = {
  en: {
    title: "Distances to Popular Spots",
    rows: [
      { name: "Yanagibashi Rengo Market", kiyokawa: "About 7 min on foot (550 m)", takasago: "About 10 min on foot (800 m)" },
      { name: "Sumiyoshi Shrine", kiyokawa: "About 15 min on foot (1.2 km)", takasago: "About 15 min on foot (1.2 km)" },
      { name: "Canal City Hakata", kiyokawa: "About 15 min on foot (1.2 km)", takasago: "About 18 min on foot (1.4 km)" },
      { name: "Nakasu (yatai food stalls)", kiyokawa: "About 20 min on foot / 5 min by taxi", takasago: "About 25 min on foot / 7 min by taxi" },
      { name: "Ohori Park", kiyokawa: "About 10 min by car (3 km)", takasago: "About 10 min by car (2.7 km)" },
    ],
  },
  ja: {
    title: "人気スポットまでの距離",
    rows: [
      { name: "柳橋連合市場", kiyokawa: "徒歩約7分（550m）", takasago: "徒歩約10分（800m）" },
      { name: "住吉神社", kiyokawa: "徒歩約15分（1.2km）", takasago: "徒歩約15分（1.2km）" },
      { name: "キャナルシティ博多", kiyokawa: "徒歩約15分（1.2km）", takasago: "徒歩約18分（1.4km）" },
      { name: "中洲（屋台街）", kiyokawa: "徒歩約20分／タクシー約5分", takasago: "徒歩約25分／タクシー約7分" },
      { name: "大濠公園", kiyokawa: "車で約10分（3km）", takasago: "車で約10分（2.7km）" },
    ],
  },
  ko: {
    title: "인기 스팟까지의 거리",
    rows: [
      { name: "야나기바시 연합시장", kiyokawa: "도보 약 7분(550m)", takasago: "도보 약 10분(800m)" },
      { name: "스미요시 신사", kiyokawa: "도보 약 15분(1.2km)", takasago: "도보 약 15분(1.2km)" },
      { name: "캐널시티 하카타", kiyokawa: "도보 약 15분(1.2km)", takasago: "도보 약 18분(1.4km)" },
      { name: "나카스(야타이 거리)", kiyokawa: "도보 약 20분／택시 약 5분", takasago: "도보 약 25분／택시 약 7분" },
      { name: "오호리 공원", kiyokawa: "차로 약 10분(3km)", takasago: "차로 약 10분(2.7km)" },
    ],
  },
  zh: {
    title: "到人氣景點的距離",
    rows: [
      { name: "柳橋連合市場", kiyokawa: "步行約7分鐘（550m）", takasago: "步行約10分鐘（800m）" },
      { name: "住吉神社", kiyokawa: "步行約15分鐘（1.2km）", takasago: "步行約15分鐘（1.2km）" },
      { name: "博多運河城（Canal City）", kiyokawa: "步行約15分鐘（1.2km）", takasago: "步行約18分鐘（1.4km）" },
      { name: "中洲（屋台街）", kiyokawa: "步行約20分鐘／計程車約5分鐘", takasago: "步行約25分鐘／計程車約7分鐘" },
      { name: "大濠公園", kiyokawa: "開車約10分鐘（3km）", takasago: "開車約10分鐘（2.7km）" },
    ],
  },
  th: {
    title: "ระยะทางไปยังสถานที่ยอดนิยม",
    rows: [
      { name: "ตลาดยานางิบาชิ", kiyokawa: "เดินประมาณ 7 นาที (550 ม.)", takasago: "เดินประมาณ 10 นาที (800 ม.)" },
      { name: "ศาลเจ้าสุมิโยชิ", kiyokawa: "เดินประมาณ 15 นาที (1.2 กม.)", takasago: "เดินประมาณ 15 นาที (1.2 กม.)" },
      { name: "คาแนลซิตี้ ฮากาตะ", kiyokawa: "เดินประมาณ 15 นาที (1.2 กม.)", takasago: "เดินประมาณ 18 นาที (1.4 กม.)" },
      { name: "นากาสุ (ถนนรถเข็นอาหาร)", kiyokawa: "เดินประมาณ 20 นาที / แท็กซี่ประมาณ 5 นาที", takasago: "เดินประมาณ 25 นาที / แท็กซี่ประมาณ 7 นาที" },
      { name: "สวนโอโฮริ", kiyokawa: "ขับรถประมาณ 10 นาที (3 กม.)", takasago: "ขับรถประมาณ 10 นาที (2.7 กม.)" },
    ],
  },
};
