export const mockFiltersData = [
  {
    id: 'tab_01',
    title: '카테고리',
    data: [
      { label: '화장품', count: 999, value: 'cate_01' },
      { label: '아우터', count: 120, value: 'cate_02' },
      { label: '상의', count: 18, value: 'cate_03' },
      { label: '하의', count: 56, value: 'cate_04' },
      { label: '신발', count: 87, value: 'cate_05' },
      { label: '가방', count: 45, value: 'cate_06' },
      { label: '액세서리', count: 73, value: 'cate_07' },
      { label: '스포츠웨어', count: 30, value: 'cate_08' },
      { label: '속옷', count: 25, value: 'cate_09' },
      { label: '생활용품', count: 150, value: 'cate_10' },
      { label: '식품', count: 200, value: 'cate_11' },
      { label: '반려동물용품', count: 35, value: 'cate_12' },
    ],
  },
  {
    id: 'tab_02',
    title: '유형',
    data: [
      {
        id: 'tab_02_01',
        group: '스토어픽',
        data: [
          { label: '전지점', value: 'store_01' },
          { label: '신촌점', value: 'store_02' },
          { label: '중동점', value: 'store_03' },
          { label: '목동점', value: 'store_04' },
          { label: '천호점', value: 'store_05' },
          { label: '판교점', value: 'store_06' },
          { label: '디큐브시티점', value: 'store_07' },
          { label: '더현대서울', value: 'store_08' },
        ],
      },
      {
        id: 'tab_02_02',
        group: '배송유형',
        data: [
          { label: '전체배송', value: 'delivery_01' },
          { label: '오늘배송', value: 'delivery_02' },
          { label: '내일배송', value: 'delivery_03' },
        ],
      },
      {
        id: 'tab_02_03',
        group: '스토어픽',
        data: [
          { label: '전지점', value: 'store2_01' },
          { label: '신촌점', value: 'store2_02' },
          { label: '중동점', value: 'store2_03' },
          { label: '목동점', value: 'store2_04' },
          { label: '천호점', value: 'store2_05' },
          { label: '판교점', value: 'store2_06' },
          { label: '디큐브시티점', value: 'store2_07' },
          { label: '더현대서울', value: 'store2_08' },
        ],
      },
    ],
  },
  {
    id: 'tab_03',
    title: '가격대',
    data: [
      { label: '~5만원', value: 'price_01' },
      { label: '5~20만원', value: 'price_02' },
      { label: '20~30만원', value: 'price_03' },
      { label: '30~50만원', value: 'price_04' },
      { label: '50만원~', value: 'price_05' },
    ],
  },
  {
    id: 'tab_04',
    title: '브랜드명',
    data: [
      { label: '브랜드명', value: 'brand_01' },
      { label: '브랜드명', value: 'brand_02' },
      { label: '브랜드명', value: 'brand_03' },
      { label: '브랜드명', value: 'brand_04' },
      { label: '브랜드명', value: 'brand_05' },
      { label: '브랜드명', value: 'brand_06' },
      { label: '브랜드명', value: 'brand_07' },
      { label: '브랜드명', value: 'brand_08' },
    ],
  },
];

export const mockSortOptions = [
  {
    label: '추천순',
    value: 'recommended',
  },
  {
    label: '낮은 가격순',
    value: 'price_asc',
  },
  {
    label: '높은 가격순',
    value: 'price_desc',
  },
  {
    label: '상품평 많은순',
    value: 'reviews_desc',
  },
  {
    label: '인기상품순',
    value: 'popular',
  },
  {
    label: '최신상품순',
    value: 'newest',
  },
];

export const mockPriceData = [
  { id: 'option1', label: '전체' },
  { id: 'option2', label: '3만원 미만' },
  { id: 'option3', label: '3~5만원' },
  { id: 'option4', label: '5~10만원' },
  { id: 'option5', label: '10만원 이상' },
  { id: 'option6', label: '20만원 이상' },
  { id: 'option7', label: '30만원 이상' },
  { id: 'option8', label: '50만원 이상' },
  { id: 'option9', label: '5만원 미만' },
  { id: 'option10', label: '5~15만원' },
];

export const mockLiveDates = (() => {
  const today = new Date();
  const dates = [];

  for (let i = -2; i <= 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }

  return dates;
})();

export const mockLiveCardList = [
  {
    id: '1',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      label: '이미지 설명입력',
    },
    title: '라이브 타이틀 최대 2줄 및 영역 초과 시 줄바꿈 말줄임 처리',
    date: {
      date: '7월 15일',
      time: '오후 04:00',
    },
    href: '/live/sample-1',
    live: true,
    rsvp: true,
  },
  {
    id: '2',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      label: '뷰티 라이브 이미지',
    },
    title: '뷰티 전문가와 함께하는 메이크업 라이브',
    date: {
      date: '7월 16일',
      time: '오후 07:00',
    },
    href: '/live/sample-2',
    live: true,
  },
  {
    id: '3',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      label: '쿠킹 라이브 이미지',
    },
    title: '셰프와 함께하는 홈쿠킹 클래스',
    date: {
      date: '7월 17일',
      time: '오후 06:00',
    },
    href: '/live/sample-3',
    rsvp: true,
  },
];
