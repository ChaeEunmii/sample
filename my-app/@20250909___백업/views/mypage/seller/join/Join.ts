// 판매자 가입 스텝
export const JOIN_STEPS = [
  '판매자 유형선택',
  '사업자 인증',
  '판매자 입점신청 정보',
  '가입 및 입점 신청 완료',
];

// 판매자 가입 선택항목
export const SELLER_TYPE_OPTIONS = [
  {
    value: 'option1',
    title: '개인 사업자',
    desc: '개인사업자로 등록하는 경우, 사업자 번호인증을 통해\n개인사업자로 가입이 가능합니다.',
    docs: [
      '사업자등록증',
      '주민등록등본',
      '통장사본',
      '개인인감증명서',
      '사용인감계',
      '통장인감계',
    ],
  },
  {
    value: 'option2',
    title: '법인 사업자',
    desc: '지속적인 판매를 통해 수익을 목적으로 하는 법인은\n법인 사업자로 가입이 가능합니다.',
    docs: [
      '사업자등록증',
      '법인등기부등본',
      '통장사본',
      '법인인감증명서',
      '사용인감계',
      '통장인감계',
    ],
  },
  {
    value: 'option3',
    title: '기타 사업자',
    desc: '기타(글로벌 사업자 포함) 사업자로 입점 가능합니다.',
    docs: [
      '사업자등록증',
      '법인등기부등본',
      '통장사본',
      '법인인감증명서',
      '사용인감계',
      '통장인감계',
    ],
  },
];

// 판매자 입점신청 면과세 선택옵션
export const dutyTaxOptions = [
  { value: 'option1', label: '과세' },
  { value: 'option2', label: '면세' },
];

// 판매자 입점신청 은행 선택옵션
export const bankSelectOptions = [
  { value: 'bank1', label: '옵션 1' },
  { value: 'bank2', label: '옵션 2' },
  { value: 'bank3', label: '옵션 3' },
];

// 판매자 입점신청 안내문구
export const JOIN_STEP3_INFOLIST = [
  '입점 구비서류 파일은 각각의 파일명을 다르게 하여 업로드 하셔야 합니다.',
  '파일명이 같을시 업로드 오류 발생합니다.',
  '통장사본은 인터넷상 캡쳐본이 아닌, 실물통장의 사본이어야 합니다.',
  '인감증명서는 최근 3개월 이내 발급서류만 인정 됩니다.',
];

// 판매자 입점신청 타이틀섹션 모음
export const JOIN_STEP3_SECTIONS = {
  biz: {
    title: '사업자 정보',
    desc: '정확한 사업자 정보를 입력해주세요.',
  },
  ship: {
    title: '배송 정보',
    desc: '상품 상세 내, 배송교환반품 안내 영역에 상시 노출 됩니다.',
  },
  files: {
    title: '구비서류',
    desc: '필수로 제출해 주셔야 하는 서류입니다.',
  },
  bank: {
    title: '예금주 정보',
    desc: '예금주 인증이 필요합니다.',
  },
  account: {
    title: '입력하신 아이디와 비밀번호는 현대백화점 입점 시스템 및 HiHi 시스템 가입에 사용됩니다.',
    desc: '',
  },
} as const;
