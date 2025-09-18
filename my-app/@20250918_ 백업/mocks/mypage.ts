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

// ==================== 마이페이지 메인 - 알림 ==================== //
export const mockMainAlramItem = {
  id: 'alram-1',
  date: '오늘',
  items: [
    {
      title: '관심 브랜드의 신규 기획전 오픈',
      content: '{브랜드명} 신규 기획전 오픈! 지금 바로 확인해보세요.',
      timeText: '방금 전',
      showMore: false,
    },
    {
      title: '관심 브랜드의 신규 콘텐츠 등록',
      content: '{브랜드명} 신규 기획전 오픈! 지금 바로 확인해보세요.',
      timeText: '1시간 전',
      showMore: false,
    },
  ],
};
export const mockMainAlramList = [
  { ...mockMainAlramItem, id: 'alram-1' },
  {
    ...mockMainAlramItem,
    id: 'alram-2',
    date: '2025년 6월 13일 금요일',
    items: [
      {
        title: '관심 브랜드의 신규 기획전 오픈',
        content: '{브랜드명}의 래플 상품이 공개됐습니다! 미리 구경해보세요.',
        timeText: undefined,
        showMore: true, // 더보기 버튼 표시
      },
      {
        title: '새로운 팔로워',
        content: '{닉네임} 님이 당신을 팔로우했어요! 나의 팔로워 현황을 확인해보세요.',
        timeText: undefined,
        showMore: false,
      },
    ],
  },
  {
    ...mockMainAlramItem,
    id: 'alram-3',
    date: '2025년 6월 12일 목요일',
    items: [
      {
        title: '주문상태 변경 알림',
        content: '주문하신 {상품명}의 주문 상태가 {배송상태}(으)로 변경됐습니다.',
        timeText: undefined,
        showMore: false,
      },
      {
        title: '생일 축하',
        content: '생일 축하드립니다! 기념 쿠폰을 지금 다운로드 하세요.',
        timeText: undefined,
        showMore: false,
      },
    ],
  },
];
// 관심 브랜드의 래플 상품 오픈 알림 (D)
export const mockOpenAlramItem = {
  id: 'open-1',
  content: '{브랜드명}의 래플 상품이 공개됐습니다! 미리 구경해보세요.',
  timeText: '23시간 전',
};
export const mockOpenAlramList = [
  { ...mockOpenAlramItem, id: 'open-1', timeText: '30분 전' },
  {
    ...mockOpenAlramItem,
    id: 'open-2',
    content: '{브랜드명} 사은품 판매 시작! 수량 소진 전 서두르세요.',
    timeText: '3시간 전',
  },
  {
    ...mockOpenAlramItem,
    id: 'open-3',
    content: '{브랜드명} 래플 응모 시작! 지금 응모하고 기회를 잡아보세요.',
    timeText: '13시간 전',
  },
  { ...mockOpenAlramItem, id: 'open-4' },
  { ...mockOpenAlramItem, id: 'open-5' },
  { ...mockOpenAlramItem, id: 'open-6' },
  { ...mockOpenAlramItem, id: 'open-7' },
  { ...mockOpenAlramItem, id: 'open-8' },
  { ...mockOpenAlramItem, id: 'open-9' },
  { ...mockOpenAlramItem, id: 'open-10' },
];

// ==================== 마이페이지 상품 테스트 ==================== //
// 상품 이미지 샘플 데이터
const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};
// 메인 상품 카드 기본 샘플 데이터
export const mockProductCard = {
  id: 'prod-card-id',
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  emblem: '퍼프데이',
  badge: 'N+N',
  price: {
    current: 123456789,
    // original: 189000,
    // discountRate: 32,
  },
};
// 메인 상품 카드 배열
export const mockProductCardList = [
  { ...mockProductCard, id: 'prod-card-1' },
  { ...mockProductCard, id: 'prod-card-2' },
  { ...mockProductCard, id: 'prod-card-3' },
  { ...mockProductCard, id: 'prod-card-4' },
];

// ==================== 마이페이지 - 여행  ==================== //
// 여행 이미지 샘플 데이터
export const mockTripImage = {
  src: '/images/dummy/@sample_product_03.png',
  alt: '대만/단수이4일 이미지',
};

