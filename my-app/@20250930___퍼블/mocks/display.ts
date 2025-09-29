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
    label: '리뷰 많은순',
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

export const mockTabs = [
  { id: 'tab_01', label: 'tab1' },
  { id: 'tab_02', label: 'tab2' },
  { id: 'tab_03', label: 'tab3' },
  { id: 'tab_04', label: 'tab4' },
  { id: 'tab_05', label: 'tab5' },
  { id: 'tab_06', label: 'tab6' },
  { id: 'tab_07', label: 'tab7' },
  { id: 'tab_08', label: 'tab8' },
  { id: 'tab_09', label: 'tab9' },
  { id: 'tab_10', label: 'tab10' },
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
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
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
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
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
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    href: '/live/sample-3',
    rsvp: true,
  },
];

// 홈피드 라이브 자동
const liveTileBase = {
  video: {
    src: 'https://thd-media.livehyundai.com/thd_manager@vishare.com/73822841-6f8d-4f09-b1ba-f615a11c51ba/source-video/efa6b241-807a-4caf-95c0-22fa276bd261/HLS/efa6b241-807a-4caf-95c0-22fa276bd261.m3u8',
    label: '라이브방송',
  },
  title: 'LIVE 특가 세일! 최대 70% 할인',
  product: {
    id: 'prod_1',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      label: '이미지 설명입력',
    },
    title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
    price: {
      current: 89000,
      original: 149000,
      discountRate: 40,
    },
  },
  href: '/live/1',
};

export const mockCurrentLiveTile = {
  live: {
    ...liveTileBase,
    id: 'live_1',
    date: {
      start: new Date().toISOString(),
      end: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2시간 뒤
    },
  },
  upcoming: {
    ...liveTileBase,
    id: 'live_2',
    title: '다가오는 LIVE! 놓치지 마세요',
    href: '/live/2',
    product: {
      ...liveTileBase.product,
      id: 'prod_2',
    },
    date: {
      start: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 내일
      end: new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString(),
    },
  },
  ended: {
    ...liveTileBase,
    id: 'live_3',
    title: '지난 라이브 다시보기',
    href: '/live/3',
    product: {
      ...liveTileBase.product,
      id: 'prod_3',
    },
    date: {
      start: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3시간 전
      end: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2시간 전
    },
  },
};

export const mockLiveTiles = [
  {
    video: {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      label: '라이브 방송 2',
    },
    href: '/live/2',
    date: {
      start: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30분 후 시작
      end: new Date(Date.now() + 2.5 * 60 * 60 * 1000).toISOString(), // 2시간 30분 후 종료
    },
  },
  {
    video: {
      src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      label: '라이브 방송 3',
    },
    href: '/live/3',
    date: {
      start: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), // 3시간 후 시작
      end: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(), // 5시간 후 종료
    },
  },
  {
    id: 'live_4',
    video: {
      src: 'https://thd-media.livehyundai.com/thd_manager@vishare.com/73822841-6f8d-4f09-b1ba-f615a11c51ba/source-video/efa6b241-807a-4caf-95c0-22fa276bd261/HLS/efa6b241-807a-4caf-95c0-22fa276bd261.m3u8',
    },
    href: '/live/4',
    date: {
      start: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 내일 같은 시간
      end: new Date(Date.now() + 26 * 60 * 60 * 1000).toISOString(), // 내일 2시간 후
    },
  },
  {
    id: 'live_5',
    video: {
      src: 'https://thd-media.livehyundai.com/thd_manager@vishare.com/73822841-6f8d-4f09-b1ba-f615a11c51ba/source-video/efa6b241-807a-4caf-95c0-22fa276bd261/HLS/efa6b241-807a-4caf-95c0-22fa276bd261.m3u8',
    },
    href: '/live/5',
    date: {
      start: new Date(Date.now() - 50 * 60 * 60 * 1000).toISOString(), // 이틀 전
      end: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    },
  },
];

export const mockFoodPriceTabs = [
  { id: 'tab_01', label: '전체' },
  { id: 'tab_02', label: '~5만원' },
  { id: 'tab_03', label: '5만원~20만원' },
  { id: 'tab_04', label: '20~30만원' },
  { id: 'tab_05', label: '30만원~50만원' },
  { id: 'tab_06', label: '50만원~' },
];

// 카테고리 필터가 있는 모듈 (CO_TP_LI_08, CO_TP_LI_09)
const detTabs = [
  { id: 'det-all', label: '전체' },
  ...Array(3)
    .fill(null)
    .map((_, i) => ({ id: `det-${i + 1}`, label: '세카테고리' })),
];

const subTabs = [
  ...Array(6)
    .fill(null)
    .map((_, i) => ({
      id: `sub-${i + 1}`,
      label: '소카테고리',
      detTabs,
    })),
  { id: 'sub-last', label: '소카테고리' },
];

export const mockCategoryFilterTabs = [
  // 첫 번째: subTabs 없는 경우
  // { id: 'mid-0', label: '중카테고리' },
  ...Array(5)
    .fill(null)
    .map((_, i) => ({
      id: `mid-${i + 1}`,
      label: '중카테고리',
      subTabs,
    })),
];
