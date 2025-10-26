const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};

// 플래그 우측 날짜 데이터샘플
const mockOrderFlagDate = '12.25 12:34:56';
export const mockDateNote = { date: null, dateNote: '2025년 12월 24일(수) 도착예정' };
export const mockDateNote2 = { date: null, dateNote: '2025년 12월 24일(수) 도착' };

/* 마이페이지 - 과거주문내역조회(장바구니/주문서 화면의 OrderItem.tsx 컴퍼넌트 사용) */

// 주문 아이템
export const mockOrderItem = {
  id: 'order-id',
  // href: '#',
  image: mockProdImage,
  brand: '쿼드쎄라',
  title: '포헤르츠 3D 부스터 마스크 젤 80g',
  orderOptions: ['옵션 1', '옵션 2', '옵션 3', '옵션 4'],
  fieldOption: ['선물포장 + 쇼핑백(+1,000원)'],
  gift: '[비오템옴므] 핸드크림 증정',
  price: {
    current: 23456780,
    original: 23456780,
  },
  quantity: 1,
  // 주문상태 (OrderStatus.ts 참고)
  // orderStatus: {
  //   status: 'delivered_reviewed' as const,
  //   date: mockOrderFlagDate,
  //   // dateNote: 'date 관련텍스트(ex:도착예정)',
  //   // note: '목록/상세 둘다 노출되는 텍스트',
  //   // detailNote:'상세에서만 노출되는 텍스트'
  //   // orderCase: 'pickup' as const,
  // },
};

// 주문 아이템 (테이블 오더)
export const mockTorderItemDetails = [
  {
    label: '공기밥',
    quantity: 1,
    price: {
      current: 1000,
      original: 1200,
    },
  },
  {
    label: '라면사리',
    quantity: 99,
    price: {
      current: 2000,
    },
  },
  {
    label: '옵션명',
    quantity: 990,
    price: {
      current: 123450000,
      original: 123456000,
    },
  },
];
export const mockTorderItem = {
  id: 'prod-id',
  // href: '#',
  brand: '투썸플레이스',
  title: '오렌지자몽케이크',
  price: {
    current: 30000,
    original: 29000,
  },
  quantity: 99,
  orderOptions: ['Grande', '샷추가'],
  // tOrderDetail: mockTorderItemDetails,
};

