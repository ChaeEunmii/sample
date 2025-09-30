/* 마이페이지 나의정보 */

// ==================== 배송지 관리 ==================== //
// 국내
export const mockLocalAddresses = [
  {
    id: 'address-1',
    title: '우리집',
    name: '김*대',
    isDefault: true, // 기본배송지
    phones: ['010-****-5678'],
    address: `[06181] 서울특별시 강남구 테헤란로 32-1\n강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호`,
    subInfos: ['새벽배송 오후 7시이후', '공동현관 비밀번호 1004#'],
  },
  {
    id: 'address-2',
    title: '직장',
    name: '김*대',
    phones: ['010-****-5678', '010-****-5678'],
    address: `[06181] 서울특별시 강남구 테헤란로 32-1\n강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호`,
    subInfos: ['새벽배송 오후 7시이후', '공동현관 비밀번호 1004#'],
  },
];
// 해외
export const mockGlobalAddresses = [
  {
    id: 'address-1',
    name: 'K******iel',
    isDefault: true, // 기본배송지
    phones: ['+84 - 1234 - **** - 1234', '+84 - 1234 - **** - 5678'],
    address: `Fairmont Royal York, 100 Front Street West, Toronto, ON M5J 1E3, Canada`,
  },
  {
    id: 'address-2',
    name: 'K******iel',
    phones: ['+84 - 1234 - **** - 1234', '+84 - 1234 - **** - 5678'],
    address: `Fairmont Royal York, 100 Front Street West, Toronto, ON M5J 1E3, Canada`,
  },
];

// ==================== 차량등록 관리 ==================== //
export const mockCarList = [
  { id: 'c1', number: '12가3456', createdAt: '20251225', isPrimary: true },
  { id: 'c2', number: '123가 3456', createdAt: '20251225' },
  { id: 'c3', number: '45나6789', createdAt: '20251225' },
];
