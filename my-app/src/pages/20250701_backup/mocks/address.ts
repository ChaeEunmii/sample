// 주소 샘플 데이터
export const mockAddressItem = {
  name: '김현대',
  phone: '010-1234-5678',
  additionalPhone: '010-5678-1234',
  zipcode: '06018',
  defaultAddress: '서울시 강남구 테헤란로 32-1',
  detailedAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
  isDefault: true,
};

// 주소 샘플 데이터 목록
export const mockAddressList = [
  {
    id: 1,
    ...mockAddressItem,
  },
  {
    id: 2,
    name: '이현대',
    phone: '010-1234-5678',
    zipcode: '06018',
    defaultAddress: '서울시 서초구 서초대로38길 12',
    detailedAddress: '101동 1004호',
    isDefault: false,
  },
];
