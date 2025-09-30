import { DeliveryDetails } from '@/widgets/order/DeliveryDetail';

// 주소 샘플 데이터
export const mockAddressItem = {
  name: '김현대',
  phone: '010-1234-5678',
  additionalPhone: '010-5678-1234',
  zipcode: '06018',
  defaultAddress: '서울시 강남구 테헤란로 32-1',
  detailedAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
  isDefault: true,
  mail: 'hyundai@hyundai.com',
};

// 주소 샘플 데이터 목록
export const mockAddressList = [
  {
    id: 'addr-1',
    ...mockAddressItem,
  },
  {
    id: 'addr-2',
    name: '이현대',
    phone: '010-1234-5678',
    zipcode: '06018',
    defaultAddress: '서울시 서초구 서초대로38길 12',
    detailedAddress: '101동 1004호',
    isDefault: false,
  },
  {
    id: 'addr-3',
    name: '박현대',
    phone: '010-1111-2222',
    zipcode: '06018',
    defaultAddress: '서울시 서초구 서초대로38길 12',
    detailedAddress: '101동 1004호',
    isDefault: false,
  },
];

// 배송지 관련 정보 샘플 데이터
export const mockDeliveryDetailsItem: DeliveryDetails = {
  gatePw: '#1004',
  notifyAt: '배송직후',
  note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
};

// 배송지 관련 정보 샘플 데이터(배송 희망일 포함)
export const mockDeliveryDetailsItem2: DeliveryDetails = {
  hopeDate: '20251225',
  gatePw: '#1004',
  notifyAt: '배송직후',
  note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
};
