// 구독 > 상품 상세 > 상품 구매정보 안내 샘플 데이터
export const mockProductPurchaseInfo = {
  title: '6월 3주차 (수/금) 반찬 구성',
  name: '투홈구독] 압구정 예향 반찬 구독 (2025년)',
  image: {
    src: '/images/dummy/@sample_img.png',
    alt: '한글 표시 사항',
  },
};

// 구독 > 정기구독 상품 샘플 데이터
export const mockSubscriptionProductItem = [
  {
    id: 'sub-prod-1',
    href: '#',
    image: {
      src: '/images/dummy/@sample_product_02.png',
      alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
    },
    brand: '예향',
    title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
    orderOptions: ['채식주의자용', '6종 세트'],
    price: {
      current: 1560000,
      original: 1800000,
    },
    stock: 6,
    quantity: 23,
  },
];

// 구독 > 정기구독 주기 샘플 데이터
export const mockSubscriptionCycle = {
  period: '1회 맛보기',
  cycle: '1주에 한 번',
  day: '금요일',
};

// 구독 > 이번 회차 상품 정보 샘플 데이터
export const mockProductInfoItem = {
  round: 124,
  package: [
    '시골시래기해장국 650g',
    '사과카레500g',
    '쑥갓도토리묵무침340g',
    '표고버섯강정180g',
    '취나물120g',
    '고구마 단호박 샐러드200g',
    '오징어 실채 70g',
  ],
};

// 구독 > 이번 회차 상품 정보 샘플 데이터 목록
export const mockProductInfoList = [
  {
    ...mockProductInfoItem,
  },
  {
    round: 125,
    package: [
      '미역냉국 650g',
      '순두부찌개 550g',
      '닭갈비 550g',
      '알감자조림 200g',
      '시래기된장나물 250g',
      '계란장 300g',
    ],
  },
  {
    round: 126,
    package: [
      '버섯들깨탕 650g',
      '미역줄기볶음 150g',
      '콩나물국 650g',
      '육전과영앙부추무침 270g',
      '가지찜덮밥소스 360g',
      '명란젓무침 120g',
    ],
  },
  {
    round: 127,
    package: [
      '소고기무국 650g',
      '차돌박이 청국장 500g',
      '국산나물비빔밥세트 300g',
      '황태구이 300g',
      '깻잎장아찌 120g',
      '콩자반 140g',
    ],
  },
  {
    round: 128,
    package: [
      '시골시래기해장국 650g',
      '사과카레500g',
      '쑥갓도토리묵무침340',
      '표고버섯강정180g',
      '취나물120g',
      '고구마 단호박 샐러드200g',
      '오징어 실채 70g',
    ],
  },
  {
    round: 129,
    package: [
      '미역냉국 650g',
      '순두부찌개 550g',
      '닭갈비 550g',
      '알감자조림 200g',
      '시래기된장나물 250g',
      '계란장 300g',
    ],
  },
  {
    round: 130,
    package: [
      '버섯들깨탕 650g',
      '콩나물국 650g',
      '육전과영앙부추무침 270g',
      '가지찜덮밥소스 360g',
      '명란젓무침 120g',
      '미역줄기볶음 150g',
    ],
  },
  {
    round: 131,
    package: [
      '소고기무국 650g',
      '차돌박이 청국장 500g',
      '국산나물비빔밥세트 300g',
      '황태구이 300g',
      '깻잎장아찌 120g',
      '콩자반 140g',
    ],
  },
  {
    round: 132,
    package: [
      '시골시래기해장국 650g',
      '사과카레500g',
      '쑥갓도토리묵무침340',
      '표고버섯강정180g',
      '취나물120g',
      '고구마 단호박 샐러드200g',
      '오징어 실채 70g',
    ],
  },
  {
    round: 133,
    package: [
      '미역냉국 650g',
      '순두부찌개 550g',
      '닭갈비 550g',
      '알감자조림 200g',
      '시래기된장나물 250g',
      '계란장 300g',
    ],
  },
];

// 구독 > 정기구독 결제 수단 샘플 데이터
export const mockPaymentMethod = [
  {
    id: 'hyundaidp-card',
    label: '현대백화점 카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'hyundai-card',
    label: '현대카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundai',
  },
];

// 구독 > 정기 결제정보 샘플 데이터
export const mockPaymentInfo = [
  {
    id: 'paymentInfo',
    items: [
      {
        id: 'paymentInfo-1',
        title: '상품금액',
        price: 180000,
      },
      {
        id: 'paymentInfo-2',
        title: '배송비',
        price: 0,
      },
      {
        id: 'paymentInfo-3',
        title: '구독 할인금액',
        price: -30000,
      },
    ],
  },
];

// --------------------- 마이페이지 > 정기 구독 ---------------------  //

// 주문 아이템 샘플 데이터
export const mockOrderItem = {
  id: 'order-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_02.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 23456780,
    original: 23456780,
  },
  stock: 6,
  quantity: 1,
  // optionChange: true, // 옵션변경 여부
  // 주문상태 (OrderStatus.ts 참고)
  // orderStatus: {
  //   status: 'delivered_reviewed' as const,
  //   date: '2025-10-25T12:34:56',
  //   // orderCase: 'pickup' as const,
  // },
};

