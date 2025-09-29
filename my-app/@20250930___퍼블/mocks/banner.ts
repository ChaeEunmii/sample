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
    description:
      '추가 설명 문구를 작성해주세요 추가 설명 문구를 작성해주세요 추가 설명 문구를 작성해주세요',
    href: '#',
    ad: true,
    tag: '#베스트 #차량실내',
    flag: ['배너플래그', '배너플래그', '배너플래그'],
    emblem: '퍼프데이',
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
export const mockBannerImages = [
  { image: { src: '/images/dummy/@sample_banner_02.png' }, href: '#' },
  { image: { src: 'https://www.w3schools.com/html/mov_bbb.mp4' }, href: '#' },
  { image: { src: '/images/dummy/@sample_banner_01.png' }, href: '#' },
];

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
    title:
      index === 1 || index === 2
        ? { text: '긴 타이틀이 들어갔을 경우 긴 타이틀이 들어갔을 경우' }
        : title,
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
    src: 'https://thd-media.livehyundai.com/thd_manager@vishare.com/73822841-6f8d-4f09-b1ba-f615a11c51ba/source-video/efa6b241-807a-4caf-95c0-22fa276bd261/HLS/efa6b241-807a-4caf-95c0-22fa276bd261.m3u8',
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
export const mockEventBannerList = mockBannerList.map(({ href }) => ({
  image: { src: '/images/dummy/@sample_event_short_01.png' },
  title: {
    text: '웰컴 혜택 이벤트 웰컴 혜택 이벤트 웰컴 혜택 이벤트 웰컴 혜택 이벤트 웰컴 혜택 이벤트 웰컴 혜택 이벤트 웰컴 혜택 이벤트',
  },
  subtitle: { text: '2만원 쿠폰팩 다운로드 2만원 쿠폰팩 다운로드 ' },
  href,
  color: '#EBFAE7',
  dateText: { text: '2026.04.01~2026.04.30' },
}));

export const mockAccrBanners = [
  {
    title: 'BENEFIT 01',
    image: {
      src: '/images/dummy/@sample_banner_01.png',
      alt: '리필데이 캠페인 이미지',
    },
  },
  {
    title: 'BENEFIT 02',
    subtitle: `아로마티카 신사 스토어(오프라인)와, 아로마티카 공식몰(온라인)에서 무료로 리필데이
                캠페인에 참여 가능합니다.`,
    image: {
      src: '/images/dummy/@sample_banner_02.png',
      alt: '환경 보호 캠페인',
    },
  },
  {
    title: 'BENEFIT 03',
    subtitle: '리필 서비스 이용 시 추가 할인 혜택과 포인트 적립 기회를 제공합니다.',
  },
];

export const mockNotifyBanners = [
  {
    id: 'noti_01',
    title: '배너 메인 타이틀 최대 2줄 처리',
    image: { src: '/images/dummy/@sample_product_01.png', alt: '' },
    href: '#',
    liveAt: '2025-09-30 20:00:00',
    notification: {
      isActive: false,
      count: 23850,
    },
  },
  {
    id: 'noti_02',
    title: '배너 메인 타이틀 최대 2줄 처리',
    image: { src: '/images/dummy/@sample_product_01.png', alt: '' },
    href: '#',
    liveAt: '2025-09-04 10:00:00',
    notification: {
      isActive: false,
      count: 83,
    },
  },
  {
    id: 'noti_03',
    title: '배너 메인 타이틀 최대 2줄 처리',
    image: { src: '/images/dummy/@sample_product_01.png', alt: '' },
    href: '#',
    liveAt: '2025-09-04 20:00:00',
    notification: {
      isActive: true,
      count: 198,
    },
  },
];

export const mockCoodinate = [
  {
    x: 42,
    y: 45,
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title:
      '1상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행 상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행',
    href: '#',
  },
  {
    x: 112,
    y: 130,
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title:
      '2상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행 상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행',
    href: '#',
  },
  {
    x: 250,
    y: 80,
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title:
      '3상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행 상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행',
    href: '#',
  },
  {
    x: 280,
    y: 220,
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title:
      '4상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행 상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행',
    href: '#',
  },
  {
    x: 80,
    y: 300,
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title:
      '5상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행 상품명 최대 3줄 노출 후 초과 시 줄바꿈 및 말줄임 처리 수행',
    href: '#',
  },
];

