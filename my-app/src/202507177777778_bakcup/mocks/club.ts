// =========== 클럽 썸네일 탭 (href: 클럽 메인 / id: 마이클럽 메인) =========== //
export const clubThumbTabs = [
  { href: '#beauty', id: 'beauty', label: '클럽뷰티', thumb: '/images/club/club_tab_icon_01.png' },
  { href: '#moms', id: 'moms', label: '클럽맘스', thumb: '/images/club/club_tab_icon_02.png' },
  {
    href: '#outdoor',
    id: 'outdoor',
    label: '클럽아웃도어',
    thumb: '/images/club/club_tab_icon_03.png',
  },
  { href: '#pet', id: 'pet', label: '클럽펫', thumb: '/images/club/club_tab_icon_04.png' },
  {
    href: '#healthy',
    id: 'healthy',
    label: '클럽헬시',
    thumb: '/images/club/club_tab_icon_05.png',
  },
  { href: '#modern', id: 'modern', label: '클럽모던', thumb: '/images/club/club_tab_icon_06.png' },
  { href: '#ezwel', id: 'ezwel', label: '클럽이지웰', thumb: '/images/club/club_tab_icon_07.png' },
  {
    href: '#friends',
    id: 'friends',
    label: '클럽프렌즈',
    thumb: '/images/club/club_tab_icon_08.png',
  },
];

// =========== <OrderItem/>을 사용하는 리뷰목록 샘플데이터 (마이클럽 홈 - '작성 가능한 리뷰') =========== //
export const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};
export const mockClubReviews = [
  {
    id: 'review-1',
    image: mockProdImage,
    brand: '비오템',
    title: '비오템 올인원 핸드크림',
    orderOptions: ['옵션 1', '옵션 2'],
    info: {
      buyDate: '20250901',
    },
    rsvp: true,
    price: { current: 5000 },
    stock: 6,
    quantity: 1,
  },
  {
    id: 'review-2',
    image: mockProdImage,
    brand: '비오템',
    title: '비오템 올인원 핸드크림',
    orderOptions: ['50 ml', '스킨로션', '건성피부용', '블루'],
    info: {
      buyDate: '20250901',
    },
    rsvp: true,
    price: { current: 5000 },
    stock: 6,
    quantity: 1,
  },
];

// =========== 다른클럽 둘러보기 클럽목록 (마이클럽)=========== //
export const otherClubs = [
  {
    id: 'club-beauty',
    name: '클럽뷰티',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_01.png',
      alt: '클럽뷰티',
    },
  },
  {
    id: 'club-health',
    name: '클럽맘',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_02.png',
      alt: '클럽맘',
    },
  },
  {
    id: 'club-outdoor',
    name: '클럽아웃도어',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_03.png',
      alt: '클럽아웃도어',
    },
  },
  {
    id: 'club-pet',
    name: '클럽펫',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_04.png',
      alt: '클럽펫',
    },
  },
  {
    id: 'club-healthy',
    name: '클럽헬시',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_05.png',
      alt: '클럽헬시',
    },
  },
  {
    id: 'club-modern',
    name: '클럽모던',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_06.png',
      alt: '클럽모던',
    },
  },
  {
    id: 'club-ezwel',
    name: '클럽이지웰',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_07.png',
      alt: '클럽이지웰',
    },
  },
  {
    id: 'club-friends',
    name: '클럽프렌즈',
    href: '#',
    image: {
      src: '/images/club/club_tab_icon_08.png',
      alt: '클럽프렌즈',
    },
  },
];