// ---------------------  마이페이지 / 구독관리 ------------------ //
// 버튼 보기용 샘플
export const mockSubscriptionTestSample = [
  {
    id: 'subscription-test',
    sellers: [
      {
        id: 'subscription-test-seller-01',
        items: [
          {
            ...mockOrderItem,
            orderStatus: {
              status: 'subscription_active',
              // date: '2025-10-25T12:34:56',
              // orderCase: 'subscription',
              // subscription: {
              //   arrivalLabel: '6월 19일(금) 도착 예정',
              // },
            },
          },
        ],
      },
    ],
  },
];
// 구독 관리 목록 데이터
export const mockSubscriptionItem = {
  id: 'subscription-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_02.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 576000,
    original: 600000,
  },
  stock: 6,
  quantity: 12,
  orderStatus: {
    status: 'subscription_active' as const,
    orderCase: 'subscription' as const,
  },
};
export const mockSubscriptionList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockSubscriptionItem,
        id: 'subscription-01',
        orderStatus: {
          status: 'subscription_active' as const, //진행중
          // date: '2025-10-25T12:34:56',
          orderCase: 'subscription' as const,
          subscription: {
            summary: {
              currentRound: 124, // 현재회차
              period: '무기한', // 이용기간
              deliveryCycle: '매주 5회(월, 화, 수, 목, 금)', // 배송주기
            },
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
        ...mockSubscriptionItem,
        id: 'subscription-02',
        orderStatus: {
          status: 'subscription_ended' as const, //구독종료
          // date: '2025-10-25T12:34:56',
          orderCase: 'subscription' as const,
          subscription: {
            endDate: '20251215',
            summary: {
              currentRound: 124, // 현재회차
              period: '12개월', // 이용기간
              deliveryCycle: '매주 2회(목, 토)', // 배송주기
            },
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
        ...mockSubscriptionItem,
        id: 'subscription-03',
        orderStatus: {
          status: 'subscription_canceled' as const, //구독해지
          // date: '2025-10-25T12:34:56',
          orderCase: 'subscription' as const,
          subscription: {
            cancelDate: '20251215',
            summary: {
              currentRound: 124, // 현재회차
              period: '1회 3개월', // 이용기간
              deliveryCycle: '4주에 1번(금)', // 배송주기
            },
          },
        },
      },
    ],
  },
];

// ------------------- 상단 구독상세 정보 ------------------ //
export const mockSubscribeTopInfo = {
  date: '20251225',
  orderNumber: '25122512345678',
  orderStatus: 'subscription_active' as const,
};

// ------------------- 정기구독 주기 ------------------ //
export const mockSubscriptionCycleRound = {
  ...mockSubscriptionCycle,
  roundInfo: {
    currentRound: 123,
    useCount: 12,
  },
};

// ------------------- 배송방법 ------------------ //
export const mockSubscribeDeliveryMethod = {
  method: 'courier' as const,
  expect: '(17:30 도착 예정)',
};

// ------------------- 결제정보 ------------------ //
export const mockSubscribePaymentInfo = {
  items: [
    { label: '상품금액', price: 180000 },
    { label: '배송비', price: 0 },
    { label: '구독 할인금액', price: -45000 },
  ],
  totalPrice: 105000,
};

// ------------------- 전체구독 일정 박스 ------------------- //
export const mockTotalSubsScheduleItem = {
  id: 'schedule-01',
  status: 'round_unsubscribe' as const,
  round: {
    current: 5,
    total: 12,
  },
  dates: {
    paid: '2025.12.24 수요일',
    ship: '2025.12.24 수요일',
  },
};
export const mockTotalSubsScheduleList = [
  { ...mockTotalSubsScheduleItem, id: 'schedule-01', status: 'round_skip' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-02', status: 'round_cancel' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-03', status: 'round_completed' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-04', status: 'round_active' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-05', status: 'round_unsubscribe' as const },
];
// 대기중만
export const mockWaitSubsScheduleList = [
  { ...mockTotalSubsScheduleItem, id: 'schedule-01', status: 'round_waiting' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-02', status: 'round_waiting' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-03', status: 'round_waiting' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-04', status: 'round_waiting' as const },
  { ...mockTotalSubsScheduleItem, id: 'schedule-05', status: 'round_waiting' as const },
];

// ------------------- 정기구독 결제수단 선택 ------------------ //
export const mockSubscribePaymentList = [
  {
    id: 'card-01',
    label: '현대백화점 카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'card-02',
    label: '현대 카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundai',
  },
  {
    id: 'card-03',
    label: '현대 카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundai',
  },
  {
    id: 'card-04',
    label: '현대백화점 카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundaiDepartment',
  },
  {
    id: 'card-05',
    label: '현대 카드',
    cardNumber: '1234 5678 **** ****',
    brand: 'hyundai',
    disabled: true,
  },
];