export const mockCoordinateBannerList = [
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: '이거 하나로 거실 분위기가 달라졌어요!',
    subtitle:
      '이번 시즌 가장 많은 테스트를 거친 제품 중 하나입니다. 직접 사용해본 결과, 가볍지만 충분한 보습감이 인상적이었고, 속건조가 심한 날에도 피부가 편안하게 유지됐습니다. 사전 체험단과 내부 테스트에서도 만족도가 높았으며, 재구매율 역시 타 보습 제품 대비 2배 이상 높게 나타났습니다. 이번 시즌 가장 많은 테스트를 거친 제품 중 하나입니다. 직접 사용해본 결과, 가볍지만 충분한 보습감이 인상적이었고, 속건조가 심한 날에도 피부가 편안하게 유지됐습니다. 사전 체험단과 내부 테스트에서도 만족도가 높았으며, 재구매율 역시 타 보습 제품 대비 2배 이상 높게 나타났습slek.이번 시즌 가장 많은 테스트를 거친 제품 중 하나입니다. 직접 사용해본 결과, 가볍지만 충분한 보습감이 인상적이었고, 속건조가 심한 날에도 피부가 편안하게 유지됐습니다. 사전 체험단과 내부 테스트에서도 만족도가 높았으며, 재구매율 역시 타 보습 제품 대비 2배 이상 높게 나타났습니다. 이번 시즌 가장 많은 테스트를 거친 제품 중 하나입니다. 직접 사용해본 결과, 가볍지만 충분한 보습감이 인상적이었고, 속건조가 심한 날에도 피부가 편안하게 유지됐습니다. 사전 체험단과 내부 테스트에서도 만족도가 높았으며, 재구매율 역시 타 보습 제품 대비 2배 이상 높게 나타났습니다. 이번 시즌 가장 많은 테스트를 거친 제품 중 하나입니다. 직접 사용해본 결과, 가볍지만 충분한 보습감이 인상적이었고, 속건조가 심한 날에도 피부가 편안하게 유지됐습니다. 사전 체험단과 내부 테스트에서도 만족도가 높았으며, 재구매율 역시 타 보습 제품 대비 2배 이상 높게 나타났습slek.이번 시즌 가장 많은 테스트를 거친 제품 중 하나입니다. 직접 사용해본 결과, 가볍지만 충분한 보습감이 인상적이었고, 속건조가 심한 날에도 피부가 편안하게 유지됐습니다. 사전 체험단과 내부 테스트에서도 만족도가 높았으며, 재구매율 역시 타 보습 제품 대비 2배 이상 높게 나타났습니다.',
    coordinate: mockCoodinate,
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: '22이거 하나로 거실 분위기가 달라졌어요!',
    subtitle: '22반복적인 일상에 몸과 마음이 무거워져 있다면 새로운 감각을 깨워요.',
    coordinate: mockCoodinate,
  },
  {
    image: { src: '/images/dummy/@sample_banner_01.png' },
    title: '33이거 하나로 거실 분위기가 달라졌어요!',
    subtitle:
      '33반복적인 일상에 몸과 마음이 무거워져 있다면 새로운 감각을 깨워 나의 하루에 맑은 에너지를 채워주세요.',
    coordinate: mockCoodinate,
  },
];

export const mockTabTextBanner = {
  title: { text: 'ARTS DE BASE' },
  subtitle: { text: '아드베스' },
  href: '#',
};
export const mockTabTextBanners = [
  { ...mockTabTextBanner },
  { ...mockTabTextBanner },
  { ...mockTabTextBanner },
  { ...mockTabTextBanner },
  { ...mockTabTextBanner },
  { ...mockTabTextBanner },
];

export const mockColorSetupBanner = {
  title: {
    text: '배너 타이틀은 최대 2줄까지 표현됩니다. 모듈 타이틀은 색상이 조절가능하며 2줄이 넘으면 말줄임 표시',
  },
  subtitle: {
    text: '비클린의 인기 상품들을 만나보세요',
  },
  href: '#',
  color: '#000000',
  keywords: ['PERFUME', 'FRANCE', 'NEW'],
  colorType: 'black' as const,
};

