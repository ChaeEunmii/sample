import { O4OStore } from '@/widgets/o4o/O4OCartList';

// 매장 아이템 샘플 데이터
export const mockStoreItem = {
  id: 'store-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_store_01.png',
    alt: '이탈리',
  },
  title: '이탈리',
  floor: '3F',
  desc: '현지에서 공수한 양질의 식재료를 사용한 음식으로 이탈리안 식문화를 제대로 즐길 수 있는 레스토랑과 함께 이탈리아 요리에 필요한 식재료 마켓도 함께 있는 그로서란트 매장입니다.',
};

// 매장 리스트 샘플 데이터
export const mockStoreList = [
  {
    ...mockStoreItem,
  },
  {
    id: 'store-2',
    href: '#',
    image: {
      src: '/images/dummy/@sample_torder_00.png',
      alt: '이탈리정돈 프리미엄',
    },
    title: '정돈 프리미엄',
    floor: '5F',
    desc: '정돈 프리미엄은 등심, 안심, 특수부위를 부위별 저온 튀김 기법으로 조리하여 풍부한 육즙과 다채로운 식감을 선보입니다.',
  },
  {
    id: 'store-3',
    href: '#',
    image: {
      src: '/images/dummy/@sample_store_03.png',
      alt: '번패티번',
    },
    title: '번패티번',
    floor: '3F',
    desc: "'번과 패티'라는 본질에 충실한 수제 버거 전문점입니다. 자체 숙성을 거친 육즙 가득한 소고기 패티 등 좋은 재료를 사용한 수제 버거의 정수를 보여줍니다.",
  },
  {
    id: 'store-4',
    href: '#',
    image: {
      src: '/images/dummy/@sample_store_04.png',
      alt: '솜리',
    },
    title: '솜리',
    floor: '5F',
    desc: '자연 건강 한식 일품요리집 솜리, 솜리는 소박하지만 담백한 한식 전문점입니다.  어릴 적 어머님께서 해주시던 손맛 그대로, 한식의 깊은 맛을 그대로 전달해 드립니다',
    disableLink: true,
  },
];

// 매장 상세 샘플 데이터
export const mockStoreInfoList = {
  id: 'store-info-1',
  image: {
    src: '/images/dummy/@sample_torder_00.png',
    alt: '도원스타일 대표 이미지',
  },
  title: '도원스타일',
  location: '무역센터점',
  floor: '5F',
  reviews: {
    rasting: '4.8',
    total: 3987,
  },
  desc: '더 플라자 호텔의 파인다이닝 중식 레스토랑 ‘도원(桃園)’의 노하우를 감각적(Style)으로 재구성한 레스토랑 입니다. ‘식탁 위에 차린 중식의 낙원’ 컨셉으로 낙원의 맛을 선사합니다.',
};

// 메뉴 상세 샘플 데이터
export const mockMenuItem = {
  id: 'menu-1',
  image: {
    src: '/images/dummy/@sample_torder_00.png',
    alt: '해산물토마토 뚝배기 파스타',
  },
  title: '해산물토마토 뚝배기 파스타',
  price: {
    current: 13000,
    original: 15000,
  },
};
export const mockMenuNoImageItem = {
  id: 'menu-1',
  title: '해산물토마토 뚝배기 파스타',
  price: {
    current: 13000,
    original: 15000,
  },
};