// 여행 아이템
export const mockTripItem = {
  id: 'trip-id',
  href: '#',
  image: mockTripImage,
  title:
    '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
  orderOptions: ['25.10.10 (금)', '15:00', '성인'],
  price: {
    current: 576000,
    original: 600000,
  },
  quantity: 1,
  orderStatus: {
    status: 'trip_payment_completed' as const, // 여행_결제완료
    // date: '2025-10-25T12:34:56',
    orderCase: 'trip' as const, // 여행
    trip: {
      type: 'trip' as const, // 여행타입(기본)
    },
  },
};
// 여행 주문그룹 목록
export const mockTripGroupList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockTripItem,
        id: 'trip-01',
        orderStatus: {
          ...mockTripItem.orderStatus,
          status: 'trip_payment_completed' as const, // 여행_결제완료
        },
      },
      {
        ...mockTripItem,
        id: 'trip-02',
        orderStatus: {
          ...mockTripItem.orderStatus,
          status: 'trip_reserve_confirmed' as const, // 여행_예약확정
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    reserveNumber: '25122512345678',
    items: [
      {
        ...mockTripItem,
        id: 'trip-01',
        orderStatus: {
          ...mockTripItem.orderStatus,
          status: 'trip_cancle_apply' as const, // 여행_취소요청
        },
      },
      {
        ...mockTripItem,
        id: 'trip-02',
        orderStatus: {
          ...mockTripItem.orderStatus,
          status: 'trip_cancelled' as const, // 여행_취소완료
        },
      },
      {
        ...mockTripItem,
        id: 'trip-03',
        orderStatus: {
          ...mockTripItem.orderStatus,
          status: 'trip_completed' as const, // 여행_여행완료
        },
      },
      {
        ...mockTripItem,
        id: 'trip-04',
        orderStatus: {
          ...mockTripItem.orderStatus,
          status: 'trip_completed' as const, // 여행_여행완료
        },
      },
      {
        ...mockTripItem,
        id: 'trip-05',
        orderStatus: {
          ...mockTripItem.orderStatus,
          status: 'trip_completed' as const, // 여행_여행완료
        },
      },
    ],
  },
];

// 항공 아이템
export const mockTripAirItem = {
  id: 'trip-air-id',
  href: '#',
  image: mockTripImage,
  price: {
    current: 23456780,
  },
  orderStatus: {
    status: 'trip_payment_completed' as const, // 여행_결제완료
    // date: '2025-10-25T12:34:56',
    orderCase: 'trip' as const, // 여행
    trip: {
      type: 'air' as const, // 여행타입(항공)
      tripInfos: ['해외', '다구간'],
      segments: [
        {
          id: '1',
          from: '인천(ICN)',
          to: '도쿄(NRT)',
          airline: '대한항공',
          note: '공동운항',
        },
        { id: '2', from: '도쿄(NRT)', to: '로스앤젤레스(LAX)', airline: '대한항공' },
        { id: '3', from: '로스앤젤레스(LAX)', to: '도쿄(NRT)', airline: '아시아나' },
        { id: '4', from: '도쿄(NRT)', to: '인천(ICN)', airline: '아시아나' },
      ],
    },
  },
  orderAddInfo: [
    { label: '출발일자', value: '2025.12.09 (화)' },
    { label: '탑승인원', value: '3명 (성인1, 소아1, 유아1)' },
    { label: '좌석등급', value: '이코노미' },
  ],
};
// 항공 주문그룹 목록
export const mockTripAirGroupList = [
  {
    orderDate: '20251225',
    reserveNumAir: '25122512345678',
    reserveNumTHT: '25122512345678',
    items: [
      {
        ...mockTripAirItem,
        id: 'trip-01',
        orderStatus: {
          ...mockTripAirItem.orderStatus,
          status: 'trip_payment_completed' as const, // 여행_결제완료
        },
      },
    ],
  },
];

