// 개인통관고유부호 샘플 데이터
export const mockPersonalCustomsNumber = {
  pcnn: 'P123451234512',
};

// 보조결제수단 샘플 데이터
export const mockSubPayment = [
  {
    id: 'moeny',
    title: '더머니',
    point: 2345,
  },
  {
    id: 'rsvp',
    title: 'RSVP point',
    point: 1234,
  },
  {
    id: 'hpoint',
    title: 'H.point',
    point: 102345,
  },
  {
    id: 'deposit',
    title: '예치금',
    point: 123456,
  },
];

// 결제내역 샘플 데이터
export const mockPaymentHistory = [
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
    id: 'shipping',
    title: '배송비',
    items: [
      {
        id: 'shipping-1',
        title: '배송비',
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
        price: -10000,
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
    title: '포인트사용',
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
        price: -1000,
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

// 적립예정 샘플 데이터
export const mockExpectedPoint = [
  {
    id: 'hpoint',
    title: 'H.point',
    items: [
      {
        id: 'hpoint-1',
        title: '주문 적립',
        price: 100,
      },
      {
        id: 'hpoint-2',
        title: '클럽포인트 적립',
        price: 100,
      },
    ],
  },
  {
    id: 'luxury',
    title: '명품 마일리지',
    items: [
      {
        id: 'luxury-1',
        title: '주문 적립',
        price: 100,
      },
    ],
  },
  {
    id: 'fashionLife',
    title: '패션/라이프 마일리지',
    items: [
      {
        id: 'fashionLife-1',
        title: '주문 적립',
        price: 100,
      },
    ],
  },
];

// 상품 이미지 샘플 데이터
export const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};

// 주문 아이템 샘플 데이터
export const mockOrderItem = {
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '산마르자노 토마토 소스 용량 선택',
  info: {
    weight: '300g',
  },
  price: {
    current: 129000,
    original: 189000,
  },
  stock: 6,
  quantity: 1,
};

// 주문 아이템 샘플 데이터
export const mockOrderStoreItem = {
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '산마르자노 토마토 소스 용량 선택',
  price: {
    current: 129000,
    original: 189000,
  },
  stock: 6,
  quantity: 1,
};

// 주문 아이템 목록 데이터
export const mockOrderList = [
  // 택배배송
  {
    id: 'order-1',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'seller-1-1',
        seller: '현대백화점',
        arrival: '10월 10일 (금) 새벽배송 도착',
        items: [
          // 전체 케이스
          {
            ...mockOrderItem,
            id: 'seller-1-1-1',
            info: {
              weight: '300g',
              size: '대형',
            },
            delivery: {
              date: '20250704',
              deliveryFee: 10000,
            },
            fieldOption: ['각인 입력 내용 노출', '선물포장 + 쇼핑백(+1,000원)'],
            gift: '5만원 이상 구매 시 보석볼펜 증정',
            quantity: 2,
            benefit: true,
            install: true,
            coupons: {
              product: {
                price: -10000,
              },
              cart: {
                price: -10000,
              },
            },
          },
          // 기본 스타일
          {
            ...mockOrderItem,
            id: 'seller-1-1-2',
            quantity: 10,
            coupons: {
              product: {
                use: true,
              },
              cart: {
                use: false,
              },
            },
          },
          // 품절 임박
          {
            ...mockOrderItem,
            id: 'seller-1-1-3',
            quantity: 3,
            coupons: {
              product: {
                use: true,
              },
              cart: {
                use: false,
              },
            },
          },
        ],
      },
      {
        id: 'seller-1-2',
        seller: '팬트리 1985',
        arrival: '10월 10일 (금) 새벽배송 도착',
        items: [
          // 기본 스타일
          {
            ...mockOrderItem,
            id: 'seller-1-2-2',
            quantity: 7,
            coupons: {
              product: {
                use: true,
              },
              cart: {
                price: -1000,
              },
            },
          },
        ],
      },
    ],
  },
  // 새벽/당일배송
  {
    id: 'order-2',
    deliveryType: '새벽/당일배송',
    sellers: [
      {
        id: 'seller-2-1',
        seller: '팬트리 1985(프로모션 케이스)',
        arrival: '오늘밤 12시 전 도착',
        items: [
          // 프로모션 - N+N
          {
            ...mockOrderItem,
            id: 'seller-2-1-1',
            price: {
              current: 12200,
              original: 13200,
            },

            promotion: {
              type: 'plus',
              case: 'none',
              count: {
                boQty: 2,
                freeQty: 3,
              },
            },
          },
          // 프로모션 - 수량할인
          {
            ...mockOrderItem,
            id: 'seller-2-1-2',
            stock: 16,
            quantity: 10,
            delivery: {
              status: 'today',
              deliveryFee: 3000,
              feePolicy: 'paidOnly',
              date: '20300404',
              dateType: 'hope',
            },
            promotion: {
              type: 'quantity',
              case: 'single',
              count: {
                boQty: 3,
                boAmount: 2200,
                discounted: 35000,
              },
            },
          },
          {
            ...mockOrderItem,
            id: 'seller-2-1-4',
            stock: 16,
            quantity: 10,
            delivery: {
              status: 'today',
              deliveryFee: 3000,
              feePolicy: 'paidOnly',
              date: '20300404',
              dateType: 'hope',
            },
            promotion: {
              type: 'quantity',
              case: 'single',
              count: {
                boQty: 3,
                boRate: 22,
                discounted: 35000,
              },
            },
          },
          // 프로모션 - 묶음할인
          {
            ...mockOrderItem,
            id: 'seller-2-1-3',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'multi',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
        ],
      },
    ],
  },
  // 오늘배송
  {
    id: 'order-3',
    deliveryType: '오늘배송',
    sellers: [
      {
        id: 'seller-3-1',
        seller: '현대백화점(배송비 부과 케이스)',
        items: [
          // 배송비 부과
          {
            ...mockOrderItem,
            id: 'seller-3-1-1',
            price: {
              current: 12200,
              original: 13200,
            },
            stock: 6,
            quantity: 2,
            delivery: {
              deliveryFee: 3000,
            },
          },
          // 무조건 유료배송
          {
            ...mockOrderItem,
            id: 'seller-3-1-2',
            stock: 16,
            quantity: 10,
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'paidOnly',
            },
          },
          // 무조건 무료배송
          {
            ...mockOrderItem,
            id: 'seller-3-1-3',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
          },
        ],
      },
    ],
  },
  // 내일배송
  {
    id: 'order-4',
    deliveryType: '내일배송',
    sellers: [
      {
        id: 'seller-4-1',
        seller: '현대백화점4(배송희망일/예약상품배송일/픽업일)',
        items: [
          // 배송희망일
          {
            ...mockOrderItem,
            id: 'seller-4-1-1',
            delivery: {
              // status: 'today',
              date: '20300404',
              dateType: 'hope',
            },
          },
          // 예약상품 배송일
          {
            ...mockOrderItem,
            id: 'seller-4-1-2',
            delivery: {
              // status: 'local',
              date: '20250404',
              dateType: 'reserve',
            },
          },
          // 픽업일
          {
            ...mockOrderItem,
            id: 'seller-4-1-3',
            delivery: {
              status: 'today',
              date: '20250704',
              dateType: 'pickup',
            },
          },
          // // 픽업일 - 일시품절
          // {
          //   ...mockOrderItem,
          //   id: 'seller-4-1-4',
          //   stock: 0,
          //   restock: true,
          //   delivery: {
          //     status: 'today',
          //     date: '20250704',
          //     dateType: 'pickup',
          //   },
          // },
        ],
      },
    ],
  },
  // 명절배송
  {
    id: 'order-5',
    deliveryType: '명절배송',
    sellers: [
      {
        id: 'seller-5-1',
        seller: '현대백화점5',
        items: [
          // 기본 스타일
          {
            ...mockOrderItem,
            id: 'seller-5-1-1',
            quantity: 2,
          },
        ],
      },
    ],
  },
  // 퀵배송
  {
    id: 'order-6',
    deliveryType: '퀵배송',
    sellers: [
      {
        id: 'seller-6-1',
        seller: '현대백화점6',
        items: [
          // 기본 스타일
          {
            ...mockOrderItem,
            id: 'seller-6-1-1',
            quantity: 1,
          },
        ],
      },
    ],
  },
  // 스토어픽
  {
    id: 'order-7',
    deliveryType: '스토어픽',
    sellers: [
      {
        id: 'seller-7-1',
        seller: '현대백화점 목동점',
        address: '서울 양천구 목동 916 현대백화점 목동점',
        tel: '02-2163-2233',
        items: [
          // 방문픽업
          {
            ...mockOrderStoreItem,
            id: 'seller-7-1-3',
            brand: '브랜드명',
            title:
              '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
            orderOptions: ['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5', '옵션 테스트'],
            fieldOption: ['선물포장 + 쇼핑백(+1,000원)'],
            price: {
              current: 23500,
            },
            quantity: 2,
            // delivery: {
            //   status: 'today',
            // },
          },
        ],
      },
      {
        id: 'seller-7-2',
        seller: '현대백화점 무역센터점',
        address: '서울 양천구 목동 916 현대백화점 무역센터점',
        tel: '02-1234-5678',
        giftInfo: {
          name: '김봄',
          phone: '010-1234-5678',
          msg: '좋아하면 좋겠다.',
        },
        items: [
          // 방문픽업
          {
            ...mockOrderStoreItem,
            id: 'seller-7-1-3',
            brand: '브랜드명',
            title:
              '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
            orderOptions: ['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5', '옵션 테스트'],
            fieldOption: ['선물포장 + 쇼핑백(+1,000원)'],
            price: {
              current: 23500,
            },
            quantity: 2,
          },
        ],
      },
    ],
  },
  // 무형상품
  {
    id: 'order-8',
    deliveryType: '무형상품',
    sellers: [
      {
        id: 'seller-8-1',
        seller: '현대백화점8',
        items: [
          // 전체 케이스 + 프로모션(N+N) + 예약상품 배송일 + 배송비 부과
          {
            ...mockOrderItem,
            id: 'seller-8-1-1',
            fieldOption: ['각인 입력 내용 노출', '선물포장 + 쇼핑백(+1,000원)'],
            gift: '5만원 이상 구매 시 보석볼펜 증정',
            price: {
              current: 12200,
              original: 13200,
            },
            stock: 6,
            quantity: 2,
            delivery: {
              status: 'local',
              deliveryFee: 3000,
              date: '20250404',
              dateType: 'reserve',
            },
            promotion: {
              type: 'plus',
              case: 'none',
              count: {
                boQty: 2,
                freeQty: 3,
              },
            },
            benefit: true,
            install: true,
          },
          // 기본 + 프로모션(수량할인) + 배송희망일 + 무조건 유료배송
          {
            ...mockOrderItem,
            id: 'seller-8-1-3',
            stock: 16,
            quantity: 10,
            delivery: {
              status: 'today',
              deliveryFee: 3000,
              feePolicy: 'paidOnly',
              date: '20300404',
              dateType: 'hope',
            },
            promotion: {
              type: 'quantity',
              case: 'single',
              count: {
                boQty: 3,
                // boRate: 22,
                boAmount: 2200,
                discounted: 35000,
              },
            },
          },
          // 품절임박 + 프로모션(묶음 할인) + 픽업장소/픽업일 + 무조건 무료배송
          {
            ...mockOrderItem,
            id: 'seller-8-1-4',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            // stock: 5,
            quantity: 3,
            delivery: {
              status: 'today',
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
              date: '20250704',
              dateType: 'pickup',
            },
            promotion: {
              type: 'bundle',
              case: 'multi',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
          // // 현배송지 구매불가 + 프로모션(묶음 할인 + 일부 할인 미적용 상품 안내)
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-5',
          //   stock: 10,
          //   quantity: 1,
          //   delivery: {
          //     status: null,
          //   },
          //   promotion: {
          //     type: 'bundle',
          //     case: 'mixed',
          //     count: {
          //       freeQty: 3,
          //       discounted: 37000,
          //     },
          //   },
          // },
          // // 일시 품절 + 픽업장소+픽업일
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-6',
          //   stock: 0,
          //   restock: true,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //     isPickup: true,
          //     pickupDate: '20250404',
          //     date: '20250404',
          //     dateType: 'pickup',
          //   },
          // },
          // // 품절
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-7',
          //   stock: 0,
          //   restock: false,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //   },
          // },
          // // 판매 중단
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-8',
          //   stock: 0,
          //   restock: false,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //   },
          //   status: 'temp',
          // },
          // // 판매 종료
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-9',
          //   stock: 0,
          //   restock: false,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //   },
          //   status: 'end',
          // },
          // 방문 픽업
          {
            ...mockOrderItem,
            id: 'seller-8-1-2',
            brand: '방문픽업',
            title: '중개 미술관 방문픽업',
            info: {
              date: '20250901',
              time: '11:00',
              place: '더현대서울 ALT 1',
            },
            price: {
              current: 23500,
            },
            stock: 6,
            quantity: 2,
            delivery: {
              status: 'today',
            },
          },
        ],
      },
    ],
  },
];

// 주문 아이템 무형상품 목록 데이터
export const mockECouponOrderList = [
  // 무형상품
  {
    id: 'order-8',
    deliveryType: '무형상품',
    sellers: [
      {
        id: 'seller-8-1',
        seller: '현대백화점8',
        items: [
          // 전체 케이스 + 프로모션(N+N) + 예약상품 배송일 + 배송비 부과
          {
            ...mockOrderItem,
            id: 'seller-8-1-1',
            fieldOption: ['각인 입력 내용 노출', '선물포장 + 쇼핑백(+1,000원)'],
            gift: '5만원 이상 구매 시 보석볼펜 증정',
            price: {
              current: 12200,
              original: 13200,
            },
            stock: 6,
            quantity: 2,
            delivery: {
              status: 'local',
              deliveryFee: 3000,
              date: '20250404',
              dateType: 'reserve',
            },
            promotion: {
              type: 'plus',
              case: 'none',
              count: {
                boQty: 2,
                freeQty: 3,
              },
            },
            benefit: true,
            install: true,
          },
          // 기본 + 프로모션(수량할인) + 배송희망일 + 무조건 유료배송
          {
            ...mockOrderItem,
            id: 'seller-8-1-3',
            stock: 16,
            quantity: 10,
            delivery: {
              status: 'today',
              deliveryFee: 3000,
              feePolicy: 'paidOnly',
              date: '20300404',
              dateType: 'hope',
            },
            promotion: {
              type: 'quantity',
              case: 'single',
              count: {
                boQty: 3,
                // boRate: 22,
                boAmount: 2200,
                discounted: 35000,
              },
            },
          },
          // 품절임박 + 프로모션(묶음 할인) + 픽업장소/픽업일 + 무조건 무료배송
          {
            ...mockOrderItem,
            id: 'seller-8-1-4',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            // stock: 5,
            quantity: 3,
            delivery: {
              status: 'today',
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
              date: '20250704',
              dateType: 'pickup',
            },
            promotion: {
              type: 'bundle',
              case: 'multi',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
          // // 현배송지 구매불가 + 프로모션(묶음 할인 + 일부 할인 미적용 상품 안내)
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-5',
          //   stock: 10,
          //   quantity: 1,
          //   delivery: {
          //     status: null,
          //   },
          //   promotion: {
          //     type: 'bundle',
          //     case: 'mixed',
          //     count: {
          //       freeQty: 3,
          //       discounted: 37000,
          //     },
          //   },
          // },
          // // 일시 품절 + 픽업장소+픽업일
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-6',
          //   stock: 0,
          //   restock: true,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //     isPickup: true,
          //     pickupDate: '20250404',
          //     date: '20250404',
          //     dateType: 'pickup',
          //   },
          // },
          // // 품절
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-7',
          //   stock: 0,
          //   restock: false,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //   },
          // },
          // // 판매 중단
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-8',
          //   stock: 0,
          //   restock: false,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //   },
          //   status: 'temp',
          // },
          // // 판매 종료
          // {
          //   ...mockOrderItem,
          //   id: 'seller-8-1-9',
          //   stock: 0,
          //   restock: false,
          //   quantity: 1,
          //   delivery: {
          //     status: 'quick',
          //   },
          //   status: 'end',
          // },
          // 방문 픽업
          {
            ...mockOrderItem,
            id: 'seller-8-1-2',
            brand: '방문픽업',
            title: '중개 미술관 방문픽업',
            info: {
              date: '20250901',
              time: '11:00',
              place: '더현대서울 ALT 1',
            },
            price: {
              current: 23500,
            },
            stock: 6,
            quantity: 2,
            delivery: {
              status: 'today',
            },
          },
        ],
      },
    ],
  },
];

// 주문 아이템 사은품 목록 데이터
export const mockOrderGiftList = [
  {
    id: 'gift',
    items: [
      {
        id: 'gift-order-1',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 2,
        stock: 6,
        info: {
          weight: '300g',
          size: '옵션 2',
        },
        price: { current: 5000 },
      },
      {
        id: 'gift-order-2',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 1,
        stock: 6,
        info: {
          weight: '300g',
        },
        price: { current: 5000 },
      },
      {
        id: 'gift-order-3',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 1,
        stock: 0,
        info: {
          weight: '300g',
        },
        price: { current: 5000 },
      },
    ],
  },
];

// 주문 아이템 사은품 전체지급 + 선택지급 목록 데이터
export const mockOrderMultiGiftList = [
  {
    id: 'gift',
    isMulti: true,
    items: [
      {
        id: 'gift-order-1',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 2,
        stock: 6,
        info: {
          weight: '300g',
          size: '300g',
        },
        price: { current: 5000 },
      },
      {
        id: 'gift-order-2',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 1,
        stock: 6,
        info: {
          weight: '300g',
        },
        price: { current: 5000 },
      },
      {
        id: 'gift-order-3',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 1,
        stock: 0,
        info: {
          weight: '300g',
        },
        price: { current: 5000 },
      },
    ],
  },
];

// 주문서 > 상담 신청서 > 주문 상품 목록 데이터
export const mockRequestProductList = [
  {
    id: 'request',
    items: [
      {
        id: 'request-order-1',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 2,
        stock: 6,
        info: {
          weight: '300g',
          size: '옵션 2',
        },
        price: { current: 5000 },
      },
      {
        id: 'request-order-2',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 1,
        stock: 6,
        price: { current: 5000 },
      },
      {
        id: 'request-order-3',
        image: mockProdImage,
        title:
          '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르츠 멜라리스 에이징컷 앰플 10ml ',
        quantity: 1,
        stock: 0,
        price: { current: 5000 },
      },
    ],
  },
];