// ---------- 마이페이지 과거주문내역조회 (더현대)주문확인/배송조회 목록 ---------- //
export const mockOrderList = [
  // 택배배송
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    // paymentLabel: '우측표기',
    deliveries: [
      {
        id: 'order-tb-01',
        deliveryType: '택배배송',
        sellers: [
          {
            id: 'order-tb-01-seller-01',
            seller: '팬트리1985',
            // arrival: '10월 10일 (금) 새벽배송 도착',
            items: [
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-01',
                orderStatus: {
                  status: 'order_completed' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-02',
                orderStatus: {
                  status: 'payment_completed' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-03',
                orderStatus: {
                  status: 'delivery_ready' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-04',
                orderStatus: {
                  status: 'delivery_ready' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-05',
                orderStatus: {
                  status: 'delivery_ready' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-06',
                orderStatus: {
                  status: 'delivery_ready' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251223',
    // paymentLabel: '우측표기',
    deliveries: [
      {
        id: 'order-tb-02',
        deliveryType: '택배배송',
        sellers: [
          {
            id: 'order-tb-02-seller-01',
            seller: '팬트리1985',
            // arrival: '10월 10일 (금) 새벽배송 도착',
            items: [
              {
                ...mockOrderItem,
                id: 'order-tb-02-seller-01-item-01',
                orderStatus: {
                  status: 'order_completed' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---------- 마이페이지 과거주문내역조회 (더현대)주문확인/배송조회 상세 ---------- //
export const mockOrderDetailItemsCase = [
  // 일반 (해당 화면에 standardOrder)
  {
    id: 'order-detail-default',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-default-seller-01',
        // seller: '현대백화점 천호점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-holiday-seller-01-item-01',
            orderStatus: {
              status: 'order_completed',
              date: mockOrderFlagDate,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-holiday-seller-01-item-02',
            orderStatus: {
              status: 'payment_completed',
              date: mockOrderFlagDate,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-holiday-seller-01-item-03',
            orderStatus: {
              status: 'delivery_ready',
              date: mockOrderFlagDate,
            },
          },
        ],
      },
    ],
  },
  // 스토어픽 (해당 화면에 storepickOrder)
  {
    id: 'order-detail-storepickOrder',
    // deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-storepickOrder-seller-01',
        // seller: '현대백화점 천호점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-storepickOrder-seller-01-item-01',
            orderStatus: {
              status: 'payment_completed',
              date: mockOrderFlagDate,
              orderCase: 'storePick' as const,
            },
          },
        ],
      },
    ],
  },
  // 체험단 (해당 화면에 experienceOrder)
  {
    id: 'order-detail-experience',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-experience-seller-01',
        seller: '현대백화점 압구정 본점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-experience-seller-01-item-01',
            delivery: {
              // deliveryFee: 3000,
              feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'payment_completed',
              date: mockOrderFlagDate,
              orderCase: 'experience' as const,
            },
          },
        ],
      },
    ],
  },
  // 방문픽업 (해당 화면에 visitOrder)
  {
    id: 'order-detail-visit',
    // deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-visit-seller-01',
        // seller: '현대백화점 천호점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-visit-seller-01-item-01',
            orderStatus: {
              status: 'pickup_available',
              date: mockOrderFlagDate,
              orderCase: 'pickup' as const,
            },
          },
        ],
      },
    ],
  },
  // 렌탈 (해당 화면에 rentalOrder)
  {
    id: 'order-detail-rental',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-rental-seller-01',
        // seller: '현대백화점 천호점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            id: 'order-detail-rental-seller-01-item-01',
            href: '#',
            image: mockProdImage,
            brand: '쿼드쎄라',
            title: '포헤르츠 3D 부스터 마스크 젤 80g',
            // orderOptions: ['상담 후 결제'],
            gift: '[비오템옴므] 핸드크림 증정',
            price: {
              current: 23456780,
              original: 23456780,
            },

            quantity: 1,
            // delivery: {
            //   // deliveryFee: 3000,
            //   feePolicy: 'freeOnly', //무료배송
            // },
            orderStatus: {
              status: 'apply_completed',
              date: mockOrderFlagDate,
              orderCase: 'rental' as const,
            },
            // 설치상품 정보 있는경우
            rentalInfo: {
              monthlyFee: 44000,
              period: 60,
              separateContract: true,
            },
          },
        ],
      },
    ],
  },
  // 기프티콘 (해당 화면에 gifticonOrder)
  {
    id: 'order-detail-gifti',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-gifti-seller-01',
        // seller: 'e슈퍼마켓',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-gifti-seller-01-item-01',
            price: {
              current: 0,
              original: 23456780,
            },
            // delivery: {
            //   deliveryFee: 3000,
            //   feePolicy: 'freeOnly',
            // },
            orderStatus: {
              status: 'delivering',
              date: mockOrderFlagDate,
              orderCase: 'gifticon' as const,
            },
            isGifticon: true, // 기프티콘여부
          },
        ],
      },
    ],
  },
  // 명절배송 (해당 화면에 holidayOrder)
  {
    id: 'order-detail-holiday',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-holiday-seller-01',
        // seller: '팬트리1985',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-holiday-seller-01-item-01',
            orderStatus: {
              status: 'order_completed',
              date: mockOrderFlagDate,
              orderCase: 'holiday' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-holiday-seller-01-item-02',
            orderStatus: {
              status: 'payment_completed',
              date: mockOrderFlagDate,
              orderCase: 'holiday' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-holiday-seller-01-item-03',
            orderStatus: {
              status: 'delivery_ready',
              date: mockOrderFlagDate,
              orderCase: 'holiday' as const,
            },
          },
        ],
      },
    ],
  },
  // 선물하기 (해당 화면에 giftOrder)
  {
    id: 'order-detail-gift',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-gift-seller-01',
        // seller: '팬트리1985',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-gift-seller-01-item-01',
            orderStatus: {
              status: 'order_completed',
              date: mockOrderFlagDate,
              orderCase: 'gift' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-gift-seller-01-item-02',
            orderStatus: {
              status: 'payment_completed',
              date: mockOrderFlagDate,
              orderCase: 'gift' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-gift-seller-01-item-03',
            orderStatus: {
              status: 'delivery_ready',
              date: mockOrderFlagDate,
              orderCase: 'gift' as const,
            },
          },
        ],
      },
    ],
  },
];

