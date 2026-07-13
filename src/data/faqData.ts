// yah.homes FAQ データ — 旧 FAQSection.tsx から逐語移植（4言語×15問）
// 出典: _reference_original/client/src/components/FAQSection.tsx

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqData {
  title: string;
  categories: {
    label: string;
    items: FaqItem[];
  }[];
}

export const faqData: Record<string, FaqData> = {
  ja: {
    title: "よくあるご質問",
    categories: [
      {
        label: "物件について",
        items: [
          {
            q: "清川と高砂の違いは何ですか？",
            a: "清川は最大7名・ダブルベッド3台+シングルベッド1台・専用駐車場つきで、那珂川沿いに佇む立地です。高砂は最大6名で、薬院・渡辺通駅から徒歩圏の住宅街にあります。どちらも新築の一棟貸しで、フルキッチンとシモンズ製プレミアムマットレスを備えています。",
          },
          {
            q: "完全な一棟貸しですか？ほかのゲストが入ることはありますか？",
            a: "はい、清川・高砂とも100%プライベートな一棟貸しです。滞在中にほかのゲストやホストが立ち入ることはなく、建物全体を貸切でお使いいただけます。",
          },
          {
            q: "最大何名まで泊まれますか？",
            a: "清川は最大7名、高砂は最大6名です。定員を超えるご宿泊はできません。",
          },
          {
            q: "バリアフリー対応ですか？",
            a: "どちらも3階建てで屋内階段があり、バリアフリーではありません。浴室は清川が1階、高砂が2階にあります。ご年配の方や小さなお子さま連れの場合は階段にご注意ください。ご不安な点は予約前にお問い合わせください。",
          },
          {
            q: "駐車場はありますか？大型車も停められますか？",
            a: "はい——どちらも無料の専用駐車場1台分つきです。高砂は大型ミニバン（トヨタ・アルファード実績あり）も駐車可能。清川はコンパクト〜スタンダードサイズまでで、大型車は近隣のコインパーキング（1泊約800円〜）をご利用ください。",
          },
          {
            q: "福岡で7人が一緒に泊まれる宿はありますか？",
            a: "yah.homes清川は、新築一棟貸しの家に最大7名までご宿泊いただけます（寝室3室・ダブル3台+シングル1台）。6名までのグループには高砂もご利用いただけます。",
          },
          {
            q: "天神や博多駅の近くに一棟貸しの宿はありますか？最寄り駅はどこですか？",
            a: "はい。どちらも福岡市中心部にあります。高砂は渡辺通駅1番出口から徒歩5〜10分で、薬院も徒歩圏です。清川は渡辺通駅1番出口から徒歩10〜15分——タクシーまたはレンタカーがおすすめです（天神まで車で約8分）。",
          },
          {
            q: "1泊いくらですか？どこで予約できますか？",
            a: "料金はシーズン・曜日・人数により変動します。Airbnbまたは各物件ページの予約カレンダーに日付を入力すると正確な料金が表示されます。清掃料金や最低泊数は各物件ページの予約条件をご確認ください。",
          },
        ],
      },
      {
        label: "チェックイン・チェックアウト",
        items: [
          {
            q: "チェックイン・チェックアウトの時間は？",
            a: "チェックイン: 16:00〜23:00 ／ チェックアウト: 10:00まで。",
          },
          {
            q: "セルフチェックインはできますか？",
            a: "はい。どちらもセキュリティロックを採用しています。チェックイン前にAirbnbまたはBooking.comのメッセージで解錠コードをお送りするので、対面での受け渡しは不要です。",
          },
          {
            q: "福岡空港から宿までのアクセスは？",
            a: "福岡空港（国際線ターミナル）から清川まで車で約18分（タクシー約2,000〜2,500円）、地下鉄+徒歩で約25分。高砂まで車で約20分です。博多駅からはどちらも徒歩約25分です。",
          },
        ],
      },
      {
        label: "設備・ハウスルール",
        items: [
          {
            q: "どんな設備・アメニティがありますか？",
            a: "両物件共通: 高速Wi-Fi、シモンズ製プレミアムマットレス、フルキッチン（コンロ・冷蔵庫・電子レンジ・炊飯器・食器洗い機）、洗濯機、全室エアコン、スマートTV、洗面用具、タオル、寝具一式。",
          },
          {
            q: "タオルは何枚ありますか？",
            a: "ゲスト1名につきバスタオル1枚とフェイスタオル1枚をご用意しています。追加が必要な場合は事前にメッセージでご相談ください（追加料金がかかる場合があります）。どちらも洗濯機（清川は乾燥機能つきドラム式）があるので、長期滞在時は洗濯もできます。",
          },
          {
            q: "近くにコンビニやスーパーはありますか？",
            a: "はい。高砂: セブンイレブンとローソンが徒歩約2分、100円ショップのセリアとスーパーのサニーが徒歩約5分。清川: ローソンが徒歩約2分、ドラッグストアも徒歩圏です。",
          },
          {
            q: "ペットは同伴できますか？",
            a: "いいえ。どちらの物件もペット同伴はできません。",
          },
          {
            q: "喫煙はできますか？",
            a: "いいえ。どちらも室内は完全禁煙です。敷地内での喫煙もご遠慮ください。",
          },
          {
            q: "騒音に関するルールはありますか？",
            a: "はい。近隣の方への配慮のため、22時以降はお静かにお願いします。パーティー・イベントの開催はできません。",
          },
          {
            q: "周辺のローカルガイドはありますか？",
            a: "あります！清川の徒歩圏から実際に歩いて選んだ、カフェ・食堂・居酒屋・市場・文化スポット16箇所のローカルガイドをご用意しています。yah.homes/ja/locals をご覧ください。",
          },
          {
            q: "宿で料理はできますか？",
            a: "はい。どちらもコンロ・冷蔵庫・電子レンジ・炊飯器・基本的な調理器具を備えたフルキッチンつきです。徒歩5分圏内にスーパーやコンビニがあります。",
          },
          {
            q: "キャンセルポリシーは？",
            a: "キャンセルポリシーは予約プラットフォームにより異なります。AirbnbまたはBooking.comの予約時に表示されるポリシーをご確認ください。直接のご予約はお問い合わせください。",
          },
        ],
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    categories: [
      {
        label: "About the Properties",
        items: [
          {
            q: "What is the difference between Kiyokawa and Takasago?",
            a: "Kiyokawa accommodates up to 7 guests and features 3 double beds + 1 single bed, a private parking space, and a riverside location along the Nakagawa River. Takasago accommodates up to 6 guests and is located in cosy and hip residential area, a short walk from Yakuin Station. Both properties are newly built, whole-house rentals with full kitchens and SIMMONS premium mattresses.",
          },
          {
            q: "Are the properties entire homes? Can other guests enter?",
            a: "Yes, both Kiyokawa and Takasago are 100% private whole-house rentals. No other guests or hosts will enter during your stay. You have exclusive use of the entire property.",
          },
          {
            q: "How many guests can stay?",
            a: "Kiyokawa: up to 7 guests. Takasago: up to 6 guests. Extra guests beyond the listed capacity are not permitted.",
          },
          {
            q: "Are the properties barrier-free / wheelchair accessible?",
            a: "Both houses are three-story homes with indoor stairs and are not barrier-free. The bathroom is on the 1st floor at Kiyokawa and on the 2nd floor at Takasago. Seniors and families with toddlers should take extra care on the stairs. Please contact us before booking if you have any concerns.",
          },
          {
            q: "Is parking available? Does a large car fit?",
            a: "Yes — both houses include one free private parking space. Takasago's space fits large minivans (a Toyota Alphard fits). Kiyokawa's space fits compact to standard-size cars; for larger vehicles, coin parking lots nearby cost from about ¥800 per night.",
          },
          {
            q: "Where can 7 people stay together in Fukuoka?",
            a: "yah.homes Kiyokawa accommodates up to 7 guests in one newly built private house (3 bedrooms, 3 double beds + 1 single bed), within walking distance of Tenjin. For groups of up to 6, yah.homes Takasago is also available.",
          },
          {
            q: "Is there a whole-house rental near Tenjin or Hakata Station? What is the nearest station?",
            a: "Yes. Both yah.homes properties are in central Fukuoka. Takasago is a 5–10 minute walk from Watanabe-dori Station (Exit 1), with Yakuin also within walking distance. Kiyokawa is a 10–15 minute walk from Watanabe-dori Station (Exit 1) — a taxi or rental car is recommended (about 8 minutes by car to Tenjin).",
          },
          {
            q: "How much does it cost per night, and where can I book?",
            a: "Rates vary by season, day of the week, and number of guests. Enter your dates on Airbnb or the booking calendar on each property page to see exact prices. Cleaning fees and minimum-night requirements are listed under Booking Conditions on each property page.",
          },
        ],
      },
      {
        label: "Check-in & Check-out",
        items: [
          {
            q: "What are the check-in and check-out times?",
            a: "Check-in: 4:00 PM – 10:00 PM. Check-out: by 10:00 AM.",
          },
          {
            q: "Is self check-in available?",
            a: "Yes. Both properties use a security lock system. You will receive the security code via Airbnb or Booking.com message before check-in. No need to meet anyone in person.",
          },
          {
            q: "How do I get from Fukuoka Airport to the properties?",
            a: "From Fukuoka Airport (International Terminal), Kiyokawa is approximately 18 minutes by car (taxi approx. ¥2,000–¥2,500) or 25 minutes by subway + walk. Takasago is approximately 20 minutes by car. Both properties are also accessible from Hakata Station in about 25 minutes on foot.",
          },
        ],
      },
      {
        label: "Amenities & House Rules",
        items: [
          {
            q: "What amenities are provided?",
            a: "Both properties include: high-speed Wi-Fi, SIMMONS premium mattresses, fully equipped kitchen (Cooktop, refrigerator, microwave, rice cooker, dishwasher), washing machine, air conditioning in all rooms, smart TV, toiletries, towels, and bed linens.",
          },
          {
            q: "How many towels are provided?",
            a: "One bath towel and one face towel are prepared per guest. If you need more, please message us in advance (additional towels may incur a fee). Both houses have washing machines — Kiyokawa's is a washer-dryer — so you can also launder towels during longer stays.",
          },
          {
            q: "Are there convenience stores or supermarkets nearby?",
            a: "Yes. Takasago: 7-Eleven and Lawson are about a 2-minute walk, with a 100-yen shop (Seria) and the Sunny supermarket about 5 minutes away. Kiyokawa: Lawson is about a 2-minute walk, and a drugstore is also within walking distance.",
          },
          {
            q: "Are pets allowed?",
            a: "No. Pets are not permitted at either property.",
          },
          {
            q: "Is smoking allowed?",
            a: "No. Both properties are strictly non-smoking indoors. Smoking is not permitted anywhere on the premises.",
          },
          {
            q: "Are there noise restrictions?",
            a: "Yes. Please keep noise to a minimum after 10:00 PM out of respect for neighbors. Parties and events are not permitted.",
          },
          {
            q: "Is there a local guide for the area?",
            a: "Yes! We have curated a Local Guide featuring 16 recommended spots within walking distance of Kiyokawa — cafes, restaurants, izakayas, markets, and cultural spots. Visit yah.homes/locals for the full guide.",
          },
          {
            q: "Can I cook at the property?",
            a: "Yes. Both properties have fully equipped kitchens with Cooktops, refrigerators, microwaves, rice cookers, and basic cooking utensils. Grocery stores and convenience stores are within a 5-minute walk.",
          },
          {
            q: "What is your cancellation policy?",
            a: "Cancellation policies vary by booking platform. Please refer to the policy shown on Airbnb or Booking.com at the time of booking. For direct bookings, please contact us directly.",
          },
        ],
      },
    ],
  },
  ko: {
    title: "자주 묻는 질문",
    categories: [
      {
        label: "숙소 안내",
        items: [
          {
            q: "기요카와와 다카사고의 차이점은 무엇인가요?",
            a: "기요카와는 최대 7명 수용, 더블베드 3개 + 싱글베드 1개, 전용 주차장, 나카가와 강변 위치입니다. 다카사고는 최대 6명 수용, 야쿠인·와타나베도리역 도보권 주택가 위치입니다. 두 숙소 모두 신축 독채 렌탈로 풀 키친과 SIMMONS 프리미엄 매트리스를 갖추고 있습니다.",
          },
          {
            q: "완전한 독채인가요? 다른 투숙객이 들어오나요?",
            a: "네, 두 숙소 모두 100% 프라이빗 독채 렌탈입니다. 체류 중 다른 투숙객이나 호스트가 출입하지 않습니다.",
          },
          {
            q: "최대 몇 명까지 숙박 가능한가요?",
            a: "기요카와: 최대 7명. 다카사고: 최대 6명.",
          },
          {
            q: "배리어프리(휠체어 접근 가능)인가요?",
            a: "두 숙소 모두 3층 구조의 단독주택으로 실내 계단이 있으며 배리어프리가 아닙니다. 욕실은 기요카와 1층, 다카사고 2층에 있습니다. 어르신이나 유아 동반 시 계단 이용에 주의해 주세요. 우려되는 점은 예약 전에 문의해 주세요.",
          },
          {
            q: "주차 가능한가요? 대형차도 주차되나요?",
            a: "네 — 두 숙소 모두 무료 전용 주차 1대분이 있습니다. 다카사고는 대형 미니밴(토요타 알파드급)도 주차 가능합니다. 기요카와는 콤팩트~스탠다드 사이즈까지 가능하며, 대형 차량은 인근 코인 주차장(1박 약 ¥800~)을 이용해 주세요.",
          },
          {
            q: "후쿠오카에서 7명이 함께 묵을 수 있는 숙소가 있나요?",
            a: "yah.homes 기요카와는 신축 독채 한 채에 최대 7명까지 숙박할 수 있습니다(침실 3개, 더블 3+싱글 1). 텐진까지 도보권이며, 최대 6명 그룹은 다카사고도 이용 가능합니다.",
          },
          {
            q: "텐진이나 하카타역 근처에 독채 숙소가 있나요? 가장 가까운 역은 어디인가요?",
            a: "네. 두 숙소 모두 후쿠오카 중심부에 있습니다. 다카사고는 와타나베도리역 1번 출구에서 도보 5~10분이며 야쿠인도 도보권입니다. 기요카와는 와타나베도리역 1번 출구에서 도보 10~15분으로, 택시나 렌터카를 추천합니다(텐진까지 차로 약 8분).",
          },
          {
            q: "1박 요금은 얼마인가요? 어디서 예약하나요?",
            a: "요금은 시즌·요일·인원에 따라 달라집니다. Airbnb 또는 각 숙소 페이지의 예약 캘린더에 날짜를 입력하면 정확한 요금이 표시됩니다. 청소비와 최소 숙박일은 각 숙소 페이지의 예약 조건에서 확인할 수 있습니다.",
          },
        ],
      },
      {
        label: "체크인 & 체크아웃",
        items: [
          {
            q: "체크인/체크아웃 시간은 언제인가요?",
            a: "체크인: 오후 4시 ~ 오후 11시. 체크아웃: 오전 11시까지. 얼리 체크인/레이트 체크아웃은 사전 문의 주세요.",
          },
          {
            q: "셀프 체크인이 가능한가요?",
            a: "네. 스마트 잠금 시스템을 사용합니다. 체크인 24시간 전에 Airbnb 또는 Booking.com 메시지로 도어 코드를 받으실 수 있습니다.",
          },
          {
            q: "후쿠오카 공항에서 숙소까지 어떻게 가나요?",
            a: "후쿠오카 공항 국제선 터미널에서 기요카와까지 차로 약 18분(택시 약 ¥2,000~¥2,500), 다카사고까지 차로 약 20분입니다. 하카타역에서는 도보 약 25분입니다.",
          },
        ],
      },
      {
        label: "어메니티 & 하우스 룰",
        items: [
          {
            q: "어떤 편의시설이 제공되나요?",
            a: "고속 Wi-Fi, SIMMONS 프리미엄 매트리스, 풀 키친(IH 쿡탑, 냉장고, 전자레인지, 밥솥, 식기세척기), 세탁기/건조기, 전 객실 에어컨, 스마트 TV, 세면도구, 수건, 침구류가 포함됩니다.",
          },
          {
            q: "수건은 몇 장 제공되나요?",
            a: "게스트 1인당 배스타올 1장과 페이스타올 1장이 준비되어 있습니다. 추가가 필요하시면 사전에 메시지로 문의해 주세요(추가 요금이 발생할 수 있습니다). 두 숙소 모두 세탁기가 있어(기요카와는 건조 겸용) 장기 체류 시 세탁도 가능합니다.",
          },
          {
            q: "근처에 편의점이나 슈퍼마켓이 있나요?",
            a: "네. 다카사고: 세븐일레븐과 로손이 도보 약 2분, 100엔숍 세리아와 슈퍼 서니가 도보 약 5분 거리입니다. 기요카와: 로손이 도보 약 2분, 드러그스토어도 도보권입니다.",
          },
          {
            q: "반려동물 동반이 가능한가요?",
            a: "아니요. 두 숙소 모두 반려동물 동반이 불가합니다.",
          },
          {
            q: "흡연이 가능한가요?",
            a: "아니요. 두 숙소 모두 실내 완전 금연입니다.",
          },
          {
            q: "소음 제한이 있나요?",
            a: "네. 오후 10시 이후에는 이웃을 위해 소음을 최소화해 주세요. 파티 및 이벤트는 불가합니다.",
          },
          {
            q: "지역 가이드가 있나요?",
            a: "네! 기요카와 도보권 내 추천 스팟 16곳을 소개하는 로컬 가이드가 있습니다. yah.homes/locals에서 확인하세요.",
          },
          {
            q: "숙소에서 요리할 수 있나요?",
            a: "네. 두 숙소 모두 IH 쿡탑, 냉장고, 전자레인지, 밥솥, 기본 조리도구를 갖춘 풀 키친이 있습니다. 도보 5분 이내에 슈퍼마켓과 편의점이 있습니다.",
          },
          {
            q: "취소 정책은 어떻게 되나요?",
            a: "취소 정책은 예약 플랫폼에 따라 다릅니다. Airbnb 또는 Booking.com 예약 시 표시되는 정책을 확인해 주세요.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "常見問題",
    categories: [
      {
        label: "關於住宿",
        items: [
          {
            q: "清川和高砂有什麼不同？",
            a: "清川最多可容納7人，設有3張雙人床+1張單人床，附私人停車位，位於那珂川河畔。高砂最多可容納6人，位於藥院、渡邊通站步行範圍內的住宅區。兩棟均為全新包棟民宿（整棟出租），配備完整廚房和SIMMONS頂級床墊。",
          },
          {
            q: "是完全獨棟嗎？其他客人會進來嗎？",
            a: "是的，兩處住宿均為100%私人獨棟出租。入住期間不會有其他客人或房東進入。",
          },
          {
            q: "最多可以住幾個人？",
            a: "清川：最多7人。高砂：最多6人。",
          },
          {
            q: "住宿是否無障礙設施？",
            a: "兩棟皆為三層樓建築，室內有樓梯，不具備無障礙設施。浴室位置：清川在1樓、高砂在2樓。長輩或幼兒同行時上下樓梯請特別留意。如有疑慮，請於預訂前與我們聯繫。",
          },
          {
            q: "有停車位嗎？大型車停得下嗎？",
            a: "有 — 兩棟皆附1個免費專用停車位。高砂的車位可停大型休旅車（Toyota Alphard 實際可停）。清川的車位適合小型至標準尺寸車輛，大型車請利用附近的投幣停車場（每晚約¥800起）。",
          },
          {
            q: "福岡有可以7人一起入住的包棟民宿嗎？",
            a: "yah.homes 清川是一整棟新建包棟民宿，最多可入住7人（3間臥室、3張雙人床+1張單人床）。最多6人的團體也可選擇高砂包棟。",
          },
          {
            q: "天神或博多站附近有包棟住宿嗎？最近的車站是哪一站？",
            a: "有。兩棟包棟民宿都位於福岡市中心：高砂距渡邊通站1號出口步行5～10分鐘，藥院也在步行範圍內；清川距渡邊通站1號出口步行10～15分鐘，建議搭計程車或自駕（開車到天神約8分鐘）。",
          },
          {
            q: "每晚房價多少？在哪裡預訂？",
            a: "房價依季節、星期與人數而異。在 Airbnb 或各房源頁面的預訂日曆輸入日期即可查看確切價格。清潔費與最少入住晚數請參閱各房源頁面的預訂條件。",
          },
        ],
      },
      {
        label: "入住與退房",
        items: [
          {
            q: "入住和退房時間是什麼時候？",
            a: "入住：下午4點至晚上11點。退房：上午11點前。如需提前入住或延遲退房，請提前聯繫我們。",
          },
          {
            q: "可以自助入住嗎？",
            a: "可以。兩處住宿均使用智能門鎖系統。入住前24小時將通過Airbnb或Booking.com訊息發送門鎖密碼。",
          },
          {
            q: "從福岡機場如何到達住宿？",
            a: "從福岡機場國際航廈，搭計程車至清川約18分鐘（約¥2,000~¥2,500），至高砂約20分鐘。從博多站步行約25分鐘可到達兩處住宿。",
          },
        ],
      },
      {
        label: "設施與住宿規則",
        items: [
          {
            q: "提供哪些設施？",
            a: "兩處均提供：高速Wi-Fi、SIMMONS頂級床墊、完整廚房（IH電磁爐、冰箱、微波爐、電飯鍋、洗碗機）、洗衣機/烘乾機、全室空調、智能電視、盥洗用品、毛巾和床上用品。",
          },
          {
            q: "提供幾條毛巾？",
            a: "每位房客備有浴巾1條與洗臉毛巾1條。如需追加請事先傳訊息告知（可能酌收費用）。兩棟皆有洗衣機（清川為洗脫烘一體機），長住期間也能自行清洗。",
          },
          {
            q: "附近有便利商店或超市嗎？",
            a: "有。高砂：7-ELEVEN和LAWSON步行約2分鐘，百元店Seria與Sunny超市約5分鐘。清川：LAWSON步行約2分鐘，藥妝店也在步行範圍內。",
          },
          {
            q: "可以攜帶寵物嗎？",
            a: "不可以。兩處住宿均不允許攜帶寵物。",
          },
          {
            q: "可以吸菸嗎？",
            a: "不可以。兩處住宿室內嚴格禁菸。",
          },
          {
            q: "有噪音限制嗎？",
            a: "有。晚上10點後請保持安靜，以尊重鄰居。不允許舉辦派對或活動。",
          },
          {
            q: "有當地導覽嗎？",
            a: "有！我們精心整理了清川步行範圍內16個推薦景點的本地指南。請訪問yah.homes/locals查看完整指南。",
          },
          {
            q: "可以在住宿內烹飪嗎？",
            a: "可以。兩處住宿均配備完整廚房，包括IH電磁爐、冰箱、微波爐、電飯鍋和基本廚具。步行5分鐘內有超市和便利店。",
          },
          {
            q: "取消政策是什麼？",
            a: "取消政策因預訂平台而異。請參閱Airbnb或Booking.com預訂時顯示的政策。",
          },
        ],
      },
    ],
  },
  th: {
    title: "คำถามที่พบบ่อย",
    categories: [
      {
        label: "เกี่ยวกับที่พัก",
        items: [
          {
            q: "ความแตกต่างระหว่าง Kiyokawa และ Takasago คืออะไร?",
            a: "Kiyokawa รองรับได้สูงสุด 7 คน มีเตียงดับเบิล 3 เตียง + เตียงเดี่ยว 1 เตียง มีที่จอดรถส่วนตัว ตั้งอยู่ริมแม่น้ำ Nakagawa Takasago รองรับได้สูงสุด 6 คน อยู่ในย่านที่พักอาศัยเดินถึงสถานี Watanabe-dori และย่าน Yakuin ได้ ทั้งสองแห่งเป็นบ้านพักใหม่ทั้งหลัง มีครัวครบครัน และที่นอน SIMMONS พรีเมียม",
          },
          {
            q: "เป็นบ้านพักส่วนตัวทั้งหลังหรือไม่? มีผู้เข้าพักอื่นหรือไม่?",
            a: "ใช่ ทั้ง Kiyokawa และ Takasago เป็นบ้านพักส่วนตัวทั้งหลัง 100% ไม่มีผู้เข้าพักหรือเจ้าของบ้านเข้ามาในระหว่างที่คุณพัก",
          },
          {
            q: "รองรับผู้เข้าพักได้กี่คน?",
            a: "Kiyokawa: สูงสุด 7 คน Takasago: สูงสุด 6 คน",
          },
          {
            q: "ที่พักเหมาะสำหรับผู้พิการหรือไม่?",
            a: "ทั้งสองหลังเป็นบ้าน 3 ชั้นที่มีบันไดภายใน และไม่มีสิ่งอำนวยความสะดวกสำหรับผู้พิการ ห้องอาบน้ำของ Kiyokawa อยู่ชั้น 1 ส่วน Takasago อยู่ชั้น 2 ผู้สูงอายุและครอบครัวที่มีเด็กเล็กกรุณาระมัดระวังเรื่องบันได หากมีข้อกังวลกรุณาติดต่อเราก่อนจอง",
          },
          {
            q: "มีที่จอดรถหรือไม่? รถขนาดใหญ่จอดได้ไหม?",
            a: "มี — ทั้งสองหลังมีที่จอดรถส่วนตัวฟรี 1 คัน Takasago จอดมินิแวนขนาดใหญ่ได้ (Toyota Alphard จอดได้จริง) Kiyokawa เหมาะกับรถขนาดเล็กถึงมาตรฐาน รถขนาดใหญ่สามารถใช้ลานจอดแบบหยอดเหรียญใกล้เคียง (ประมาณ ¥800 ต่อคืนขึ้นไป)",
          },
          {
            q: "มีที่พักในฟุกุโอกะที่พักด้วยกัน 7 คนได้ไหม?",
            a: "yah.homes คิโยกาวะ รองรับได้สูงสุด 7 คนในบ้านส่วนตัวทั้งหลัง (3 ห้องนอน เตียงดับเบิล 3 + เตียงเดี่ยว 1) เดินถึงเทนจินได้ กลุ่มไม่เกิน 6 คนสามารถเลือกทาคาซาโกะได้เช่นกัน",
          },
          {
            q: "มีบ้านเช่าทั้งหลังใกล้เทนจินหรือสถานีฮากาตะไหม? สถานีที่ใกล้ที่สุดคือสถานีไหน?",
            a: "มี ทั้งสองแห่งอยู่ใจกลางฟุกุโอกะ: ทาคาซาโกะ เดินจากสถานีวาตานาเบะโดริ (ทางออก 1) ประมาณ 5–10 นาที และเดินถึงย่านยาคุอินได้ คิโยกาวะ เดินจากสถานีวาตานาเบะโดริ (ทางออก 1) ประมาณ 10–15 นาที แนะนำแท็กซี่หรือรถเช่า (ขับถึงเทนจินประมาณ 8 นาที)",
          },
          {
            q: "ราคาต่อคืนเท่าไหร่ และจองได้ที่ไหน?",
            a: "ราคาแตกต่างกันตามฤดูกาล วันในสัปดาห์ และจำนวนผู้เข้าพัก กรอกวันที่ใน Airbnb หรือปฏิทินการจองในหน้าของแต่ละที่พักเพื่อดูราคาที่แน่นอน ค่าทำความสะอาดและจำนวนคืนขั้นต่ำดูได้ที่เงื่อนไขการจองในหน้าที่พัก",
          },
        ],
      },
      {
        label: "เช็คอิน & เช็คเอาท์",
        items: [
          {
            q: "เวลาเช็คอินและเช็คเอาท์คือเมื่อไหร่?",
            a: "เช็คอิน: 16:00 – 23:00 น. เช็คเอาท์: ก่อน 11:00 น. สำหรับเช็คอินก่อนกำหนดหรือเช็คเอาท์ช้า กรุณาติดต่อล่วงหน้า",
          },
          {
            q: "สามารถเช็คอินด้วยตนเองได้หรือไม่?",
            a: "ได้ ทั้งสองแห่งใช้ระบบล็อคอัจฉริยะ คุณจะได้รับรหัสประตูผ่านข้อความ Airbnb หรือ Booking.com 24 ชั่วโมงก่อนเช็คอิน",
          },
          {
            q: "เดินทางจากสนามบินฟุกุโอกะไปที่พักอย่างไร?",
            a: "จากอาคารผู้โดยสารระหว่างประเทศสนามบินฟุกุโอกะ ไป Kiyokawa ใช้เวลาประมาณ 18 นาทีโดยรถยนต์ (แท็กซี่ประมาณ ¥2,000–¥2,500) ไป Takasago ประมาณ 20 นาที จากสถานีฮากาตะเดินประมาณ 25 นาที",
          },
        ],
      },
      {
        label: "สิ่งอำนวยความสะดวก & กฎของบ้าน",
        items: [
          {
            q: "มีสิ่งอำนวยความสะดวกอะไรบ้าง?",
            a: "ทั้งสองแห่งมี: Wi-Fi ความเร็วสูง, ที่นอน SIMMONS พรีเมียม, ครัวครบครัน (เตาแม่เหล็กไฟฟ้า, ตู้เย็น, ไมโครเวฟ, หม้อหุงข้าว, เครื่องล้างจาน), เครื่องซักผ้า/เครื่องอบผ้า, แอร์ทุกห้อง, Smart TV, ของใช้ส่วนตัว, ผ้าขนหนู และผ้าปูที่นอน",
          },
          {
            q: "มีผ้าขนหนูให้กี่ผืน?",
            a: "มีผ้าเช็ดตัว 1 ผืนและผ้าเช็ดหน้า 1 ผืนต่อผู้เข้าพัก 1 ท่าน หากต้องการเพิ่มกรุณาแจ้งล่วงหน้าทางข้อความ (อาจมีค่าใช้จ่ายเพิ่มเติม) ทั้งสองหลังมีเครื่องซักผ้า (Kiyokawa เป็นเครื่องซัก-อบ) จึงซักผ้าได้ระหว่างการพักระยะยาว",
          },
          {
            q: "มีร้านสะดวกซื้อหรือซูเปอร์มาร์เก็ตใกล้ๆ ไหม?",
            a: "มี Takasago: 7-Eleven และ Lawson เดินประมาณ 2 นาที ร้าน 100 เยน Seria และซูเปอร์ Sunny ประมาณ 5 นาที Kiyokawa: Lawson เดินประมาณ 2 นาที และมีร้านขายยาในระยะเดิน",
          },
          {
            q: "อนุญาตให้นำสัตว์เลี้ยงมาได้หรือไม่?",
            a: "ไม่อนุญาต ทั้งสองแห่งไม่อนุญาตให้นำสัตว์เลี้ยงมา",
          },
          {
            q: "สูบบุหรี่ได้หรือไม่?",
            a: "ไม่ได้ ทั้งสองแห่งห้ามสูบบุหรี่ในร่มอย่างเคร่งครัด",
          },
          {
            q: "มีข้อจำกัดเรื่องเสียงรบกวนหรือไม่?",
            a: "มี กรุณาลดเสียงหลัง 22:00 น. เพื่อเคารพเพื่อนบ้าน ไม่อนุญาตให้จัดปาร์ตี้หรืองานอีเวนต์",
          },
          {
            q: "มีคู่มือท้องถิ่นหรือไม่?",
            a: "มี! เรามีคู่มือท้องถิ่นที่คัดสรรสถานที่แนะนำ 16 แห่งในระยะเดินจาก Kiyokawa เยี่ยมชม yah.homes/locals สำหรับคู่มือฉบับเต็ม",
          },
          {
            q: "ทำอาหารในที่พักได้หรือไม่?",
            a: "ได้ ทั้งสองแห่งมีครัวครบครันพร้อมเตาแม่เหล็กไฟฟ้า ตู้เย็น ไมโครเวฟ หม้อหุงข้าว และอุปกรณ์ทำอาหารพื้นฐาน มีซูเปอร์มาร์เก็ตและร้านสะดวกซื้อในระยะเดิน 5 นาที",
          },
          {
            q: "นโยบายการยกเลิกคืออะไร?",
            a: "นโยบายการยกเลิกแตกต่างกันตามแพลตฟอร์มการจอง กรุณาดูนโยบายที่แสดงใน Airbnb หรือ Booking.com ในขณะที่จอง",
          },
        ],
      },
    ],
  },
};
