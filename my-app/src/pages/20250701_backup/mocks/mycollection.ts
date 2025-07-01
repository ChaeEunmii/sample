// 상품 이미지 샘플 데이터
export const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};
// 브랜드 이미지 샘플 데이터
export const mockBrandImage = {
  src: '/images/dummy/@sample_brand_01.png',
  alt: '브랜드 이미지',
};
// 유저 이미지 샘플 데이터
export const mockUserImage = {
  src: '/images/dummy/@sample_people_01.png',
  alt: '김맑음',
};

// ==================== 마이컬렉션 목록 ==================== //
// 마이컬렉션 카드 기본 샘플 데이터
export const mockCollectionItem = {
  href: '#',
  title: '내취향 얼리버드 썸머 아이템',
  products: [{ id: 'collection-prod-1', image: mockProdImage, updateAt: '2024-07-01T08:00:00Z' }],
  brands: [
    {
      id: 'collection-brand-1',
      image: mockBrandImage,
      updateAt: '2024-03-01T08:00:00Z',
    },
  ],
};
// 마이컬렉션 카드 배열
export const mockCollectionList = [
  {
    ...mockCollectionItem,
    id: 'collection-1',
    href: '#',
    title: '귀여운거 옆에 귀여운거',
    products: [
      { id: 'collection-prod-1', image: mockProdImage, updateAt: '2024-12-01T08:00:00Z' },
      { id: 'collection-prod-2', image: mockProdImage, updateAt: '2024-10-01T08:00:00Z' },
      { id: 'collection-prod-3', image: mockProdImage, updateAt: '2024-11-01T08:00:00Z' },
    ],
    brands: [
      { id: 'collection-brand-1', image: mockBrandImage, updateAt: '2024-02-01T08:00:00Z' },
      { id: 'collection-brand-2', image: mockBrandImage, updateAt: '2024-04-01T08:00:00Z' },
      { id: 'collection-brand-3', image: mockBrandImage, updateAt: '2024-06-01T08:00:00Z' },
      { id: 'collection-brand-4', image: mockBrandImage, updateAt: '2024-09-05T08:00:00Z' },
      { id: 'collection-brand-5', image: mockBrandImage, updateAt: '2024-05-01T08:00:00Z' },
    ],
    isLock: true, // 공개/비공개 여부
  },
  {
    ...mockCollectionItem,
    id: 'collection-2',
    href: '#',
    title: '여름 샌들 위시리스트',
    products: [
      { id: 'collection2-prod-1', image: mockProdImage, updateAt: '2024-09-01T08:00:00Z' },
    ],
    brands: [
      { id: 'collection2-brand-1', image: mockBrandImage, updateAt: '2024-07-01T08:00:00Z' },
    ],
  },
  {
    ...mockCollectionItem,
    id: 'collection-3',
    href: '#',
    title: '컬렉션명',
    products: [],
    brands: [],
  },
];

// ==================== 마이컬렉션 상품 카드 ==================== //
// 마이컬렉션 상품 카드 기본 샘플 데이터
export const mockProductCard = {
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  price: {
    current: 129000,
    original: 189000,
    discountRate: 32,
  },
};
// 마이컬렉션 상품 카드 배열
export const mockProductCardList = [
  // GEM 상품
  { ...mockProductCard, id: 'prod-card-1' },
  {
    ...mockProductCard,
    id: 'prod-card-2',
    price: {
      current: 129000,
    },
  },
  { ...mockProductCard, id: 'prod-card-3' },
  { ...mockProductCard, id: 'prod-card-4' },
];