// =========== 클럽메인 : 클렵 별 정보 =========== //
export const clubDataMap = {
  beauty: {
    type: 'beauty',
    title: 'CLUB BEAUTY',
    titleKor: '클럽뷰티',
    subtitle: '뷰티 혜택이 쏟아지는',
    signupDate: '20250525',
    image: {
      src: '/images/club/clubmain_visual_01.png',
      alt: '뷰티 혜택이 쏟아지는 CLUB BEAUTY',
    },
    couponBenefits: [
      { title: '15% 할인 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '무료배송 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '10% 할인 쿠폰', count: 2 },
      { title: '10,000원 할인 쿠폰', count: 1 },
    ],
    extraEarnings: ['H.Point 추가적립'],
  },
  moms: {
    type: 'moms',
    title: 'CLUB MOM’S',
    titleKor: '클럽맘스',
    subtitle: '엄마들이 원하는 모든 것',
    signupDate: '20250525',
    cancelDate: '',
    image: {
      src: '/images/club/clubmain_visual_02.png',
      alt: '엄마들이 원하는 모든 것 CLUB MOM’S',
    },
    couponBenefits: [
      { title: '15% 할인 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '무료배송 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '10% 할인 쿠폰', count: 2 },
      { title: '10,000원 할인 쿠폰', count: 1 },
    ],
  },
  outdoor: {
    type: 'outdoor',
    title: 'CLUB OUTDOOR',
    titleKor: '클럽아웃도어',
    subtitle: '야외활동을 위한 모든 것',
    signupDate: '20250525',
    cancelDate: '',
    image: {
      src: '/images/club/clubmain_visual_03.png',
      alt: '야외활동을 위한 모든 것 CLUB OUTDOOR',
    },
    couponBenefits: [
      { title: '15% 할인 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '무료배송 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '10% 할인 쿠폰', count: 2 },
      { title: '10,000원 할인 쿠폰', count: 1 },
    ],
  },
  pet: {
    type: 'pet',
    title: 'CLUB P.E.T',
    titleKor: '클럽펫',
    subtitle: '반려동물을 위한 모든 것',
    signupDate: '20250525',
    cancelDate: '',
    image: {
      src: '/images/club/clubmain_visual_04.png',
      alt: '반려동물을 위한 모든 것 CLUB P.E.T',
    },
    couponBenefits: [
      { title: '15% 할인 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '무료배송 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '10% 할인 쿠폰', count: 2 },
      { title: '10,000원 할인 쿠폰', count: 1 },
    ],
  },
  healthy: {
    type: 'healthy',
    title: 'CLUB HEALTHY',
    titleKor: '클럽헬시',
    subtitle: '매일 신선한 먹거리를 위한 모든 것',
    signupDate: '20250525',
    cancelDate: '',
    image: {
      src: '/images/club/clubmain_visual_05.png',
      alt: '매일 신선한 먹거리를 위한 모든 것 CLUB FOOD',
    },
    couponBenefits: [
      { title: '15% 할인 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '무료배송 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '10% 할인 쿠폰', count: 2 },
      { title: '10,000원 할인 쿠폰', count: 1 },
    ],
  },
  modern: {
    type: 'modern',
    title: 'CLUB MODERN',
    titleKor: '클럽모던',
    subtitle: '트렌디한 패션의 모든 것',
    signupDate: '20250525',
    cancelDate: '',
    image: {
      src: '/images/club/clubmain_visual_06.png',
      alt: '트렌디한 패션의 모든 것 CLUB MODERN',
    },
    couponBenefits: [
      { title: '15% 할인 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '무료배송 쿠폰 (최초 가입 혜택)', count: 1 },
      { title: '10% 할인 쿠폰', count: 2 },
      { title: '10,000원 할인 쿠폰', count: 1 },
    ],
  },
  ezwel: {
    type: 'ezwel',
    title: 'CLUB EZWEL',
    titleKor: '클럽이지웰',
    subtitle: '직장 생활에 힘이 되는',
    signupDate: '20250525',
    cancelDate: '',
    image: {
      src: '/images/club/clubmain_visual_07.png',
      alt: '직장 생활에 힘이 되는 CLUB EZWEL',
    },
    couponBenefits: [
      { title: '10% 할인 쿠폰', count: 3 },
      { title: '무료배송 쿠폰', count: 1 },
    ],
  },
  friends: {
    type: 'friends',
    title: 'CLUB FRIENDS',
    titleKor: '클럽프렌즈',
    subtitle: '직장 생활에 힘이 되는',
    signupDate: '20250525',
    cancelDate: '',
    image: {
      src: '/images/club/clubmain_visual_08.png',
      alt: '직장 생활에 힘이 되는 CLUB FRIENDS',
    },
    couponBenefits: [
      { title: '10% 할인 쿠폰', count: 3 },
      { title: '무료배송 쿠폰', count: 1 },
    ],
  },
};

// =========== 마이클럽 데이터 맵 ===========//
export const MyClubDataMap = {
  beauty: {
    id: 'beauty',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '성별', content: '여성' },
        { label: '피부톤', content: '웜톤' },
        { label: '피부타입', content: '건성' },
        { label: '피부고민', content: '건조' },
        { label: '관심상품군', content: '스킨케어, 향수' },
        { label: '관심브랜드', content: '크리니크, 겔랑' },
        { label: '관심정보', content: '이벤트, 제품추천' },
      ],
      [
        { label: '성별', content: '여성' },
        { label: '피부톤', content: '웜톤' },
        { label: '피부타입', content: '건성' },
        { label: '피부고민', content: '건조' },
        { label: '관심상품군', content: '스킨케어, 향수' },
        { label: '관심브랜드', content: '크리니크, 겔랑' },
        { label: '관심정보', content: '이벤트, 제품추천' },
      ],
    ],
    otherClubs,
  },
  moms: {
    id: 'moms',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '아이와의 관계', content: '아빠' },
        { label: '아이 이름', content: '대한이' },
        { label: '아이 성별', content: '남아' },
        { label: '아이 생일/출산 예정일', content: '2024.05.31' },
        { label: '관심 스타일링', content: '러블리' },
        { label: '관심 브랜드', content: '나이키 키즈, 아디다스 키즈' },
      ],
      [
        { label: '아이와의 관계', content: '아빠' },
        { label: '아이 이름', content: '대한이' },
        { label: '아이 성별', content: '남아' },
        { label: '아이 생일/출산 예정일', content: '2024.05.31' },
        { label: '관심 스타일링', content: '러블리' },
        { label: '관심 브랜드', content: '나이키 키즈, 아디다스 키즈' },
      ],
    ],
    otherClubs,
  },
  outdoor: {
    id: 'outdoor',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '성별', content: '여성' },
        { label: '관심 활동', content: '등산, 축구, 야구' },
        { label: '관심 상품군', content: '신발, 가방' },
        { label: '관심 정보', content: '이벤트, 제품추천' },
        { label: '주요 활동 지역', content: '서울특별시 중구 회현동' },
        { label: '관심 브랜드', content: '아디다스' },
      ],
      [
        { label: '성별', content: '여성' },
        { label: '관심 활동', content: '등산, 축구, 야구' },
        { label: '관심 상품군', content: '신발, 가방' },
        { label: '관심 정보', content: '이벤트, 제품추천' },
        { label: '주요 활동 지역', content: '서울특별시 중구 회현동' },
        { label: '관심 브랜드', content: '아디다스' },
      ],
    ],
    otherClubs,
  },
  pet: {
    id: 'pet',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '반려동물', content: '강아지' },
        { label: '품종', content: '비숑프리제' },
        { label: '성별', content: '수컷' },
        { label: '이름', content: '멍멍' },
        { label: '생일', content: '2023.07.25' },
        { label: '몸무게', content: '6kg' },
        { label: '건강 정보', content: '특이사항 없음' },
      ],
      [
        { label: '반려동물', content: '강아지' },
        { label: '품종', content: '비숑프리제' },
        { label: '성별', content: '수컷' },
        { label: '이름', content: '멍멍' },
        { label: '생일', content: '2023.07.25' },
        { label: '몸무게', content: '6kg' },
        { label: '건강 정보', content: '특이사항 없음' },
      ],
    ],
    otherClubs,
  },
  healthy: {
    id: 'healthy',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '성별', content: '여성' },
        { label: '관심 건강 분야', content: '활력/피로' },
        { label: '관심 건강기능식품', content: '유산균, 오메가3, 루테인, 콜라겐' },
        { label: '섭취 중인 건강기능식품', content: '홍삼' },
        { label: '건강식품 구매 시 고려요소', content: '브랜드, 성분/원료' },
        { label: '클럽 헬시에 바라는 점', content: '식품 콘텐츠' },
        { label: '건강 정보', content: '정관장' },
      ],
      [
        { label: '성별', content: '여성' },
        { label: '관심 건강 분야', content: '활력/피로' },
        { label: '관심 건강기능식품', content: '유산균, 오메가3, 루테인, 콜라겐' },
        { label: '섭취 중인 건강기능식품', content: '홍삼' },
        { label: '건강식품 구매 시 고려요소', content: '브랜드, 성분/원료' },
        { label: '클럽 헬시에 바라는 점', content: '식품 콘텐츠' },
        { label: '건강 정보', content: '정관장' },
      ],
    ],
    otherClubs,
  },
  modern: {
    id: 'modern',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '성별', content: '여성' },
        { label: '관심 스타일링', content: '편안한' },
        { label: '관심 상품 카테고리', content: '가방, 신발' },
        { label: '관심 정보', content: '신제품, 프로모션' },
        { label: '관심 브랜드', content: '잇미샤' },
      ],
      [
        { label: '성별', content: '여성' },
        { label: '관심 스타일링', content: '편안한' },
        { label: '관심 상품 카테고리', content: '가방, 신발' },
        { label: '관심 정보', content: '신제품, 프로모션' },
        { label: '관심 브랜드', content: '잇미샤' },
      ],
    ],
    otherClubs,
  },
  ezwel: {
    id: 'ezwel',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '관심항목1', content: '내용' },
        { label: '관심항목2', content: '내용' },
      ],
      [
        { label: '관심항목1', content: '내용' },
        { label: '관심항목2', content: '내용' },
      ],
    ],
    otherClubs,
  },
  friends: {
    id: 'friends',
    reward: {
      expectedPoint: '10,000원',
      currentItems: 2,
      totalItems: 3,
      currentAmount: 209000,
      totalAmount: 400000,
      applyUrl: 'https://ncp.example.com/reward/apply',
    },
    benefits: {
      signup: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
      monthly: [
        { label: '15% 할인 쿠폰', content: 2 },
        { label: '10,000원 할인 쿠폰', content: 1 },
      ],
    },
    reviews: mockClubReviews,
    interest: [
      [
        { label: '관심항목1', content: '내용' },
        { label: '관심항목2', content: '내용' },
      ],
      [
        { label: '관심항목1', content: '내용' },
        { label: '관심항목2', content: '내용' },
      ],
    ],
    otherClubs,
  },
};