// ---------------  영수증(OrderReceipt.ts) --------------- //
// --- 주문 정보 ---
export const mockOrderInfo = {
  customerName: '김현대',
  userId: 'userID',
};
// --- 결제 정보 (다중 그룹) ---
export const mockPaymentGroups = [
  {
    orderNumber: '25122512345678',
    method: 'H.PointPay 카드 현대카드',
    cardNumber: '1234-56**-****-123*',
    approvalNumber: '251225123456781234',
    amount: 123456789,
  },
  {
    method: 'H.Point',
    amount: 123456789,
  },
  {
    method: 'RSVP Point',
    amount: 123456789,
  },
  {
    method: '예치금',
    amount: 123456789,
  },
];

// --- 금액 합계 ---
export const mockSummary = {
  dutyFreeValue: 123456789, // 면세물품가액
  taxableValue: 123456789, // 과세물품가액
  vat: 123456789, // 부가세
  hPointUsed: 123456, // H.Point 사용
  theMoneyUsed: 123456, // 더머니 사용
  rsvpUsed: 123456, // RSVP 사용
  shippingFee: 6000, // 배송료
  totalAmount: 1234567890, // 총 합계
};

// --------------- 상단 주문정보 샘플데이터 --------------- //
export const mockOrderTopInfoData = {
  date: '20251225',
  orderNumber: '25122512345678',
};

// --------------- 결제수단 & 승인내역 샘플데이터 --------------- //
export const mockPaymentApprovalData = {
  paymentData: [
    {
      label: 'H.Point Pay',
      price: 123456700000,
      detail: {
        card: '현대백화점 카드',
        cardPlan: '일시불',
        cardAt: '20251224165543',
        cardAmt: 123456700000,
      },
      //info: '정확한 무이자 할부 적용 여부는 카드사를 통해 확인 가능해요.',
    },
  ],
  approvalData: [
    { label: '더머니', price: 123456700000 },
    { label: '상품권전환금', price: 123456700000 },
    { label: '예치금', price: 123456700000 },
  ],
};

// --------------- 결제 정보 샘플데이터 --------------- //
// 결제정보_더현대
export const mockTheHyundaiPayment = {
  variant: 'extra_payment' as const,
  items: [
    { label: '상품금액', price: 180000 },
    { label: '배송비', price: 0 },
    { label: '할인금액', price: -30000 },
    { label: '포인트 사용', point: -20000 },
    { label: '결제수단 혜택', price: -45000 },
  ],
  totalPrice: 105000,
};

// 결제정보_투홈
export const mockTohomePayments = [
  // 기본
  {
    variant: 'extra_payment' as const,
    items: [
      { label: '총 상품금액', price: 23456700000 },
      {
        label: '총 할인금액',
        price: -30000,
        detail: [
          { title: '주문할인', content: '-30,000원' },
          { title: '카드할인', content: '-0원' },
          { title: '결제수단할인', content: '-0원' },
        ],
      },
      {
        label: '쿠폰/포인트',
        price: -20000,
        detail: [
          { title: '쿠폰할인', content: '-1,000원' },
          { title: 'H.Bonus', content: '-0원', desc: '비과세 1,500원 / 과세 500원' },
          { title: 'H.Point', content: '-0원', desc: '비과세 1,500원 / 과세 500원' },
        ],
      },
      {
        label: '총 배송비',
        price: -45000,
        detail: [
          { title: '배송비', content: '-3,000원' },
          { title: '배송비 쿠폰', content: '-3,000원' },
        ],
      },
    ],
    totalPrice: 105000,
  },
  // 결제정보_투홈_명절배송
  {
    variant: 'extra_payment' as const,
    items: [
      { label: '총 주문금액', price: 180000 },
      {
        label: '총 할인금액',
        price: -30000,
        detail: [
          { title: '주문할인', content: '-30,000원' },
          { title: '카드할인', content: '-0원' },
          { title: '결제수단할인', content: '-0원' },
        ],
      },
      {
        label: '쿠폰/포인트',
        price: -20000,
        detail: [
          { title: '쿠폰할인', content: '-1,000원' },
          { title: '현대백화점 카드', content: '일시불' },
        ],
      },
      {
        label: '더머니',
        price: 123456700000,
      },
      {
        label: '상품권전환금',
        price: 123456700000,
      },
      {
        label: '예치금',
        price: 123456700000,
      },
    ],
    totalPrice: undefined,
    approvedAt: '20251224165543',
    approvedAmt: 123456700000,
  },
  // 결제정보_투홈_테이블오더
  {
    variant: 'extra_payment' as const,
    items: [
      { label: '총 주문금액', price: 180000 },
      {
        label: '총 할인금액',
        price: -30000,
        detail: [
          { title: '주문할인', content: '-30,000원' },
          { title: '카드할인', content: '-0원' },
          { title: '결제수단할인', content: '-0원' },
        ],
      },
      {
        label: '총 매장 할인금액',
        price: -20000,
        detail: [
          { title: '일리프리아니 1,000원 할인쿠폰', content: '-1,000원' },
          { title: '한끼식사메뉴 2,000원 할인쿠폰', content: '-2,000원' },
        ],
      },
      {
        label: '추가 할인 혜택',
        price: -45000,
        detail: [
          { title: '쿠폰할인', content: '-1,000원' },
          { title: 'H.Point', content: '-0원', desc: '비과세 1,500원 / 과세 500원' },
        ],
      },
      {
        label: '예치금',
        price: -10000,
      },
    ],
    totalPrice: 105000,
  },
];

