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
  tag: '목요일, 금요일 수령 가능 (2주에 한번)',
  review: {
    rating: 4.6,
    count: 9,
  },
  delivery: {
    type: '오늘도착',
    time: '~00:00 주문시',
  },
  benefits: ['현대백화점 7%', 'RSVP', '선물포장'],
  button: {
    icon: 'cart',
    label: '담기',
    onClick: () => {
      console.log('담기 클릭');
    },
  } as const,
};

// 카드 배열
export const mockProdCards = [
  // 일반 상품
  { ...mockProdCard, id: 'prod-1' },
  { ...mockProdCard, id: 'prod-2' },
  { ...mockProdCard, id: 'prod-3' },
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
  ({ tag, review, delivery, benefits, button, ...rest }) => ({
    ...rest,
  })
);