export const mockMarqueeTxtBanner = {
  title: {
    text: 'SALOMON X SANDY LIANG XT-6 10% OFF',
    color: '#FFFFFF',
  },
  subtitle: {
    text: '비클린의 인기 상품들을 만나보세요',
    color: '#FFFFFF',
  },
  href: '#',
  color: '#000000',
};
export const mockMarqueeImgBanner = {
  image: {
    src: '/images/dummy/@sample_marquee.png',
    alt: '마퀴배너 이미지',
  },
  href: '#',
  color: '#000000',
};
export const mockBannersWithGem = mockBannerList.map((item, idx) => ({
  ...item,
  id: `bn-${idx + 1}`,
  showGem: true,
}));

export const mockTimers = [
  {
    endDate: '2025-10-11 20:00:00',
    href: '#',
    title: '타이틀은 최대 1줄까지 노출되며 1줄 초과 시 말줄임 처리됩니다.',
    subtitle: '서브 타이틀 최대 1줄 노출되며 1줄 초과 시 말줄임 처리됩니다.',
    image: { src: '/images/dummy/@sample_banner_01.png' },
  },
  {
    endDate: '2025-10-12 18:30:00',
    href: '#',
    title: '두 번째 아이템의 타이틀입니다. 길면 말줄임 처리됩니다.',
    subtitle: '두 번째 아이템의 서브 타이틀입니다. 역시 한 줄까지만 보여집니다.',
  },
  {
    endDate: '2025-10-13 09:00:00',
    href: '#',
    title: '세 번째 아이템 타이틀',
    subtitle: '세 번째 아이템 서브 타이틀',
  },
];

export const mockTimersWithProd = [
  {
    endDate: '2025-10-11 20:00:00',
    href: '#',
    product: {
      id: 'prod_01',
      image: { src: '/images/dummy/@sample_product_01.png' },
      brand: '언커먼하우스',
      title: '레데 패브릭 의자 2개 세트 (3색)',
      price: 340000,
    },
  },
  {
    endDate: '2025-10-12 18:00:00',
    href: '#',
    product: {
      id: 'prod_02',
      image: { src: '/images/dummy/@sample_product_02.png' },
      brand: '더모던리빙',
      title: '모던 우드 테이블 (화이트, 블랙)',
      price: 420000,
    },
  },
  {
    endDate: '2025-10-13 09:30:00',
    href: '#',
    product: {
      id: 'prod_03',
      image: { src: '/images/dummy/@sample_product_03.png' },
      brand: '에버홈',
      title: '컴팩트 리클라이너 소파',
      price: 580000,
    },
  },
];

// 타임라인 배너
export const mockTimeLineBanner = {
  id: 'timeline-1',
  status: 'wait' as const,
  date: {
    start: new Date(2025, 6, 1),
    end: new Date(2025, 6, 31),
  },
  title: '네모네모 스펀지밥 더 현대 대구 팝업스토어',
  place: '더현대대구',
  href: '#',
  image: {
    src: '/images/dummy/@sample_people_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
  },
  clickable: true, // 클릭 가능 여부
};
export const mockTimeLineBanners = [
  {
    ...mockTimeLineBanner,
    id: 'timeline-1',
    status: 'wait' as const,
    title: '메인 타이틀 최대 2줄 작성 및 초과 시 말줄임처리.. 배너 메인 타이틀 최대 2줄',
  },
  {
    ...mockTimeLineBanner,
    id: 'timeline-2',
    status: 'active' as const,
    title: '7/10~7/20, 오늘이 7/15 → 클릭 가능',
  },
  {
    ...mockTimeLineBanner,
    id: 'timeline-3',
    status: 'active' as const,
    title: '7/10~7/20, 오늘이 7/9 → 클릭 불가',
    clickable: false, // 클릭 가능 여부
  },
  { ...mockTimeLineBanner, id: 'timeline-4', status: 'ended' as const },
  { ...mockTimeLineBanner, id: 'timeline-5', status: 'wait' as const },
  { ...mockTimeLineBanner, id: 'timeline-6', status: 'active' as const },
  { ...mockTimeLineBanner, id: 'timeline-7', status: 'active' as const },
  { ...mockTimeLineBanner, id: 'timeline-8', status: 'active' as const },
  { ...mockTimeLineBanner, id: 'timeline-9', status: 'ended' as const },
  { ...mockTimeLineBanner, id: 'timeline-10', status: 'ended' as const },
  { ...mockTimeLineBanner, id: 'timeline-11', status: 'ended' as const },
  { ...mockTimeLineBanner, id: 'timeline-12', status: 'ended' as const },
  { ...mockTimeLineBanner, id: 'timeline-13', status: 'active' as const },
];