// --------------- 적립 예정 포인트 샘플데이터 --------------- //
export const mockExpectedPointData = [
  { label: 'H.Point', point: 12345 },
  { label: '명품, 패션/라이프 마일리지', point: 23456 },
];

// --------------- 환불 정보 샘플데이터 --------------- //
// 더현대_환불정보
export const mockRefundInfoData = {
  totalAmount: 105000, // 총 환불금액 직접 지정시
  refundTotals: [
    {
      id: 'credit-card',
      label: 'H.Point Pay',
      price: 123450,
      fields: [{ label: '현대백화점 카드', content: '일시불' }],
    },
  ],
};
// 투홈_환불정보
export const mockRefundInfoData2 = {
  totalAmount: 105000, // 총 환불금액 직접 지정시
  refundItems: [
    {
      id: 'order-amount',
      label: '주문금액',
      price: 180000,
      fields: [
        { id: 'order-amount-1', label: '상품금액', price: -30000 },
        { id: 'order-amount-2', label: '배송비', price: -0 },
      ],
    },
    {
      id: 'deducted-amount',
      label: '환불차감금액',
      price: 50000,
      fields: [
        { id: 'extra-deducted-amount-1', label: '상품할인', price: -1000 },
        { id: 'extra-deducted-amount-2', label: '카드할인', price: -1000 },
        { id: 'extra-deducted-amount-3', label: '결제수단할인', price: -1000 },
        { id: 'extra-deducted-amount-4', label: '쿠폰할인', price: -1000 },
        { id: 'extra-deducted-amount-5', label: 'H.Bonus', price: -1000 },
        { id: 'extra-deducted-amount-7', label: '배송비할인', price: -1000 },
      ],
    },
  ],
};

// --------------- 주문자 정보 샘플데이터 --------------- //
export const mockOrdererInfoData = {
  name: '김*대',
  phone: '010-****-5678',
  email: 'hy**dai@hyundai.com',
};

// --------------- 환불 계좌 정보 샘플데이터 --------------- //
export const mockRetunerInfoData = {
  account: '기업은행  110-89-1234567',
  name: '김*대',
};

// --------------- 사은품 정보 샘플데이터 --------------- //
export const mockGiftInfo = {
  content: '국산 요리용 양파 2kg',
};

// --------------- 테이블정보 샘플데이터 --------------- //
export const mockTableInfoData = {
  label: '10번 테이블',
  content: 'Gastro Table 압구정본점',
};

// --------------- 테이블오더 매장정보 샘플데이터 --------------- //
export const mockTableStoreInfoData = {
  defaultAddress: '서울특별시 강남구 테헤란로 517',
  detailedAddress: '현대백화점 무역센터점 3F',
};

// --------------- 반품/교환 사유 샘플데이터 --------------- //
export const mockReturnReasonData = {
  requestedAt: '2025.12.25 12:34:56',
  reason: '단순변심',
  detailReason: '상품이 잘못 들어가 있어요. 다시 바꿔주세요.',
  images: [mockProdImage, mockProdImage, mockProdImage, mockProdImage, mockProdImage],
};
export const mockExchangeReasonData = {
  requestedAt: '2025.12.25 12:34:56',
  reason: '단순변심',
  detailReason: '상품이 잘못 들어가 있어요. 다시 바꿔주세요.',
  images: [mockProdImage, mockProdImage, mockProdImage, mockProdImage, mockProdImage],
};

