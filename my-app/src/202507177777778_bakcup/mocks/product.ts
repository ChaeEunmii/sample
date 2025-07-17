import exp from 'constants';

// 상품 이미지 샘플 데이터
export const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};

export const mockProdImages = [
  mockProdImage,
  {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 3',
  },
];

// 상품 카드 샘플 데이터
export const mockProdCard = {
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  price: {
    current: 129000,
    original: 189000,
    discountRate: 32,
  },
  emblem: '퍼프데이',
  badge: 'N+N',
  // tag: '목요일, 금요일 수령 가능 (2주에 한번)',
  review: {
    rating: 4.6,
    count: 9,
  },
  delivery: {
    type: '오늘도착',
    time: '~00:00 주문시',
  },
  benefits: ['현대백화점 7%', '선물포장'],
  button: {
    icon: 'cart',
    label: '담기',
    onClick: () => {
      console.log('버튼 클릭');
    },
  } as const,
};

// 카드 배열
export const mockProdCards = [
  // 일반 상품
  { ...mockProdCard, id: 'prod-1', ad: true },
  { ...mockProdCard, id: 'prod-2' },
  { ...mockProdCard, id: 'prod-3', ad: true },
  { ...mockProdCard, id: 'prod-4' },

  // 품절 상품 (재입고 알림 버튼)
  {
    id: 'prod-5',
    ...mockProdCard,
    title: '[프레데릭 말] 포트레이트 오브 어 레이디 100ml',
    price: {
      current: 189000,
      original: 259000,
      discountRate: 27,
    },
    isSoldOut: true,
  },

  // 일시중단 상품
  {
    id: 'prod-6',
    ...mockProdCard,
    title: '[프레데릭 말] 캔들 컬렉션 세트',
    price: {
      current: 85000,
      original: 120000,
      discountRate: 29,
    },
    isPaused: true,
    emblem: null,
    badge: 'LIMITED',
  },

  { ...mockProdCard, id: 'prod-7' },
  { ...mockProdCard, id: 'prod-8' },
  { ...mockProdCard, id: 'prod-9' },
  { ...mockProdCard, id: 'prod-10' },

  // 품절 상품 (재입고 알림 버튼)
  {
    id: 'prod-11',
    ...mockProdCard,
    title: '[프레데릭 말] 포트레이트 오브 어 레이디 100ml',
    price: {
      current: 189000,
      original: 259000,
      discountRate: 27,
    },
    isSoldOut: true,
  },

  // 일시중단 상품
  {
    id: 'prod-12',
    ...mockProdCard,
    title: '[프레데릭 말] 캔들 컬렉션 세트',
    price: {
      current: 85000,
      original: 120000,
      discountRate: 29,
    },
    isPaused: true,
    emblem: null,
    badge: 'LIMITED',
  },
];

export const mockProdBanner = mockProdCards.map(
  ({ review, delivery, benefits, button, ...rest }) => ({
    ...rest,
  })
);

// 상품 유닛 및 케이스별 정리
const { review, delivery, benefits, ...mockProdCard2 } = mockProdCard;
export const mockProdCase = [
  { ...mockProdCard, id: 'case-1' },
  // 품절
  { ...mockProdCard, id: 'case-2', isSoldOut: true },
  // 성인인증
  { ...mockProdCard, id: 'case-3', isSoldOut: true, isAdult: true },
  // 품절 + 성인인증
  { ...mockProdCard, id: 'case-4', isSoldOut: true, isAdult: true },
  // 일시중단
  { ...mockProdCard, id: 'case-5', isPaused: true },
  // 할인형
  { ...mockProdCard, id: 'case-6', title: '할인형 케이스' },
  // 할인형 - 구독
  {
    ...mockProdCard,
    id: 'case-7',
    title: '할인형 구독 케이스',
    tag: '목, 금 수령 가능 (2주에 한번)',
  },
  // 일반형
  {
    ...mockProdCard,
    id: 'case-8',
    title: '일반형 케이스',
    price: {
      current: 189000,
    },
  },
  // 일반형 - 구독
  {
    ...mockProdCard,
    id: 'case-9',
    title: '일반형 구독 케이스',
    price: {
      current: 189000,
    },
    tag: '목, 금 수령 가능 (2주에 한번)',
  },
  // 렌탈형
  {
    ...mockProdCard2,
    id: 'case-10',
    title: '렌탈형 케이스',
    price: {
      current: '(월)123,456,789원',
      subPriceText: '36개월(약정개월수)',
    },
  },
  // 재고없음
  {
    ...mockProdCard2,
    id: 'case-11',
    title: '재고없음 케이스',
    price: {
      current: '재입고 알림신청',
    },
    isSoldOut: true,
  },
  // 옵션형
  {
    ...mockProdCard,
    id: 'case-12',
    title: '옵션형 케이스',
    price: {
      current: '123,456,789원~',
    },
  },
  // 딜상품형
  {
    ...mockProdCard,
    id: 'case-13',
    title: '딜상품형 케이스',
    price: {
      current: '123,456,789원 外',
    },
  },
  // 사은품 단독형
  {
    ...mockProdCard2,
    id: 'case-14',
    title: '사은품 단독형 케이스',
    price: {
      current: '사은품',
    },
  },
  // 쇼룸상품형
  {
    ...mockProdCard2,
    id: 'case-15',
    title: '쇼룸상품형 케이스',
    price: {
      current: '매장문의',
    },
  },
  // 방문쿠폰형
  {
    ...mockProdCard2,
    id: 'case-16',
    title: '방문쿠폰형 케이스',
    price: {
      current: '방문쿠폰',
    },
  },
  // 방문예약형
  {
    ...mockProdCard2,
    id: 'case-17',
    title: '방문예약형 케이스',
    price: {
      current: '방문예약',
    },
  },
];
export const mockProdSimpleCase = mockProdCase.map(({ button, ...rest }) => ({
  ...rest,
}));
