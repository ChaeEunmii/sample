// RSVP 관

// 상품 이미지 샘플 데이터
const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};
// 브랜드 이미지 샘플 데이터
const mockBrandImage = {
  src: '/images/dummy/@sample_brand_01.png',
  alt: '브랜드 이미지',
};

// ==================== RSVP 브랜드 ==================== //
// 브랜드 상품카드 기본 샘플 데이터
export const mockBrandProdItem = {
  id: 'brand-prod-id',
  href: '#',
  image: mockProdImage,
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
};
// 브랜드 카드 기본 샘플
export const mockBrandItem = {
  id: 'brand-id',
  href: '#',
  image: mockBrandImage,
  name: 'Brand',
  nameKor: '브랜드',
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
      id: 'brand-1',
      image: {
        src: '/images/dummy/@sample_brand_logo_01.png',
        alt: 'diptyque',
      },
      name: 'MUHQUE',
      namekor: '무케렌시아',
    },
    products: [
      { ...mockBrandProdItem, id: 'brand-1-1' },
      { ...mockBrandProdItem, id: 'brand-1-2' },
      { ...mockBrandProdItem, id: 'brand-1-3' },
      { ...mockBrandProdItem, id: 'brand-1-4' },
      { ...mockBrandProdItem, id: 'brand-1-5' },
    ],
  },
  {
    brand: {
      ...mockBrandItem,
      id: 'brand-2',
      image: {
        src: '/images/dummy/@sample_brand_logo_02.png',
        alt: 'KINKI ROBOT',
      },
      name: 'KINKI ROBOT',
      namekor: '킨키로봇',
      //   flag: 'sellerShop' as const,
    },
    products: [
      { ...mockBrandProdItem, id: 'brand-2-1' },
      { ...mockBrandProdItem, id: 'brand-2-2' },
      { ...mockBrandProdItem, id: 'brand-2-3' },
      { ...mockBrandProdItem, id: 'brand-2-4' },
      { ...mockBrandProdItem, id: 'brand-2-5' },
    ],
  },
];

//추천 상품목록
export const mockProdRecommands = [
  {
    id: 'prod-1',
    href: '#',
    image: mockProdImage,
    // brand: '프레데릭 말',
    title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  },
  {
    id: 'prod-2',
    href: '#',
    image: mockProdImage,
    // brand: '프레데릭 말',
    title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  },
  {
    id: 'prod-3',
    href: '#',
    image: mockProdImage,
    // brand: '프레데릭 말',
    title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  },
  {
    id: 'prod-4',
    href: '#',
    image: mockProdImage,
    // brand: '프레데릭 말',
    title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  },
];
// 추천 브랜드 목록
export const mockBrandRecommands = [
  { id: 'brand-1', href: '#', image: mockProdImage, brand: '웨지우드' },
  { id: 'brand-2', href: '#', image: mockProdImage, brand: '1423 네이브워터' },
  { id: 'brand-3', href: '#', image: mockProdImage, brand: 'b.d 바르셀로나' },
  { id: 'brand-4', href: '#', image: mockProdImage, brand: '루이스폴센' },
  { id: 'brand-5', href: '#', image: mockProdImage, brand: '롱샴' },
  { id: 'brand-6', href: '#', image: mockProdImage, brand: '파소티' },
];