// 패키지 아이템
export const mockTripPackageItem = {
  id: 'trip-package-id',
  href: '#',
  image: mockTripImage,
  title:
    '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
  price: {
    current: 23456780,
  },
  orderStatus: {
    status: 'trip_payment_completed' as const, // 여행_결제완료
    // date: '2025-10-25T12:34:56',
    orderCase: 'trip' as const, // 여행
    trip: {
      type: 'package' as const, // 여행타입(패키지)
      tripInfos: ['패키지', '3박5일'],
    },
  },
  orderAddInfo: [
    { label: '일정', value: '2025.10.10 (금) ~ 2025.10.14 (화) ' },
    { label: '인원', value: '4명 (성인2, 소아1, 유아1)' },
  ],
};
// 패키지 주문그룹 목록
export const mockTripPackageGroupList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    reserveNum: '25122512345678',
    items: [
      {
        ...mockTripPackageItem,
        id: 'trip-01',
        orderStatus: {
          ...mockTripPackageItem.orderStatus,
          status: 'trip_payment_completed' as const, // 여행_결제완료
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    reserveNum: '25122512345678',
    items: [
      {
        ...mockTripPackageItem,
        id: 'trip-01',
        orderStatus: {
          ...mockTripPackageItem.orderStatus,
          status: 'trip_payment_completed' as const, // 여행_결제완료
        },
      },
    ],
  },
];

// ==================== 여행 상품 상세  ==================== //
// 직접등록 상품목록
export const mockTripDetailList = [
  {
    ...mockTripItem,
    id: 'trip-detail-01',
    title:
      '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
    orderOptions: ['25.10.10 (금)', '15:00', '성인'],
    price: {
      current: 576000,
      original: 600000,
    },
    quantity: 1,
    orderStatus: {
      ...mockTripItem.orderStatus,
      status: 'trip_payment_completed' as const, //여행_결제완료
      date: '2025-10-25T12:34:56',
      trip: {
        type: 'trip' as const, // 여행타입(여행)
        isTripConfirmed: false, //여행 확정 여부
      },
    },
  },
  {
    ...mockTripItem,
    id: 'trip-detail-02',
    title:
      '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
    orderOptions: ['25.10.10 (금)', '15:00', '성인'],
    price: {
      current: 576000,
      original: 600000,
    },
    quantity: 1,
    orderStatus: {
      ...mockTripItem.orderStatus,
      status: 'trip_payment_completed' as const, //여행_결제완료
      date: '2025-10-25T12:34:56',
      orderCase: 'trip' as const, // 여행
      trip: {
        type: 'trip' as const, // 여행타입(여행)
        isTripConfirmed: true, //여행 확정 여부
      },
    },
  },
  {
    ...mockTripItem,
    id: 'trip-detail-03',
    title:
      '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
    orderOptions: ['25.10.10 (금)', '15:00', '성인'],
    price: {
      current: 576000,
      original: 600000,
    },
    quantity: 1,
    orderStatus: {
      ...mockTripItem.orderStatus,
      status: 'trip_completed_review' as const, // 여행_여행완료(리뷰작성 완료)
      date: '2025-10-25T12:34:56',
      orderCase: 'trip' as const, // 여행
      trip: {
        type: 'trip' as const, // 여행타입(여행)
      },
    },
  },
  {
    ...mockTripItem,
    id: 'trip-detail-04',
    title:
      '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
    orderOptions: ['25.10.10 (금)', '15:00', '성인'],
    price: {
      current: 576000,
      original: 600000,
    },
    quantity: 1,
    orderStatus: {
      ...mockTripItem.orderStatus,
      status: 'trip_completed_no_review' as const, // 여행_여행완료(리뷰작성 전)
      date: '2025-10-25T12:34:56',
      orderCase: 'trip' as const, // 여행
      trip: {
        type: 'trip' as const, // 여행타입(여행)
      },
    },
  },
];

// asp 패키지 상품목록
export const mockAspDetailList = [
  {
    ...mockTripPackageItem,
    id: 'trip-detail-01',
    title:
      '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
    price: {
      current: 23456780,
    },
    orderStatus: {
      ...mockTripPackageItem.orderStatus,
      status: 'trip_payment_completed' as const, // 여행_결제완료
      // date: '2025-10-25T12:34:56',
      orderCase: 'trip' as const, // 여행
      trip: {
        type: 'package' as const, // 여행타입(패키지)
        tripInfos: ['패키지', '3박5일'],
        isTripConfirmed: true, //여행 확정 여부
      },
    },
    orderAddInfo: [
      { label: '기간', value: '9일' },
      { label: '일정', value: '2025.10.10 (금) ~ 2025.10.14 (화)' },
      { label: '항공사', value: '대한항공' },
      { label: '인원', value: '4명 (성인2, 소아1, 유아1)' },
    ],
  },
  {
    ...mockTripPackageItem,
    id: 'trip-detail-02',
    title:
      '대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 대만/단수이4일 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전 #노쇼핑 #101빌딩/서문정거리 #특식4회 #OZ 오전',
    price: {
      current: 23456780,
    },
    orderStatus: {
      ...mockTripPackageItem.orderStatus,
      status: 'trip_payment_completed' as const, // 여행_결제완료
      // date: '2025-10-25T12:34:56',
      orderCase: 'trip' as const, // 여행
      trip: {
        type: 'package' as const, // 여행타입(패키지)
        tripInfos: ['패키지', '3박5일'],
        isTripConfirmed: false, //여행 확정 여부
      },
    },
    orderAddInfo: [
      { label: '기간', value: '9일' },
      { label: '일정', value: '2025.10.10 (금) ~ 2025.10.14 (화)' },
      { label: '항공사', value: '대한항공' },
      { label: '인원', value: '4명 (성인2, 소아1, 유아1)' },
    ],
  },
];

// ==================== 마이페이지 - 메인 ==================== //

// 상단배너 더미 데이터
export const mainBannerData = [
  {
    id: 'banner_01',
    image: { src: '/images/dummy/@sample_mypage_banner.png', alt: '배너 이미지' },
    href: '#',
  },
  {
    id: 'banner_02',
    image: { src: '/images/dummy/@sample_mypage_banner.png', alt: '배너 이미지' },
    href: '#',
  },
  {
    id: 'banner_03',
    image: { src: '/images/dummy/@sample_mypage_banner.png', alt: '배너 이미지' },
    href: '#',
  },
];

// 혜택 더미 데이터
export const mainBenefitData = [
  {
    id: 'benefit_01',
    image: { src: '/images/club/club_tab_icon_01.png', alt: '배너 이미지' },
    href: '#',
    title: 'CLUB BEAUTY',
    desc: '뷰티 한정 월별 쿠폰팩 지급',
  },
  {
    id: 'benefit_02',
    image: { src: '/images/club/club_tab_icon_01.png', alt: '배너 이미지' },
    href: '#',
    title: 'CLUB BEAUTY',
    desc: '뷰티 한정 월별 쿠폰팩 지급',
  },
  {
    id: 'benefit_03',
    image: { src: '/images/club/club_tab_icon_01.png', alt: '배너 이미지' },
    href: '#',
    title: 'CLUB BEAUTY',
    desc: '뷰티 한정 월별 쿠폰팩 지급',
  },
];
