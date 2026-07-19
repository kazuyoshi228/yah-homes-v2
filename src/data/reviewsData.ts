// yah.homes Pickup Reviews — 旧 ReviewCarousel.tsx から逐語移植
// 出典: _reference_original/client/src/components/ReviewCarousel.tsx

export interface Review {
  id: string;
  reviewer: string;
  from: string;                // e.g. "Hong Kong", "Korea", "Japan"
  platform: string;            // "Airbnb"
  property: string;            // "Kiyokawa" | "Takasago"
  date: string;                // 表示用 e.g. "April 2026"
  dateISO: string;             // JSON-LD用 ISO 8601 e.g. "2026-04"
  rating: number;
  original: string;            // original language text
  originalLang: string;        // language label e.g. "中文"
  english: string;             // English translation
}

// ── Review data ───────────────────────────────────────────────────────────────
export const REVIEWS: Review[] = [
  {
    id: "benson-2026-04",
    reviewer: "Benson",
    from: "Hong Kong",
    platform: "Airbnb",
    property: "Kiyokawa",
    date: "April 2026",
    dateISO: "2026-04",
    rating: 5,
    originalLang: "中文",
    original:
      "非常棒且乾淨的住宿。\n物超所值。\n早知道就早點找到這個很棒的住宿了。\n非常整潔乾淨的住宿。\n而且，房東深夜也會幫忙各種事情。\n真的是非常棒的體驗。",
    english:
      "A wonderful and clean place to stay.\nGreat value for money.\nI wish I had found this amazing place sooner.\nVery tidy and clean accommodation.\nThe host helps with all kinds of things even late at night.\nTruly a wonderful experience.",
  },
  {
    id: "muhyeon-2026-05",
    reviewer: "오무현",
    from: "Korea",
    platform: "Airbnb",
    property: "Takasago",
    date: "May 2026",
    dateISO: "2026-05",
    rating: 5,
    originalLang: "한국어",
    original:
      "숙소의 컨디션이 너무 좋아서 만족하며 생활하였습니다. 특히 아이와 부모님과 함께 동행한 여행으로 방이 구분되어있어 정말 좋았습니다.\n독채의 건물을 모두 사용하며, 복층으로 구성되어 있었고 에어컨도 잘 작동되어 좋았습니다^^\n다만, 위치가 조금 아쉬웠습니다. 하카타역, 텐진역 중간부분에 위치했지만, 역과의 거리는 꽤나 멀어서 이동에는 다소 불편한 부분이 있었습니다.",
    english:
      "The condition of the accommodation was excellent and we were very satisfied throughout our stay. The rooms were well-separated, which was perfect for traveling with children and parents.\nWe had the entire building to ourselves — it was multi-level, and the air conditioning worked great^^\nThe only downside was the location. It's situated between Hakata and Tenjin stations, but the walk to either station is quite long, which made getting around a bit inconvenient.",
  },
  {
    id: "kotobuki-2026-03",
    reviewer: "壽",
    from: "Japan",
    platform: "Airbnb",
    property: "Takasago",
    date: "March 2026",
    dateISO: "2026-03",
    rating: 5,
    originalLang: "日本語",
    original:
      "とても綺麗で掃除も行き届いており、気持ちよく過ごすことができる素敵なお部屋でした。\nキッチンも広く使いやすかったので、みんなで料理を楽しむこともできました。女子4人での旅行でしたが洗面台が広く、朝の準備がしやすかったです。\n周りには美味しいご飯屋さんも多く、薬院駅まで徒歩で行けるのでアクセスも便利でした。ベッドもふかふかで快適に休むことができました。\nホストの方ともすぐに連絡が取れ、安心して滞在できました。福岡での旅行がより充実したものになりました！また福岡に来ることがあれば、ぜひ泊まりたいです。",
    english:
      "A wonderful room that was very clean and well-maintained — a comfortable stay throughout.\nThe kitchen was spacious and easy to use, so we enjoyed cooking together. We were four women traveling, and the wide vanity area made morning routines much easier.\nThere were many delicious restaurants nearby, and Yakuin Station is within walking distance. The beds were soft and fluffy — we slept really well.\nThe host was always quick to respond, giving us peace of mind. Our Fukuoka trip was made even better by this place! We would definitely stay again.",
  },
  {
    id: "michael-2026-04",
    reviewer: "Michael",
    from: "International",
    platform: "Airbnb",
    property: "Takasago",
    date: "April 2026",
    dateISO: "2026-04",
    rating: 5,
    originalLang: "日本語",
    original:
      "この伝統的な日本式の宿泊施設での滞在は素晴らしい体験でした。立地は抜群で、ローソンとセブンイレブンの両方が徒歩2分の場所にあります。静かなエリアにあるにもかかわらず、近くにカフェやレストランがいくつかあります。客室はとても清潔で、エアコンも完璧に機能していました。トヨタ・アルファードのような大型車が駐車できる駐車場が大きなプラスでした。とてもおすすめです！",
    english:
      "Staying at this traditional Japanese-style accommodation was a wonderful experience. The location is excellent — both Lawson and 7-Eleven are just a 2-minute walk away. Despite being in a quiet area, there are several cafes and restaurants nearby. The rooms were very clean and the air conditioning worked perfectly. A major plus for us was the parking lot, which can accommodate large vehicles like a Toyota Alphard. Highly recommended!",
  },
];
