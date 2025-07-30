import { mockProdImage } from './product';

// 상품 옵션 샘플 데이터
export const mockProdOptionList = [
  {
    label: '블랙',
    value: 'black',
    detail: [
      { subLabel: 'XS', subValue: 'xs', stock: 0 },
      { subLabel: 'S', subValue: 's', stock: 999 },
      { subLabel: 'M', subValue: 'm', stock: 50 },
    ],
  },
  {
    label: '레드',
    value: 'red',
    detail: [
      { subLabel: 'XS', subValue: 'xs', stock: 9 },
      { subLabel: 'S', subValue: 's', stock: 0 },
      { subLabel: 'M', subValue: 'm', stock: 50 },
    ],
  },
];

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
        items: [
          // 전체 케이스
          {
            ...mockOrderItem,
            id: 'seller-1-1-1',
            price: {
              current: 129000,
              original: 189000,
              discount: 1200,
            },
            info: {
              weight: '300g',
              size: '대형',
            },
            fieldOption: ['각인 입력 내용 노출', '선물포장 + 쇼핑백(+1,000원)'],
            gift: '5만원 이상 구매 시 보석볼펜 증정',
            options: mockProdOptionList,
            quantity: 2,
            benefit: true,
            install: true,
          },
          // 기본 스타일
          {
            ...mockOrderItem,
            id: 'seller-1-1-2',
            quantity: 10,
          },
          // 품절 임박
          {
            ...mockOrderItem,
            id: 'seller-1-1-3',
            stock: 5,
            quantity: 3,
          },
          // 햔베송지 구매불가
          {
            ...mockOrderItem,
            id: 'seller-1-1-4',
            delivery: {
              status: null,
            },
          },
          // 일시 품절
          {
            ...mockOrderItem,
            id: 'seller-1-1-5',
            stock: 0,
            restock: true,
          },
          // 품절
          {
            ...mockOrderItem,
            id: 'seller-1-1-6',
            stock: 0,
            restock: false,
          },
          // 판매 중단
          {
            ...mockOrderItem,
            id: 'seller-1-1-7',
            stock: 0,
            restock: false,
            status: 'temp',
          },
          // 판매 종료
          {
            ...mockOrderItem,
            id: 'seller-1-1-8',
            stock: 0,
            restock: false,
            status: 'end',
          },
        ],
      },
      // {
      //   id: 'seller-1-2',
      //   seller: '팬트리 1985',
      //   items: [
      //     // 기본 스타일
      //     {
      //       ...mockOrderItem,
      //       id: 'seller-1-2-2',
      //       quantity: 7,
      //     },
      //   ],
      // },
    ],
  },
  // 새벽/당일배송
  {
    id: 'order-2',
    deliveryType: '새벽/당일배송',
    sellers: [
      {
        id: 'seller-2-1',
        seller: '팬트리 1985(N+N 프로모션 케이스)',
        items: [
          // 프로모션 - N+N 미적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-1',
            title: '미적용',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'none',
              count: {
                boQty: 2,
                freeQty: 3,
              },
            },
          },
          // 프로모션 - N+N 상품 수량 적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-5',
            title: '상품 수량 적용',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'single',
              count: {
                boQty: 1,
                freeQty: 2,
                discounted: 35000,
              },
            },
          },
          // 프로모션 - N+N 여러 상품으로 적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-6',
            title: '여러 상품으로 적용 1',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'multi',
              count: {
                boQty: 2,
                freeQty: 4,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-2-1-6',
          },
          {
            ...mockOrderItem,
            id: 'seller-2-1-7',
            title: '여러 상품으로 적용 2',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'multi',
              count: {
                boQty: 2,
                freeQty: 4,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-2-1-6',
          },
          // 프로모션 - N+N 적용+미적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-8',
            title: '적용+미적용',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'mixed',
              count: {
                boQty: 3,
                freeQty: 5,
                discounted: 35000,
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
        seller: '팬트리 1985(수량할인 프로모션 케이스)',
        items: [
          // 프로모션 - 수량할인 미적용(할인액)
          {
            ...mockOrderItem,
            id: 'seller-3-1-1',
            title: '미적용(할인액)',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'none',
              count: {
                boQty: 3,
                boAmount: 2200,
                discounted: 35000,
              },
            },
          },
          // 프로모션 - 수량할인 미적용(할인율)
          {
            ...mockOrderItem,
            id: 'seller-3-1-2',
            title: '미적용(할인율)',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'none',
              count: {
                boQty: 3,
                boRate: 20,
                discounted: 35000,
              },
            },
          },
          // 프로모션 - 수량할인 상품 수량
          {
            ...mockOrderItem,
            id: 'seller-3-1-3',
            title: '상품 수량으로 적용',
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
          // 프로모션 - 수량할인 여러 상품으로 적용
          {
            ...mockOrderItem,
            id: 'seller-3-1-4',
            title: '여러 상품으로 적용 1',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'multi',
              count: {
                boQty: 3,
                boRate: 22,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-4',
          },
          {
            ...mockOrderItem,
            id: 'seller-3-1-5',
            title: '여러 상품으로 적용 2',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'multi',
              count: {
                boQty: 3,
                boRate: 22,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-4',
          },
          // 프로모션 - 수량할인 정액케이스
          {
            ...mockOrderItem,
            id: 'seller-3-1-6',
            title: '정액케이스 1',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'fixed',
              count: {
                boQty: 3,
                boAmount: 2200,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-6',
          },
          {
            ...mockOrderItem,
            id: 'seller-3-1-7',
            title: '정액케이스 2',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'fixed',
              count: {
                boQty: 3,
                boAmount: 2200,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-6',
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
        seller: '팬트리 1985(묶음할인 프로모션 케이스)',
        items: [
          // 프로모션 - 묶음할인 미적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-1',
            title: '미적용',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'none',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
          // 프로모션 - 묶음할인 상품 수량 적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-2',
            title: '상품 수량 적용',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'single',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
          // 프로모션 - 묶음할인 여러 상품으로 적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-3',
            title: '여러 상품으로 적용 1',
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
            isBundle: true,
            bundleId: 'seller-4-1-3',
          },
          {
            ...mockOrderItem,
            id: 'seller-4-1-4',
            title: '여러 상품으로 적용 2',
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
            isBundle: true,
            bundleId: 'seller-4-1-3',
          },
          // 프로모션 - 묶음할인 적용+미적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-5',
            title: '적용+미적용 1',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'mixed',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
            isBundle: true,
            bundleId: 'seller-4-1-5',
          },
          {
            ...mockOrderItem,
            id: 'seller-4-1-6',
            title: '적용+미적용 2',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'mixed',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
            isBundle: true,
            bundleId: 'seller-4-1-5',
          },
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
        seller: '현대백화점5(배송비 부과 케이스)',
        items: [
          // 배송비 부과
          {
            ...mockOrderItem,
            id: 'seller-5-1-1',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
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
            id: 'seller-5-1-2',
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
            id: 'seller-5-1-3',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
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
        seller: '현대백화점6(배송희망일/예약상품배송일/픽업일)',
        items: [
          // 배송희망일
          {
            ...mockOrderItem,
            id: 'seller-6-1-1',
            delivery: {
              // status: 'today',
              date: '20300404',
              dateType: 'hope',
            },
          },
          // 예약상품 배송일
          {
            ...mockOrderItem,
            id: 'seller-6-1-2',
            options: mockProdOptionList,
            delivery: {
              // status: 'local',
              date: '20250404',
              dateType: 'reserve',
            },
          },
          // 픽업일
          {
            ...mockOrderItem,
            id: 'seller-6-1-3',
            delivery: {
              status: 'today',
              date: '20250704',
              dateType: 'pickup',
            },
          },
          // 픽업일 - 일시품절
          {
            ...mockOrderItem,
            id: 'seller-6-1-4',
            stock: 0,
            restock: true,
            delivery: {
              status: 'today',
              date: '20250704',
              dateType: 'pickup',
            },
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
        seller: '현대백화점7',
        items: [
          // 방문픽업
          {
            ...mockOrderItem,
            id: 'seller-7-1-3',
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
          // 픽업일
          {
            ...mockOrderItem,
            id: 'seller-7-1-1',
            delivery: {
              status: 'today',
              date: '20250704',
              dateType: 'pickup',
            },
          },
          // 픽업일
          {
            ...mockOrderItem,
            id: 'seller-7-1-4',
            delivery: {
              status: 'today',
              date: '20250604',
              dateType: 'pickup',
            },
          },
          // 픽업일 - 일시품절
          {
            ...mockOrderItem,
            id: 'seller-7-1-2',
            stock: 0,
            restock: true,
            delivery: {
              status: 'today',
              date: '20250704',
              dateType: 'pickup',
            },
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
              discount: 1200,
            },
            options: mockProdOptionList,
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
            stock: 5,
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
          // 현배송지 구매불가 + 프로모션(묶음 할인 + 일부 할인 미적용 상품 안내)
          {
            ...mockOrderItem,
            id: 'seller-8-1-5',
            stock: 10,
            quantity: 1,
            delivery: {
              status: null,
            },
            promotion: {
              type: 'bundle',
              case: 'mixed',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
          // 일시 품절 + 픽업장소+픽업일
          {
            ...mockOrderItem,
            id: 'seller-8-1-6',
            stock: 0,
            restock: true,
            quantity: 1,
            delivery: {
              status: 'quick',
              isPickup: true,
              pickupDate: '20250404',
              date: '20250404',
              dateType: 'pickup',
            },
          },
          // 품절
          {
            ...mockOrderItem,
            id: 'seller-8-1-7',
            stock: 0,
            restock: false,
            quantity: 1,
            delivery: {
              status: 'quick',
            },
          },
          // 판매 중단
          {
            ...mockOrderItem,
            id: 'seller-8-1-8',
            stock: 0,
            restock: false,
            quantity: 1,
            delivery: {
              status: 'quick',
            },
            status: 'temp',
          },
          // 판매 종료
          {
            ...mockOrderItem,
            id: 'seller-8-1-9',
            stock: 0,
            restock: false,
            quantity: 1,
            delivery: {
              status: 'quick',
            },
            status: 'end',
          },
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

// 장바구니(선물) 아이템 목록 데이터
export const mockPresentOrderList = [
  // 택배배송
  {
    id: 'order-1',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'seller-1-1',
        seller: '현대백화점',
        items: [
          // 전체 케이스
          {
            ...mockOrderItem,
            id: 'seller-1-1-1',
            info: {
              weight: '300g',
              size: '대형',
            },
            fieldOption: ['각인 입력 내용 노출', '선물포장 + 쇼핑백'],
            gift: '5만원 이상 구매 시 보석볼펜 증정',
            options: mockProdOptionList,
            quantity: 2,
            // benefit: true,
            // install: true,
          },
          // 기본 스타일
          {
            ...mockOrderItem,
            id: 'seller-1-1-2',
            quantity: 10,
          },
          // 품절 임박
          {
            ...mockOrderItem,
            id: 'seller-1-1-3',
            stock: 5,
            quantity: 3,
          },
          // 일시 품절
          {
            ...mockOrderItem,
            id: 'seller-1-1-5',
            stock: 0,
            restock: true,
          },
          // 품절
          {
            ...mockOrderItem,
            id: 'seller-1-1-6',
            stock: 0,
            restock: false,
          },
          // 판매 중단
          {
            ...mockOrderItem,
            id: 'seller-1-1-7',
            stock: 0,
            restock: false,
            status: 'temp',
          },
          // 판매 종료
          {
            ...mockOrderItem,
            id: 'seller-1-1-8',
            stock: 0,
            restock: false,
            status: 'end',
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
        seller: '팬트리 1985(N+N 프로모션 케이스)',
        items: [
          // 프로모션 - N+N 미적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-1',
            title: '미적용',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'none',
              count: {
                boQty: 2,
                freeQty: 3,
              },
            },
          },
          // 프로모션 - N+N 상품 수량 적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-5',
            title: '상품 수량 적용',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'single',
              count: {
                boQty: 1,
                freeQty: 2,
                discounted: 35000,
              },
            },
          },
          // 프로모션 - N+N 여러 상품으로 적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-6',
            title: '여러 상품으로 적용 1',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'multi',
              count: {
                boQty: 2,
                freeQty: 4,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-2-1-6',
          },
          {
            ...mockOrderItem,
            id: 'seller-2-1-7',
            title: '여러 상품으로 적용 2',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'multi',
              count: {
                boQty: 2,
                freeQty: 4,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-2-1-6',
          },
          // 프로모션 - N+N 적용+미적용
          {
            ...mockOrderItem,
            id: 'seller-2-1-8',
            title: '적용+미적용',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'mixed',
              count: {
                boQty: 3,
                freeQty: 5,
                discounted: 35000,
              },
            },
            bundleId: 'bundle-2-1-8',
          },
          {
            ...mockOrderItem,
            id: 'seller-2-1-9',
            title: '적용+미적용',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
            },
            options: mockProdOptionList,
            promotion: {
              type: 'plus',
              case: 'mixed',
              count: {
                boQty: 3,
                freeQty: 5,
                discounted: 35000,
              },
            },
            bundleId: 'bundle-2-1-8',
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
        seller: '팬트리 1985(수량할인 프로모션 케이스)',
        items: [
          // 프로모션 - 수량할인 미적용(할인액)
          {
            ...mockOrderItem,
            id: 'seller-3-1-1',
            title: '미적용(할인액)',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'none',
              count: {
                boQty: 3,
                boAmount: 2200,
                discounted: 35000,
              },
            },
          },
          // 프로모션 - 수량할인 미적용(할인율)
          {
            ...mockOrderItem,
            id: 'seller-3-1-2',
            title: '미적용(할인율)',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'none',
              count: {
                boQty: 3,
                boRate: 20,
                discounted: 35000,
              },
            },
          },
          // 프로모션 - 수량할인 상품 수량
          {
            ...mockOrderItem,
            id: 'seller-3-1-3',
            title: '상품 수량으로 적용',
            stock: 16,
            quantity: 10,
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
          // 프로모션 - 수량할인 여러 상품으로 적용
          {
            ...mockOrderItem,
            id: 'seller-3-1-4',
            title: '여러 상품으로 적용 1',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'multi',
              count: {
                boQty: 3,
                boRate: 22,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-4',
          },
          {
            ...mockOrderItem,
            id: 'seller-3-1-5',
            title: '여러 상품으로 적용 2',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'multi',
              count: {
                boQty: 3,
                boRate: 22,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-4',
          },
          // 프로모션 - 수량할인 정액케이스
          {
            ...mockOrderItem,
            id: 'seller-3-1-6',
            title: '정액케이스 1',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'fixed',
              count: {
                boQty: 3,
                boAmount: 2200,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-6',
          },
          {
            ...mockOrderItem,
            id: 'seller-3-1-7',
            title: '정액케이스 2',
            stock: 16,
            quantity: 10,
            promotion: {
              type: 'quantity',
              case: 'fixed',
              count: {
                boQty: 3,
                boAmount: 2200,
                discounted: 35000,
              },
            },
            isBundle: true,
            bundleId: 'bundle-3-1-6',
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
        seller: '팬트리 1985(묶음할인 프로모션 케이스)',
        items: [
          // 프로모션 - 묶음할인 미적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-1',
            title: '미적용',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'none',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
          // 프로모션 - 묶음할인 상품 수량 적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-2',
            title: '상품 수량 적용',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'single',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
          },
          // 프로모션 - 묶음할인 여러 상품으로 적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-3',
            title: '여러 상품으로 적용 1',
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
            isBundle: true,
            bundleId: 'seller-4-1-3',
          },
          {
            ...mockOrderItem,
            id: 'seller-4-1-4',
            title: '여러 상품으로 적용 2',
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
            isBundle: true,
            bundleId: 'seller-4-1-3',
          },
          // 프로모션 - 묶음할인 적용+미적용
          {
            ...mockOrderItem,
            id: 'seller-4-1-5',
            title: '적용+미적용 1',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'mixed',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
            isBundle: true,
            bundleId: 'seller-4-1-5',
          },
          {
            ...mockOrderItem,
            id: 'seller-4-1-6',
            title: '적용+미적용 2',
            price: {
              current: 12200,
              original: 13200,
              discounted: 25000,
            },
            promotion: {
              type: 'bundle',
              case: 'mixed',
              count: {
                freeQty: 3,
                discounted: 37000,
              },
            },
            isBundle: true,
            bundleId: 'seller-4-1-5',
          },
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
        seller: '현대백화점5(배송비 부과 케이스)',
        items: [
          // 배송비 부과
          {
            ...mockOrderItem,
            id: 'seller-5-1-1',
            price: {
              current: 12200,
              original: 13200,
              discount: 1200,
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
            id: 'seller-5-1-2',
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
            id: 'seller-5-1-3',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
          },
        ],
      },
    ],
  },
];

// 상품 카드 샘플 데이터
export const mockSaverProdCard = {
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  price: {
    current: 129000,
    original: 189000,
    discountRate: 32,
  },
  emblem: '퍼프데이',
  badge: 'N+N',
  button: {
    icon: 'cart',
    label: '담기',
    onClick: () => {
      console.log('담기 클릭');
    },
  } as const,
};

// 카드 배열
export const mockSaverProdCards = [
  // 일반 상품
  { ...mockSaverProdCard, id: 'prod-1' },
  { ...mockSaverProdCard, id: 'prod-2' },
  { ...mockSaverProdCard, id: 'prod-3' },
  { ...mockSaverProdCard, id: 'prod-4' },
];
