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

// 주문 아이템 목록 데이터
export const mockOrderList = [
  // 택배배송
  {
    id: 'order-1',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'seller-1-1',
        seller: '브랜드',
        // arrival: '10월 10일 (금) 새벽배송 도착',
        items: [
          // 전체 케이스
          {
            ...mockOrderItem,
            id: 'seller-1-1-1',
            info: {
              weight: '300g',
              size: '대형',
            },
            fieldOption: ['선물포장 + 쇼핑백(+1,000원)', '각인 입력 내용 노출'],
            gift: '[비오템옴므] 핸드크림 증정',
            price: {
              current: 12200,
              original: 13200,
            },
            quantity: 2,
            // 주문상태(플래그, 버튼들)
            orderStatus: {
              status: 'delivered_not_confirmed' as const,
              date: '2025-10-25T12:34:56',
              // orderCase: 'pickup' as const,
            },
          },
        ],
      },
      {
        id: 'seller-1-2',
        seller: '브랜드',
        // arrival: '10월 10일 (금) 새벽배송 도착',
        items: [
          // 전체 케이스
          {
            ...mockOrderItem,
            id: 'seller-1-2-1',
            info: {
              weight: '300g',
              size: '대형',
            },
            fieldOption: ['선물포장 + 쇼핑백(+1,000원)', '각인 입력 내용 노출'],
            gift: '[비오템옴므] 핸드크림 증정',
            price: {
              current: 12200,
              original: 13200,
            },
            quantity: 2,
            // 주문상태(플래그, 버튼들)
            orderStatus: {
              status: 'delivered_not_confirmed' as const,
              date: '2025-10-25T12:34:56',
              // orderCase: 'pickup' as const,
            },
          },
        ],
      },
    ],
  },
  {
    id: 'order-2',
    deliveryType: '오늘배송',
    sellers: [
      {
        id: 'seller-1-1',
        seller: '브랜드',
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
            fieldOption: ['선물포장 + 쇼핑백(+1,000원)', '각인 입력 내용 노출'],
            gift: '[비오템옴므] 핸드크림 증정',
            price: {
              current: 12200,
              original: 13200,
            },
            quantity: 2,
            // 주문상태(플래그, 버튼들)
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
];
