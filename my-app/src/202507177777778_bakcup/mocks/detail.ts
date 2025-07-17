import { GiftType, PromoGiftType } from '@/widgets/detail/GiftPackageInfo';
import { mockProdCard } from './product';

// ✅------ 상품 데이터 -----
// 상품 : 일반 상품
export const mockProdDetailItem = {
  ...mockProdCard,
  id: 'prod-1',
  branch: '더현대 서울점',
  shortDesc: '200ml, 500ml, 1,000ml, 2000ml, 5000ml 총 5종입니다.',
  salePeriod: {
    start: '20250410',
    end: '20250415',
  },
  price: {
    current: 129000,
    original: 189000,
    prevSale: {
      value: 180000,
      startDate: '20250402',
    },
    discountRate: 32,
  },
  crossDiscount: {
    case: 'case1',
    badge: 'N+N',
    type: 'rate',
    value: [
      {
        condition: 1,
        benefit: 1,
      },
      {
        condition: 3,
        benefit: 3,
      },
    ],
    date: {
      start: '20250407',
      end: '20250417',
    },
  },
  unit: {
    label: '100ml',
    price: 15000,
  },
  qty: 9,
};

// ✅------ 가격정보 CASE 데이터 -----
export const mockDetailPrice = [
  {
    price: {
      current: 129000,
      original: 189000,
      discountRate: 32,
    },
  },
  {
    price: {
      current: 129000,
      discountRate: 32,
    },
  },
  {
    salePeriod: {
      start: '20250410',
      end: '20250415',
    },
    price: {
      current: 129000,
      discountRate: 32,
    },
  },
  {
    price: {
      current: 129000,
      original: 189000,
      prevSale: {
        value: 180000,
        startDate: '20250402',
      },
      discountRate: 32,
    },
  },
  {
    price: {
      current: 129000,
      original: 189000,
      discountRate: 32,
    },
    unit: {
      label: '100ml',
      price: 15000,
    },
    qty: 9,
  },
];

// ✅------ 혜택 계산기 데이터 -----
// 혜택 계산기 : 보유중인 쿠폰 리스트
export const mockHasCouponList = ['product-1'];
// 혜택 계산기 : 아이템 데이터
export const mockBenefitGroup = {
  items: [
    {
      id: 'coupon-1',
      title: '정액(공용-다운형)',
      memberOnly: false,
      isDownloadable: true,
      value: 5000,
    },
    {
      id: 'coupon-2',
      title: '정액(회원)',
      memberOnly: true,
      value: 5000,
      endDate: '20250430',
    },
    {
      id: 'coupon-3',
      title: '정률(회원-가입형)',
      memberOnly: false,
      isClubMembership: true,
      rate: 5,
    },
    {
      id: 'coupon-4',
      title: '정률(공용)',
      memberOnly: true,
      rate: 10,
      endDate: '20250430',
    },
  ],
};

// 혜택 계산기 : 그룹 데이터
export const mockBenefitGroups = [
  {
    ...mockBenefitGroup,
    id: 'product',
    title: '상품할인',
    items: [
      {
        id: 'product-1',
        title: '[뷰티클럽]선할인',
        memberOnly: true,
        isDownloadable: true,
        value: 5000,
      },
      {
        id: 'product-2',
        title: '[뷰티클럽]',
        memberOnly: true,
        value: 5000,
        endDate: '20250430',
      },
    ],
  },
  { ...mockBenefitGroup, id: 'coupon', title: '상품 쿠폰 할인' },
  { ...mockBenefitGroup, id: 'cart', title: '장바구니 쿠폰 할인' },
  {
    id: 'point',
    title: '보유 포인트 사용',
    items: [
      { id: 'point-1', title: '예치금', memberOnly: true, value: 1000 },
      { id: 'h-point', title: 'H.Point', memberOnly: true, value: 83 },
      { id: 'rsvp-point', title: 'RSVP Point', memberOnly: true, value: 3000 },
    ],
  },
  { ...mockBenefitGroup, id: 'hyundai', title: '현대백화점 카드할인' },
  {
    ...mockBenefitGroup,
    id: 'payment',
    title: '결제 수단 할인',
    items: [
      {
        id: 'payment-1',
        title: '[H.Point Pay] 프로모션명',
        memberOnly: false,
        href: '#',
        value: 5000,
      },
      {
        id: 'payment-2',
        title: '[현대카드] 프로모션명',
        memberOnly: false,
        href: '#',
        value: 5000,
      },
      {
        id: 'payment-3',
        title: '[토스페이] 프로모션명',
        memberOnly: false,
        href: '#',
        rate: 5,
      },
    ],
  },
];

