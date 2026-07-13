// llms.txt / llms-full.txt のビルド時レンダリング
// 数値（Airbnb評価・件数・取得日）は data/properties.ts を単一ソースとして注入し、
// サイト表示と常に一致させる。Last updated はビルド日。
import { PROPERTIES, RATING_AS_OF } from "../data/properties";

export function renderLlms(template: string): string {
  const buildDate = new Date().toISOString().slice(0, 10);
  return template
    .replaceAll("{{K_RATING}}", PROPERTIES.kiyokawa.rating)
    .replaceAll("{{K_COUNT}}", PROPERTIES.kiyokawa.reviewCount)
    .replaceAll("{{T_RATING}}", PROPERTIES.takasago.rating)
    .replaceAll("{{T_COUNT}}", PROPERTIES.takasago.reviewCount)
    .replaceAll("{{AS_OF}}", RATING_AS_OF)
    .replaceAll("{{UPDATED}}", buildDate);
}

export const LLMS_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
};
