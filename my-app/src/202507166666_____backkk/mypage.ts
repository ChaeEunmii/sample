// 상품 이미지 샘플 데이터
export const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};
// 기프트 이미지 샘플 데이터
export const mockGiftImage = {
  src: '/images/dummy/@sample_food_01.png',
  alt: '과일 종합 꾸러미',
};

// 기프트 라디오 옵션 *<GiftRadioGroup options={giftOptions} />
export const giftOptions = [
  {
    value: '1',
    image: mockGiftImage,
    label: '과일 종합 꾸러미',
  },
  {
    value: '2',
    image: mockGiftImage,
    label: '야채 종합 꾸러미',
  },
  {
    value: '3',
    image: mockGiftImage,
    label: '농산물 셋트 랜덤 기프트',
  },
];

// H.point, RSVP 포인트 기간 정렬 옵션
export const periodOptions = [
  {
    label: '1주일',
    value: 'option1',
  },
  {
    label: '1개월',
    value: 'option2',
  },
  {
    label: '3개월',
    value: 'option3',
  },
  {
    label: '6개월',
    value: 'option4',
  },
  {
    label: '12개월',
    value: 'option5',
  },
];

/* 기프트 라디오 선택 옵션 */
export const giftRadioOptions = [
  {
    label: '1주일',
    value: 'option1',
  },
  {
    label: '1개월',
    value: 'option2',
  },
  {
    label: '3개월',
    value: 'option3',
  },
  {
    label: '6개월',
    value: 'option4',
  },
  {
    label: '12개월',
    value: 'option5',
  },
];

// ==================== 마이바우처 ==================== //
export const mockVoucherCard = {
  id: 'voucher-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
  },
  subTitle: '',
  title: '라이프 플랑크톤 피부강화 에센스 로션 75ml',
  infos: {
    orderNum: '2505040100737373',
    amount: 1,
    startDate: '20250401',
    endDate: '20250430',
    endTime: '오후 2시',
    useDate: '20251225',
    useTime: '오후 2시',
    usePlace: '다이슨 입점 점포',
    pickupPlace: '더현대서울 비오템',
    caution: '상품상세에서 입력한 경우에만 노출됩니다. 미입력 시 하이픈(-)',
    // createDate: '20251225',
    // cancelDate:'20251225',
  },
  rsvp: true, // rsvp 여부
  type: 'voucher' as const,
  status: 'available' as const,
};

// 카드 배열
export const mockVoucherCards = [
  // ─────────────────────── 바우처 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'voucher-available',
    type: 'voucher' as const,
    status: 'available',
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      useDate: '20251225',
      useTime: '오후 2시',
    },
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'voucher-used',
    type: 'voucher' as const,
    status: 'used' as const,
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      useDate: '20251225',
      useTime: '오후 2시',
      endDate: '20251225',
      endTime: '오후 2시',
    },
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'voucher-expired',
    type: 'voucher' as const,
    status: 'expired' as const,
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      useTime: '오후 2시',
      endDate: '20251225',
      endTime: '오후 2시',
    },
  },
  //취소
  {
    ...mockVoucherCard,
    id: 'voucher-cancelled',
    type: 'voucher' as const,
    status: 'cancelled' as const,
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      cancelDate: '20251225', // 취소발생일
    },
  },

  // ─────────────────────── 방문 쿠폰 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'coupon-available',
    type: 'coupon' as const,
    status: 'available' as const,
    title: '[RSVP] 위대한 뮤지션 100인전 전시 무료 입장권',
    subTitle: '공연',
    infos: {
      // amount: 1,
      endDate: '20250716', //'오늘까지' 로 설정
    },
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'coupon-used',
    type: 'coupon' as const,
    status: 'used' as const,
    title: '[RSVP] 위대한 뮤지션 100인전 전시 무료 입장권',
    subTitle: '공연',
    infos: {
      // amount: 1,
      useDate: '20250501',
      endDate: '20250501',
    },
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'coupon-expired',
    type: 'coupon' as const,
    status: 'expired' as const,
    title: '[RSVP] 위대한 뮤지션 100인전 전시 무료 입장권',
    subTitle: '공연',
    infos: {
      // amount: 1,
      useDate: '20250501',
      endDate: '20250501',
    },
  },

  // ─────────────────────── 방문 예약 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'reservation-available',
    type: 'reservation' as const,
    status: 'available' as const,
    title: '[RSVP] 베리 스타일링 클래스(feat. 벤틀리서울)',
    subTitle: '벤틀리',
    infos: {
      amount: 1,
      endDate: '20250501',
      useTime: '오후 5시',
    },
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'reservation-used',
    type: 'reservation' as const,
    status: 'used' as const,
    title: '[RSVP] 베리 스타일링 클래스(feat. 벤틀리서울)',
    subTitle: '벤틀리',
    infos: {
      amount: 1,
      useDate: '20250501',
      endDate: '20250501',
      useTime: '오후 5시',
    },
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'reservation-expired',
    type: 'reservation' as const,
    status: 'expired' as const,
    title: '[RSVP] 베리 스타일링 클래스(feat. 벤틀리서울)',
    subTitle: '벤틀리',
    infos: {
      amount: 1,
      endDate: '20250501',
      useTime: '오후 5시',
    },
  },

  // ─────────────────────── 체험/신청 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'trial-available',
    type: 'experience' as const,
    status: 'available' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      createDate: '20251225',
    },
    // options: ['WHITE', 'Fabric'],
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'trial-used',
    type: 'experience' as const,
    status: 'used' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      createDate: '20251225',
    },
    options: ['WHITE', 'Fabric'],
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'trial-expired',
    type: 'experience' as const,
    status: 'expired' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      createDate: '20251225',
    },
  },
  //취소
  {
    ...mockVoucherCard,
    id: 'trial-cancelled',
    type: 'experience' as const,
    status: 'cancelled' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      cancelDate: '20251225', // 취소발생일
    },
    options: ['100 ml', 'FREE'],
  },
] as const;

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