// 혜택 계산기 : 데이터
export const mockBenefitCalc = mockBenefitGroups;

// ✅------ 교차 할인 데이터 -----
export const mockCrossDiscount = [
  {
    case: 'case1',
    badge: 'N+N',
    type: 'rate',
    value: [
      {
        condition: 1,
        benefit: 1,
      },
    ],
    date: {
      start: '20250407',
      end: '20250417',
    },
  },
  {
    case: 'case2',
    badge: '수량할인',
    type: 'value',
    value: [
      {
        condition: 1,
        benefit: 1,
      },
      {
        condition: 3,
        benefit: 3,
      },
    ],
    date: {
      start: '20250407',
      end: '20250417',
    },
  },
  {
    case: 'case2',
    badge: '수량할인',
    type: 'rate',
    value: [
      {
        condition: 1,
        benefit: 1,
      },
    ],
    date: {
      start: '20250407',
      end: '20250417',
    },
  },
  {
    case: 'case3',
    badge: '묶음할인',
    type: 'value',
    value: [
      {
        condition: 1,
        benefit: 1,
      },
    ],
    date: {
      start: '20250407',
      end: '20250417',
    },
  },
  {
    case: 'case3',
    badge: '묶음할인',
    type: 'rate',
    value: [
      {
        condition: 1,
        benefit: 1,
      },
    ],
    date: {
      start: '20250407',
      end: '20250417',
    },
  },
];

// ✅------ 추가 혜택 데이터 -----
export const mockExtraBenefits = {
  flagLabel: '1+1',
  title: `장바구니에 2개를 담으면 <span class="ncp-color-point">1개 무료!!</span>`,
  date: {
    start: '20250407',
    end: '20250417',
  },
  linkText: `함께 구매 가능한 상품 보기`,
};

// ✅------ 배송 안내 데이터 -----
export const mockDelivery = [
  {
    title: '택배배송',
    data: [
      '롯데택배 / 배송비 3,000원',
      '30,000원 이상 무료배송',
      '제주/도서/산간 지역 3,000원 추가',
    ],
  },
  {
    title: '당일배송',
    data: ['오전 11시 전까지 주문시 오늘배송', '배송지역 : 서울/경기지역', '배송비 : 3.000원'],
  },
  {
    title: '스토어픽',
    data: ['스토어픽 구매 시 매장 방문일을 선택해 주세요.'],
  },
  {
    title: '방문픽업',
    data: ['방문픽업 구매 시 방문일시를 선택해주세요.'],
  },
];

export const mockDeliverys = [...mockDelivery];

