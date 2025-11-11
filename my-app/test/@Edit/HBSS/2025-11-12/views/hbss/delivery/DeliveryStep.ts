// 배송지 등록 스텝
export const DeliverySteps = ['본인확인', '정보입력', '정보확인', '완료'];

// 배송방법 옵션
export const MethodOptions = [
  { value: 'method-1', label: '새벽 배송' },
  { value: 'method-2', label: '주간 배송' },
];
// 공동현관 출입방법 옵션
export const DoorOptions = [
  { value: 'door-1', label: '공동현관 비밀번호' },
  { value: 'door-2', label: '자유 출입 가능' },
  { value: 'door-3', label: '직접입력' },
];
// NCP 간편가입 URL 옵션
export const UrlOptions = [
  { value: 'url-1', label: '네, 보내주세요' },
  { value: 'url-2', label: '아니요' },
];

// 주간배송 선택 옵션
export const WeekOptions = [
  { value: 'week-1', label: '문 앞에 놓아주세요.' },
  { value: 'week-2', label: '배송 전 연락바랍니다.' },
  { value: 'week-3', label: '택배함에 넣어주세요.' },
  { value: 'week-4', label: '빠른배송 부탁드립니다.' },
  { value: 'week-5', label: '부재 시 경비실에 맡겨주세요.' },
  { value: 'week-6', label: '핸드폰으로 연락 부탁드립니다.' },
  { value: 'direct', label: '직접 입력하기' },
];