// --------------- 배송지, 받으시는 분 --------------- //
const mockDefaultInfo = { name: '김*대', phone: '010-****-5678' };
const mockDefaultInfo2 = { name: '김*대', phone: ['010-****-5678', '010-****-5678'] };
const mockDefaultAddr = {
  defaultAddress: '서울특별시 강남구 테헤란로 32-1',
  detailedAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
};
export const mockDeliveryCase = [
  {
    ...mockDefaultInfo,
    ...mockDefaultAddr,
    addPhone: '010-****-5978',
    note: `안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!`,
    dawnNote: '새벽배송 시 초인종 누르지 말아주세요.',
    parcelNote: '택배배송 시 연락 후 배송 부탁드립니다.',
  },
  {
    ...mockDefaultInfo,
    addPhone: '010-****-5978',
    note: `안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요.빨리 왔으면 좋겠어요!`,
  },
  {
    ...mockDefaultInfo,
    ...mockDefaultAddr,
    addPhone: '010-****-5978',
    note: `안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요.빨리 왔으면 좋겠어요!`,
  },
  {
    ...mockDefaultInfo,
    ...mockDefaultAddr,
    addPhone: '010-****-5978',
    dawnNote: '새벽배송 시 초인종 누르지 말아주세요.',
    parcelNote: '택배배송 시 연락 후 배송 부탁드립니다.',
  },
  {
    ...mockDefaultInfo2,
    ...mockDefaultAddr,
    dawnNote: '문 앞에 놓아주세요(#1***)',
    parcelNote: '문 앞에 놔주세요.',
  },
  {
    ...mockDefaultInfo2,
    ...mockDefaultAddr,
    dawnNote: '문 앞에 놓아주세요(#1***)',
    parcelNote: '문 앞에 놔주세요.',
  },
];

export const mockReceiverInfoData = [
  {
    name: '김*대',
    phone: '010-****-5678',
    note: '부재 시 경비실에 맡겨 주세요',
    confirmUntil: '20251023',
    message: `작년 한 해 수고해 주신 노고에 깊은 감사를 드리며,\n올 해도 뜻깊은 한 해가 되시기 바랍니다.`,
  },
  {
    name: '김*대',
    phone: '010-****-5678',
    note: '부재 시 경비실에 맡겨 주세요',
    confirmUntil: '20251023',
    message: `작년 한 해 수고해 주신 노고에 깊은 감사를 드리며,\n올 해도 뜻깊은 한 해가 되시기 바랍니다.`,
    isRejected: true, // 거절여부
  },
  {
    name: '김*대',
    phone: '010-****-5678',
    message: `작년 한 해 수고해 주신 노고에 깊은 감사를 드리며,\n올 해도 뜻깊은 한 해가 되시기 바랍니다.`,
    isRejected: true, // 거절여부
  },
];

// --------------- 과거주문내역조회 기본 구성 데이터들  --------------- //
export const mockCommonOrder = {
  topInfo: mockOrderTopInfoData, // 상단 주문정보
  deliveryAddress: mockDeliveryCase, // 배송지, 받으시는분
  payment: mockTheHyundaiPayment, // 더현대 결제정보
  paymentTohome: mockTohomePayments, // 투홈 결제정보
  expectedPoint: mockExpectedPointData, // 적립예정포인트
  paymentApproval: mockPaymentApprovalData, // 결제수단 & 승인내역
  refund: mockRefundInfoData, // 환불정보__더현대
  tohomeRefund: mockRefundInfoData2, // 환불정보__투홈
  orderer: mockOrdererInfoData, // 주문자정보
  returner: mockRetunerInfoData, // 환불계좌정보
  receiverInfo: mockReceiverInfoData, // 선물 받는 분
  torderStoreInfo: mockTableStoreInfoData, // 테이블오더_매장정보
  torderTableInfo: mockTableInfoData, // 테이블오더__테이블정보
  giftInfo: mockGiftInfo, // 사은품정보
};