// =========== 마이클럽 가입, 수정 칩 항목 =========== //
// 마이클럽 - 뷰티
export const clubBeauty = {
  gender: {
    label: '성별',
    data: [
      { label: '여성', value: 'gender1' },
      { label: '남성', value: 'gender2' },
    ],
  },
  skinTone: {
    label: '피부톤',
    data: [
      { label: '웜톤', value: 'skintone1' },
      { label: '쿨톤', value: 'skintone2' },
      { label: '모름', value: 'skintone3' },
    ],
  },
  skinType: {
    label: '피부타입',
    data: [
      { label: '건성', value: 'skintype1' },
      { label: '중성', value: 'skintype2' },
      { label: '지성', value: 'skintype3' },
      { label: '복합성', value: 'skintype4' },
      { label: '민감성', value: 'skintype5' },
      { label: '트러블성', value: 'skintype6' },
      { label: '모름', value: 'skintype7' },
    ],
  },
  skinIssue: {
    label: '피부고민(최대 3개)',
    data: [
      { label: '주름', value: 'skinissue1' },
      { label: '건조', value: 'skinissue2' },
      { label: '탄력', value: 'skinissue3' },
      { label: '모공', value: 'skinissue4' },
      { label: '잡티', value: 'skinissue5' },
      { label: '진정', value: 'skinissue6' },
      { label: '브라이트닝', value: 'skinissue7' },
      { label: '영양', value: 'skinissue8' },
      { label: '피지', value: 'skinissue9' },
      { label: '미백', value: 'skinissue10' },
      { label: '트러블', value: 'skinissue11' },
      { label: '각질', value: 'skinissue12' },
      { label: '안티에에징', value: 'skinissue13' },
      { label: '다크서클', value: 'skinissue14' },
    ],
  },
  favProd: {
    label: '관심 상품군(최대 3개)',
    data: [
      { label: '스킨케어', value: 'favProd1' },
      { label: '메이크업', value: 'favProd2' },
      { label: '헤어', value: 'favProd3' },
      { label: '바디', value: 'favProd4' },
      { label: '향수', value: 'favProd5' },
      { label: '럭셔리 뷰티', value: 'favProd6' },
      { label: '트렌디 뷰티', value: 'favProd7' },
      { label: '클린뷰티', value: 'favProd8' },
    ],
  },
  favInfo: {
    label: '관심 정보 (최대 3개)',
    data: [
      { label: '신제품', value: 'favInfo1' },
      { label: '프로모션', value: 'favInfo2' },
      { label: '이벤트', value: 'favInfo3' },
      { label: '제품추천', value: 'favInfo4' },
      { label: '뷰티콘텐츠', value: 'favInfo5' },
    ],
  },
};

