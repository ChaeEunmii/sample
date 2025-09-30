import { CouponData } from '@/widgets/coupon/CouponItem';

// 쿠폰 적용 대상 샘플 데이터
export const mockCouponItem = {
  category: '일반',
  title: '20% 할인 쿠폰',
  rate: 20,
  require: '5만원 이상 구매시',
  maxDiscountAmount: 10000,
  start: '20250401',
  due: '20250430',
};

// 쿠폰 샘플 데이터 목록
export const mockCouponList = [
  {
    category: '일반',
    title: '20% 할인 쿠폰',
    rate: 20,
    count: 2,
    benefit: true,
    require: '30,000원 이상 구매시 사용 가능',
    due: '20250431',
  },
  {
    category: '일반',
    title: '15% 할인 쿠폰',
    rate: 15,
    count: 3,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    due: '20250431',
  },
  {
    title: '10,000원 할인 쿠폰',
    value: 10000,
    count: 1,
    require: '30,000원 이상 구매시 사용 가능',
    due: '20250431',
    hasCoupon: true,
  },
  {
    category: '더플러스',
    title: '무료배송 쿠폰',
    value: 3000,
    count: 1,
    require: '30,000원 이상 구매시 사용 가능',
    due: '20250431',
  },
];

// 온라인 쿠폰 샘플 데이터 더미
export const mockCoupons: CouponData[] = [
  // [온라인] 할인 쿠폰 모듈
  {
    type: 'discount',
    category: '일반',
    title:
      '1만원 할인 쿠폰 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인 최대 글자수 확인',
    value: 10000,
    count: 9999,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    due: '20250715',
  },
  // [온라인] 주차 쿠폰 모듈
  {
    type: 'parking',
    category: '주차권',
    title: '현대백화점 2시간 무료 주차권',
    perk: '2시간',
    count: 100,
    require: '현대백화점 주차장 입차시 사용 가능',
    due: '20250730',
  },
  // [온라인] 주문서 할인 쿠폰 모듈
  {
    type: 'order',
    category: '장바구니',
    title: '장바구니 3천원 할인 쿠폰',
    value: 10000,
    count: 32,
    require: '30,000원 이상 구매시 사용 가능',
    due: '20250830',
  },
  // [온라인] 등급 모듈 쿠폰
  {
    type: 'tier',
    category: '장바구니',
    title: '장바구니 3천원 할인 쿠폰\n장바구니 3천원 할인 쿠폰',
    rate: 10,
    tier: '등급',
    count: 2,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    due: '20250830',
  },
];

// 온라인 쿠폰 샘플 데이터 목록
export const mockOnlineCouponList: CouponData[] = [
  ...mockCoupons,
  ...mockCoupons,
  ...mockCoupons,
  ...mockCoupons,
  ...mockCoupons,
  // [온라인] 그룹핑 쿠폰
  {
    type: 'discount',
    category: '일반',
    title: '10% 할인 쿠폰',
    rate: 10,
    tier: '등급',
    count: 1,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    start: '20250707',
    due: '20250817',
    group: {
      id: 'group-1',
      title: '캠페인 우수고객 그룹핑 쿠폰',
    },
  },
  {
    type: 'discount',
    category: '일반',
    title: '10% 할인 쿠폰',
    rate: 10,
    tier: '등급',
    count: 2,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    start: '20250707',
    due: '20250817',
    group: {
      id: 'group-1',
      title: '캠페인 우수고객 그룹핑 쿠폰',
    },
  },
  // [온라인] 그룹핑 쿠폰 2
  {
    type: 'discount',
    category: '일반',
    title: '10% 할인 쿠폰',
    rate: 10,
    tier: '등급',
    count: 1,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    start: '20250707',
    due: '20250817',
    group: {
      id: 'group-2',
      title: '캠페인 우수고객 그룹핑 쿠폰 222222222222',
    },
  },
  {
    type: 'discount',
    category: '일반',
    title: '10% 할인 쿠폰',
    rate: 10,
    tier: '등급',
    count: 2,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    start: '20250707',
    due: '20250817',
    group: {
      id: 'group-2',
      title: '캠페인 우수고객 그룹핑 쿠폰 222222222222',
    },
  },
];

