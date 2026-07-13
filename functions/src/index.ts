/**
 * yah.homes Cloud Functions — 足場（Phase 1）
 *
 * 現時点では health チェック1本のみ。実機能（問い合わせ送信・Beds24 webhook・
 * magazine 連携など）は各機能フェーズで、設計図の承認を得てから追加する。
 * リージョンは asia-northeast1（東京）に統一する。
 */
import { onRequest } from "firebase-functions/v2/https";

export const health = onRequest(
  { region: "asia-northeast1" },
  (_req, res) => {
    res.status(200).json({ status: "ok", service: "yah.homes", ts: Date.now() });
  }
);