// 마이클럽 - 맘스
export const clubMoms = {
  child: {
    label: '아이 수',
    data: [
      { label: '1명', value: 'child1' },
      { label: '2명', value: 'child2' },
      { label: '3명', value: 'child3' },
      { label: '4명', value: 'child4' },
      { label: '5명', value: 'child5' },
    ],
  },
  relationship: {
    label: '아이와의 관계',
    data: [
      { label: '아빠', value: 'relationship1' },
      { label: '엄마', value: 'relationship2' },
      { label: '할머니', value: 'relationship3' },
      { label: '할아버지', value: 'relationship4' },
      { label: '삼촌', value: 'relationship5' },
      { label: '이모', value: 'relationship6' },
      { label: '고모', value: 'relationship7' },
      { label: '기타 친척', value: 'relationship8' },
      { label: '지인', value: 'relationship9' },
    ],
  },
  twin: {
    label: '쌍둥이 여부',
    data: [
      { label: '네', value: 'twin1' },
      { label: '아니오', value: 'twin2' },
    ],
  },
  gender: {
    label: '아이 성별',
    data: [
      { label: '남아', value: 'gender1' },
      { label: '여아', value: 'gender2' },
      { label: '아직 몰라요', value: 'gender3' },
    ],
  },
  styling: {
    label: '관심 스타일링(최대 3개)',
    data: [
      { label: '러블리', value: 'styling1' },
      { label: '스포티', value: 'styling2' },
      { label: '시크한', value: 'styling3' },
      { label: '럭셔리', value: 'styling4' },
      { label: '클래식', value: 'styling5' },
      { label: '아방가르드', value: 'styling6' },
    ],
  },
};