// ✅------ 다른 지점 동일 상품 -----
export const mockSameProdBranch = [
  {
    id: 'branch-1',
    branch: '더현대 서울점',
    href: '#',
    price: 79200,
    storePick: true,
    column: '색상/사이즈',
    data: [
      {
        item: '서울맨투맨/블랙/S',
        qty: 23,
      },
      {
        item: '서울맨투맨/블랙/M',
        qty: 23,
      },
      {
        item: '서울맨투맨/블랙/L',
        qty: 23,
      },
    ],
  },
  {
    id: 'branch-2',
    branch: '마곡점',
    href: '#',
    price: 79200,
    column: '색상/사이즈',
    data: [
      {
        item: '마곡맨투맨/블랙/S',
        qty: 23,
      },
      {
        item: '마곡맨투맨/블랙/M',
        qty: 23,
      },
      {
        item: '마곡맨투맨/블랙/L',
        qty: 23,
      },
    ],
  },
  {
    id: 'branch-3',
    branch: '삼성점',
    href: '#',
    price: 79200,
    storePick: true,
    column: '색상/사이즈',
    data: [
      {
        item: '삼성맨투맨/블랙/S',
        qty: 23,
      },
      {
        item: '삼성맨투맨/블랙/M',
        qty: 23,
      },
      {
        item: '삼성맨투맨/블랙/L',
        qty: 23,
      },
    ],
  },
  {
    id: 'branch-4',
    branch: '미아점',
    href: '#',
    price: 79200,
    column: '색상/사이즈',
    data: [
      {
        item: '미아맨투맨/블랙/S',
        qty: 23,
      },
      {
        item: '미아맨투맨/블랙/M',
        qty: 23,
      },
      {
        item: '미아맨투맨/블랙/L',
        qty: 23,
      },
    ],
  },
];

// ✅------ 사은품 안내 -----
export const mockCommonGift: GiftType = {
  date: { start: '20251001', end: '20251010' },
  items: [
    {
      type: 'common',
      imgUrl: '/images/dummy/@sample_product_01.png',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      desc: '구매고객 전원께 ‘런칭기념’ 사은품을 증정해 드립니다.',
      stock: 100,
    },
  ],
};
export const mockPromoGift: PromoGiftType = {
  promoCondition: 'count',
  isOneToOneGift: true,
  isTargetCustomer: true,
  isTargetProduct: true,
  giveawayMethod: 'select',
  duplicate: 'order',
  date: { start: '20251001', end: '20251010' },
  items: [
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼 (기본 이미지)',
      promoValue: 100,
      stock: 100,
    },
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      imgUrl: '/images/dummy/@sample_product_01.png',
      promoValue: 80,
      stock: 800,
    },
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      imgUrl: '/images/dummy/@sample_product_01.png',
      promoValue: 10,
      stock: 0,
    },
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      imgUrl: '/images/dummy/@sample_product_01.png',
      promoValue: 10,
      stock: 0,
      isStandard: true,
    },
  ],
};
export const mockPackageData = {
  // 포장 유료 - 포장 + 쇼핑백 (이미지 있음)
  package: {
    price: 3000,
    src: '/images/dummy/@sample_product_01.png',
  },
  isShoppingBag: true,
};

export const mockPackageSampleData = [
  {
    // 포장 무료 - 포장만
    package: {
      price: 0,
    },
  },
  {
    // 포장 무료 - 포장 + 쇼핑백
    package: {
      price: 0,
    },
    isShoppingBag: true,
  },
  {
    // 포장 유료 - 포장만 (이미지 없음)
    package: {
      price: 3000,
    },
  },
  {
    // 포장 유료 - 포장만 (이미지 있음)
    package: {
      price: 3000,
      src: '/images/dummy/@sample_product_01.png',
    },
  },
  {
    // 포장 유료 - 포장만 (이미지 있음)
    package: {
      price: 3000,
      src: '/images/dummy/@sample_product_01.png',
    },
  },
  {
    // 포장 유료 - 포장 + 쇼핑백 (이미지 없음)
    package: {
      price: 3000,
    },
    isShoppingBag: true,
  },
  {
    // 포장 유료 - 포장 + 쇼핑백 (이미지 있음)
    package: {
      price: 3000,
      src: '/images/dummy/@sample_product_01.png',
    },
    isShoppingBag: true,
  },
  {
    // 쇼핑백만 있는 경우
    isShoppingBag: true,
  },
];
