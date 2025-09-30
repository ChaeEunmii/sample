// 상품 이미지 샘플 데이터
export const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};
// 유저 이미지 샘플 데이터
export const mockUserImage = {
  src: '/images/dummy/@sample_people_01.png',
  alt: '김맑음',
};

// 파트너스 샵 상단바 샘플 데이터
export const mockShopTopInfo = {
  id: 'user-1',
  name: '일이삼사오육칠팔구십일이삼',
  image: mockUserImage,
};

// 상품 카드 샘플 데이터1
export const mockProdCard1 = {
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  price: {
    current: 123456789,
  },
  emblem: '퍼프데이',
  badge: 'N+N',
};

// 카드 배열1
export const mockProdCards1 = [
  // 일반 상품
  { ...mockProdCard1, id: 'prod-1' },
  { ...mockProdCard1, id: 'prod-2' },
  { ...mockProdCard1, id: 'prod-3' },
  { ...mockProdCard1, id: 'prod-4' },
  { ...mockProdCard1, id: 'prod-5' },
  { ...mockProdCard1, id: 'prod-6' },
  { ...mockProdCard1, id: 'prod-7' },
  { ...mockProdCard1, id: 'prod-8' },
];

// 카드 배열1
export const sections = [
  {
    id: 'group-1',
    title: '너무 더울 땐 필수, 선풍기',
    subtitle: '시원한 바람~~',
    products: mockProdCards1,
  },
  {
    id: 'group-2',
    title: 'BEST SELLERS',
    subtitle: '지금 가장 잘 팔리는 상품',
    products: mockProdCards1,
  },
  {
    id: 'group-3',
    title: 'WEEKLY DEALS',
    subtitle: '이번주 한정 타임세일',
    products: mockProdCards1,
  },
];

// 카드 배열2
export const mockProdCards2 = [
  // 일반 상품
  { ...mockProdCard1, id: 'prod-1', href: '' },
  { ...mockProdCard1, id: 'prod-2', href: '' },
  { ...mockProdCard1, id: 'prod-3', href: '' },
  {
    ...mockProdCard1,
    id: 'prod-4',
    href: '',
    brand: 'ss 곰곰',
    title: '곰곰 히히',
  },
  { ...mockProdCard1, id: 'prod-5', href: '' },
  { ...mockProdCard1, id: 'prod-6', href: '' },
];

// 상품 카드 샘플 데이터2
export const mockProdCard2 = {
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
};

// 카드 배열3
export const mockProdCards3 = [
  { ...mockProdCard2, id: 'prod-1', href: '' },
  { ...mockProdCard2, id: 'prod-2', href: '' },
  { ...mockProdCard2, id: 'prod-3', href: '' },
  { ...mockProdCard2, id: 'prod-4', href: '' },
  { ...mockProdCard2, id: 'prod-5', href: '' },
  { ...mockProdCard2, id: 'prod-6', href: '' },
];

// 카테고리탭 샘플 데이터
export const CategoryTabData = [
  {
    label: '전체',
    subTabs: [],
  },
  {
    label: '중카테고리',
    subTabs: [
      {
        label: '소카테고리',
        detTabs: [
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
        ],
      },
      {
        label: '소카테고리',
        detTabs: [
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
        ],
      },
      {
        label: '소카테고리',
        detTabs: [
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
          { label: '세카테고리' },
        ],
      },
    ],
  },
];