// 마이클럽 - 아웃도어
export const clubOutdoor = {
  gender: {
    label: '성별',
    data: [
      { label: '여성', value: 'gender1' },
      { label: '남성', value: 'gender2' },
    ],
  },
  favActive: {
    label: '관심 활동 (최대 3개)',
    data: [
      { label: '러닝', value: 'active1' },
      { label: '등산', value: 'active2' },
      { label: '클라이밍', value: 'active3' },
      { label: '싸이클', value: 'active4' },
      { label: '캠핑', value: 'active5' },
      { label: '테니스', value: 'active6' },
      { label: '골프', value: 'active7' },
      { label: '수영/서핑', value: 'active8' },
      { label: '낚시', value: 'active9' },
      { label: '축구', value: 'active10' },
      { label: '피트니스/크로스핏', value: 'active11' },
      { label: '요가/필라테스', value: 'active12' },
      { label: '야구', value: 'active13' },
      { label: '농구', value: 'active14' },
      { label: '스키/보드', value: 'active15' },
      { label: '아이와 함께', value: 'active16' },
    ],
  },
  favProd: {
    label: '관심 상품군 (최대 3개)',
    data: [
      { label: '의류(데일리)', value: 'favProd1' },
      { label: '의류(기능성)', value: 'favProd2' },
      { label: '신발', value: 'favProd3' },
      { label: '가방', value: 'favProd4' },
      { label: '모자', value: 'favProd5' },
      { label: '기타용품', value: 'favProd6' },
    ],
  },
  favInfo: {
    label: '관심 정보 (최대 2개)',
    data: [
      { label: '신제품', value: 'favInfo1' },
      { label: '프로모션', value: 'favInfo2' },
      { label: '이벤트', value: 'favInfo3' },
      { label: '제품추천', value: 'favInfo4' },
      { label: '커뮤니티 활동', value: 'favInfo5' },
    ],
  },
};

