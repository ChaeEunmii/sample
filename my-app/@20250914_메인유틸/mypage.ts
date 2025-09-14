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
      title: '아디다스 구매 취소 포인트 적립취소',
      amount: 50000,
      date: '20260125',
      orderId: '25122512345678',
      type: 'use' as const, //사용
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

// ==================== 기프트 배송조회 샘플 데이터 ====================//
export const mockGiftDeliverItem = {
  id: 'gift-delivery-1',
  status: 'delivered' as const,
  title: '[26년 명절 기프트] 발몽 브이 리프트 세럼',
  infos: { courier: '우체국택배', date: '20260431' },
};
export const mockGiftDeliverList = [
  { ...mockGiftDeliverItem, id: 'gift-delivery-1' },
  {
    ...mockGiftDeliverItem,
    id: 'gift-delivery-2',
    status: 'delivering' as const,
    title:
      '[26년 명절 기프트] 발몽 브이 리프트 세럼 (리프팅 케어 세럼) 150ml 3pcs 세트 상품명이 더 긴 경우 말줄임 상품명이 더 긴 경우 말줄임',
  },
  { ...mockGiftDeliverItem, id: 'gift-delivery-3' },
  { ...mockGiftDeliverItem, id: 'gift-delivery-4', status: 'delivering' as const },
  { ...mockGiftDeliverItem, id: 'gift-delivery-5' },
];