// 주문 가능 메뉴 리스트 샘플 데이터
export const mockTorderStoreMenuList = [
  {
    id: 'menu-1',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '새우교자',
    },
    title: '새우교자 (6ps)',
    price: {
      current: 23456780,
      original: 23456780,
    },
    button: {
      icon: 'cart',
      label: '담기',
      onClick: () => {
        console.log('버튼 클릭');
      },
    } as const,
  },
  {
    id: 'menu-2',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '천일고다 로제소스 감자 뇨끼',
    },
    title:
      '천일고다 로제소스 감자 뇨끼 천일고다 로제소스 감자 뇨끼 천일고다 로제소스 감자 뇨끼 천일고다 로제소스 감자 뇨끼 천일고다 로제소스 감자 뇨끼 천일고다 로제소스 감자 뇨끼 천일고다 로제소스 감자 뇨끼 천일고다 로제소스 감자 뇨끼',
    price: {
      current: 23456780,
      original: 23456780,
    },
    button: {
      icon: 'cart',
      label: '담기',
      onClick: () => {
        console.log('버튼 클릭');
      },
    } as const,
  },
  {
    id: 'menu-3',
    image: {
      src: '/images/torder_defalut_img.png',
      alt: '새우교자',
    },
    title: '쇼마이 (4ps)',
    price: {
      current: 23456780,
      original: 23456780,
    },
    button: {
      icon: 'cart',
      label: '담기',
      onClick: () => {
        console.log('버튼 클릭');
      },
    } as const,
  },
  {
    id: 'menu-4',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '제주해물뚝배기 제주갈치구이',
    },
    title: '제주해물뚝배기 제주갈치구이',
    price: {
      current: 23456780,
      original: 23456780,
    },
    disabled: true,
    button: {
      icon: 'cart',
      label: '담기',
      onClick: () => {
        console.log('버튼 클릭');
      },
    } as const,
  },
];

