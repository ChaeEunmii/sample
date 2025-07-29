// 카테고리 메뉴
export const mockCategoryMenu = [
  {
    id: '뷰티',
    label: '뷰티',
    href: '#', // 전체보기 링크
    isSpecial: false,
    store: [
      {
        image: {
          src: '/images/dummy/@sample_category_menu.png',
          alt: '뷰티 전문관',
        },
        href: '#',
      },
    ],
    tabs: ['전체', '여성', '남성'],
    links: [
      { label: '스킨케어', href: '#' },
      { label: '메이크업', href: '#' },
      { label: '바디/헤어케어', href: '#' },
      { label: '프리그런스', href: '#' },
      { label: '미용기기/용품', href: '#' },
    ],
  },
  {
    id: '명품/잡화',
    label: '명품/잡화',
    isSpecial: false,
    links: [
      { label: '명품', href: '#' },
      { label: '핸드백/가방', href: '#' },
      { label: '슈즈', href: '#' },
      { label: '시계', href: '#' },
      { label: '기타잡화', href: '#' },
      { label: '지갑/벨트', href: '#' },
      { label: '악세사리', href: '#' },
    ],
  },
  {
    id: 'fashion',
    label: '패션',
    href: '#', // 전체보기 링크
    isSpecial: false,
    tabs: ['전체', '여성', '남성'],
    links: [
      { label: '아우터', href: '#' },
      { label: '상의', href: '#' },
      { label: '하의', href: '#' },
      { label: '이지/언더웨어', href: '#' },
      { label: '정장/원피스', href: '#' },
      { label: '패션소품', href: '#' },
    ],
  },
  {
    id: '진/캐주얼',
    label: '진/캐주얼',
    href: '#', // 전체보기 링크
    isSpecial: false,
    tabs: ['전체', '여성', '남성'],
    links: [
      { label: '아우터', href: '#' },
      { label: '상의', href: '#' },
      { label: '하의', href: '#' },
      { label: '세트/원피스', href: '#' },
    ],
  },
  {
    id: '스포츠/레저',
    label: '스포츠/레저',
    href: '#', // 전체보기 링크
    isSpecial: false,
    store: [
      {
        image: {
          src: '/images/dummy/@sample_category_menu_02.png',
          alt: '레저 전문관',
        },
        href: '#',
      },
    ],
    tabs: ['전체', '여성', '남성'],
    links: [
      { label: '스포츠 의류', href: '#' },
      { label: '스포츠 슈즈/잡화', href: '#' },
      { label: '등산/아웃도어', href: '#' },
      { label: '캠핑', href: '#' },
      { label: '골프', href: '#' },
      { label: '수영/스키/시즌', href: '#' },
    ],
  },
  {
    id: '유아동',
    label: '유아동',
    href: '#', // 전체보기 링크
    isSpecial: false,
    store: [
      {
        image: {
          src: '/images/dummy/@sample_category_menu_02.png',
          alt: '맘스 전문관',
        },
        href: '#',
      },
    ],
    tabs: ['전체', '여성', '남성'],
    links: [
      { label: '신생아 의류', href: '#' },
      { label: '유아 의류', href: '#' },
      { label: '아동 의류', href: '#' },
      { label: '주니어 의류', href: '#' },
      { label: '유아동 잡화', href: '#' },
      { label: '출산용품/스킨케어', href: '#' },
      { label: '발육용품', href: '#' },
      { label: '교구/완구', href: '#' },
    ],
  },
  {
    id: '리빙/가전',
    label: '리빙/가전',
    href: '#', // 전체보기 링크
    isSpecial: false,
    store: [
      {
        image: {
          src: '/images/dummy/@sample_category_menu_02.png',
          alt: '리빙 전문관',
        },
        href: '#',
      },
    ],
    links: [
      { label: '거실/침실 가구', href: '#' },
      { label: '침구/패브릭', href: '#' },
      { label: '홈데코/소품', href: '#' },
      { label: '바디/욕실용품', href: '#' },
      { label: '주방용품/식기', href: '#' },
      { label: '종합/생활가전', href: '#' },
      { label: '디지털/오디오', href: '#' },
    ],
  },
  {
    id: '식품',
    label: '식품',
    href: '#', // 전체보기 링크
    isSpecial: false,
    store: [
      {
        image: {
          src: '/images/dummy/@sample_category_menu_02.png',
          alt: '식품 전문관',
        },
        href: '#',
      },
    ],
    links: [
      { label: '신선식품', href: '#' },
      { label: '디저트', href: '#' },
      { label: '그로서리', href: '#' },
      { label: '차/커피/음료', href: '#' },
      { label: '홍삼/건강식품', href: '#' },
    ],
  },
  {
    id: '컬쳐/서비스',
    label: '컬쳐/서비스',
    href: '#', // 전체보기 링크
    isSpecial: false,
    store: [
      {
        image: {
          src: '/images/dummy/@sample_category_menu_02.png',
          alt: '컬쳐 전문관',
        },
        href: '#',
      },
      {
        image: {
          src: '/images/dummy/@sample_category_menu_02.png',
          alt: '추가 전문관',
        },
        href: '#',
      },
    ],
    links: [
      { label: '문화/취미', href: '#', isNew: true },
      { label: '아트/오브제', href: '#' },
      { label: '서비스', href: '#' },
      { label: '여행', href: '#' },
    ],
  },
  {
    id: '여행',
    label: '여행',
    href: '#', // 전체보기 링크
    isSpecial: true,
    store: [
      {
        image: {
          src: '/images/dummy/@sample_category_menu_02.png',
          alt: '여행 전문관',
        },
        href: '#',
      },
    ],
    links: [
      { label: 'VIP 투어', href: '#', isNew: true },
      { label: '국내 숙박', href: '#' },
      { label: '해외 숙박', href: '#' },
      { label: '유럽 철도', href: '#' },
      { label: '패키지', href: '#' },
    ],
  },
  {
    id: '모빌리티',
    label: '모빌리티',
    href: '#', // 전체보기 링크
    isSpecial: true,
  },
  {
    id: '러닝',
    label: '러닝',
    href: '#', // 전체보기 링크
    isSpecial: true,
  },
];

// 카테고리 배너
export const mockCategoryBanners = [
  {
    title: { text: '유라고 기획전', color: '#fff' },
    subtitle: { text: '일이삼사오육칠팔구십' },
    image: { src: '/images/dummy/@sample_category_banner_02.png', alt: '대체 텍스트(선택사항)' },
    href: '#',
    ad: true,
  },
  {
    title: { text: '여름 밤 향긋한 무화과' },
    subtitle: { text: '오설록 신제품 출시' },
    image: { src: '/images/dummy/@sample_category_banner_01.png', alt: '대체 텍스트(선택사항)' },
    href: '#',
    ad: true,
  },
];

// 카테고리 텍스트 배너
export const mockCategoryLinks = [
  {
    title: '명품',
    subtitle: 'Luxury',
    href: '#',
  },
  {
    title: '핸드백/가방',
    subtitle: 'Bag',
    href: '#',
  },
  {
    title: '슈즈',
    subtitle: 'Shoes',
    href: '#',
  },
  {
    title: '시계',
    subtitle: 'Watch',
    href: '#',
  },
  {
    title: '기타잡화',
    subtitle: 'Etc',
    href: '#',
  },
  {
    title: '지갑/벨트',
    subtitle: 'Wallet/Belt',
    href: '#',
  },
  {
    title: '악세사리',
    subtitle: 'Accessories',
    href: '#',
  },
];
