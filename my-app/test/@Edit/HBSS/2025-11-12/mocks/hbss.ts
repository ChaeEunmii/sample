/* HBSS */

// 상품 이미지 샘플 데이터
const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};

// ==================== 주문상품 ==================== //
// 아이템
export const mockHbssOrderItem = {
  id: 'hbss-order-id',
  href: '#',
  image: mockProdImage,
  brand: '쿼드쎄라',
  title: '포헤르츠 3D 부스터 마스크 젤 80g',
  orderOptions: ['옵션1', '옵션2', '옵션3', '옵션4'],
  quantity: 1,
  price: {
    current: 123456789,
  },
};
// 목록
export const mockHbssOrderList = [
  { ...mockHbssOrderItem, id: 'hbss-order-1' },
  { ...mockHbssOrderItem, id: 'hbss-order-2' },
  { ...mockHbssOrderItem, id: 'hbss-order-3' },
];

// 받은 선물 + 주문아이템 정보 샘플데이터
export const mockHbssGiftOrder = {
  senderName: '박현대',
  orderDate: '20251225',
  orderNumber: '25122512345678',
  items: [
    {
      ...mockHbssOrderItem,
      id: 'hbss-order-1',
    },
    {
      ...mockHbssOrderItem,
      id: 'hbss-order-2',
    },
  ],
};
