import { mockProdImage } from './product';
import { mockProdOptionList } from './cart';
import { mockDeliveryDetailsItem } from './address';
import { mockOrderGiftList } from './order';

// 마이페이지 - 주문/배송조회
// 장바구니/주문서 화면의 OrderItem.tsx 컴퍼넌트 사용

// 주문 아이템 샘플 데이터
export const mockOrderItem = {
  id: 'order-id',
  href: '#',
  image: mockProdImage,
  brand: '쿼드쎄라',
  title: '포헤르츠 3D 부스터 마스크 젤 80g',
  orderOptions: ['옵션 1', '옵션 2', '옵션 3', '옵션 4'],
  fieldOption: ['선물포장 + 쇼핑백(+1,000원)', '각인 입력 내용 노출'],
  gift: '[비오템옴므] 핸드크림 증정',
  price: {
    current: 23456780,
    original: 23456780,
  },
  stock: 6,
  quantity: 1,
  // 주문상태 (OrderStatus.ts 참고)
  // orderStatus: {
  //   status: 'delivered_reviewed' as const,
  //   date: '2025-10-25T12:34:56',
  //   // orderCase: 'pickup' as const,
  // },
};

// ---------------------  마이페이지 주문 목록 ------------------ //
export const mockOrderList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    paymentLabel: 'Omni 결제',
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
                  date: '2025-10-25T12:34:56',
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-02',
                orderStatus: {
                  status: 'product_ready' as const,
                  date: '2025-10-25T12:34:56',
                  // orderCase: 'pickup' as const,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'order-tod-01',
        deliveryType: '오늘배송',
        sellers: [
          {
            id: 'order-tod-01-seller-01',
            seller: '현대백화점',
            arrival: '오늘밤 12시 전 도착',
            items: [
              {
                ...mockOrderItem,
                id: 'order-tb-01-seller-01-item-01',
                orderStatus: {
                  status: 'delivered' as const,
                  date: '2025-10-25T12:34:56',
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
    // paymentLabel: 'Omni 결제',
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
                  status: 'product_ready' as const,
                  date: '2025-10-25T12:34:56',
                  // orderCase: 'pickup' as const,
                },
              },
              {
                ...mockOrderItem,
                id: 'order-tb-02-seller-01-item-02',
                orderStatus: {
                  status: 'delivered_reviewed' as const,
                  date: '2025-10-25T12:34:56',
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

// ---------------------  마이페이지 주문 상세 ------------------ //
// 주문 아이템 상세 목록(일반) 데이터
export const mockOrderDetailList = [
  {
    id: 'order-detail-tb-01',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-tb-01-seller-01',
        seller: '팬트리1985',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            orderStatus: {
              status: 'product_ready',
              date: '2025-10-25T12:34:56',
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-01-item-02',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
            },
            orderAddInfo: [
              { label: '이름', value: '김현소' },
              { label: '연락처', value: '010-1234-5678' },
              {
                label: '요청사항',
                value:
                  '포장할 때 각별하게 신경써 주세요. 저번에 배송 왔을 때 다 깨지고 난리도 아니더라고요.',
              },
            ],
          },
        ],
      },
      {
        id: 'order-detail-tb-01-seller-02',
        seller: '롱샴 공식 스토어',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-02-item-01',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            title: '포헤르츠 3D 부스터 마스크 젤 80g ...',
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'order-detail-tod-01',
    deliveryType: '새벽/당일배송',
    sellers: [
      {
        id: 'order-detail-tod-01-seller-01',
        seller: '현대백화점',
        arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tod-01-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'delivered_confirmed_no_review',
              date: '2025-10-25T12:34:56',
            },
          },
        ],
      },
    ],
  },
];
// 주문 아이템 상세 목록(일반-멀티) 데이터
export const mockOrderDetaiMultilList = [
  {
    id: 'order-detail-tb-01',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-tb-01-seller-01',
        seller: 'e슈퍼마켓',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            orderStatus: {
              status: 'product_ready',
              date: '2025-10-25T12:34:56',
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-tb-01-seller-01-item-02',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'order-detail-tod-01',
    deliveryType: '새벽/당일배송',
    sellers: [
      {
        id: 'order-detail-tod-01-seller-01',
        seller: '팬트리1985',
        arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-tod-01-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'delivered_confirmed_no_review',
              date: '2025-10-25T12:34:56',
            },
          },
        ],
      },
    ],
  },
];
// 주문 상세 아이템 케이스 데이터 (일반을 제외한 케이스별 예시)
export const mockOrderDetailItemsCase = [
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
              status: 'pickup_available',
              date: '2025-10-25T12:34:56',
              orderCase: 'storePick' as const,
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
        seller: '현대백화점 천호점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-gift-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'payment_completed',
              date: '2025-10-25T12:34:56',
              orderCase: 'gift' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-gift-seller-01-item-02',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'delivered_pending_review',
              date: '2025-10-25T12:34:56',
              orderCase: 'gift' as const,
            },
          },
        ],
      },
    ],
  },
  // 역직구_EMS (해당 화면에 EMSOrder)
  {
    id: 'order-detail-EMS',
    deliveryType: 'EMS',
    sellers: [
      {
        id: 'order-detail-EMS-seller-01',
        seller: '현대백화점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-EMS-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
              orderCase: 'globalExport' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-EMS-seller-01-item-02',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'product_ready',
              date: '2025-10-25T12:34:56',
              orderCase: 'globalExport' as const,
            },
          },
        ],
      },
    ],
  },
  // 직구 (해당 화면에 globalOrder)
  {
    id: 'order-detail-global',
    deliveryType: 'NCP직구',
    sellers: [
      {
        id: 'order-detail-global-seller-01',
        seller: '현대면세점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-global-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
              orderCase: 'globalImport' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-global-seller-01-item-02',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'product_ready',
              date: '2025-10-25T12:34:56',
              orderCase: 'globalImport' as const,
            },
          },
        ],
      },
    ],
  },
  // 명절배송 (해당 화면에 holidayOrder)
  {
    id: 'order-detail-holiday',
    deliveryType: '명절배송',
    sellers: [
      {
        id: 'order-detail-holiday-seller-01',
        seller: '팬트리1985',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-holiday-seller-01-item-01',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
              orderCase: 'holiday' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-global-seller-01-item-02',
            delivery: {
              deliveryFee: 3000,
              //feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'product_ready',
              date: '2025-10-25T12:34:56',
              orderCase: 'holiday' as const,
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
              date: '2025-10-25T12:34:56',
              orderCase: 'experience' as const,
            },
          },
        ],
      },
    ],
  },
  // 사은품 (해당 화면에 purchaseGiftOrder)
  {
    id: 'order-detail-purchaseGift',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-purchaseGift-seller-01',
        seller: '현대백화점 압구정 본점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-purchaseGift-seller-01-item-01',
            price: {
              current: 0,
            },
            delivery: {
              // deliveryFee: 3000,
              feePolicy: 'freeOnly', //무료배송
            },
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
              // orderCase: 'purchaseGift' as const,
            },
          },
        ],
      },
    ],
  },
  // 문화 센터 방문 (해당 화면에 cultureOrder)
  {
    id: 'order-detail-culture',
    // deliveryType: '택배배송',
    sellers: [
      {
        id: 'order-detail-culture-seller-01',
        // seller: '현대백화점 천호점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'order-detail-culture-seller-01-item-01',
            brand: '',
            title: '미국 월배당 ETF 성공 투자 전략',
            orderOptions: [],
            fieldOption: ['4/15(화) 19:00~20:30'],
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
              orderCase: 'culture_cancelable' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-culture-seller-01-item-02',
            brand: '',
            title: '미국 월배당 ETF 성공 투자 전략',
            orderOptions: [],
            fieldOption: ['4/15(화) 19:00~20:30'],
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
              orderCase: 'culture_cancel_limit' as const,
            },
          },
          {
            ...mockOrderItem,
            id: 'order-detail-culture-seller-01-item-03',
            brand: '',
            title: '미국 월배당 ETF 성공 투자 전략',
            orderOptions: [],
            fieldOption: ['4/15(화) 19:00~20:30'],
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            orderStatus: {
              status: 'order_completed',
              date: '2025-10-25T12:34:56',
              orderCase: 'culture_cancel_disabled' as const,
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
              date: '2025-10-25T12:34:56',
              orderCase: 'pickup' as const,
            },
          },
        ],
      },
    ],
  },
];
// 렌탈 설치상품
export const mockOrderDetailCaseRental = [
  {
    id: 'order-detail-rental',
    deliveryType: '설치상품',
    sellers: [
      {
        id: 'order-detail-rental-seller-01',
        seller: '현대백화점 천호점',
        // arrival: '오늘밤 12시 전 도착',
        items: [
          {
            id: 'order-detail-rental-seller-01-item-01',
            href: '#',
            image: mockProdImage,
            brand: 'LG전자',
            title: 'DIOS 오브제 컬렉션 얼음정수기 냉장고',
            fieldOption: ['상담 후 결제'],
            options: mockProdOptionList, // cart.ts참조(옵션변경 버튼노출조건)
            gift: '[비오템옴므] 핸드크림 증정',
            price: {
              current: 23456780,
              original: 23456780,
            },
            stock: 6,
            quantity: 1,
            delivery: {
              // deliveryFee: 3000,
              feePolicy: 'freeOnly', //무료배송
            },
            orderStatus: {
              status: 'apply_completed',
              date: '2025-10-25T12:34:56',
            },
          },
        ],
      },
    ],
  },
];

