// 즉시할인
export const discountItems = [
  {
    id: 'hyundaiDp',
    label: '현대백화점 카드(TIS)',
    amount: 4000,
    tip: true,
  },
  {
    id: 'hyundai',
    label: '현대카드',
    amount: 4000,
  },
  {
    id: 'hpointXsamsung',
    label: 'H.pay X 삼성카드',
    amount: 4000,
  },
  {
    id: 'tossXaccount',
    label: '토스페이 X 계좌',
    amount: 4000,
  },
  {
    id: 'shinhan',
    label: '신한카드',
    amount: 4000,
  },
  {
    id: 'woori',
    label: '우리카드',
    amount: 4000,
  },
  {
    id: 'toss',
    label: '토스카드',
    amount: 4000,
  },
];

// 결제수단
/**
  coupons - 할인쿠폰
  noInterestCoupons - 무이자쿠폰
  installments - 할부
 */
export const EmptyPaymentMethods = [];
export const paymentMethods = [
  {
    id: 'hyundai-card',
    label: '현대카드',
    cardNumber: '1234 5678 **** 345*',
    brand: 'hyundai',
    disabled: true, // 결제불가 상태
    options: {
      coupons: [
        '10% 임직원 에누리 쿠폰',
        '1만원 금액할인권',
        '2만원 금액할인권',
        '5만원 금액할인권',
      ],
      installments: ['3개월', '6개월', '12개월'],
    },
  },
  {
    id: 'hyundaidp-card',
    label: '현대백화점카드',
    cardNumber: '1234 5678 **** 345*',
    brand: 'hyundaiDepartment',
    options: {
      coupons: ['10% 할인', '5% 캐시백'],
      noInterestCoupons: [
        '2~4개월 (무이자) 쿠폰',
        '3개월 (무이자) 쿠폰',
        '3~5개월 (무이자) 쿠폰',
        '5개월 (무이자) 쿠폰',
        '6개월 (무이자) 쿠폰',
      ],
      installments: ['3개월', '6개월', '12개월'],
    },
  },
  {
    id: 'woori-card',
    label: '우리카드',
    cardNumber: '1234 5678 **** 345*',
    brand: 'woori',
    options: {
      // coupons: ['10% 할인', '5% 캐시백'],
      installments: ['3개월', '6개월', '12개월'],
    },
  },
];
export const paymentTorderMethods = [
  {
    id: 'hyundai-card',
    label: '현대카드',
    cardNumber: '1234 5678 **** 345*',
    brand: 'hyundai',
    options: {
      installments: ['일시불', '3개월', '6개월', '12개월'],
    },
  },
  {
    id: 'hyundaidp-card',
    label: '현대백화점카드',
    cardNumber: '1234 5678 **** 345*',
    brand: 'hyundaiDepartment',
    disabled: true,
    options: {
      installments: ['일시불', '3개월', '6개월', '12개월'],
    },
  },
  {
    id: 'woori-card',
    label: '우리카드',
    cardNumber: '1234 5678 **** 345*',
    brand: 'woori',
    options: {
      installments: ['일시불', '3개월', '6개월', '12개월'],
    },
  },
];
