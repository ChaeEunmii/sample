// 상품 이미지 샘플 데이터
const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};
// 유저 이미지 샘플 데이터
const mockUserImage = {
  src: '/images/dummy/@sample_people_01.png',
  alt: '김맑음',
};

// 상품 카드 샘플 데이터
export const mockProdCard = {
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
// 상품 카드 목록 샘플 데이터
export const mockProdCards = [
  { ...mockProdCard, id: 'prod-1' },
  { ...mockProdCard, id: 'prod-2' },
  { ...mockProdCard, id: 'prod-3' },
  { ...mockProdCard, id: 'prod-4' },
  { ...mockProdCard, id: 'prod-5' },
  { ...mockProdCard, id: 'prod-6' },
  { ...mockProdCard, id: 'prod-7' },
  { ...mockProdCard, id: 'prod-8' },
];

// 상품 그룹 목록 샘플 데이터
export const mockProdGroups = [
  {
    id: 'group-1',
    title: 'EXCLUSIVE OFFERS',
    subtitle: '신규 런칭 최저가 특가 타임딜',
    products: mockProdCards,
  },
  {
    id: 'group-2',
    title: '너무 더울 땐 필수, 선풍기',
    subtitle: '시원한 바람~~',
    products: mockProdCards,
  },
  {
    id: 'group-3',
    title: 'EXCLUSIVE OFFERS',
    subtitle: '신규 런칭 최저가 특가 타임딜',
    products: mockProdCards,
  },
];
// 파트너스샵 샘플 데이터 (상단정보 + 상품 그룹들)
export const mockShopData = {
  meta: { id: 'user-1', name: '일이삼사오육칠팔구십일이삼', image: mockUserImage },
  products: mockProdGroups,
};

// 상품 검색 목록 샘플 데이터
export const mockProdSelectCards = [
  { ...mockProdCard, id: 'prod-1', href: '' },
  { ...mockProdCard, id: 'prod-2', href: '' },
  { ...mockProdCard, id: 'prod-3', href: '' },
  { ...mockProdCard, id: 'prod-4', href: '' },
  { ...mockProdCard, id: 'prod-5', href: '' },
  { ...mockProdCard, id: 'prod-6', href: '' },
];

// 상품 공유하기 카드 샘플 데이터
export const mockProdShareCard = {
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
// 상품 공유하기 카드 목록 샘플 데이터
export const mockProdShareCards = [
  { ...mockProdShareCard, id: 'prod-1', href: '#' },
  { ...mockProdShareCard, id: 'prod-2', href: '#' },
  { ...mockProdShareCard, id: 'prod-3', href: '#' },
  { ...mockProdShareCard, id: 'prod-4', href: '#' },
  { ...mockProdShareCard, id: 'prod-5', href: '#' },
  { ...mockProdShareCard, id: 'prod-6', href: '#' },
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
