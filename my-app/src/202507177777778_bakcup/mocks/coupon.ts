// 쿠폰 샘플 데이터
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