// 마이클럽 - 펫
export const clubPet = {
  petCount: {
    label: '반려동물수',
    data: [
      { label: '1마리', value: 'petCount1' },
      { label: '2마리', value: 'petCount2' },
      { label: '3마리', value: 'petCount3' },
      { label: '4마리', value: 'petCount4' },
      { label: '5마리', value: 'petCount5' },
    ],
  },
  petType: {
    label: '반려동물',
    data: [
      { label: '강아지', value: 'petType1' },
      { label: '고양이', value: 'petType2' },
      { label: '기타', value: 'petType3' },
    ],
  },
  petGender: {
    label: '성별',
    data: [
      { label: '암컷', value: 'petGender1' },
      { label: '수컷', value: 'petGender2' },
    ],
  },
};

// 마이클럽 - 헬시
export const clubHealthy = {
  gender: {
    label: '성별',
    data: [
      { label: '여성', value: 'healthyGender1' },
      { label: '남성', value: 'healthyGender2' },
    ],
  },
  favField: {
    label: '관심 건강 분야 (최대 5개) ',
    data: [
      { label: '활력/피로', value: 'favField1' },
      { label: '체지방 관리', value: 'favField2' },
      { label: '혈당 관리', value: 'favField3' },
      { label: '혈압 관리', value: 'favField4' },
      { label: '혈맹 관리', value: 'favField5' },
      { label: '뇌 건강', value: 'favField6' },
      { label: '눈 건강', value: 'favField7' },
      { label: '뼈 건강', value: 'favField8' },
      { label: '장 건강', value: 'favField9' },
      { label: '위 건강', value: 'favField10' },
      { label: '간 건강', value: 'favField11' },
      { label: '관절/근육', value: 'favField12' },
      { label: '면역력', value: 'favField13' },
      { label: '스트레스', value: 'favField14' },
      { label: '수면', value: 'favField15' },
      { label: '항노화/항산화', value: 'favField16' },
      { label: '피부', value: 'favField17' },
      { label: '모발/손톱', value: 'favField18' },
      { label: '남성 건강', value: 'favField19' },
      { label: '여성 건강', value: 'favField20' },
    ],
  },
  favFood: {
    label: '관심 건강기능식품 (최대 5개)',
    data: [
      { label: '홍삼', value: 'favFood1' },
      { label: '비타민', value: 'favFood2' },
      { label: '유산균', value: 'favFood3' },
      { label: '오메가3', value: 'favFood4' },
      { label: '밀크씨슬', value: 'favFood5' },
      { label: '단백질', value: 'favFood6' },
      { label: '루테인', value: 'favFood7' },
      { label: '칼슘/미네랄', value: 'favFood8' },
      { label: '콘드로이친', value: 'favFood9' },
      { label: '콜라겐', value: 'favFood10' },
      { label: '면역력', value: 'favFood11' },
      { label: '다이어트', value: 'favFood12' },
      { label: '스트레스', value: 'favFood13' },
      { label: '수면', value: 'favFood14' },
      { label: '임신준비', value: 'favFood15' },
    ],
  },
  IngFood: {
    label: '섭취 중인 건강기능식품 (최대 5개)',
    data: [
      { label: '홍삼', value: 'IngFood1' },
      { label: '비타민', value: 'IngFood2' },
      { label: '유산균', value: 'IngFood3' },
      { label: '오메가3', value: 'IngFood4' },
      { label: '밀크씨슬', value: 'IngFood5' },
      { label: '단백질', value: 'IngFood6' },
      { label: '루테인', value: 'IngFood7' },
      { label: '칼슘/미네랄', value: 'IngFood8' },
      { label: '콘드로이친', value: 'IngFood9' },
      { label: '콜라겐', value: 'IngFood10' },
      { label: '면역력', value: 'IngFood11' },
      { label: '다이어트', value: 'IngFood12' },
      { label: '스트레스', value: 'IngFood13' },
      { label: '수면', value: 'IngFood14' },
      { label: '임신준비', value: 'IngFood15' },
      { label: '없음', value: 'IngFood16' },
    ],
  },
  buyingFactors: {
    label: '건강식품 구매 시 고려요소 (최대 3개)',
    data: [
      { label: '브랜드', value: 'buyingFactors1' },
      { label: '가격', value: 'buyingFactors2' },
      { label: '품질/효능', value: 'buyingFactors3' },
      { label: '성분/원료', value: 'buyingFactors4' },
      { label: '제형', value: 'buyingFactors5' },
      { label: '맛', value: 'buyingFactors6' },
      { label: '제조사', value: 'buyingFactors7' },
      { label: '광고/마케팅', value: 'buyingFactors8' },
    ],
  },
  wish: {
    label: '클럽 헬시에 바라는 점 (최대 3개 )',
    data: [
      { label: '신제품', value: 'wish1' },
      { label: '프로모션', value: 'wish2' },
      { label: '이벤트', value: 'wish3' },
      { label: '제품추천', value: 'wish4' },
      { label: '건강 컨텐츠', value: 'wish5' },
      { label: '식품 컨텐츠', value: 'wish6' },
    ],
  },
};