// ==================== 마이컬렉션 브랜드 카드 ==================== //
// 마이컬렉션 브랜드 카드 기본 샘플 데이터
export const mockBrandCard = {
  href: '#',
  image: mockBrandImage,
  brand: 'RAWBACK',
};
// 마이컬렉션 브랜드 카드 배열
export const mockBrandCardList = [
  // GEM 상품
  { ...mockBrandCard, id: 'brand-card-1', brand: 'ARBAN SOPHISTICATION' },
  { ...mockBrandCard, id: 'brand-card-2', brand: 'RAWBACK', flag: 'official' as const },
  { ...mockBrandCard, id: 'brand-card-3', brand: 'RAWBACK', flag: 'official' as const },
  { ...mockBrandCard, id: 'brand-card-4', brand: 'PENHALIGON’S', flag: 'sellerShop' as const },
  { ...mockBrandCard, id: 'brand-card-5', brand: 'ARBAN SOPHISTICATION' },
  { ...mockBrandCard, id: 'brand-card-6', brand: 'ARBAN SOPHISTICATION' },
  { ...mockBrandCard, id: 'brand-card-7', brand: 'ARBAN SOPHISTICATION' },
  { ...mockBrandCard, id: 'brand-card-8', brand: 'ARBAN SOPHISTICATION' },
];

// ==================== 마이컬렉션 상세 ==================== ///
// 컬렉션 상세 샘플 데이터
export const mockCollectionDetail = {
  meta: {
    id: 'collection-1',
    title: '내취향 얼리버드 썸머 모음집',
    user: {
      name: '일이삼사오육칠팔구십일이삼',
      image: mockUserImage,
      badge: true,
    },
    stats: [
      { type: 'gem' as const, value: '2,743' },
      { type: 'update' as const, value: '1일 전' },
    ],
    isMine: false, //내 컬렉션의 경우 true
  },
  products: [
    { ...mockProductCard, id: 'collection-prod-1' },
    { ...mockProductCard, id: 'collection-prod-2' },
    { ...mockProductCard, id: 'collection-prod-3' },
    { ...mockProductCard, id: 'collection-prod-4' },
    { ...mockProductCard, id: 'collection-prod-5' },
  ],
  brands: [
    {
      ...mockBrandCard,
      id: 'collection-brand-1',
      brand: 'RAWBACK',
      flag: 'official' as const,
    },
    {
      ...mockBrandCard,
      id: 'collection-brand-2',
      brand: 'PENHALIGON’S',
      flag: 'sellerShop' as const,
    },
    { ...mockBrandCard, id: 'collection-brand-3' },
  ],
};

// ==================== [컬렉션 생성 프로세스] Step 3. 컬렉션 공개 설정 : 컬렉션 목록 ==================== //
export const mockSelectedItems = [
  { id: 'selected-prod-1', image: mockProdImage },
  { id: 'selected-brand-1', image: mockBrandImage },
  { id: 'selected-prod-2', image: mockProdImage },
  { id: 'selected-brand-2', image: mockBrandImage },
  { id: 'selected-prod-3', image: mockProdImage },
  { id: 'selected-prod-4', image: mockProdImage },
  { id: 'selected-prod-5', image: mockProdImage },
  { id: 'selected-prod-6', image: mockProdImage },
  { id: 'selected-prod-7', image: mockProdImage },
  { id: 'selected-prod-8', image: mockProdImage },
  { id: 'selected-prod-9', image: mockProdImage },
  { id: 'selected-brand-3', image: mockBrandImage },
];

// ==================== 컬렉션 선택 Drawer ==================== //
// 컬렉션 선택 카드 기본 샘플 데이터
export const mockCollectionSelectItem = {
  label: '오늘 뭐 입지 OOTD',
  image: mockProdImage,
  product: 3,
  brand: 5,
};
// 컬렉션 선택 카드 배열
export const mockCollectionSelectList = [
  { ...mockCollectionSelectItem, id: 'collection-select-1', isLock: true },
  { ...mockCollectionSelectItem, id: 'collection-select-2', label: '쓸모없어도 귀여운거 모음집' },
  {
    ...mockCollectionSelectItem,
    id: 'collection-select-3',
    label: '탐나는 여름 신발 모음',
    isLock: true,
  },
  { ...mockCollectionSelectItem, id: 'collection-select-4', label: '여름신발' },
  { ...mockCollectionSelectItem, id: 'collection-select-5' },
];