// 장바구니 리스트 샘플 데이터
export const mockCartList: O4OStore[] = [
  // [푸드코트] 어굽당
  {
    id: 'cart-4',
    courtName: 'h’_Kitchen',
    store: '어굽당',
    floor: '3F',
    items: [
      {
        id: 'cart-4-1',
        title: '아몬드 크림 치즈 스틱',
        price: {
          current: 12200,
        },
        quantity: 1,
        options: ['기본맛', '레몬소다 (+4,000원)'],
      },
      {
        id: 'cart-4-2',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
  // [푸드코트] 온드린
  {
    id: 'cart-5',
    courtName: 'h’_Kitchen',
    store: '온드린',
    floor: '3F',
    items: [
      {
        id: 'cart-5-1',
        title: '유부초밥 4개 세트',
        price: {
          current: 13000,
          original: 15000,
        },
        quantity: 1,
      },
      {
        id: 'cart-5-2',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
        disabled: true,
      },
    ],
  },
  // 앤티앤스프레즐
  {
    id: 'cart-1',
    store: '앤티앤스프레즐',
    floor: '3F',
    items: [
      {
        id: 'cart-1-1',
        title: '아몬드 크림 치즈 스틱',
        price: {
          current: 12200,
        },
        quantity: 5,
        options: ['기본맛', '레몬소다 (+4,000원)'],
      },
      {
        id: 'cart-1-2',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
  // 도원스타일
  {
    id: 'cart-2',
    store: '도원스타일',
    floor: '2F',
    disabled: true,
    items: [
      {
        id: 'cart-2-1',
        title: '짬뽕',
        price: {
          current: 12200,
        },
        quantity: 1,
        options: ['기본맛', '제로콜라 (+3,000원)'],
      },
      {
        id: 'cart-2-2',
        title: '새우볶음밥',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
  // 오규당
  {
    id: 'cart-3',
    store: '오규당',
    floor: '7F',
    items: [
      {
        id: 'cart-3-1',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 17200,
        },
        quantity: 1,
        options: ['스프라이트 (+3,000원)'],
        disabled: true,
      },
      {
        id: 'cart-3-2',
        title: '새우볶음밥',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
];

// 주문 메뉴 리스트 샘플 데이터
export const mockTorderMenuList: O4OStore[] = [
  // [푸드코트] 어굽당
  {
    id: 'cart-4',
    courtName: 'h’_Kitchen',
    store: '어굽당',
    floor: '3F',
    items: [
      {
        id: 'cart-4-1',
        title: '아몬드 크림 치즈 스틱',
        price: {
          current: 12200,
        },
        quantity: 1,
        options: ['기본맛', '레몬소다'],
      },
      {
        id: 'cart-4-2',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
  // [푸드코트] 온드린
  {
    id: 'cart-5',
    courtName: 'h’_Kitchen',
    store: '온드린',
    floor: '3F',
    items: [
      {
        id: 'cart-5-1',
        title: '유부초밥 4개 세트',
        price: {
          current: 13000,
          original: 15000,
        },
        quantity: 1,
      },
      {
        id: 'cart-5-2',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
        disabled: true,
      },
    ],
  },
  // 앤티앤스프레즐
  {
    id: 'cart-1',
    store: '앤티앤스프레즐',
    floor: '3F',
    items: [
      {
        id: 'cart-1-1',
        title: '아몬드 크림 치즈 스틱',
        price: {
          current: 12200,
        },
        quantity: 5,
        options: ['기본맛', '레몬소다'],
      },
      {
        id: 'cart-1-2',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
  // 도원스타일
  {
    id: 'cart-2',
    store: '도원스타일',
    floor: '2F',
    disabled: true,
    items: [
      {
        id: 'cart-2-1',
        title: '짬뽕',
        price: {
          current: 12200,
        },
        quantity: 1,
        options: ['기본맛', '제로콜라'],
      },
      {
        id: 'cart-2-2',
        title: '새우볶음밥',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
  // 오규당
  {
    id: 'cart-3',
    store: '오규당',
    floor: '7F',
    items: [
      {
        id: 'cart-3-1',
        title:
          '새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤 새우 아스파라거스 비프롤',
        price: {
          current: 17200,
        },
        quantity: 1,
        options: ['스프라이트'],
        disabled: true,
      },
      {
        id: 'cart-3-2',
        title: '새우볶음밥',
        price: {
          current: 12200,
          original: 15000,
        },
        quantity: 2,
      },
    ],
  },
];

// 픽업 위치 샘플 데이터
export const mockTorderLocationList = [
  // [푸드코트] 어굽당
  {
    id: 'lacation-1',
    courtName: 'h’_Kitchen',
    store: '어굽당',
    floor: '3F',
    defaultAddress: '서울특별시 강남구 테헤란로 517',
    detailedAddress: '현대백화점 무역센터점 3F',
  },
  // [푸드코트] 온드린
  {
    id: 'cart-5',
    courtName: 'h’_Kitchen',
    store: '온드린',
    floor: '3F',
    defaultAddress: '서울특별시 강남구 테헤란로 517',
    detailedAddress: '현대백화점 무역센터점 3F',
  },
  // 앤티앤스프레즐
  {
    id: 'cart-1',
    store: '앤티앤스프레즐',
    floor: '3F',
    defaultAddress: '서울특별시 강남구 테헤란로 517',
    detailedAddress: '현대백화점 무역센터점 3F',
  },
  // 도원스타일
  {
    id: 'cart-2',
    store: '도원스타일',
    floor: '2F',
    disabled: true,
    defaultAddress: '서울특별시 강남구 테헤란로 517',
    detailedAddress: '현대백화점 무역센터점 2F',
  },
  // 오규당
  {
    id: 'cart-3',
    store: '오규당',
    floor: '7F',
    defaultAddress: '서울특별시 강남구 테헤란로 517',
    detailedAddress: '현대백화점 무역센터점 7F',
  },
];

// 매장 상세 > 매장정보 샘플 데이터
export const mockTorderStoreDetail = {
  title: '(주)현대그린푸드 소바카덴',
  address:
    '경기도 부천시 원미구 길주로 180(중동) 소바카덴 지하1층 경기도 부천시 원미구 길주로 180(중동) 소바카덴 지하1층',
  tel: '032-623-2044',
  openHours: ['월~목 10:30~20:00,', '금~일/공휴일 10:30~20:30'],
  holidays: ['백화점 내부 일정에 따라 변경됩니다.'],
  businessNumber: '012345678',
};
