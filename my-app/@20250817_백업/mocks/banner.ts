export const mockBannerTabs = [
  { id: 'tab_01', label: 'tab1', thumb: '/images/dummy/@sample_product_01.png' },
  { id: 'tab_02', label: 'tab2', thumb: '/images/dummy/@sample_product_01.png' },
  { id: 'tab_03', label: 'tab3', thumb: '/images/dummy/@sample_product_01.png' },
  { id: 'tab_04', label: 'tab4', thumb: '/images/dummy/@sample_product_01.png' },
  { id: 'tab_05', label: 'tab5', thumb: '/images/dummy/@sample_product_01.png' },
  { id: 'tab_06', label: 'tab6', thumb: '/images/dummy/@sample_product_01.png' },
  { id: 'tab_07', label: 'tab7', thumb: '/images/dummy/@sample_product_01.png' },
];

export const mockBannerList = [
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '신상품 출시' },
    subtitle: { text: '최신 트렌드를 반영한 새로운 제품을 만나보세요' },
    caption: { text: '더보기 문구 노출 영역입니다.' },
    href: '#',
    ad: true,
    tag: '#베스트 #차량실내',
    flag: ['배너플래그', '배너플래그', '배너플래그'],
  },
  {
    image: { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    title: { text: '신상품 출시' },
    subtitle: { text: '최신 트렌드를 반영한 새로운 제품을 만나보세요' },
    caption: { text: '더보기 문구 노출 영역입니다.' },
    href: '#',
    ad: true,
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '특가 할인' },
    subtitle: { text: '지금만 특별가로 제공하는 인기 상품들' },
    href: '#',
    flag: ['배너플래그', '배너플래그', '배너플래그'],
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '베스트셀러' },
    subtitle: { text: '가장 많이 선택받은 추천 상품' },
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '신상품 출시' },
    subtitle: { text: '최신 트렌드를 반영한 새로운 제품을 만나보세요' },
    caption: { text: '더보기 문구 노출 영역입니다.' },
    href: '#',
    ad: true,
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '특가 할인' },
    subtitle: { text: '지금만 특별가로 제공하는 인기 상품들' },
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: { text: '베스트셀러' },
    subtitle: { text: '가장 많이 선택받은 추천 상품' },
    href: '#',
  },
];

// 배너 이미지 가로형 (비율 고정이 아닌 경우)
export const mockBannerList2 = mockBannerList.map((banner) => ({
  ...banner,
  image: {
    ...banner.image,
    src: '/images/dummy/@sample_banner_02.png',
  },
}));

// 본문형 배너
export const mockBannerBody = {
  image: { src: '/images/dummy/@sample_banner_02.png' },
  title: {
    text: '최신 트렌드를 반영한 새로운 제품을 만나보세요최신 트렌드를 반영한 새로운 제품을 만나보세요최신 트렌드를 반영한 새로운 제품을 만나보세요최신 트렌드를 반영한 새로운 제품을 만나보세요',
  },
  href: '#',
  ad: true,
};

export const mockBannersNoVdo = mockBannerList.filter((_, idx) => {
  return idx !== 1;
});

export const mockBannersOnlyImg = mockBannerList
  .filter((_, idx) => {
    return idx !== 1;
  })
  .map(({ image, href }) => ({
    image,
    href,
  }));

const colorList = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#FF9CEE'];
export const mockBannersWithColor = mockBannerList.map(({ title, href, ad }, index) => ({
  title,
  href,
  ad,
  color: colorList[index % colorList.length],
}));

export const mockIconBanners = mockBannerList
  .filter(({ image }) => {
    const ext = image.src?.split('.').pop()?.toLowerCase();
    return ext !== 'mp4' && ext !== 'webm' && ext !== 'mov';
  })
  .map(({ subtitle, caption, image, title, ...rest }, index) => ({
    ...rest,
    image: image.src,
    title: index === 1 ? { ...title, color: '#ff0000' } : title,
  }));

export const mockBannerWithTag = mockBannerList.map(
  ({ image, title, subtitle, tag, flag, href, ad }) => ({
    image,
    title,
    subtitle,
    tag,
    flag,
    href,
    ad,
  })
);

export const mockTextBanners = mockBannerList.map(({ title, href }) => ({
  title: title.text,
  href,
}));

export const mockTypographBanners = [
  {
    image: { src: '/images/dummy/@sample_banner_typo_01.png' },
    text: '선물하기',
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_typo_02.png' },
    text: '이벤트',
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_typo_03.png' },
    text: '콘텐츠',
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_typo_04.png' },
    text: '라이브',
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_typo_05.png' },
    text: '웨이팅',
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_typo_06.png' },
    text: '예약',
    href: '#',
  },
];

// LiveBanner

export const mockLiveBanner = {
  video: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  onClick: () => {},
  title: 'Live Banner Test',
  subtitle:
    '유아부터 초등까지, 아이와의 안전하고 편안한 외출을 위한 차량 전용 아이템을 소개합니다. 카시트, 빛가리개, 차량용 정리함, 차량',
  brand: {
    image: '/images/dummy/@sample_product_01.png',
    name: '갤러리 아트버디',
  },
  product: {
    image: '/images/dummy/@sample_product_01.png',
    brand: '프레데릭 말',
    title: '포트레이트 오브 어 레이디 50ml',
    price: 129000,
  },
};
export const mockLiveBannerList = [
  {
    ...mockLiveBanner,
    live: {
      status: 'live' as const,
      value: '20:20:30',
    },
  },
  {
    ...mockLiveBanner,
    live: {
      status: 'replay' as const,
      value: 32000,
    },
  },
  {
    ...mockLiveBanner,
    live: {
      status: 'upcoming' as const,
      value: '8/15 오후 5시',
    },
  },
];

export const mockLiveBannersLite = mockLiveBannerList.map((banner) => ({
  video: banner.video,
  title: banner.title,
  onClick: banner.onClick,
}));

export const mockLiveBannersProd = mockLiveBannerList.map((banner, index) => ({
  video: banner.video,
  title: banner.title,
  onClick: banner.onClick,
  ...(index % 2 === 0 && { product: banner.product }),
  live: banner.live,
}));

export const mockLiveBannersBrand = mockLiveBannerList.map((banner) => ({
  title: banner.title,
  subtitle: banner.subtitle,
  video: banner.video,
  onClick: banner.onClick,
  brand: banner.brand,
}));

export const mockLiveBannersProdDetail = mockLiveBannerList.map((banner) => ({
  video: banner.video,
  subtitle: banner.subtitle,
  onClick: banner.onClick,
}));

// 이벤트 배너 리스트
export const mockEventBannerList = mockBannerList.map(({ title, subtitle, href }) => ({
  image: { src: '/images/dummy/@sample_banner_event_01.png' },
  title,
  subtitle,
  href,
  dateText: { text: '2026.04.01~2026.04.30' },
}));
