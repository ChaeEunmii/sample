// 마이페이지 - 주문/배송조회
// 장바구니/주문서 화면의 OrderItem.tsx 컴퍼넌트 사용

// 상품 이미지 샘플 데이터
export const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};

// 주문 아이템 샘플 데이터
export const mockOrderItem = {
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
};

// 주문 아이템 목록 데이터
export const mockOrderList = [
  {
    id: 'order-1',
    deliveryType: '택배배송',
    sellers: [
      {
        id: 'seller-1-1',
        seller: '팬트리1985',
        // arrival: '10월 10일 (금) 새벽배송 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'seller-1-1-1',
            // 주문상태 (OrderStatus.ts 참고)
            orderStatus: {
              status: 'order_completed' as const,
              date: '2025-10-25T12:34:56',
              // orderCase: 'pickup' as const,
            },
            // 추가정보
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
        id: 'seller-1-2',
        seller: '롱샴 공식 스토어',
        // arrival: '10월 10일 (금) 새벽배송 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'seller-1-2-1',
            title:
              '포헤르츠 3D 부스터 마스크 젤 80g 포헤르츠 3D 부스터 마스크 젤 80g 포헤르츠 3D 부스터 마스크 젤 80g',
            // 주문상태 (OrderStatus.ts 참고)
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
    id: 'order-2',
    deliveryType: '오늘배송',
    sellers: [
      {
        id: 'seller-2-1',
        seller: '현대백화점',
        arrival: '오늘밤 12시 전 도착',
        items: [
          {
            ...mockOrderItem,
            id: 'seller-2-1-1',
            delivery: {
              deliveryFee: 3000,
              feePolicy: 'freeOnly',
            },
            // 주문상태 (OrderStatus.ts 참고)
            orderStatus: {
              status: 'delivered_confirmed_no_review' as const,
              date: '2025-10-25T12:34:56',
              // orderCase: 'pickup' as const,
            },
          },
        ],
      },
    ],
  },
];