// ---------------------  영수증(OrderReceipt.ts) ------------------ //
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
// --- 거래내역 상세 (다중 그룹) ---
export const mockTransactionGroups = [
  {
    date: '20251225',
    product: '탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리온 에센스 화장수 100ml',
    supplyPrice: 11223344,
    tax: 1122334,
    quantity: 100,
    total: 1234567800,
  },
  {
    date: '20251225',
    product: '[쉐르] 25SS 풀어버 25PUL1600DANNY BRONZE',
    supplyPrice: 11223344,
    tax: 1122334,
    quantity: 100,
    total: 1234567800,
  },
  {
    date: '20251225',
    product: '오버사이즈 코튼 티셔츠',
    supplyPrice: 11223344,
    tax: 1122334,
    quantity: 100,
    total: 1234567800,
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

// --------------------- 카드영수증, 현금영수증 샘플데이터 ------------------ //
// --- 주문 정보 (카드영수증용) ---
export const mockOrderInfoCard = {
  orderNumber: '25122512345678',
  customerName: '김현대',
  purchasedProduct:
    '탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리온 에센스 화장수 100ml 포함 총3건',
};
// --- 결제 정보 (카드영수증용) ---
export const mockPaymentGroupsCard = [
  {
    method: '현대백화점 카드',
    cardNumber: '12345678****1234',
    expiry: '**/**',
    transactionType: '신용(개인)/일시불',
    approvalNumber: '123456789',
    transactionDate: '2025.12.25 11:22:33',
    amount: 123456789,
  },
];
// --- 결제 정보 (현금영수증용) ---
export const mockPaymentCash = {
  approvalNumber: 'AB1234567',
  buyerNumber: '김현대',
  issueMethod: '소득공제',
  applyType: '휴대폰번호',
  issueDate: '2025.12.25 11:22:33',
  cancelDate: '-',
  receiptType: '구분명',
  orderNumber: '25122512345678',
  productName: '탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리온 에센스 화장수 100ml',
  amount: 123456789,
};
// --- 금액 정보 (카드영수증, 현금영수증) ---
export const mockSummaryShare = {
  approvalAmount: 123456789,
  supplyValue: 123456789,
  vat: 123456789,
  serviceCharge: 123456789,
  cashAmount: 123456789,
  totalAmount: 123456789,
};
// --- 판매자 정보 (카드영수증, 현금영수증) ---
export const mockSellerShare = {
  storeName: '(주)현대백화점',
  ceoName: '정지선, 정지영',
  businessNumber: '211-87-21455',
  businessType: '소매업/백화점',
  tel: '02-549-2233',
  address: '서울시 강남구 테헤란로98길 12',
};

// --------------------- 상단 주문정보 샘플데이터 ------------------ //
export const mockOrderTopInfoData = {
  date: '20251225',
  orderNumber: '25122512345678',
};

// --------------------- 결제수단 & 승인내역 샘플데이터 ------------------ //
export const mockPaymentApprovalData = {
  paymentData: [
    {
      label: '무통장입금',
      price: 123456700000,
      detail: {
        bank: 'KEB하나은행 2193139752437',
        depositorName: '입금자명 (김현대)',
      },
      info: '주문자 명과 실제 입금자명은 동일해야하며, 일치하지 않으면 거래가 취소 될 수 있습니다.',
    },
  ],
  approvalData: [
    { label: 'H.Point', price: 123456700000 },
    { label: '더머니', price: 123456700000 },
    { label: 'RSVP', price: 123456700000 },
    { label: '예치금', price: 123456700000 },
  ],
  depositDeadlineText: '2025년 12월 25일 토요일 23:59까지',
  depositDate: '20251225',
};

// --------------------- 결제 정보 샘플데이터 ------------------ //
// 계약금_잔금_대기
export const mockPaymentContractPending = {
  variant: 'contract_pending' as const,
  items: [
    { label: '상품금액', price: 6000000 },
    { label: '배송비', price: 30000 },
    { label: '할인금액', price: -800000 },
    { label: '포인트 사용', point: -200000 },
    { label: '결제수단 혜택', price: -200000 },
  ],
  totalPrice: 5030000,
  contractPrice: 2000000,
  balancePrice: 3030000,
  contractDate: '20251225',
  paymentStartDate: '20251223',
  paymentEndDate: '20251226',
};
// 계약금_잔금_완납
export const mockPaymentContractDone = {
  variant: 'contract_done' as const,
  items: [
    { label: '상품금액', price: 6000000 },
    { label: '배송비', price: 30000 },
    { label: '할인금액', price: -800000 },
    { label: '포인트 사용', point: -200000 },
    { label: '결제수단 혜택', price: -45000 },
  ],
  totalPrice: 5030000,
};
// 취소 후 위약금 발생 시
export const mockPaymentPenaltyOnly = {
  variant: 'penalty_only' as const,
  items: [
    { label: '위약금', price: 1234567 },
    { label: '배송비', price: 30000 },
    { label: '포인트 사용', point: -4567 },
    { label: '결제수단 혜택', price: -45000 },
  ],
  totalPrice: 1264567,
};

// --------------------- 적립 예정 포인트 샘플데이터 ------------------ //
export const mockExpectedPointData = [
  { label: 'H.Point', field: '주문적립', point: 12345 },
  { label: 'H.Point', field: '클럽 포인트 적립', point: 23456 },
  { label: '명품 마일리지', field: '주문적립', point: 12345 },
  { label: '패션/라이프 마일리지', field: '주문적립', point: 12345 },
  { label: '리뷰 적립', point: 12345 },
];

// --------------------- 환불 정보 샘플데이터 ------------------ //
export const mockRefundInfoData = {
  refundItems: [
    {
      label: '환불 상품금액',
      price: 123456700000,
    },
    {
      label: '배송비',
      price: 0,
    },
    {
      label: '포장비',
      price: 3000,
    },
    {
      label: '차감금액',
      price: -136450,
      fields: [
        { label: '반품 배송비', price: -3000 },
        { label: '위약금', price: -123450 },
        { label: '하나로 포장', price: -10000 },
      ],
    },
  ],
  refundTotals: [
    { label: '네이버페이 환불', price: 123450 },
    { label: '신용카드', price: 123450 },
    { label: 'H.Point', price: 123450 },
    { label: 'RSVP', price: 123450 },
  ],
};

// --------------------- 주문자 정보 샘플데이터 ------------------ //
export const mockOrdererInfoData = {
  name: '김*대',
  phone: '010-****-5678',
  email: 'hy**dai@hyundai.com',
};

// --------------- 주문/배송 상세 기본 구성 데이터 샘플  ------------------ //
import type { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
export const mockCommonOrder = {
  topInfo: mockOrderTopInfoData,
  orderItems: mockOrderDetailList as OrderDeliveryData[],
  deliveryDetail: mockDeliveryDetailsItem,
  gift: mockOrderGiftList,
  payment: mockPaymentContractDone,
  expectedPoint: mockExpectedPointData,
  paymentApproval: mockPaymentApprovalData,
  refund: mockRefundInfoData,
  orderer: mockOrdererInfoData,
};

// 버튼보기용 샘플
export const mockTestSample = [
  {
    id: 'order-detail-test',
    sellers: [
      {
        id: 'order-detail-test-seller-01',
        items: [
          {
            ...mockOrderItem,
            orderStatus: {
              status: 'apply_completed',
              date: '2025-10-25T12:34:56',
              //orderCase: 'holiday' as const,
            },
          },
        ],
      },
    ],
  },
];

// --------------- 결제정보 상세 데이터 샘플 (Amount.tsx 참조)  ------------------ //
export const paymentInfoGroups = [
  {
    id: 'amount',
    title: '상품금액',
    items: [
      {
        id: 'amount-1',
        title: '상품금액',
        price: 180000,
      },
      {
        id: 'amount-2',
        title: '선물포장+쇼핑백',
        price: 10000,
      },
    ],
  },
  {
    id: 'delivery',
    title: '배송비',
    items: [
      {
        id: 'delivery-1',
        title: '배송비',
        price: 12000,
      },
      {
        id: 'delivery-2',
        title: '도서산간배송비',
        price: 0,
      },
    ],
  },
  {
    id: 'discount',
    title: '할인금액',
    items: [
      {
        id: 'discount-1',
        title: '상품할인',
        price: -5000,
      },
      {
        id: 'discount-2',
        title: '상품쿠폰',
        coupons: [
          {
            id: 'discount-2-1',
            title: '더할인',
            discount: -1000,
          },
          {
            id: 'discount-2-2',
            title: '일반할인',
            discount: -1000,
          },
          {
            id: 'discount-2-3',
            title: '더플러스',
            discount: -1000,
          },
          {
            id: 'discount-2-4',
            title: '깜짝할인(TC)',
            discount: -1000,
          },
          {
            id: 'discount-2-5',
            title: '선할인',
            discount: -4000,
          },
        ],
      },
      {
        id: 'discount-3',
        title: '장바구니쿠폰',
        price: -10000,
      },
      {
        id: 'discount-4',
        title: '배송비할인',
        price: -10000,
      },
    ],
  },
  {
    id: 'point',
    title: '할인금액',
    items: [
      {
        id: 'point-1',
        title: '더머니',
        price: 5000,
      },
      {
        id: 'point-2',
        title: 'RSVP point',
        price: 5000,
      },
      {
        id: 'point-3',
        title: 'H.point',
        price: 5000,
      },
      {
        id: 'point-4',
        title: '예치금',
        price: -5000,
      },
    ],
  },
  {
    id: 'benefit',
    title: '결제수단 혜택',
    items: [
      {
        id: 'benefit-1',
        title: '즉시할인',
        price: -5000,
      },
      {
        id: 'benefit-2',
        title: '멤버십 - 더할인',
        price: -10000,
      },
      {
        id: 'benefit-3',
        title: '멤버십 - 더플러스',
        price: -10000,
      },
      {
        id: 'benefit-4',
        title: '자사카드 - 금액할인권',
        price: -5000,
      },
      {
        id: 'benefit-5',
        title: '자사카드 - 에누리쿠폰',
        price: -5000,
      },
    ],
  },
];