// 마이클럽 - 모던
export const clubModern = {
  modernGender: {
    label: '성별',
    data: [
      { label: '여성', value: 'modernGender1' },
      { label: '남성', value: 'modernGender2' },
    ],
  },
  favStyling: {
    label: '관심 스타일링(최대 3개)',
    data: [
      { label: '깔끔한', value: 'favStyling1' },
      { label: '편안한', value: 'favStyling2' },
      { label: '격식있는', value: 'favStyling3' },
      { label: '감각적인', value: 'favStyling4' },
      { label: '힙한', value: 'favStyling5' },
      { label: '여성스러운', value: 'favStyling6' },
      { label: '레트로', value: 'favStyling7' },
    ],
  },
  favCategory: {
    label: '관심 상품 카테고리(최대 3개)',
    data: [
      { label: '의류', value: 'favCategory1' },
      { label: '가방', value: 'favCategory2' },
      { label: '신발', value: 'favCategory3' },
      { label: '주얼리', value: 'favCategory4' },
      { label: 'ACC', value: 'favCategory5' },
    ],
  },
  favinfo: {
    label: '관심 상품 카테고리(최대 3개)',
    data: [
      { label: '신제품', value: 'mdfavinfo1' },
      { label: '프로모션', value: 'mdfavinfo2' },
      { label: '이벤트', value: 'mdfavinfo3' },
      { label: '제품추천', value: 'mdfavinfo4' },
      { label: '패션 컨텐츠', value: 'mdfavinfo5' },
    ],
  },
};

// 오프라인 지점
export const clubOffline = [
  { label: '압구정본점', value: 'offline1' },
  { label: '무역센터점', value: 'offline2' },
  { label: '천호점', value: 'offline3' },
  { label: '신촌점', value: 'offline4' },
  { label: '미아점', value: 'offline5' },
  { label: '목동점', value: 'offline6' },
  { label: '중동점', value: 'offline7' },
  { label: '판교점', value: 'offline8' },
  { label: '킨텍스점', value: 'offline9' },
  { label: '디큐브시티', value: 'offline10' },
  { label: '부산점', value: 'offline11' },
  { label: '울산점', value: 'offline12' },
  { label: '울산동구점', value: 'offline13' },
  { label: '충청점', value: 'offline14' },
];
