// 자주찾는 메뉴
export const MAIN_FAV_ITEMS = [
  { id: 'order', label: '주문내역', icon: 'list' as const, href: '#' },
  { id: 'cancel', label: '취소/반품/교환', icon: 'change' as const, href: '#' },
  { id: 'gift', label: '받은 선물함', icon: 'gift' as const, href: '#' },
  { id: 'event', label: '이벤트 참여내역', icon: 'event2' as const, href: '#' },
  { id: 'heydi', label: 'Heydi', icon: 'heydi' as const, href: '#' },
  { id: 'club', label: '마이 클럽', icon: 'club' as const, href: '#' },
];

// 메인 하단 네비게이션
export const MAIN_NAV_GROUPS = [
  {
    id: 'order',
    title: '나의 주문',
    items: [
      { id: 'orderList', label: '주문확인/배송조회', href: '#' },
      { id: 'cancel', label: '취소/반품/교환', href: '#' },
      { id: 'trip', label: '여행 주문내역 조회', href: '#' },
      { id: 'subscribe', label: '구독 관리', href: '#' },
      { id: 'reservation', label: '예약/오더 조회', href: '#' },
      { id: 'giftBox', label: '선물함', href: '#' },
      { id: 'returnNonFace', label: '비대면 반품 조회', href: '#' },
      { id: 'pastOrders', label: '과거 주문내역 조회', href: '#' },
    ],
  },
  {
    id: 'benefit',
    title: '나의 쇼핑 혜택',
    items: [
      { id: 'vipMileage', label: 'VIP 마일리지', href: '#' },
      { id: 'event', label: '사은행사', href: '#' },
      { id: 'giftDelivery', label: '기프트 배송조회', href: '#' },
    ],
  },
  {
    id: 'service',
    title: '추천 서비스',
    items: [
      { id: 'membership', label: 'HiHi 멤버십 관리', href: '#' },
      { id: 'club', label: 'CLUB', href: '#' },
      { id: 'partners', label: '파트너스', href: '#' },
    ],
  },
  {
    id: 'account',
    title: '나의 정보/결제',
    items: [
      { id: 'profile', label: '회원정보 변경', href: '#' },
      { id: 'hPointPay', label: 'H.point Pay 관리', href: '#' },
      { id: 'address', label: '배송지 관리', href: '#' },
      { id: 'refund', label: '환불계좌/현금영수증 관리', href: '#' },
      { id: 'car', label: '차량 등록 관리', href: '#' },
      { id: 'easyAccount', label: '간편계정 연결관리', href: '#' },
      { id: 'personalInfo', label: '나의 맞춤정보 관리', href: '#' },
      { id: 'loginHistory', label: '로그인 기록', href: '#' },
      { id: 'employeeAuth', label: '임직원 인증', href: '#' },
      { id: 'privacyUsage', label: '개인정보 이용현황', href: '#' },
    ],
  },
  {
    id: 'activity',
    title: '나의 활동',
    items: [
      { id: 'frequent', label: '자주 구매하는 상품', href: '#' },
      { id: 'alarm', label: '재입고/LIVE 알림', href: '#' },
      { id: 'review', label: '상품 리뷰', href: '#' },
      { id: 'storeReview', label: '매장 리뷰', href: '#' },
      { id: 'events', label: '나의 이벤트 참여내역', href: '#' },
    ],
  },
  {
    id: 'support',
    title: '고객지원',
    items: [
      { id: 'cs', label: '고객센터', href: '#' },
      { id: 'inquiry', label: '나의 1:1 문의 내역', href: '#' },
      { id: 'qna', label: '상품 Q&A', href: '#' },
      { id: 'chat', label: '1:1 채팅 내역', href: '#' },
    ],
  },
];
