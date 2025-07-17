// 기프트 이미지 샘플 데이터
export const mockGiftImage = {
  src: '/images/dummy/@sample_food_01.png',
  alt: '과일 종합 꾸러미',
};
export const mockGiftImage2 = {
  src: '/images/img_gift.png',
  alt: '과일 종합 꾸러미',
};

// ==================== H.Point ==================== //
export const mockHPointData = {
  summary: {
    available: 10000,
    expected: 30,
    expireSoon: 10000,
  },
  histories: [
    {
      id: 'hpoint-1',
      title: '아디다스 구매 포인트 사용기간 만료',
      amount: 50000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'expire' as const, //소멸
    },
    {
      id: 'hpoint-2',
      title: '아디다스 구매 취소 포인트 적립취소',
      amount: 43000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'use' as const, //사용
    },
    {
      id: 'hpoint-3',
      title: '티쏘 구매 포인트 적립',
      amount: 8000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'earn' as const, //적립
    },
    {
      id: 'hpoint-4',
      title: '[비오템] 올인원 핸드크림 50ml 구매 포인트',
      amount: 500,
      date: '20260125',
      orderId: '25122512345678',
      type: 'expected' as const, //적립예정
      expectedDate: '20260101', //적립예정날짜
    },
  ],
};
// H.Point소멸예정포인트
export const mockHPointExpiringData = {
  summary: {
    expiring: 1000,
  },
  histories: [
    {
      id: 'hpoint-expire-1',
      title: 'MD프로모션인 경우 고정문구 노출',
      amount: 8000,
      endDate: '20250430',
      remainingDays: 3,
    },
    {
      id: 'hpoint-expire-2',
      title: '적립금 리워드 프로모션인 경우 프로모션명',
      amount: 8000,
      endDate: '20250430',
      remainingDays: 3,
    },
    {
      id: 'hpoint-expire-3',
      title: 'MD프로모션인 경우 고정문구 노출',
      amount: 8000,
      endDate: '20250430',
      remainingDays: 3,
    },
  ],
};

// ==================== RSVP ==================== //
export const mockRsvpPointData = {
  summary: {
    available: 10000,
    expected: 30,
    expireSoon: 10000,
  },
  histories: [
    {
      id: 'rsvp-point-1',
      title: '아디다스 구매 포인트 사용기간 만료',
      amount: 50000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'expire' as const, //소멸
    },
    {
      id: 'rsvp-point-2',
      title: '아디다스 구매 취소 포인트 적립취소',
      amount: 43000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'use' as const, //사용
    },
    {
      id: 'rsvp-point-3',
      title: '티쏘 구매 포인트 적립',
      amount: 8000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'earn' as const, //적립
    },
    {
      id: 'rsvp-point-4',
      title: '[비오템] 올인원 핸드크림 50ml 구매 포인트',
      amount: 500,
      date: '20260125',
      orderId: '25122512345678',
      type: 'expected' as const, //적립예정
      expectedDate: '20260101', //적립예정날짜
    },
    {
      id: 'rsvp-point-5',
      title: '[비오템] 올인원 핸드크림 50ml 구매 포인트',
      amount: 500,
      date: '20260125',
      orderId: '25122512345678',
      type: 'expected' as const, //적립예정
      expectedDate: '20260101', //적립예정날짜
      theMoney: true, //더머니여부
    },
    {
      id: 'rsvp-point-6',
      title: '아디다스 사용기간 만료',
      amount: 43000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'expire' as const, //소멸
      expectedDate: '20260101', //적립예정날짜
    },
  ],
};
// RSVP 소멸예정포인트
export const mockRsvpPointExpiringData = {
  summary: {
    expiring: 1000,
  },
  histories: [
    {
      id: 'rsvp-point-expire-1',
      title: '아디다스 여름 프로모션',
      amount: 8000,
      endDate: '20250430',
      remainingDays: 3,
    },
    {
      id: 'rsvp-point-expire-2',
      title: '아디다스 여름 프로모션',
      amount: 8000,
      endDate: '20250430',
      remainingDays: 3,
    },
  ],
};

// ==================== 예치금 ==================== //
export const mockDepositData = {
  summary: {
    deposit: 10030,
  },
  histories: [
    {
      id: 'deposit-1',
      title: '주문취소',
      amount: 50000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'cancel' as const, //주문취소
    },
    {
      id: 'deposit-2',
      title: '예치금 환불',
      amount: 43000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'refund' as const, //환불
    },
    {
      id: 'deposit-3',
      title: '상품 구매',
      amount: 8000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'use' as const, //사용
    },
    {
      id: 'deposit-4',
      title: '상품권 결제 잔액 환불',
      amount: 500,
      date: '20260125',
      orderId: '25122512345678',
      type: 'deposit' as const, //예치
    },
    {
      id: 'deposit-5',
      title: '상품권 결제 잔액 환불',
      amount: 500,
      date: '20260125',
      orderId: '25122512345678',
      type: 'deposit' as const, //예치
    },
  ],
};

// ==================== 멤버십 이용내역 ==================== //
// 멤버십 이용항목 기본 샘플 데이터
export const mockMembershipHistory = {
  id: 'membership-history-id',
  label: '멤버십 플러스 ',
  state: '가입',
  updateDate: '2025.01.15',
  infos: {
    startDate: '2025-01-01',
    endDate: '2025-01-31',
    cancelConfirmedDate: '2025.05.03',
    paymentAmount: 10000,
    payMethod: '123-01-****** [카카오뱅크]',
    cancelReason: '직접해지',
  },
};
// 멤버십 이용항목 배열
export const mockMembershipHistoryList = [
  { ...mockMembershipHistory, id: 'membership-history-1' },
  { ...mockMembershipHistory, id: 'membership-history-2', label: '멤버십 프라임', state: '2회차' },
  { ...mockMembershipHistory, id: 'membership-history-3', state: '3회차' },
  { ...mockMembershipHistory, id: 'membership-history-4', label: '멤버십 프라임', state: '해지' },
  { ...mockMembershipHistory, id: 'membership-history-5' },
];
