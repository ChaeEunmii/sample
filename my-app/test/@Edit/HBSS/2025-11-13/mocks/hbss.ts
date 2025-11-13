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

// ==================== 배송조회 ==================== //
// '보내시는 분' 배송조회 샘플데이터
export const mockTrackSenderData = [
  {
    id: '1234567890-1234',
    receiver: '김현대현대',
    status: '배송 준비중',
  },
  {
    id: '1234567890-5678',
    receiver: '이현대',
    status: '배송정보 확인중',
  },
  {
    id: '1234567890-9102',
    receiver: '김현대',
    status: '배송 준비중',
  },
  {
    id: '1234567890-1237',
    receiver: '김현대',
    status: '배송 진행중',
  },
  {
    id: '1234567890-1235',
    receiver: '김현대',
    status: '배송완료',
  },
];
// '받으시는 분' 배송조회 샘플데이터
export const mockTrackReceiverData = [
  {
    id: '1234567890-1234',
    receiver: '김현대현대',
    status: '배송정보 확인중',
  },
  {
    id: '1234567890-5678',
    receiver: '김현대',
    status: '배송 준비중',
  },
  {
    id: '1234567890-9101',
    receiver: '김현대',
    status: '배송 진행중',
  },
  {
    id: '1234567890-9102',
    receiver: '김현대',
    status: '배송완료',
  },
  {
    id: '1234567890-9103',
    receiver: '김현대',
    status: '배송완료',
  },
];

// ==================== 보내시는 분 정보확인 ==================== //
export const mockReceivers = [
  {
    id: 'receiver-1',
    name: '김현대',
    phone: '01012345678',
    address: {
      defaultAddress: '(01345) 서울특별시 강남구 테헤란로 32-1',
      detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
    },
    productName: '더 건강한 브런치 슬라이스 닭가슴살',
    quantity: '99개',
    happycall: '받으시는 분과 해피콜을 진행합니다.',
  },
  {
    id: 'receiver-2',
    name: '김현대',
    phone: '01012345678',
    address: {
      defaultAddress: '(01345) 서울특별시 강남구 테헤란로 32-1',
      detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
    },
    productName: '더 건강한 브런치 슬라이스 닭가슴살',
    quantity: '99개',
    happycall: '받으시는 분과 해피콜을 진행합니다.',
  },
  {
    id: 'receiver-3',
    name: '김현대',
    phone: '01012345678',
    address: {
      defaultAddress: '(01345) 서울특별시 강남구 테헤란로 32-1',
      detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
    },
    productName: '더 건강한 브런치 슬라이스 닭가슴살',
    quantity: '99개',
    happycall: '받으시는 분과 해피콜을 진행합니다.',
  },
];