// ==================== 받은 선물함 ==================== //
export const mockReceivedGiftItem = {
  id: 'gift_received-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 576000,
    original: 600000,
  },
  quantity: 12,
  orderStatus: {
    status: 'giftbox_payment_completed' as const, // 선물함_결제완료
    orderCase: 'giftbox' as const, // 받은선물함
  },
};
export const mockReceivedGiftList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    senderName: '이*대',
    items: [
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-02',
        orderStatus: {
          status: 'giftbox_product_ready' as const, // 선물함_상품준비중
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-02-1',
        orderStatus: {
          status: 'giftbox_payment_completed' as const, // 선물함_결제완료
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-02-2',
        orderStatus: {
          status: 'giftbox_cancel_refund' as const, // 선물함_취소/환불
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-02-3',
        orderStatus: {
          status: 'giftbox_delivering' as const, // 선물함_배송중
          orderCase: 'giftbox' as const,
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    senderName: '이*대',
    items: [
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-03',
        orderStatus: {
          status: 'giftbox_delivered_no_review' as const, // 선물함_배송완료(리뷰작성 전)
          orderCase: 'giftbox' as const,
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    senderName: '이*대',
    items: [
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-04',
        orderStatus: {
          status: 'giftbox_delivered_review' as const, // 선물함_배송완료(리뷰작성 완료)
          orderCase: 'giftbox' as const,
        },
      },
    ],
  },
];
// 선물보기 (받은선물함)
export const mockReceivedGiftDetail = {
  orderNumber: '25122512345678',
  orderDate: '20251225',
  items: [
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01',
      orderStatus: {
        status: 'giftbox_delivering' as const, // 선물함_배송중
        orderCase: 'giftbox' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-1',
      orderStatus: {
        status: 'giftbox_used' as const, // 선물함_사용완료
        orderCase: 'giftbox' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-2',
      orderStatus: {
        status: 'giftbox_cancel_refund' as const, // 선물함_취소/환불
        orderCase: 'giftbox' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-3',
      orderStatus: {
        status: 'giftbox_delivered_no_review' as const, // 선물함_배송완료(리뷰작성 전)
        orderCase: 'giftbox' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-4',
      orderStatus: {
        status: 'giftbox_delivered_review' as const, // 선물함_배송완료(리뷰작성 완료)
        orderCase: 'giftbox' as const,
      },
    },
  ],
};
// 배송지 정보 샘플데이터
export const mockDelivery = {
  note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
};
// 받는 분 샘플데이터
export const mockReceiverDetail = [
  {
    ...mockReceivedGiftItem,
    id: 'gift_receiver-01',
    orderStatus: {
      status: 'giftbox_proposal' as const, // 선물함_선물제안
      orderCase: 'giftbox' as const,
      gift: {
        isSelectionCompleted: true, // 선택완료
      },
    },
  },
  {
    ...mockReceivedGiftItem,
    id: 'gift_receiver-02',
    orderStatus: {
      status: 'giftbox_proposal' as const, // 선물함_선물제안
      orderCase: 'giftbox' as const,
    },
  },
];

// ==================== 보낸 선물함 ==================== //
export const mockSentGiftItem = {
  id: 'gift_sent-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 576000,
    original: 600000,
  },
  quantity: 12,
  orderStatus: {
    orderCase: 'giftbox' as const, // 받은선물함
  },
};
export const mockSentGiftList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockSentGiftItem,
        id: 'gift_sent-01',
        orderStatus: {
          status: 'giftbox_payment_completed' as const, // 선물함_결제완료
          orderCase: 'giftbox' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02',
        orderStatus: {
          status: 'giftbox_product_ready' as const, // 선물함_상품준비중
          orderCase: 'giftbox' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02-1',
        orderStatus: {
          status: 'giftbox_product_ready' as const, // 선물함_상품준비중
          orderCase: 'giftbox' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02-2',
        orderStatus: {
          status: 'giftbox_order_cancel' as const, // 선물함_주문취소
          orderCase: 'giftbox' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02-3',
        orderStatus: {
          status: 'giftbox_delivering' as const, // 선물함_배송중
          orderCase: 'giftbox' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockSentGiftItem,
        id: 'gift_sent-03',
        orderStatus: {
          status: 'giftbox_delivering' as const, // 선물함_배송중
          orderCase: 'giftbox' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
    ],
  },
];

// ==================== 선물픽 ==================== //
export const mockSentGiftPickItem = {
  id: 'gift_pick-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 576000,
    original: 600000,
  },
  quantity: 12,
  orderStatus: {
    orderCase: 'giftbox' as const, // 선물픽
  },
};
export const mockSentGiftPickList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    giftPickNumber: 'P25122512345678',
    receiverName: '이*대',
    items: [
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-01',
        orderStatus: {
          status: 'giftbox_address_completed' as const, // 선물함_배송지입력 완료
          orderCase: 'giftbox' as const,
          gift: {
            isSelectionCompleted: true, // 선택완료
          },
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-01-1',
        orderStatus: {
          status: 'giftbox_address_cancel' as const, // 선물함_배송지입력 취소
          orderCase: 'giftbox' as const,
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    giftPickNumber: 'P25122512345678',
    receiverName: '이*대',
    items: [
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-02',
        orderStatus: {
          status: 'giftbox_soldout_cancel' as const, // 선물함_품절취소
          orderCase: 'giftbox' as const,
          gift: {
            isSelectionCompleted: true, // 선택완료
          },
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-02-1',
        orderStatus: {
          status: 'giftbox_apply_cancel' as const, // 선물함_접수취소
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-02-2',
        orderStatus: {
          status: 'giftbox_order_cancel' as const, // 선물함_주문취소
          orderCase: 'giftbox' as const,
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    giftPickNumber: 'P25122512345678',
    receiverName: '이*대',
    items: [
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-03-1',
        orderStatus: {
          status: 'giftbox_proposal' as const, // 선물함_선물제안
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-03-2',
        orderStatus: {
          status: 'giftbox_payment_completed' as const, // 선물함_결제완료
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-03-3',
        orderStatus: {
          status: 'giftbox_product_ready' as const, // 선물함_상품준비중
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-03-4',
        orderStatus: {
          status: 'giftbox_delivering' as const, // 선물함_배송중
          orderCase: 'giftbox' as const,
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-03-5',
        orderStatus: {
          status: 'giftbox_delivered' as const, // 선물함_배송완료
          orderCase: 'giftbox' as const,
        },
      },
    ],
  },
];

// ====================  받는 분  ==================== //
// 주문 아이템 샘플
export const mockReceiverOrderItem = {
  ...mockReceivedGiftItem,
  id: 'gift_receiver-01',
  orderStatus: {
    status: 'giftbox_payment_completed' as const, // 선물함_결제완료
    orderCase: 'giftbox' as const,
  },
};

// 받는분 영역 카드 (없는) 경우 아이템 - 동일카드메시지
export const mockReceiverItem = {
  id: 'receiver-id',
  receiver: { name: '김*대', phone: '010-****-5678' },
  orderData: mockReceiverDetail,
  canResend: true, // 재발송 가능 여부
};
// 보낸선물함 상세 - 카드 (없는) 목록 샘플데이터 - 동일카드메시지
export const mockReceiverList = [
  {
    ...mockReceiverItem,
    id: 'receiver-01',
    orderData: [{ ...mockReceiverOrderItem, id: 'order-01-01' }],
  },
  {
    ...mockReceiverItem,
    id: 'receiver-02',
    orderData: [
      { ...mockReceiverOrderItem, id: 'order-02-01' },
      { ...mockReceiverOrderItem, id: 'order-02-02' },
    ],
  },
  {
    ...mockReceiverItem,
    id: 'receiver-03',
    orderData: [{ ...mockReceiverOrderItem, id: 'order-03-01' }],
    canResend: false, // 재발송 가능 여부
  },
];

// 받는분 영역 카드 (있는) 경우 아이템 - 개별카드메시지
export const mockReceiverHasCardItem = {
  id: 'receiver-id',
  receiver: { name: '김*대', phone: '010-****-5678' },
  orderData: mockReceiverDetail,
  canResend: true, // 재발송 가능 여부
  sentCard: {
    cardId: 'card-1',
    message: '생일을 진심으로 축하합니다.',
    receiver: '김*대',
    orderDate: '20251215',
  },
};
// 보낸선물함 상세 - 카드 (있는) 목록 샘플데이터 - 개별카드메시지
export const mockReceiverHasCardList = [
  {
    ...mockReceiverHasCardItem,
    id: 'receiver-01',
    orderData: [{ ...mockReceiverOrderItem, id: 'order-01' }],
    sentCard: {
      cardId: 'card-2',
      message: '생일을 진심으로 축하합니다.',
      receiver: '김*대',
      orderDate: '20251215',
    },
  },
  {
    ...mockReceiverHasCardItem,
    id: 'receiver-02',
    orderData: [
      { ...mockReceiverOrderItem, id: 'order-01' },
      { ...mockReceiverOrderItem, id: 'order-02' },
    ],
    canResend: false, // 재발송 가능 여부
  },
];

// ==================== H.Point Pay 결제수단 ==================== //
export const mockHpayMethodList = [
  {
    id: 'card-01',
    label: '현대백화점 카드',
    cardNumber: '12345678****123*',
    brand: 'hyundaiDepartment',
    isDefault: true, // 초기 기본 카드
  },
  {
    id: 'card-02',
    label: '현대 카드',
    cardNumber: '12345678****123*',
    brand: 'hyundai',
  },
  {
    id: 'card-03',
    label: '삼성 카드',
    cardNumber: '12345678****123*',
    brand: 'samsung',
  },
  {
    id: 'card-04',
    label: 'Cube',
    cardNumber: '12345678****123*',
    brand: 'shinhan',
  },
  {
    id: 'card-05',
    label: 'KEB 하나은행',
    cardNumber: '12345678****123*',
    brand: 'hanaBank',
  },
];

// ==================== H.Point Pay 사용내역 ==================== //
export const mockHpayHistoryList = [
  {
    id: 'hpoint-history-1',
    useDate: '20260125',
    useTime: '1635',
    status: 'payment' as const, //결제
    methodType: 'hyundai' as const, //현대백화점 카드
    method: '현대카드',
    amount: 1234567890,
  },
  {
    id: 'hpoint-history-2',
    useDate: '20260125',
    useTime: '1635',
    status: 'refund' as const, //환불
    methodType: 'card' as const, // 일반카드
    method: '삼성카드',
    amount: 1234567890,
  },
  {
    id: 'hpoint-history-3',
    useDate: '20260125',
    useTime: '1635',
    status: 'payment' as const, //결제
    methodType: 'bank' as const, // 은행계좌
    method: '하나은행',
    amount: 1234567890,
  },
];

// ==================== 현대백화점 카드 확인 ==================== //
export const mockHCardList = [
  {
    id: 'card-01',
    label: '현대백화점카드',
    cardNumber: '12345678****123*',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'card-02',
    label: '현대백화점 해피포인트카드',
    cardNumber: '12345678****123*',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'card-03',
    label: 'HD현대오일뱅크카드',
    cardNumber: '12345678****123*',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'card-04',
    label: '현대백화점 Fit 카드',
    cardNumber: '12345678****123*',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'card-05',
    label: '현대백화점카드',
    cardNumber: '12345678****123*',
    brand: 'hyundaiDepartment',
  },
];

// ==================== 마이페이지 메인 - 알림 ==================== //
export const mockMainAlramItem = {
  id: 'alram-1',
  date: '2025년 6월 13일 금요일',
  items: [
    {
      title: '관심 브랜드의 신규 기획전 오픈',
      content: '신규 기획전 오픈! 지금 바로 확인해보세요.',
      timeText: '방금 전',
      showMore: true, // 더보기 버튼 표시
    },
    {
      title: '관심 브랜드의 신규 기획전 오픈',
      content: '신규 기획전 오픈! 지금 바로 확인해보세요.',
      timeText: '방금 전',
      showMore: true,
    },
  ],
};
export const mockMainAlramList = [
  { ...mockMainAlramItem, id: 'alram-1' },
  {
    ...mockMainAlramItem,
    id: 'alram-2',
    items: [
      {
        title: '관심 브랜드의 신규 기획전 오픈',
        content: '신규 기획전 오픈! 지금 바로 확인해보세요.',
        timeText: undefined,
        showMore: false,
      },
      {
        title: '관심 브랜드의 신규 기획전 오픈',
        content: '신규 기획전 오픈! 지금 바로 확인해보세요.',
        timeText: undefined,
        showMore: false,
      },
    ],
  },
];
// 관심 브랜드의 래플 상품 오픈 알림 (D)
export const mockOpenAlramItem = {
  id: 'open-1',
  content: '래플 응모 시작! 지금 응모하고 기회를 잡아보세요.',
  timeText: '23시간 전',
};
export const mockOpenAlramList = [
  { ...mockOpenAlramItem, id: 'open-1' },
  { ...mockOpenAlramItem, id: 'open-2' },
  { ...mockOpenAlramItem, id: 'open-3' },
  { ...mockOpenAlramItem, id: 'open-4' },
  { ...mockOpenAlramItem, id: 'open-5' },
  { ...mockOpenAlramItem, id: 'open-6' },
  { ...mockOpenAlramItem, id: 'open-7' },
  { ...mockOpenAlramItem, id: 'open-8' },
  { ...mockOpenAlramItem, id: 'open-9' },
  { ...mockOpenAlramItem, id: 'open-10' },
];
