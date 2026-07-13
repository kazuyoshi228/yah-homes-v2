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
            a: "Both properties have steep staircases and are not barrier-free. Guests with mobility impairments or young children should take extra care. Please contact us before booking if you have any concerns.",
          },
          {
            q: "Is parking available?",
            a: "Kiyokawa has one private parking space (free). Takasago has bigger on-site parking which you can park Miniban size car such as Toyota Alfard.",
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
            a: "기요카와는 최대 7명 수용, 더블베드 3개 + 싱글베드 1개, 전용 주차장, 나카가와 강변 위치입니다. 다카사고는 최대 6명 수용, 다카사고역 도보권 주택가 위치입니다. 두 숙소 모두 신축 독채 렌탈로 풀 키친과 SIMMONS 프리미엄 매트리스를 갖추고 있습니다.",
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
            a: "두 숙소 모두 계단이 가파르며 배리어프리가 아닙니다. 이동에 불편함이 있으신 분은 예약 전 문의해 주세요.",
          },
          {
            q: "주차 가능한가요?",
            a: "기요카와에는 전용 주차 공간 1대분이 있습니다(무료). 다카사고에는 전용 주차장이 없으며, 근처에 유료 주차장이 있습니다.",
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
            a: "清川最多可容納7人，設有3張雙人床+1張單人床，附私人停車位，位於那珂川河畔。高砂最多可容納6人，位於高砂站步行範圍內的住宅區。兩處均為全新獨棟出租，配備完整廚房和SIMMONS頂級床墊。",
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
            a: "兩處住宿均有陡峭的樓梯，不具備無障礙設施。行動不便的客人請在預訂前聯繫我們。",
          },
          {
            q: "有停車位嗎？",
            a: "清川有1個私人停車位（免費）。高砂沒有專用停車場，附近有收費停車場。",
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
            a: "Kiyokawa รองรับได้สูงสุด 7 คน มีเตียงดับเบิล 3 เตียง + เตียงเดี่ยว 1 เตียง มีที่จอดรถส่วนตัว ตั้งอยู่ริมแม่น้ำ Nakagawa Takasago รองรับได้สูงสุด 6 คน อยู่ในย่านที่พักอาศัยใกล้สถานี Takasago ทั้งสองแห่งเป็นบ้านพักใหม่ทั้งหลัง มีครัวครบครัน และที่นอน SIMMONS พรีเมียม",
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
            a: "ทั้งสองแห่งมีบันไดชัน และไม่มีสิ่งอำนวยความสะดวกสำหรับผู้พิการ กรุณาติดต่อเราก่อนจองหากมีข้อกังวล",
          },
          {
            q: "มีที่จอดรถหรือไม่?",
            a: "Kiyokawa มีที่จอดรถส่วนตัว 1 คัน (ฟรี) Takasago ไม่มีที่จอดรถ แต่มีที่จอดรถแบบเสียเงินอยู่ใกล้เคียง",
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
