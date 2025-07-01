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

// ==================== GEM 상품 ==================== //
// 상품 카드 기본 샘플 데이터
export const mockProductItem = {
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
// 상품 카드 배열
export const mockProductList = [
  // GEM 상품
  { ...mockProductItem, id: 'prod-1' },
  {
    ...mockProductItem,
    id: 'prod-2',
    price: {
      current: 129000,
    },
  },
  { ...mockProductItem, id: 'prod-3' },
  { ...mockProductItem, id: 'prod-4' },
];

// ==================== GEM 브랜드 ==================== //
// 브랜드 상품카드 기본 샘플 데이터
export const mockBrandProdItem = {
  href: '#',
  image: mockProdImage,
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  price: {
    current: 129000,
    original: 189000,
    discountRate: 32,
  },
};
// 브랜드 카드 기본 샘플
export const mockBrandItem = {
  href: '#',
  image: mockBrandImage,
  name: 'DIPTYQUE',
  nameKor: '딥디크',
  products: [
    { ...mockBrandProdItem, id: 'brand-prod-1' },
    { ...mockBrandProdItem, id: 'brand-prod-2' },
    { ...mockBrandProdItem, id: 'brand-prod-3' },
  ],
};
// 브랜드 상품 배열
export const mockBrandList = [
  {
    brand: {
      ...mockBrandItem,
      id: 'diptyque',
      image: {
        src: '/images/dummy/@sample_brand_logo_01.png',
        alt: 'diptyque',
      },
      name: 'DIPTYQUE',
      namekor: '딥티크',
      type: 'official' as const,
    },
    products: [
      {
        ...mockBrandProdItem,
        id: 'diptyque-prod-1',
        price: {
          current: 129000,
        },
      },
      { ...mockBrandProdItem, id: 'diptyque-prod-2' },
      { ...mockBrandProdItem, id: 'diptyque-prod-3' },
    ],
  },
  {
    brand: {
      ...mockBrandItem,
      id: 'atkinsons',
      image: {
        src: '/images/dummy/@sample_brand_logo_02.png',
        alt: 'ATKINSONS 1799',
      },
      name: 'ATKINSONS 1799',
      namekor: '앳킨슨 1799',
      type: 'sellerShop' as const,
    },
    products: [{ ...mockBrandProdItem, id: 'atkinsons-prod-1' }],
  },
  {
    brand: {
      ...mockBrandItem,
      id: 'ralphlauren',
      image: {
        src: '/images/dummy/@sample_brand_logo_03.png',
        alt: 'RALPH LAUREN',
      },
      name: 'RALPH LAUREN',
      namekor: '랄프로렌',
    },
    products: [],
  },
];

// ==================== GEM 컬렉션 ==================== //
// 컬렉션 카드 기본 샘플 데이터
export const mockCollectionItem = {
  href: '#',
  title: '내취향 얼리버드 썸머 아이템',
  image: mockUserImage,
  name: '김맑음',
  products: [{ id: 'collection-prod-1', image: mockProdImage, updateAt: '2024-07-01T08:00:00Z' }],
  brands: [
    {
      id: 'collection-brand-1',
      image: mockBrandImage,
      updateAt: '2024-03-01T08:00:00Z',
    },
  ],
};
// 컬렉션 카드 배열
export const mockCollectionList = [
  {
    ...mockCollectionItem,
    id: 'collection-1',
    href: '#',
    title: '내취향 얼리버드 썸머 아이템',
    image: {
      src: '/images/dummy/@sample_people_01.png',
      alt: '김맑음',
    },
    name: '김맑음',
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
  },
  {
    ...mockCollectionItem,
    id: 'collection-2',
    href: '#',
    title: '무드멜로즈와 겟레디윗미',
    image: {
      src: '/images/dummy/@sample_people_02.png',
      alt: '무드멜로즈',
    },
    name: '무드멜로즈',
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
    image: {
      src: '/images/dummy/@sample_people_03.png',
      alt: '유저닉네임',
    },
    name: '유저닉네임',
    products: [],
    brands: [],
  },
];

// ==================== GEM 피플 ==================== //
// 피플 이미지 샘플 데이터
export const mockPeopleImage = {
  src: '/images/dummy/@sample_people_01.png',
  alt: '스트릿패션 무드멜로즈',
};

// 피플 카드 기본 샘플 데이터
export const mockPeopleItem = {
  href: '#',
  image: mockPeopleImage,
  name: '스트릿패션 무드멜로즈',
  infos: ['무드멜로즈 CEO', '스트릿패션 맛집', '이구역대표여름쿨톤'],
};
// 피플 카드 배열
export const mockPeopleList = [
  {
    ...mockPeopleItem,
    id: 'people-1',
    image: {
      src: '/images/dummy/@sample_people_01.png',
      alt: '스트릿패션 무드멜로즈',
    },
    name: '스트릿패션 무드멜로즈',
    infos: ['무드멜로즈 CEO', '스트릿패션 맛집', '이구역대표여름쿨톤'],
    badge: true, //badge: 사용자 유형 뱃지: 브랜드 매니저, 인플루언서, 셀러의 경우 노출
  },
  {
    ...mockPeopleItem,
    id: 'people-2',
    image: {
      src: '/images/dummy/@sample_people_02.png',
      alt: '에디터H',
    },
    name: '에디터H',
    infos: ['무드멜로즈 CEO', 'MOOD', '2025SS'],
  },
  {
    ...mockPeopleItem,
    id: 'people-3',
    image: {
      src: '/images/dummy/@sample_people_03.png',
      alt: '김맑음',
    },
    name: '김맑음',
    infos: [],
  },
  {
    ...mockPeopleItem,
    id: 'people-4',
    image: {
      src: '/images/dummy/@sample_people_04.png',
      alt: '양갱이언니',
    },
    name: '양갱이언니',
    infos: [],
    badge: true, //badge: 사용자 유형 뱃지: 브랜드 매니저, 인플루언서, 셀러의 경우 노출
  },
];
