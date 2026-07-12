// =============================================================
// yah.homes — Takasago Property Data
// Direct booking page: /booking/takasago
// Languages: en, ko, zh, th
// =============================================================

export type Lang = "en" | "ko" | "zh" | "th";

export interface TakasagoTranslations {
  hero: {
    propertyName: string;
    tagline: string;
    area: string;
    capacity: string;
    bookNow: string;
  };
  overview: {
    title: string;
    bedrooms: string;
    beds: string;
    maxGuests: string;
    area: string;
  };
  amenities: {
    title: string;
    items: string[];
  };
  amenityCategories: {
    title: string;
    showAll: string;
    showLess: string;
    categories: {
      name: string;
      items: { icon: string; label: string; note?: string; unavailable?: boolean }[];
    }[];
  };
  review: {
    rating: string;
    count: string;
    superhostLabel: string;
    airbnbLabel: string;
  };
  propertyDescription: {
    title: string;
    showMore: string;
    showLess: string;
    intro: string;
    highlights: { title: string; body: string }[];
    bedroomGuide: { title: string; items: string[] };
    facilityGuide: { title: string; items: string[] };
    equipment: { title: string; items: string[] };
    amenitiesDetail: { title: string; items: string[] };
    guestAccess: { title: string; body: string };
    otherNotes: { title: string; items: string[] };
    registration: { title: string; body: string };
  };
  access: {
    title: string;
    items: { from: string; time: string }[];
  };
  checkin: {
    title: string;
    time: string;
    checkout: string;
    method: string;
    idVerification: string;
  };
  conditions: {
    title: string;
    minNights: string;
    cancellation: string;
    cleaningFee: string;
    extraGuest: string;
    noiseRule: string;
    petRule: string;
    smokingRule: string;
  };
  booking: {
    title: string;
    subtitle: string;
    comingSoon: string;
  };
  houseRules: {
    title: string;
    items: { icon: string; rule: string }[];
  };
  floorPlan: {
    title: string;
    subtitle: string;
    imageAlt: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
    bookButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
  ui: {
    overviewLabels: {
      bedrooms: string;
      beds: string;
      maxGuests: string;
      area: string;
    };
    contactUsToBook: string;
    successMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    privacyLabel: string;
    privacyLink: string;
    sendButton: string;
    sendingButton: string;
    errorToast: string;
  };
  nav: {
    backToHome: string;
    language: string;
    langNames: { en: string; ko: string; zh: string; th: string };
  };
}

export const takasagoData: Record<Lang, TakasagoTranslations> = {
  en: {
    hero: {
      propertyName: "yah. Takasago",
      tagline: "A stylish whole-house stay in the heart of Fukuoka's Takasago district.",
      area: "Takasago, Chuo-ku, Fukuoka",
      capacity: "Up to 6 guests · 3 Bedrooms",
      bookNow: "Book Now",
    },
    overview: {
      title: "Property Overview",
      bedrooms: "3 Bedrooms",
      beds: "1 Double Bed + 4 Single Beds",
      maxGuests: "6 guests (max)",
      area: "Takasago · Chuo-ku, Fukuoka",
    },
    amenityCategories: {
      title: "What this place offers",
      showAll: "Show all amenities",
      showLess: "Show less",
      categories: [
        {
          name: "Bathroom",
          items: [
            { icon: "bath", label: "Bathtub" },
            { icon: "shower", label: "Shower booth" },
            { icon: "hairdryer", label: "Hair dryer" },
            { icon: "shampoo", label: "Shampoo" },
            { icon: "conditioner", label: "Conditioner" },
            { icon: "soap", label: "Body wash" },
            { icon: "bidet", label: "Bidet (washlet)" },
            { icon: "hot-water", label: "Hot water" },
          ],
        },
        {
          name: "Bedroom & Laundry",
          items: [
            { icon: "washer", label: "Washing machine" },
            { icon: "hanger", label: "Hangers" },
            { icon: "bedding", label: "Bed linens" },
            { icon: "blackout", label: "Blackout curtains" },
            { icon: "drying-rack", label: "Clothes drying rack" },
            { icon: "storage", label: "Clothing storage" },
          ],
        },
        {
          name: "Entertainment",
          items: [
            { icon: "tv", label: "TV" },
          ],
        },
        {
          name: "Heating & Cooling",
          items: [
            { icon: "ac", label: "Air conditioning" },
            { icon: "fan", label: "Ceiling fan" },
            { icon: "heat", label: "Heating" },
          ],
        },
        {
          name: "Home Safety",
          items: [
            { icon: "camera", label: "Security cameras on property", note: "Cameras are installed at outdoor/shared/entry areas as required by the Ryokan Business Act. Your privacy is fully protected." },
            { icon: "smoke-alarm", label: "Smoke alarm" },
            { icon: "fire-ext", label: "Fire extinguisher" },
            { icon: "co-alarm", label: "Carbon monoxide alarm", unavailable: true, note: "This listing may not have a carbon monoxide detector. Please contact the host for details." },
          ],
        },
        {
          name: "Internet & Office",
          items: [
            { icon: "wifi", label: "Wi-Fi" },
          ],
        },
        {
          name: "Kitchen & Dining",
          items: [
            { icon: "kitchen", label: "Full kitchen" },
            { icon: "cooking", label: "Cooking space for guests" },
            { icon: "fridge", label: "Refrigerator" },
            { icon: "microwave", label: "Microwave" },
            { icon: "cookware", label: "Basic cookware", note: "Pots, pans, oil, salt & pepper" },
            { icon: "tableware", label: "Tableware & cutlery", note: "Bowls, chopsticks, plates, cups, etc." },
            { icon: "freezer", label: "Freezer" },
            { icon: "oven", label: "Oven" },
            { icon: "kettle", label: "Electric kettle" },
            { icon: "wine", label: "Wine glasses" },
            { icon: "rice", label: "Rice cooker" },
            { icon: "dining", label: "Low Dining Table on Tatami" },
          ],
        },
        {
          name: "Location Features",
          items: [
            { icon: "private-entry", label: "Private entrance" },
            { icon: "laundromat", label: "Laundromat nearby" },
          ],
        },
        {
          name: "Parking & Facilities",
          items: [
            { icon: "parking", label: "Free on-site parking" },
          ],
        },
        {
          name: "Services",
          items: [
            { icon: "long-stay", label: "Long-term stays allowed", note: "Stays of 28 nights or more available" },
            { icon: "self-checkin", label: "Self check-in", note: "Key lockbox" },
          ],
        },
      ],
    },
    amenities: {
      title: "Amenities",
      items: [
        "Fully equipped kitchen (IH stove)",
        "Washing machine",
        "High-speed Wi-Fi",
        "Private parking (1 car, free)",
        "Premium mattresses in all bedrooms",
        "Baby crib & high chair available on request",
        "Large-screen Smart TV + sound system",
        "Air conditioning in all rooms",
        "Work desk (1 person)",
        "Spacious living & dining area",
        "Hair dryer, slippers, towels & toiletries",
        "Rice cooker, microwave & basic cookware",
      ],
    },
    access: {
      title: "Access",
      items: [
        { from: "Fukuoka Airport", time: "~20 min by car" },
        { from: "Hakata Station", time: "~10 min by car / ~15 min by subway" },
        { from: "Tenjin", time: "~5 min by car / walkable" },
        { from: "Canal City Hakata", time: "~10 min by car" },
        { from: "Dazaifu", time: "~30 min by car" },
      ],
    },
    checkin: {
      title: "Check-in Information",
      time: "Check-in: 4:00 PM – 11:00 PM",
      checkout: "Check-out: by 10:00 AM",
      method: "Fully contactless self check-in via smart lock. Access code will be sent 24 hours before arrival.",
      idVerification: "ID verification required before check-in (passport or government-issued ID).",
    },
    conditions: {
      title: "Booking Conditions",
      minNights: "Minimum stay: 2 nights",
      cancellation: "Cancellation: Free up to 7 days before check-in. 50% charge within 7 days.",
      cleaningFee: "Cleaning fee: Included in the rate",
      extraGuest: "Extra guest fee: ¥10,000 per person over the declared headcount",
      noiseRule: "Quiet hours apply. Please be considerate of neighbours.",
      petRule: "No pets allowed (service animals with prior notice excepted).",
      smokingRule: "No smoking indoors. Designated outdoor area available.",
    },
    booking: {
      title: "Book Direct & Save",
      subtitle: "Reserve directly with us for the best rate — no platform fees.",
      comingSoon: "Online booking system coming soon. Please contact us to reserve.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is parking available?",
          a: "Yes, one private parking space is included free of charge.",
        },
        {
          q: "Is the property suitable for families with young children?",
          a: "Absolutely. We provide a baby crib, high chair, and baby bath on request.",
        },
        {
          q: "What is the check-in process?",
          a: "Fully contactless self check-in via smart lock. You'll receive the access code 24 hours before arrival. No need to meet anyone.",
        },
        {
          q: "Is early check-in or late check-out available?",
          a: "Subject to availability. Please contact us in advance.",
        },
        {
          q: "Are pets allowed?",
          a: "Unfortunately, pets are not permitted. Service animals are welcome with prior notice.",
        },
        {
          q: "Is smoking allowed?",
          a: "No smoking inside the property. A designated outdoor area is available.",
        },
        {
          q: "What is the cancellation policy?",
          a: "Free cancellation up to 7 days before check-in. Within 7 days, a 50% charge applies.",
        },
        {
          q: "Is the property accessible for guests with mobility limitations?",
          a: "Please note that the staircase inside the property is steep. The home is not wheelchair accessible or barrier-free. We recommend this property for guests who are comfortable using stairs.",
        },
        {
          q: "How do I pay?",
          a: "We accept bank transfer and credit card. Please contact us directly to confirm payment details when making a reservation.",
        },
      ],
      bookButton: "Book Now",
    },
    review: {
      rating: "4.60",
      count: "30 reviews",
      superhostLabel: "Superhost",
      airbnbLabel: "View on Airbnb",
    },
    propertyDescription: {
      title: "About This Space",
      showMore: "Show more",
      showLess: "Show less",
      intro: "A stylish whole-house rental in the vibrant Takasago district of Chuo-ku, Fukuoka. Located within walking distance of Tenjin, this property combines the convenience of central Fukuoka with the comfort of a private home.\n\n5 min by car to Tenjin. 10 min by car to Hakata Station. 20 min by car from the airport. Fully contactless self check-in for a completely private stay.\n\nPerfect for families and groups of up to 6 guests. The spacious living area, theater room, and designer furnishings create a memorable stay.",
      highlights: [
        {
          title: "1. Premium Sleep Experience",
          body: "All three bedrooms are furnished with premium mattresses for a truly restful night's sleep. Every bedside has a power outlet to keep your devices charged.",
        },
        {
          title: "2. Theater Room Experience",
          body: "Enjoy a dedicated theater room with a large-screen TV and high-quality sound system. Perfect for movie nights and entertainment with your group.",
        },
        {
          title: "3. Live Like a Local — Fully Equipped",
          body: "A spacious full kitchen with a large refrigerator and ample cookware lets you cook with fresh local ingredients. A dedicated work desk and high-speed Wi-Fi make it ideal for workcation stays.\n\nFree private parking (1 space) is included.\n\n[Owner's Notice]\nThe property features a separate shower booth in addition to the bathtub, providing extra convenience for groups.",
        },
      ],
      bedroomGuide: {
        title: "Bedroom Guide",
        items: [
          "Bedroom 1: 1 double bed",
          "Bedroom 2: 2 single beds",
          "Bedroom 3: 2 single beds",
          "(Up to 6 guests across 3 bedrooms)",
        ],
      },
      facilityGuide: {
        title: "Facilities",
        items: [
          "Private parking (1 space)",
          "Bathroom (1) with bathtub",
          "Shower booth (1, separate)",
          "Toilet (2: 1F and 2F)",
          "Washbasin",
          "Kitchen (IH stove)",
          "Living room",
          "Dining room",
          "Theater room",
        ],
      },
      equipment: {
        title: "Appliances & Equipment",
        items: [
          "Large-screen TV",
          "Washing machine",
          "Refrigerator (with freezer)",
          "Microwave",
          "Rice cooker",
          "Electric kettle",
          "Basic cookware (pots, pans, cutting board, knives)",
          "Tableware",
          "Hair dryer",
        ],
      },
      amenitiesDetail: {
        title: "Amenities",
        items: [
          "Slippers",
          "Bath towels / face towels",
          "Toothbrush set",
          "Shampoo / conditioner / body wash",
          "Hangers / laundry hangers",
          "Laundry detergent",
        ],
      },
      guestAccess: {
        title: "Guest Access",
        body: "This is an entire property rental — you will not share any space with other guests. All areas are freely available for your use.",
      },
      otherNotes: {
        title: "Other Notes",
        items: [
          "Please keep the property clean. Additional cleaning fees may apply for excessive mess or left rubbish.",
          "Lost or damaged items will be charged at replacement cost.",
          "Exceeding the declared number of guests will incur a surcharge of ¥10,000 per extra person.",
          "Please sort rubbish according to the bin guide provided.",
          "Pets are not allowed (guide dogs permitted with prior notice).",
          "A city accommodation tax (set by Fukuoka City) applies in addition to the room rate.",
        ],
      },
      registration: {
        title: "Registration",
        body: "Ryokan Business Act Permit No. | Fukuoka City Health Department | Fuku-Chu-Hoken-Dai 713001",
      },
    },
    houseRules: {
      title: "House Rules",
      items: [
        { icon: "no-smoking", rule: "No smoking indoors. Designated outdoor area available." },
        { icon: "no-pets", rule: "No pets allowed. Service animals welcome with prior notice." },
        { icon: "quiet", rule: "Quiet hours: 10 PM – 8 AM. Please be considerate of neighbours." },
        { icon: "checkin-time", rule: "Check-in: 4:00 PM – 10:00 PM. Check-out: by 11:00 AM." },
        { icon: "guests", rule: "No unregistered guests. Maximum occupancy must be observed." },
        { icon: "trash", rule: "Please follow local garbage sorting rules. Bins are provided." },
        { icon: "shoes", rule: "Please remove shoes at the entrance (Japanese custom)." },
        { icon: "stairs", rule: "Steep staircase inside. Not suitable for guests with mobility limitations." },
      ],
    },
    floorPlan: {
      title: "Floor Plan",
      subtitle: "3-storey single-family home · 1F: Bathroom, Shower & Garage · 2F: Living/Dining/Kitchen & Theater Room · 3F: 3 Bedrooms & Balcony",
      imageAlt: "Takasago floor plan – 1F bathroom, shower & garage, 2F living dining kitchen & theater room, 3F bedrooms & balcony",
    },
    contact: {
      title: "Have a Question?",
      subtitle: "Our team is happy to help with any inquiries about your stay.",
    },
    ui: {
      overviewLabels: {
        bedrooms: "Bedrooms",
        beds: "Beds",
        maxGuests: "Max Guests",
        area: "Area",
      },
      contactUsToBook: "Contact Us to Book",
      successMessage: "✓ Message sent! We'll get back to you shortly.",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      privacyLabel: "I agree to the",
      privacyLink: "privacy policy",
      sendButton: "Send Message",
      sendingButton: "Sending…",
      errorToast: "Failed to send. Please try again.",
    },
    nav: {
      backToHome: "Back to Home",
      language: "Language",
      langNames: { en: "English", ko: "Korean", zh: "Chinese", th: "Thai" },
    },
  },

  ko: {
    hero: {
      propertyName: "yah. 다카사고",
      tagline: "후쿠오카 다카사고 지구 중심에 위치한 세련된 단독 주택.",
      area: "다카사고, 추오구, 후쿠오카",
      capacity: "최대 6인 · 침실 3개",
      bookNow: "지금 예약",
    },
    overview: {
      title: "숙소 개요",
      bedrooms: "침실 3개",
      beds: "더블 침대 1개 + 싱글 침대 4개",
      maxGuests: "6인 (최대)",
      area: "다카사고 · 추오구, 후쿠오카",
    },
    amenityCategories: {
      title: "이 숙소에서 제공하는 것",
      showAll: "모든 편의시설 보기",
      showLess: "접기",
      categories: [
        {
          name: "욕실",
          items: [
            { icon: "bath", label: "욕조" },
            { icon: "shower", label: "샤워 부스 (독립형)" },
            { icon: "hairdryer", label: "헤어드라이어" },
            { icon: "shampoo", label: "샴푸" },
            { icon: "conditioner", label: "컨디셔너" },
            { icon: "soap", label: "바디워시" },
            { icon: "bidet", label: "비데 (워시렛)" },
            { icon: "hot-water", label: "온수" },
          ],
        },
        {
          name: "침실 & 세탁",
          items: [
            { icon: "washer", label: "세탁기" },
            { icon: "hanger", label: "옷걸이" },
            { icon: "bedding", label: "침구류" },
            { icon: "blackout", label: "암막 커튼" },
            { icon: "drying-rack", label: "빨래 건조대" },
            { icon: "storage", label: "의류 수납공간" },
          ],
        },
        {
          name: "엔터테인먼트",
          items: [
            { icon: "tv", label: "TV" },
          ],
        },
        {
          name: "냉난방",
          items: [
            { icon: "ac", label: "에어컨" },
            { icon: "fan", label: "천장 선풍기" },
            { icon: "heat", label: "난방" },
          ],
        },
        {
          name: "안전",
          items: [
            { icon: "camera", label: "보안 카메라", note: "카메라는 여관업법에 따라 외부/공용/출입구 구역에 설치되어 있습니다. 개인 공간의 프라이버시는 완전히 보호됩니다." },
            { icon: "smoke-alarm", label: "화재 경보기" },
            { icon: "fire-ext", label: "소화기" },
            { icon: "co-alarm", label: "일산화탄소 경보기", unavailable: true, note: "이 숙소에는 일산화탄소 감지기가 없을 수 있습니다. 자세한 내용은 호스트에게 문의하세요." },
          ],
        },
        {
          name: "인터넷 & 업무",
          items: [
            { icon: "wifi", label: "Wi-Fi" },
          ],
        },
        {
          name: "주방 & 식사",
          items: [
            { icon: "kitchen", label: "완비된 주방" },
            { icon: "cooking", label: "게스트용 조리 공간" },
            { icon: "fridge", label: "냉장고" },
            { icon: "microwave", label: "전자레인지" },
            { icon: "cookware", label: "기본 조리도구", note: "냄비, 프라이팬, 오일, 소금 & 후추" },
            { icon: "tableware", label: "식기 & 수저", note: "그릇, 젓가락, 접시, 컵 등" },
            { icon: "freezer", label: "냉동실" },

            { icon: "oven", label: "오븐" },
            { icon: "kettle", label: "전기 주전자" },
            { icon: "wine", label: "와인 잔" },
            { icon: "rice", label: "밥솥" },
            { icon: "dining", label: "다다미 좌식 식탁" },
          ],
        },
        {
          name: "위치 특징",
          items: [
            { icon: "private-entry", label: "개인 출입구" },
            { icon: "laundromat", label: "근처 세탁소" },
          ],
        },
        {
          name: "주차 & 시설",
          items: [
            { icon: "parking", label: "무료 전용 주차장" },
          ],
        },
        {
          name: "서비스",
          items: [
            { icon: "long-stay", label: "장기 숙박 가능", note: "28박 이상 숙박 가능" },
            { icon: "self-checkin", label: "셀프 체크인", note: "키 잠금 박스" },
          ],
        },
      ],
    },
    amenities: {
      title: "편의시설",
      items: [
        "완비된 주방",
        "세탁기",
        "고속 Wi-Fi",
        "전용 주차장 (1대, 무료)",
        "모든 침실 프리미엄 매트리스",
        "아기 침대 & 유아용 의자 (요청 시 제공)",
        "대형 스마트 TV",
        "전 객실 에어컨",
        "넓은 거실 & 식당",
        "헤어드라이어, 슬리퍼, 수건 & 세면도구",
        "밥솥, 전자레인지 & 기본 조리도구",
      ],
    },
    access: {
      title: "교통",
      items: [
        { from: "후쿠오카 공항", time: "차로 약 20분" },
        { from: "하카타역", time: "차로 약 10분 / 지하철로 약 15분" },
        { from: "텐진", time: "차로 약 5분 / 도보 가능" },
        { from: "캐널시티 하카타", time: "차로 약 10분" },
        { from: "다자이후", time: "차로 약 30분" },
      ],
    },
    checkin: {
      title: "체크인 정보",
      time: "체크인: 오후 4:00 – 오후 11:00",
      checkout: "체크아웃: 오전 10:00 이전",
      method: "스마트 잠금장치를 통한 완전 비대면 셀프 체크인. 입실 24시간 전에 접근 코드가 전송됩니다.",
      idVerification: "체크인 전 신분증 확인 필요 (여권 또는 정부 발급 신분증).",
    },
    conditions: {
      title: "예약 조건",
      minNights: "최소 숙박: 2박",
      cancellation: "취소 정책: 체크인 7일 전까지 무료 취소. 7일 이내 취소 시 50% 요금 부과.",
      cleaningFee: "청소비: 요금에 포함",
      extraGuest: "추가 게스트 요금: 신고 인원 초과 시 1인당 ¥10,000",
      noiseRule: "야간 정숙 시간이 있습니다. 이웃을 배려해 주세요.",
      petRule: "반려동물 불가 (사전 통보 시 안내견 허용).",
      smokingRule: "실내 금연. 지정된 야외 흡연 구역 이용 가능.",
    },
    booking: {
      title: "직접 예약하고 절약하세요",
      subtitle: "최저 요금으로 직접 예약하세요 — 플랫폼 수수료 없음.",
      comingSoon: "온라인 예약 시스템 준비 중입니다. 예약을 위해 문의해 주세요.",
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        { q: "주차 가능한가요?", a: "네, 무료 전용 주차 공간 1대가 포함되어 있습니다." },
        { q: "어린 자녀가 있는 가족에게 적합한가요?", a: "물론입니다. 요청 시 아기 침대, 유아용 의자, 아기 욕조를 제공합니다." },
        { q: "체크인 절차는 어떻게 되나요?", a: "스마트 잠금장치를 통한 완전 비대면 셀프 체크인입니다. 도착 24시간 전에 접근 코드를 받게 됩니다." },
        { q: "조기 체크인 또는 늦은 체크아웃이 가능한가요?", a: "객실 상황에 따라 다릅니다. 사전에 문의해 주세요." },
        { q: "반려동물을 데려올 수 있나요?", a: "죄송하지만 반려동물은 허용되지 않습니다. 사전 통보 시 안내견은 환영합니다." },
        { q: "흡연이 가능한가요?", a: "실내 금연입니다. 지정된 야외 흡연 구역이 있습니다." },
        { q: "취소 정책은 어떻게 되나요?", a: "체크인 7일 전까지 무료 취소. 7일 이내에는 50% 요금이 부과됩니다." },
        { q: "거동이 불편한 게스트도 이용 가능한가요?", a: "숙소 내 계단이 가파릅니다. 휠체어 접근이나 배리어 프리 시설은 없습니다. 계단 이용이 편한 게스트에게 권장합니다." },
        { q: "결제는 어떻게 하나요?", a: "계좌이체 및 신용카드를 받습니다. 예약 시 결제 방법을 확인하기 위해 직접 문의해 주세요." },
      ],
      bookButton: "지금 예약",
    },
    review: {
      rating: "4.60",
      count: "30개의 리뷰",
      superhostLabel: "슈퍼호스트",
      airbnbLabel: "Airbnb에서 보기",
    },
    propertyDescription: {
      title: "이 숙소에 대하여",
      showMore: "더 보기",
      showLess: "접기",
      intro: "후쿠오카 추오구 활기찬 다카사고 지구에 위치한 세련된 단독 주택 렌탈입니다. 텐진에서 도보 거리에 위치하여 후쿠오카 중심부의 편리함과 개인 주택의 편안함을 동시에 누릴 수 있습니다.\n\n텐진까지 차로 5분. 하카타역까지 차로 10분. 공항에서 차로 20분. 완전 비대면 셀프 체크인으로 완전한 프라이버시를 보장합니다.\n\n최대 6인의 가족 및 그룹에 적합합니다. 넓은 거실, 시어터 룸, 디자이너 가구가 특별한 경험을 선사합니다.",
      highlights: [
        {
          title: "1. 프리미엄 수면 경험",
          body: "모든 침실에 프리미엄 매트리스가 구비되어 있어 완전한 휴식을 취할 수 있습니다. 모든 침대 옆에 콘센트가 있어 기기를 충전할 수 있습니다.",
        },
        {
          title: "2. 시어터 룸 경험",
          body: "대형 스크린 TV를 갖춘 전용 시어터 룸을 즐기세요. 그룹과 함께하는 영화의 밤에 완벽합니다.",
        },
        {
          title: "3. 현지인처럼 생활하기 — 완비된 시설",
          body: "대형 냉장고와 풍부한 조리도구를 갖춘 넓은 주방에서 신선한 현지 재료로 요리할 수 있습니다. 고속 Wi-Fi로 워케이션에도 이상적입니다.\n\n무료 전용 주차장(1대)이 포함되어 있습니다.\n\n[호스트 공지]\n욕조 외에 별도의 샤워 부스가 있어 그룹 이용 시 더욱 편리합니다.",
        },
      ],
      bedroomGuide: {
        title: "침실 안내",
        items: [
          "침실 1: 더블 침대 1개",
          "침실 2: 싱글 침대 2개",
          "침실 3: 싱글 침대 2개",
          "(침실 3개, 최대 6인)",
        ],
      },
      facilityGuide: {
        title: "시설",
        items: [
          "전용 주차장 (1대)",
          "욕실 (1개, 욕조 포함)",
          "샤워 부스 (1개, 독립형)",
          "화장실 (2개: 1층 및 2층)",
          "세면대",
          "주방",
          "거실",
          "식당",
          "시어터 룸",
        ],
      },
      equipment: {
        title: "가전 & 장비",
        items: [
          "대형 TV",
          "세탁기",
          "냉장고 (냉동실 포함)",
          "전자레인지",
          "밥솥",
          "전기 주전자",
          "기본 조리도구 (냄비, 프라이팬, 도마, 칼)",
          "식기류",
          "헤어드라이어",
        ],
      },
      amenitiesDetail: {
        title: "어메니티",
        items: [
          "슬리퍼",
          "목욕 수건 / 세면 수건",
          "칫솔 세트",
          "샴푸 / 컨디셔너 / 바디워시",
          "옷걸이 / 빨래 건조대",
          "세탁 세제",
        ],
      },
      guestAccess: {
        title: "게스트 이용 공간",
        body: "이 숙소는 전체 임대입니다 — 다른 게스트와 공간을 공유하지 않습니다. 모든 공간을 자유롭게 이용할 수 있습니다.",
      },
      otherNotes: {
        title: "기타 안내",
        items: [
          "숙소를 청결하게 유지해 주세요. 과도한 오염이나 쓰레기 방치 시 추가 청소비가 부과될 수 있습니다.",
          "분실 또는 파손된 물품은 실비로 청구됩니다.",
          "신고 인원 초과 시 초과 인원 1인당 ¥10,000의 추가 요금이 부과됩니다.",
          "제공된 안내에 따라 쓰레기를 분리수거해 주세요.",
          "반려동물은 허용되지 않습니다 (사전 통보 시 안내견 허용).",
          "숙박 요금 외에 후쿠오카시 숙박세가 부과됩니다.",
        ],
      },
      registration: {
        title: "등록 정보",
        body: "여관업법 허가 번호 | 후쿠오카시 보건소 | Fuku-Chu-Hoken-Dai 713001",
      },
    },
    houseRules: {
      title: "숙소 규칙",
      items: [
        { icon: "no-smoking", rule: "실내 금연. 지정된 야외 흡연 구역 이용 가능." },
        { icon: "no-pets", rule: "반려동물 불가. 사전 통보 시 안내견 환영." },
        { icon: "quiet", rule: "정숙 시간: 오후 10시 – 오전 8시. 이웃을 배려해 주세요." },
        { icon: "checkin-time", rule: "체크인: 오후 4:00 – 오후 10:00. 체크아웃: 오전 11:00 이전." },
        { icon: "guests", rule: "미등록 게스트 불가. 최대 수용 인원을 준수해 주세요." },
        { icon: "trash", rule: "현지 쓰레기 분리수거 규칙을 따라 주세요. 쓰레기통이 제공됩니다." },
        { icon: "shoes", rule: "입구에서 신발을 벗어 주세요 (일본 관습)." },
        { icon: "stairs", rule: "내부 계단이 가파릅니다. 거동이 불편한 게스트에게는 적합하지 않습니다." },
      ],
    },
    floorPlan: {
      title: "평면도",
      subtitle: "3층 단독 주택 · 1층: 욕실, 샤워 & 차고 · 2층: 거실/식당/주방 & 시어터 룸 · 3층: 침실 3개 & 발코니",
      imageAlt: "다카사고 평면도 – 1층 욕실, 샤워 & 차고, 2층 거실 식당 주방 & 시어터 룸, 3층 침실 & 발코니",
    },
    contact: {
      title: "질문이 있으신가요?",
      subtitle: "저희 팀이 숙박 관련 모든 문의를 도와드립니다.",
    },
    ui: {
      overviewLabels: {
        bedrooms: "침실",
        beds: "침대",
        maxGuests: "최대 인원",
        area: "위치",
      },
      contactUsToBook: "예약 문의하기",
      successMessage: "✓ 메시지가 전송되었습니다! 곧 연락드리겠습니다.",
      namePlaceholder: "이름",
      emailPlaceholder: "이메일",
      messagePlaceholder: "메시지",
      privacyLabel: "에 동의합니다",
      privacyLink: "개인정보 처리방침",
      sendButton: "메시지 보내기",
      sendingButton: "전송 중…",
      errorToast: "전송 실패. 다시 시도해 주세요.",
    },
    nav: {
      backToHome: "홈으로 돌아가기",
      language: "언어",
      langNames: { en: "영어", ko: "한국어", zh: "중국어", th: "태국어" },
    },
  },

  zh: {
    hero: {
      propertyName: "yah. 高砂",
      tagline: "位於福岡高砂地區中心的時尚整棟住宅。",
      area: "高砂，中央區，福岡",
      capacity: "最多 6 人 · 3 間臥室",
      bookNow: "立即預訂",
    },
    overview: {
      title: "房源概覽",
      bedrooms: "3 間臥室",
      beds: "1 張雙人床 + 4 張單人床",
      maxGuests: "最多 6 人",
      area: "高砂 · 中央區，福岡",
    },
    amenityCategories: {
      title: "此房源提供的設施",
      showAll: "顯示所有設施",
      showLess: "收起",
      categories: [
        {
          name: "浴室",
          items: [
            { icon: "bath", label: "浴缸" },
            { icon: "shower", label: "獨立淋浴間" },
            { icon: "hairdryer", label: "吹風機" },
            { icon: "shampoo", label: "洗髮精" },
            { icon: "conditioner", label: "潤髮乳" },
            { icon: "soap", label: "沐浴乳" },
            { icon: "bidet", label: "免治馬桶" },
            { icon: "hot-water", label: "熱水" },
          ],
        },
        {
          name: "臥室 & 洗衣",
          items: [
            { icon: "washer", label: "洗衣機" },
            { icon: "hanger", label: "衣架" },
            { icon: "bedding", label: "床上用品" },
            { icon: "blackout", label: "遮光窗簾" },
            { icon: "drying-rack", label: "晾衣架" },
            { icon: "storage", label: "衣物收納空間" },
          ],
        },
        {
          name: "娛樂",
          items: [
            { icon: "tv", label: "電視" },
          ],
        },
        {
          name: "冷暖氣",
          items: [
            { icon: "ac", label: "冷氣" },
            { icon: "fan", label: "吊扇" },
            { icon: "heat", label: "暖氣" },
          ],
        },
        {
          name: "居家安全",
          items: [
            { icon: "camera", label: "房源安全攝影機", note: "依旅館業法規定，攝影機安裝於戶外/公共/入口區域。您的隱私受到完全保護。" },
            { icon: "smoke-alarm", label: "煙霧警報器" },
            { icon: "fire-ext", label: "滅火器" },
            { icon: "co-alarm", label: "一氧化碳警報器", unavailable: true, note: "此房源可能未配備一氧化碳偵測器。詳情請聯絡房東。" },
          ],
        },
        {
          name: "網路 & 辦公",
          items: [
            { icon: "wifi", label: "Wi-Fi" },
          ],
        },
        {
          name: "廚房 & 餐飲",
          items: [
            { icon: "kitchen", label: "完整廚房" },
            { icon: "cooking", label: "房客烹飪空間" },
            { icon: "fridge", label: "冰箱" },
            { icon: "microwave", label: "微波爐" },
            { icon: "cookware", label: "基本廚具", note: "鍋具、平底鍋、油、鹽和胡椒" },
            { icon: "tableware", label: "餐具 & 刀叉", note: "碗、筷子、盤子、杯子等" },
            { icon: "freezer", label: "冷凍庫" },
            { icon: "oven", label: "烤箱" },
            { icon: "kettle", label: "電熱水壺" },
            { icon: "wine", label: "紅酒杯" },
            { icon: "rice", label: "電飯鍋" },
            { icon: "dining", label: "榻榻米矮餐桌" },
          ],
        },
        {
          name: "地點特色",
          items: [
            { icon: "private-entry", label: "獨立入口" },
            { icon: "laundromat", label: "附近有自助洗衣店" },
          ],
        },
        {
          name: "停車 & 設施",
          items: [
            { icon: "parking", label: "免費私人停車位" },
          ],
        },
        {
          name: "服務",
          items: [
            { icon: "long-stay", label: "可長期住宿", note: "可入住 28 晚或以上" },
            { icon: "self-checkin", label: "自助入住", note: "鑰匙保管箱" },
          ],
        },
      ],
    },
    amenities: {
      title: "設施",
      items: [
        "完整廚房",
        "洗衣機",
        "高速 Wi-Fi",
        "私人停車位（1 輛，免費）",
        "所有臥室均配備高級床墊",
        "嬰兒床 & 高腳椅（可依要求提供）",
        "大螢幕智慧電視",
        "所有房間均有冷氣",
        "寬敞的客廳 & 餐廳",
        "吹風機、拖鞋、毛巾 & 盥洗用品",
        "電飯鍋、微波爐 & 基本廚具",
      ],
    },
    access: {
      title: "交通",
      items: [
        { from: "福岡機場", time: "開車約 20 分鐘" },
        { from: "博多站", time: "開車約 10 分鐘 / 地鐵約 15 分鐘" },
        { from: "天神", time: "開車約 5 分鐘 / 可步行" },
        { from: "Canal City 博多", time: "開車約 10 分鐘" },
        { from: "太宰府", time: "開車約 30 分鐘" },
      ],
    },
    checkin: {
      title: "入住資訊",
      time: "入住：下午 4:00 – 晚上 11:00",
      checkout: "退房：上午 10:00 前",
      method: "透過智慧鎖完全無接觸自助入住。入住前 24 小時將傳送門禁密碼。",
      idVerification: "入住前需進行身份驗證（護照或政府核發的身份證件）。",
    },
    conditions: {
      title: "預訂條件",
      minNights: "最短住宿：2 晚",
      cancellation: "取消政策：入住前 7 天可免費取消。7 天內取消收取 50% 費用。",
      cleaningFee: "清潔費：已含在費率中",
      extraGuest: "額外房客費：超出申報人數每人 ¥10,000",
      noiseRule: "有安靜時段規定。請體諒鄰居。",
      petRule: "不允許攜帶寵物（事先通知可攜帶導盲犬）。",
      smokingRule: "室內禁止吸菸。有指定戶外吸菸區。",
    },
    booking: {
      title: "直接預訂更划算",
      subtitle: "直接向我們預訂享最優惠價格 — 無平台手續費。",
      comingSoon: "線上預訂系統即將推出。請聯絡我們進行預訂。",
    },
    faq: {
      title: "常見問題",
      items: [
        { q: "有停車位嗎？", a: "有，包含一個免費的私人停車位。" },
        { q: "適合帶幼兒的家庭嗎？", a: "非常適合。我們可依要求提供嬰兒床、高腳椅和嬰兒浴盆。" },
        { q: "入住流程是什麼？", a: "透過智慧鎖完全無接觸自助入住。您將在抵達前 24 小時收到門禁密碼，無需與任何人見面。" },
        { q: "可以提早入住或延遲退房嗎？", a: "視房間狀況而定。請提前聯絡我們。" },
        { q: "可以攜帶寵物嗎？", a: "很遺憾，不允許攜帶寵物。事先通知可攜帶導盲犬。" },
        { q: "可以吸菸嗎？", a: "房源內禁止吸菸。有指定的戶外吸菸區。" },
        { q: "取消政策是什麼？", a: "入住前 7 天可免費取消。7 天內取消將收取 50% 費用。" },
        { q: "行動不便的房客可以入住嗎？", a: "請注意，房源內的樓梯較陡。該住宅不提供輪椅通道或無障礙設施。我們建議能夠輕鬆上下樓梯的房客入住。" },
        { q: "如何付款？", a: "接受銀行轉帳和信用卡。預訂時請直接聯絡我們確認付款方式。" },
      ],
      bookButton: "立即預訂",
    },
    review: {
      rating: "4.60",
      count: "30 則評論",
      superhostLabel: "超讚房東",
      airbnbLabel: "在 Airbnb 上查看",
    },
    propertyDescription: {
      title: "關於此房源",
      showMore: "顯示更多",
      showLess: "收起",
      intro: "位於福岡中央區充滿活力的高砂地區的時尚整棟住宅出租。步行即可到達天神，讓您同時享受福岡市中心的便利和私人住宅的舒適。\n\n開車 5 分鐘到天神。開車 10 分鐘到博多站。從機場開車 20 分鐘。完全無接觸自助入住，確保完全的隱私。\n\n非常適合最多 6 人的家庭和團體。寬敞的客廳、影音室和設計師家具創造了難忘的住宿體驗。",
      highlights: [
        {
          title: "1. 優質睡眠體驗",
          body: "所有臥室均配備高級床墊，確保真正的休息。每個床頭都有電源插座，讓您的設備保持充電。",
        },
        {
          title: "2. 影音室體驗",
          body: "享受配備大螢幕電視的專用影音室。非常適合與您的團體一起度過電影之夜。",
        },
        {
          title: "3. 像當地人一樣生活 — 設施完備",
          body: "配備大型冰箱和充足廚具的寬敞廚房讓您可以用新鮮的當地食材烹飪。高速 Wi-Fi 使其非常適合工作假期。\n\n包含免費私人停車位（1 個）。\n\n[房東公告]\n除浴缸外，還有獨立淋浴間，為團體入住提供額外便利。",
        },
      ],
      bedroomGuide: {
        title: "臥室指南",
        items: [
          "臥室 1：1 張雙人床",
          "臥室 2：2 張單人床",
          "臥室 3：2 張單人床",
          "（3 間臥室，最多 6 人）",
        ],
      },
      facilityGuide: {
        title: "設施",
        items: [
          "私人停車位（1 個）",
          "浴室（1 間，含浴缸）",
          "淋浴間（1 間，獨立）",
          "廁所（2 間：1 樓和 2 樓）",
          "洗臉盆",
          "廚房",
          "客廳",
          "餐廳",
          "影音室",
        ],
      },
      equipment: {
        title: "家電 & 設備",
        items: [
          "大螢幕電視",
          "洗衣機",
          "冰箱（含冷凍庫）",
          "微波爐",
          "電飯鍋",
          "電熱水壺",
          "基本廚具（鍋具、平底鍋、砧板、刀具）",
          "餐具",
          "吹風機",
        ],
      },
      amenitiesDetail: {
        title: "備品",
        items: [
          "拖鞋",
          "浴巾 / 毛巾",
          "牙刷組",
          "洗髮精 / 潤髮乳 / 沐浴乳",
          "衣架 / 晾衣架",
          "洗衣精",
        ],
      },
      guestAccess: {
        title: "房客使用空間",
        body: "這是整棟出租 — 您不需要與其他房客共用任何空間。所有區域均可自由使用。",
      },
      otherNotes: {
        title: "其他注意事項",
        items: [
          "請保持房源清潔。過度髒亂或留下垃圾可能會收取額外清潔費。",
          "遺失或損壞的物品將按實際費用收費。",
          "超出申報人數將收取每人 ¥10,000 的附加費。",
          "請按照提供的垃圾分類指南分類垃圾。",
          "不允許攜帶寵物（事先通知可攜帶導盲犬）。",
          "除住宿費外，還需繳納福岡市規定的住宿稅。",
        ],
      },
      registration: {
        title: "登記資訊",
        body: "旅館業法許可證號 | 福岡市衛生局 | Fuku-Chu-Hoken-Dai 713001",
      },
    },
    houseRules: {
      title: "住宿規則",
      items: [
        { icon: "no-smoking", rule: "室內禁止吸菸。有指定戶外吸菸區。" },
        { icon: "no-pets", rule: "不允許攜帶寵物。事先通知可攜帶導盲犬。" },
        { icon: "quiet", rule: "安靜時段：晚上 10 點 – 早上 8 點。請體諒鄰居。" },
        { icon: "checkin-time", rule: "入住：下午 4:00 – 晚上 10:00。退房：上午 11:00 前。" },
        { icon: "guests", rule: "不允許未登記的房客。必須遵守最大入住人數。" },
        { icon: "trash", rule: "請遵守當地垃圾分類規定。提供垃圾桶。" },
        { icon: "shoes", rule: "請在入口處脫鞋（日本習俗）。" },
        { icon: "stairs", rule: "室內樓梯較陡。不適合行動不便的房客。" },
      ],
    },
    floorPlan: {
      title: "平面圖",
      subtitle: "3 層獨棟住宅 · 1F：浴室、淋浴間 & 車庫 · 2F：客廳/餐廳/廚房 & 影音室 · 3F：3 間臥室 & 陽台",
      imageAlt: "高砂平面圖 – 1F 浴室、淋浴間 & 車庫，2F 客廳餐廳廚房 & 影音室，3F 臥室 & 陽台",
    },
    contact: {
      title: "有問題嗎？",
      subtitle: "我們的團隊很樂意協助解答您的任何住宿問題。",
    },
    ui: {
      overviewLabels: {
        bedrooms: "臥室",
        beds: "床鋪",
        maxGuests: "最多入住人數",
        area: "地區",
      },
      contactUsToBook: "聯絡我們預訂",
      successMessage: "✓ 訊息已發送！我們將盡快回覆您。",
      namePlaceholder: "姓名",
      emailPlaceholder: "電子郵件",
      messagePlaceholder: "訊息",
      privacyLabel: "我同意",
      privacyLink: "隱私政策",
      sendButton: "發送訊息",
      sendingButton: "發送中…",
      errorToast: "發送失敗。請再試一次。",
    },
    nav: {
      backToHome: "返回首頁",
      language: "語言",
      langNames: { en: "英文", ko: "韓文", zh: "中文", th: "泰文" },
    },
  },

  th: {
    hero: {
      propertyName: "yah. ทากาซาโกะ",
      tagline: "ที่พักทั้งหลังสไตล์ทันสมัยใจกลางย่านทากาซาโกะ ฟุกุโอกะ",
      area: "ทากาซาโกะ, ชูโอะ-กุ, ฟุกุโอกะ",
      capacity: "สูงสุด 6 คน · 3 ห้องนอน",
      bookNow: "จองเลย",
    },
    overview: {
      title: "ภาพรวมที่พัก",
      bedrooms: "3 ห้องนอน",
      beds: "เตียงดับเบิล 1 เตียง + เตียงเดี่ยว 4 เตียง",
      maxGuests: "สูงสุด 6 คน",
      area: "ทากาซาโกะ · ชูโอะ-กุ, ฟุกุโอกะ",
    },
    amenityCategories: {
      title: "สิ่งที่ที่พักนี้มีให้",
      showAll: "ดูสิ่งอำนวยความสะดวกทั้งหมด",
      showLess: "ย่อ",
      categories: [
        {
          name: "ห้องน้ำ",
          items: [
            { icon: "bath", label: "อ่างอาบน้ำ" },
            { icon: "shower", label: "ห้องอาบน้ำฝักบัวแยก" },
            { icon: "hairdryer", label: "ไดร์เป่าผม" },
            { icon: "shampoo", label: "แชมพู" },
            { icon: "conditioner", label: "ครีมนวดผม" },
            { icon: "soap", label: "เจลอาบน้ำ" },
            { icon: "bidet", label: "ชักโครกอัจฉริยะ" },
            { icon: "hot-water", label: "น้ำร้อน" },
          ],
        },
        {
          name: "ห้องนอน & ซักรีด",
          items: [
            { icon: "washer", label: "เครื่องซักผ้า" },
            { icon: "hanger", label: "ไม้แขวนเสื้อ" },
            { icon: "bedding", label: "ผ้าปูที่นอน" },
            { icon: "blackout", label: "ผ้าม่านกันแสง" },
            { icon: "drying-rack", label: "ราวตากผ้า" },
            { icon: "storage", label: "พื้นที่เก็บเสื้อผ้า" },
          ],
        },
        {
          name: "ความบันเทิง",
          items: [
            { icon: "tv", label: "โทรทัศน์" },
          ],
        },
        {
          name: "เครื่องปรับอากาศ & ความร้อน",
          items: [
            { icon: "ac", label: "เครื่องปรับอากาศ" },
            { icon: "fan", label: "พัดลมเพดาน" },
            { icon: "heat", label: "เครื่องทำความร้อน" },
          ],
        },
        {
          name: "ความปลอดภัยในบ้าน",
          items: [
            { icon: "camera", label: "กล้องรักษาความปลอดภัยในที่พัก", note: "กล้องติดตั้งในพื้นที่ภายนอก/ส่วนกลาง/ทางเข้าตามที่กฎหมายกำหนด ความเป็นส่วนตัวของคุณได้รับการคุ้มครองอย่างสมบูรณ์" },
            { icon: "smoke-alarm", label: "สัญญาณเตือนควัน" },
            { icon: "fire-ext", label: "ถังดับเพลิง" },
            { icon: "co-alarm", label: "สัญญาณเตือนคาร์บอนมอนอกไซด์", unavailable: true, note: "ที่พักนี้อาจไม่มีเครื่องตรวจจับคาร์บอนมอนอกไซด์ กรุณาติดต่อเจ้าของที่พักเพื่อทราบรายละเอียด" },
          ],
        },
        {
          name: "อินเทอร์เน็ต & สำนักงาน",
          items: [
            { icon: "wifi", label: "Wi-Fi" },
          ],
        },
        {
          name: "ครัว & อาหาร",
          items: [
            { icon: "kitchen", label: "ครัวครบครัน" },
            { icon: "cooking", label: "พื้นที่ทำอาหารสำหรับผู้เข้าพัก" },
            { icon: "fridge", label: "ตู้เย็น" },
            { icon: "microwave", label: "ไมโครเวฟ" },
            { icon: "cookware", label: "อุปกรณ์ทำครัวพื้นฐาน", note: "หม้อ กระทะ น้ำมัน เกลือและพริกไทย" },
            { icon: "tableware", label: "ภาชนะและช้อนส้อม", note: "ชาม ตะเกียบ จาน แก้ว ฯลฯ" },
            { icon: "freezer", label: "ช่องแช่แข็ง" },
            { icon: "oven", label: "เตาอบ" },
            { icon: "kettle", label: "กาต้มน้ำไฟฟ้า" },
            { icon: "wine", label: "แก้วไวน์" },
            { icon: "rice", label: "หม้อหุงข้าว" },
            { icon: "dining", label: "โต๊ะอาหารต่ำสไตล์ทาทามิ" },
          ],
        },
        {
          name: "ลักษณะทำเล",
          items: [
            { icon: "private-entry", label: "ทางเข้าส่วนตัว" },
            { icon: "laundromat", label: "ร้านซักผ้าหยอดเหรียญใกล้เคียง" },
          ],
        },
        {
          name: "ที่จอดรถ & สิ่งอำนวยความสะดวก",
          items: [
            { icon: "parking", label: "ที่จอดรถส่วนตัวฟรี" },
          ],
        },
        {
          name: "บริการ",
          items: [
            { icon: "long-stay", label: "รองรับการพักระยะยาว", note: "พักได้ 28 คืนขึ้นไป" },
            { icon: "self-checkin", label: "เช็คอินด้วยตัวเอง", note: "กล่องกุญแจ" },
          ],
        },
      ],
    },
    amenities: {
      title: "สิ่งอำนวยความสะดวก",
      items: [
        "ครัวพร้อมอุปกรณ์ครบครัน",
        "เครื่องซักผ้า",
        "Wi-Fi ความเร็วสูง",
        "ที่จอดรถส่วนตัว (1 คัน, ฟรี)",
        "ที่นอนระดับพรีเมียมทุกห้องนอน",
        "เปลเด็กและเก้าอี้สูงสำหรับเด็ก (ตามคำขอ)",
        "Smart TV ขนาดใหญ่",
        "เครื่องปรับอากาศทุกห้อง",
        "ห้องนั่งเล่นและห้องอาหารกว้างขวาง",
        "ไดร์เป่าผม, รองเท้าแตะ, ผ้าขนหนู & ของใช้ส่วนตัว",
        "หม้อหุงข้าว, ไมโครเวฟ & อุปกรณ์ทำครัวพื้นฐาน",
      ],
    },
    access: {
      title: "การเดินทาง",
      items: [
        { from: "สนามบินฟุกุโอกะ", time: "ประมาณ 20 นาทีโดยรถยนต์" },
        { from: "สถานีฮากาตะ", time: "ประมาณ 10 นาทีโดยรถยนต์ / 15 นาทีโดยรถไฟใต้ดิน" },
        { from: "เทนจิน", time: "ประมาณ 5 นาทีโดยรถยนต์ / เดินได้" },
        { from: "Canal City Hakata", time: "ประมาณ 10 นาทีโดยรถยนต์" },
        { from: "ดาไซฟุ", time: "ประมาณ 30 นาทีโดยรถยนต์" },
      ],
    },
    checkin: {
      title: "ข้อมูลการเช็คอิน",
      time: "เช็คอิน: 16:00 – 23:00 น.",
      checkout: "เช็คเอาต์: ก่อน 10:00 น.",
      method: "เช็คอินด้วยตัวเองแบบไม่ต้องพบใครผ่านสมาร์ทล็อค รหัสเข้าถึงจะส่งให้ 24 ชั่วโมงก่อนเดินทางมาถึง",
      idVerification: "ต้องยืนยันตัวตนก่อนเช็คอิน (หนังสือเดินทางหรือบัตรประชาชน)",
    },
    conditions: {
      title: "เงื่อนไขการจอง",
      minNights: "พักขั้นต่ำ: 2 คืน",
      cancellation: "นโยบายยกเลิก: ยกเลิกฟรีก่อน 7 วัน หากยกเลิกภายใน 7 วันจะเสียค่าใช้จ่าย 50%",
      cleaningFee: "ค่าทำความสะอาด: รวมอยู่ในราคาแล้ว",
      extraGuest: "ค่าผู้เข้าพักเพิ่ม: ¥10,000 ต่อคนที่เกินจากจำนวนที่แจ้งไว้",
      noiseRule: "กรุณาระวังเสียงรบกวนในช่วงกลางคืน",
      petRule: "ไม่อนุญาตให้นำสัตว์เลี้ยงมา (สุนัขนำทางได้หากแจ้งล่วงหน้า)",
      smokingRule: "ห้ามสูบบุหรี่ภายในที่พัก มีพื้นที่สูบบุหรี่กลางแจ้งที่กำหนดไว้",
    },
    booking: {
      title: "จองตรงและประหยัดกว่า",
      subtitle: "จองตรงกับเราเพื่อราคาดีที่สุด ไม่มีค่าธรรมเนียมแพลตฟอร์ม",
      comingSoon: "ระบบจองออนไลน์กำลังจะมาเร็วๆ นี้ กรุณาติดต่อเราเพื่อจอง",
    },
    faq: {
      title: "คำถามที่พบบ่อย",
      items: [
        { q: "มีที่จอดรถไหม?", a: "มีที่จอดรถส่วนตัว 1 คัน ฟรี" },
        { q: "เหมาะสำหรับครอบครัวที่มีเด็กเล็กไหม?", a: "เหมาะมากครับ เรามีเปลเด็ก เก้าอี้สูง และอ่างอาบน้ำเด็กให้บริการตามคำขอ" },
        { q: "ขั้นตอนเช็คอินเป็นอย่างไร?", a: "เช็คอินด้วยตัวเองแบบไม่ต้องพบใครผ่านสมาร์ทล็อค คุณจะได้รับรหัสเข้าถึง 24 ชั่วโมงก่อนมาถึง" },
        { q: "สามารถเช็คอินก่อนหรือเช็คเอาต์หลังได้ไหม?", a: "ขึ้นอยู่กับความพร้อมของห้องพัก กรุณาติดต่อล่วงหน้า" },
        { q: "นำสัตว์เลี้ยงมาได้ไหม?", a: "ขออภัย ที่พักนี้ไม่อนุญาตให้นำสัตว์เลี้ยงมา สุนัขนำทางได้หากแจ้งล่วงหน้า" },
        { q: "สูบบุหรี่ได้ไหม?", a: "ห้ามสูบบุหรี่ภายในที่พัก มีพื้นที่สูบบุหรี่กลางแจ้งที่กำหนดไว้" },
        { q: "นโยบายยกเลิกเป็นอย่างไร?", a: "ยกเลิกฟรีก่อน 7 วัน หากยกเลิกภายใน 7 วันจะเสียค่าใช้จ่าย 50%" },
        { q: "ผู้ที่มีปัญหาการเคลื่อนไหวสามารถเข้าพักได้ไหม?", a: "โปรดทราบว่าบันไดภายในที่พักค่อนข้างชัน ไม่เหมาะสำหรับผู้ใช้รถเข็นหรือผู้ที่ต้องการสิ่งอำนวยความสะดวกสำหรับผู้พิการ" },
        { q: "ชำระเงินอย่างไร?", a: "รับชำระผ่านโอนเงินและบัตรเครดิต กรุณาติดต่อเราโดยตรงเพื่อยืนยันวิธีการชำระเงินเมื่อทำการจอง" },
      ],
      bookButton: "จองเลย",
    },
    review: {
      rating: "4.60",
      count: "30 รีวิว",
      superhostLabel: "ซูเปอร์โฮสต์",
      airbnbLabel: "ดูบน Airbnb",
    },
    propertyDescription: {
      title: "เกี่ยวกับที่พักนี้",
      showMore: "ดูเพิ่มเติม",
      showLess: "ย่อ",
      intro: "ที่พักแบบเช่าทั้งหลังสไตล์ทันสมัยในย่านทากาซาโกะที่คึกคักของชูโอะ-กุ ฟุกุโอกะ ตั้งอยู่ในระยะเดินจากเทนจิน ให้คุณเพลิดเพลินกับความสะดวกของใจกลางฟุกุโอกะและความสบายของบ้านส่วนตัว\n\nขับรถไปเทนจิน 5 นาที ขับรถไปสถานีฮากาตะ 10 นาที ขับรถจากสนามบิน 20 นาที เช็คอินด้วยตัวเองแบบไม่ต้องพบใคร เพื่อการพักผ่อนที่เป็นส่วนตัวอย่างสมบูรณ์\n\nเหมาะสำหรับครอบครัวหรือกลุ่มเพื่อนสูงสุด 6 คน ห้องนั่งเล่นกว้างขวาง ห้องโฮมเธียเตอร์ และเฟอร์นิเจอร์ดีไซน์สวยงาม สร้างประสบการณ์พิเศษที่น่าจดจำ",
      highlights: [
        {
          title: "1. ประสบการณ์การนอนหลับระดับพรีเมียม",
          body: "ห้องนอนทั้ง 3 ห้องติดตั้งที่นอนระดับพรีเมียม รับประกันการนอนหลับที่สบายและฟื้นฟูร่างกาย ทุกข้างเตียงมีปลั๊กไฟสำหรับชาร์จอุปกรณ์ของคุณ",
        },
        {
          title: "2. ประสบการณ์ห้องโฮมเธียเตอร์",
          body: "เพลิดเพลินกับห้องโฮมเธียเตอร์ที่มีทีวีจอใหญ่ เหมาะสำหรับคืนภาพยนตร์กับกลุ่มของคุณ",
        },
        {
          title: "3. 'ท่องเที่ยวเหมือนอยู่บ้าน' อุปกรณ์ครบครัน",
          body: "ครัวครบครันพร้อมตู้เย็นขนาดใหญ่และอุปกรณ์ทำครัวมากมาย ให้คุณทำอาหารด้วยวัตถุดิบสดใหม่จากท้องถิ่น Wi-Fi ความเร็วสูงเหมาะสำหรับ workcation\n\nที่จอดรถส่วนตัวฟรี (1 คัน) รวมอยู่ในราคา\n\n[ประกาศจากเจ้าของ]\nนอกจากอ่างอาบน้ำแล้ว ยังมีห้องอาบน้ำฝักบัวแยกต่างหาก ให้ความสะดวกสบายเพิ่มเติมสำหรับกลุ่มผู้เข้าพัก",
        },
      ],
      bedroomGuide: {
        title: "แนะนำห้องนอน",
        items: [
          "ห้องนอน 1: เตียงดับเบิล 1 เตียง",
          "ห้องนอน 2: เตียงเดี่ยว 2 เตียง",
          "ห้องนอน 3: เตียงเดี่ยว 2 เตียง",
          "(3 ห้องนอน รองรับได้สูงสุด 6 คน)",
        ],
      },
      facilityGuide: {
        title: "สิ่งอำนวยความสะดวก",
        items: [
          "ที่จอดรถส่วนตัว (1 คัน)",
          "ห้องน้ำ (1 ห้อง, มีอ่างอาบน้ำ)",
          "ห้องอาบน้ำฝักบัว (1 ห้อง, แยกต่างหาก)",
          "ห้องส้วม (2 ห้อง: ชั้น 1 และชั้น 2)",
          "อ่างล้างหน้า",
          "ครัว",
          "ห้องนั่งเล่น",
          "ห้องอาหาร",
          "ห้องโฮมเธียเตอร์",
        ],
      },
      equipment: {
        title: "อุปกรณ์ & เครื่องใช้ไฟฟ้า",
        items: [
          "ทีวีจอใหญ่",
          "เครื่องซักผ้า",
          "ตู้เย็น (มีช่องแช่แข็ง)",
          "ไมโครเวฟ",
          "หม้อหุงข้าว",
          "กาต้มน้ำไฟฟ้า",
          "อุปกรณ์ทำครัวพื้นฐาน (หม้อ กระทะ เขียง มีด)",
          "ภาชนะ",
          "ไดร์เป่าผม",
        ],
      },
      amenitiesDetail: {
        title: "ของใช้ส่วนตัว",
        items: [
          "รองเท้าแตะ",
          "ผ้าขนหนูอาบน้ำ / ผ้าเช็ดหน้า",
          "ชุดแปรงสีฟัน",
          "แชมพู / ครีมนวดผม / เจลอาบน้ำ",
          "ไม้แขวนเสื้อ / ไม้แขวนซักผ้า",
          "ผงซักฟอก",
        ],
      },
      guestAccess: {
        title: "พื้นที่สำหรับผู้เข้าพัก",
        body: "ที่พักนี้เป็นการเช่าทั้งหลัง คุณไม่ต้องแบ่งปันพื้นที่กับผู้เข้าพักอื่น สามารถใช้ทุกพื้นที่ได้อย่างอิสระ",
      },
      otherNotes: {
        title: "หมายเหตุอื่น ๆ",
        items: [
          "กรุณาดูแลรักษาความสะอาด หากมีความสกปรกมากเกินไปหรือทิ้งขยะไว้ อาจมีการเรียกเก็บค่าทำความสะอาดเพิ่มเติม",
          "หากของในห้องสูญหายหรือเสียหาย จะเรียกเก็บตามราคาจริง",
          "หากจำนวนผู้เข้าพักเกินกว่าที่แจ้งไว้ จะเรียกเก็บ ¥10,000 ต่อคนที่เกิน",
          "กรุณาแยกขยะตามคำแนะนำที่ให้ไว้",
          "ไม่อนุญาตให้นำสัตว์เลี้ยงมา (สุนัขนำทางได้รับการยกเว้นหากแจ้งล่วงหน้า)",
          "นอกจากค่าที่พักแล้ว ยังมีภาษีที่พักตามระเบียบของเมืองฟุกุโอกะ",
        ],
      },
      registration: {
        title: "ข้อมูลการจดทะเบียน",
        body: "ใบอนุญาตธุรกิจโรงแรม | สำนักงานสาธารณสุขเมืองฟุกุโอกะ | Fuku-Chu-Hoken-Dai 713001",
      },
    },
    houseRules: {
      title: "กฎของที่พัก",
      items: [
        { icon: "no-smoking", rule: "ห้ามสูบบุหรี่ในอาคาร มีพื้นที่สูบบุหรี่กลางแจ้งที่กำหนด" },
        { icon: "no-pets", rule: "ไม่อนุญาตให้นำสัตว์เลี้ยงเข้าพัก สุนัขนำทางได้รับการยกเว้นหากแจ้งล่วงหน้า" },
        { icon: "quiet", rule: "ช่วงเวลาเงียบ: 22:00 – 08:00 น. กรุณาเคารพเพื่อนบ้าน" },
        { icon: "checkin-time", rule: "เช็คอิน: 16:00 – 22:00 น. เช็คเอาท์: ก่อน 11:00 น." },
        { icon: "guests", rule: "ห้ามนำผู้ที่ไม่ได้ลงทะเบียนเข้าพัก กรุณาปฏิบัติตามจำนวนผู้เข้าพักสูงสุด" },
        { icon: "trash", rule: "กรุณาแยกขยะตามกฎท้องถิ่น มีถังขยะให้บริการ" },
        { icon: "shoes", rule: "กรุณาถอดรองเท้าที่ทางเข้า (ธรรมเนียมญี่ปุ่น)" },
        { icon: "stairs", rule: "บันไดภายในค่อนข้างชัน ไม่เหมาะสำหรับผู้ที่มีปัญหาด้านการเคลื่อนไหว" },
      ],
    },
    floorPlan: {
      title: "ผังพื้น",
      subtitle: "บ้านเดี่ยว 3 ชั้น · ชั้น 1: ห้องน้ำ, ห้องอาบน้ำฝักบัว & โรงรถ · ชั้น 2: ห้องนั่งเล่น/ห้องอาหาร/ครัว & โฮมเธียเตอร์ · ชั้น 3: 3 ห้องนอน & ระเบียง",
      imageAlt: "ผังพื้นทากาซาโกะ – ชั้น 1 ห้องน้ำ, ห้องอาบน้ำฝักบัว & โรงรถ, ชั้น 2 ห้องนั่งเล่น/ห้องอาหาร/ครัว & โฮมเธียเตอร์, ชั้น 3 ห้องนอน & ระเบียง",
    },
    contact: {
      title: "มีคำถามไหม?",
      subtitle: "ทีมงานของเรายินดีช่วยเหลือทุกข้อสงสัยเกี่ยวกับการเข้าพัก",
    },
    ui: {
      overviewLabels: {
        bedrooms: "ห้องนอน",
        beds: "เตียง",
        maxGuests: "จำนวนผู้เข้าพักสูงสุด",
        area: "พื้นที่",
      },
      contactUsToBook: "ติดต่อเราเพื่อจอง",
      successMessage: "✓ ส่งข้อความแล้ว! เราจะติดต่อกลับในเร็วๆ นี้",
      namePlaceholder: "ชื่อ",
      emailPlaceholder: "อีเมล",
      messagePlaceholder: "ข้อความ",
      privacyLabel: "ฉันยอมรับ",
      privacyLink: "นโยบายความเป็นส่วนตัว",
      sendButton: "ส่งข้อความ",
      sendingButton: "กำลังส่ง…",
      errorToast: "ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
    },
    nav: {
      backToHome: "กลับหน้าหลัก",
      language: "ภาษา",
      langNames: { en: "อังกฤษ", ko: "เกาหลี", zh: "จีน", th: "ไทย" },
    },
  },
};
