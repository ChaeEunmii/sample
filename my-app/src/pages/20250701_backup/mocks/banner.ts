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
    category: '콘텐츠 분류',
    title: '신상품 출시',
    subtitle: '최신 트렌드를 반영한 새로운 제품을 만나보세요',
    caption: '더보기 문구 노출 영역입니다.',
    href: '#',
    ad: true,
    tag: '#베스트 #차량실내',
    flag: ['배너플래그', '배너플래그', '배너플래그'],
  },
  {
    image: { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    title: '신상품 출시',
    subtitle: '최신 트렌드를 반영한 새로운 제품을 만나보세요',
    caption: '더보기 문구 노출 영역입니다.',
    href: '#',
    ad: true,
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    category: '콘텐츠 분류',
    title: '특가 할인',
    subtitle: '지금만 특별가로 제공하는 인기 상품들',
    href: '#',
    flag: ['배너플래그', '배너플래그', '배너플래그'],
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: '베스트셀러',
    subtitle: '가장 많이 선택받은 추천 상품',
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: '신상품 출시',
    subtitle: '최신 트렌드를 반영한 새로운 제품을 만나보세요',
    caption: '더보기 문구 노출 영역입니다.',
    href: '#',
    ad: true,
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: '특가 할인',
    subtitle: '지금만 특별가로 제공하는 인기 상품들',
    href: '#',
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: '베스트셀러',
    subtitle: '가장 많이 선택받은 추천 상품',
    href: '#',
  },
];

export const mockIconBanners = mockBannerList
  .filter(({ image }) => {
    const ext = image.src?.split('.').pop()?.toLowerCase();
    return ext !== 'mp4' && ext !== 'webm' && ext !== 'mov';
  })
  .map(({ subtitle, caption, ad, image, ...rest }) => ({
    ...rest,
    image: image.src,
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
  title,
  href,
}));
