# 設計メモ — BSに「資本の部」を追加（2026-09-08 発注者承認済み）

## 背景
Pro Forma B/S 作成中に、台帳に資本金¥50,000,000の記録が無いことが発覚（発注者「間違いだよね」）。
負債は1本ずつ登録済みなのに、出資の一次事実が無い非対称を解消する。

## 一次事実（登録済み・2026-09-08）
`finance` コレクションに kind:"capital"・entity:"corp" で3件:
- `capital-kazuyoshi` 山田 一慶 ¥35,000,000（70%）
- `capital-masako` 山田 眞佐子 ¥10,000,000（20%）
- `capital-harunobu` 山田 晴信 ¥5,000,000（10%）
払込日は2026-04以前（申告）。比率・総額は2026-09-08発注者申告。

## 変更
- `functions/src/agency/bs.ts` … finance の kind=="capital" を読み、
  `capital`（明細行）・`capitalTotal`・`retainedEarnings`（= corpEquity − capitalTotal・導出）を返す。
  既存の合計計算（liabilityTotal / corpEquity）には影響しない。
- `docs/schema.md` … finance に kind="capital" の行を追記。
- 表示は yah-os 側 bs.js（法人のBSの純資産行の下に内訳）— 別リポで実施。

## リスク・検証
保存はしない（SSoT原則: 剰余金は導出）。`npm run build` → yah-os devserver で
`?action=bs` の応答に capital が出ること・既存フィールドが不変なことを確認。