// ---------- 마이페이지 과거주문내역조회 (투홈)주문확인/배송조회 목록 ---------- //
export const mockToHomeOrderList = [
  // 새벽배송
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    // paymentLabel: '우측표기',
    deliveries: [
      {
        id: 'order-tb-01',
        deliveryType: '새벽배송',
        sellers: [
          {
            id: 'order-tb-01-seller-01',
            seller: '팬트리1985',
            // arrival: '10월 10일 (금) 새벽배송 도착',
            items: [
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-01',
                orderStatus: {
                  status: 'payment_completed' as const,
                  date: mockOrderFlagDate,
                  orderCase: 'dawn' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-02',
                orderStatus: {
                  status: 'delivered' as const,
                  date: mockOrderFlagDate,
                  orderCase: 'dawn' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-04',
                orderStatus: {
                  status: 'delivering' as const,
                  date: mockOrderFlagDate,
                  orderCase: 'dawn' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-03',
                orderStatus: {
                  status: 'delivering' as const,
                  date: mockOrderFlagDate,
                  orderCase: 'dawn' as const,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // 택배배송
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    // paymentLabel: '우측표기',
    deliveries: [
      {
        id: 'order-tb-02',
        deliveryType: '택배배송',
        sellers: [
          {
            id: 'order-tb-02-seller-01',
            seller: '팬트리1985',
            // arrival: '10월 10일 (금) 새벽배송 도착',
            items: [
              {
                ...mockOrderItem,
                id: 'order-tb-02-seller-01-item-01',
                orderStatus: {
                  status: 'order_cancel' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-02-seller-01-item-02',
                orderStatus: {
                  status: 'claim_exchange' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-02-seller-01-item-03',
                orderStatus: {
                  status: 'delivered' as const,
                  date: mockOrderFlagDate,
                  // orderCase: 'pickup' as const,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  //테이블오더
  {
    orderNumber: '25122512345678',
    orderDate: '20251223',
    // paymentLabel: '우측표기',
    deliveries: [
      {
        id: 'order-tb-03',
        deliveryType: '테이블오더',
        sellers: [
          {
            id: 'order-tb-03-seller-01',
            seller: '팬트리1985',
            // arrival: '10월 10일 (금) 새벽배송 도착',
            items: [
              {
                ...mockTorderItem,
                id: 'order-tb-03-seller-01-item-01',
                orderOptions: undefined,
                orderStatus: {
                  status: 'pickup_waiting' as const,
                  date: mockOrderFlagDate,
                  orderCase: 'tOrder' as const,
                },
              },
              {
                ...mockTorderItem,
                id: 'order-tb-03-seller-01-item-02',
                orderStatus: {
                  status: 'pickup_completed' as const,
                  date: mockOrderFlagDate,
                  orderCase: 'tOrder' as const,
                },
              },
              {
                ...mockTorderItem,
                id: 'order-tb-03-seller-01-item-03',
                orderOptions: ['스페셜정식 A'],
                tOrderDetail: mockTorderItemDetails,
                orderStatus: {
                  status: 'order_cancel' as const,
                  date: mockOrderFlagDate,
                  orderCase: 'tOrder' as const,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------  마이페이지 과거주문내역조회 (투홈)주문확인/배송조회 상세 --------------- //
export const mockToHomeDetailList = [
  // 택배배송
  {
    id: 'order-detail-tb-01',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-tb-01-seller-01',
        seller: '판매자명',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-01-item-01',
            // delivery: {
            //   deliveryFee: 3000,
            //   // feePolicy: 'freeOnly',
            // },
            orderStatus: {
              status: 'payment_completed',
              ...mockDateNote,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-01-item-02',
            // delivery: {
            //   deliveryFee: 3000,
            //   // feePolicy: 'freeOnly',
            // },
            orderStatus: {
              status: 'delivery_ready',
              ...mockDateNote,
            },
          },
        ],
      },
    ],
  },
  // 택배배송(멀티)
  {
    id: 'order-detail-tb-02',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-tb-02-seller-01',
        seller: '판매자명',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tb-02-seller-01-item-01',
            delivery: {
              // deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            orderStatus: {
              status: 'payment_completed',
              ...mockDateNote,
            },
          },
        ],
      },
      {
        id: 'order-detail-tb-02-seller-02',
        seller: '판매자명',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tb-02-seller-02-item-01',
            delivery: {
              // deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            orderStatus: {
              status: 'delivered',
              ...mockDateNote2,
              noReview: true,
            },
          },
        ],
      },
    ],
  },
  // 투홈구독
  {
    id: 'order-detail-subscription',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-tb-01-seller-01',
        seller: '판매자명',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-01-item-01',
            // delivery: {
            //   deliveryFee: 3000,
            //   // feePolicy: 'freeOnly',
            // },
            orderStatus: {
              status: 'payment_completed',
              dateNote: '2025년 12월 24일(수) 출고예정',
            },
          },
        ],
      },
    ],
  },
  // 테이블오더
  {
    id: 'order-detail-torder',
    deliveryType: '테이블오더',
    sellers: [
      {
        id: 'order-detail-torder-seller-01',
        // seller: '판매자명',
        items: [
          {
            ...mockTorderItem,
            id: 'order-detail-torder-seller-01-item-01',
            orderOptions: [],
            orderStatus: {
              status: 'pickup_waiting',
              date: mockOrderFlagDate,
              orderCase: 'tOrder',
            },
          },
          {
            ...mockTorderItem,
            id: 'order-detail-torder-seller-01-item-02',
            orderStatus: {
              status: 'pickup_completed',
              date: mockOrderFlagDate,
              orderCase: 'tOrder',
            },
          },
          {
            ...mockTorderItem,
            id: 'order-detail-torder-seller-01-item-04',
            tOrderDetail: mockTorderItemDetails,
            orderStatus: {
              status: 'order_cancel',
              date: mockOrderFlagDate,
              orderCase: 'tOrder',
            },
          },
        ],
      },
    ],
  },
];

// 투홈 명절배송 샘플데이터 (단독, 멀티)
export const mockToHomeHolidayDetailList = [
  // 명절배송_단독
  {
    id: 'order-detail-holi-01',
    deliveryType: '명절선물',
    sellers: [
      {
        id: 'order-detail-holi-01-seller-01',
        // seller: '판매자명',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-holi-01-seller-01-item-01',
            orderStatus: {
              status: 'accept_pending',
              // date: mockOrderFlagDate,
              note: '받는 분 수락 대기중',
              orderCase: 'holiday',
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-holi-01-seller-01-item-02',
            orderStatus: {
              status: 'delivering',
              ...mockDateNote,
              orderCase: 'holiday',
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-holi-01-seller-01-item-03',
            orderStatus: {
              status: 'accepted_gift_ready',
              // date: mockOrderFlagDate,
              note: '받는 분 수락 완료',
              orderCase: 'holiday',
            },
          },
        ],
      },
    ],
  },
  // 명절배송_멀티1
  {
    id: 'order-detail-holi-02',
    deliveryType: '선물배송',
    sellers: [
      {
        id: 'order-detail-holi-02-seller-01',
        seller: '투홈',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-holi-02-seller-01-item-01',
            orderStatus: {
              status: 'accepted_gift_ready',
              // date: mockOrderFlagDate,
              note: '받는 분 수락 완료',
              orderCase: 'holiday',
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-holi-02-seller-01-item-02',
            orderStatus: {
              status: 'delivering',
              ...mockDateNote,
              orderCase: 'holiday',
            },
          },
        ],
      },
    ],
  },
  // 명절배송_멀티2
  {
    id: 'order-detail-holi-03',
    deliveryType: '선물배송',
    sellers: [
      {
        id: 'order-detail-holi-03-seller-01',
        seller: '판매자명',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-holi-03-seller-01-item-01',
            orderStatus: {
              status: 'order_cancel',
              // date: mockOrderFlagDate,
              orderCase: 'holiday',
              detailNote: '받는 분 거절',
            },
          },
        ],
      },
    ],
  },
];

// --------------- 샘플용 --------------- //
// 버튼 보기용 샘플
export const mockTestSample = [
  {
    id: 'order-detail-test',
    sellers: [
      {
        id: 'order-detail-test-seller-01',
        items: [
          {
            ...mockOrderItem,
            fieldOption: ['선물포장 + 쇼핑백(+1,000원)'],
            orderStatus: {
              status: 'apply_completed',
              date: mockOrderFlagDate,
              //orderCase: 'holiday' as const,
            },
          },
        ],
      },
    ],
  },
];
// 버튼 보기용 샘플(테이블오더)
export const mockTestTorderSample = [
  {
    id: 'order-detail-test',
    sellers: [
      {
        id: 'order-detail-test-seller-01',
        items: [
          {
            ...mockTorderItem,
            brand: '온드린',
            title: '한우 뚝배기 불고기 스페셜 정식',
            orderOptions: ['스페셜정식 A'],
            tOrderDetail: mockTorderItemDetails,
            orderStatus: {
              status: 'payment_completed' as const,
              date: mockOrderFlagDate,
              orderCase: 'tOrder' as const,
            },
          },
        ],
      },
    ],
  },
];