// 오프라인 쿠폰 샘플 데이터 목록
export const mockOfflineCouponList: CouponData[] = [
  // [오프라인] pis 바코드 회수 유형 - 플러스포인트
  {
    type: 'barcode',
    category: '신촌점 헤이마이뷰티 혜택',
    title: '화장품/뷰티 플포 1만P 할인',
    point: 10000,
    count: 99,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    due: '20250715',
    store: '신촌점',
  },
  // [오프라인] 인증키
  {
    type: 'authKey',
    category: '상품할인권',
    title: '상품 10,000원 할인 쿠폰',
    point: 10000,
    count: 99,
    require: '30,000원 이상 구매시 사용 가능',
    due: '20250730',
    store: '전점',
  },
  // [오프라인] 직원 확인 회수 유형
  {
    type: 'eyeCheck',
    category: '상품할인권',
    title: '상품 5,000원 할인 쿠폰',
    point: 5000,
    count: 99,
    require: '50,000원 이상 구매시 사용 가능',
    due: '20250730',
    store: '전점',
  },
  // [오프라인] 사은품 교환권
  {
    type: 'gift',
    category: '사은품 교환권',
    title: '카카오 최고심 30일 무료 이모티콘(1개 한정)',
    perk: '이모티콘',
    count: 32,
    require: '킨텍스점 9F OO브랜드 직원에게 제시',
    due: '20250830',
    store: '전점',
  },
  // [오프라인] 카페H 이용권
  {
    type: 'cafe',
    category: '카페H 이용권',
    title: '무료 음료 1잔 이용권',
    perk: '1잔',
    count: 32,
    require: '킨텍스점 9F OO브랜드 직원에게 제시',
    due: '20250830',
    store: '전점',
  },
  // [오프라인] CIS - 온오프공용
  {
    type: 'cis',
    category: '상품할인권',
    title: '상품 10,000원 할인 쿠폰\n쿠폰명 2줄 제한 최대글자수',
    value: 10000,
    tier: '등급',
    count: 2,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    due: '20250830',
    store: '더현대서울, 압구정본점 외 12지점',
  },
  // [오프라인] 그룹핑 쿠폰
  {
    type: 'barcode',
    category: '신촌점 헤이마이뷰티 혜택',
    title: '화장품/뷰티 플포 1만P 할인',
    point: 10000,
    count: 99,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    start: '20250707',
    due: '20250817',
    store: '신촌점',
    group: {
      id: 'group-3',
      title: '캠페인 우수고객 오프라인 그룹핑 쿠폰',
    },
  },
  {
    type: 'barcode',
    category: '신촌점 헤이마이뷰티 혜택',
    title: '화장품/뷰티 플포 1만P 할인',
    point: 10000,
    count: 99,
    require: '30,000원 이상 구매시 최대 20,000원 할인',
    start: '20250707',
    due: '20250817',
    store: '신촌점',
    group: {
      id: 'group-3',
      title: '캠페인 우수고객 오프라인 그룹핑 쿠폰',
    },
  },
];

// 쿠폰 사용하기 - 바코드 임시 데이터
export const mockCouponBarcode = {
  src: '/images/sample_barcode.png',
  alt: '쿠폰 바코드',
};

// 온라인 > 주차권 쿠폰 샘플 데이터
export const mockParkingCouponItem = {
  title: '현대백화점 2시간 무료 주차권',
  perk: '2시간',
  require: '현대백화점 주차장 입차시 사용 가능',
  start: '20250401',
  due: '20250430',
  store: '전점',
};

// 쿠폰 상세 샘플 데이터
export const mockDetailCouponItem = {
  couponImg: {
    src: '/images/sample_coupon.png',
    alt: '귀여운 내가 참자! 나는 고심이',
  },
  barcodeImg: {
    ...mockCouponBarcode,
  },
  title: '카카오 최고심 30일 무료 이모티콘 (1개 한정)',
  require: '30,000원 이상 구매시 사용 가능',
  start: '20250130',
  due: '20250430',
  store: '신촌점',
  location: '외부링크 연결',
  target: '신규 자사 회원고객',
  content: '최고심 30일 무료 이모티콘 1EA(1개 한정)',
  usageLimit: '0/1개',
};
