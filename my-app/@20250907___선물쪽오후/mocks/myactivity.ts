/* 마이페이지 나의활동 */
// 리뷰포토들 샘플
const mockReviewPhotos = [
  { src: '/images/dummy/@sample_review_01.png', alt: '상품 리뷰 사진 1' },
  { src: '/images/dummy/@sample_review_02.png', alt: '상품 리뷰 사진 2' },
];
// 매장리뷰포토들 샘플
const mockReviewStorePhotos = [
  { src: '/images/dummy/@sample_torder_01.png', alt: '매장 리뷰 사진 1' },
  { src: '/images/dummy/@sample_torder_01.png', alt: '매장 리뷰 사진 2' },
];
// 상품 이미지 샘플 데이터
const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};

// ==================== 상품 리뷰 - 작성가능한리뷰 ==================== //
export const prodOrderItem = {
  id: 'prod-review-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: '브랜드명',
  title:
    '상품명 한줄 말줄임 처리 상품명 한줄 말줄임 처리 상품명 한줄 말줄임 처리 상품명 한줄 말줄임 처리',
  orderOptions: ['150ml', '스킨로션', '건성피부용', '블루'],
};
export const prodReviewList = [
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-1' },
    purchasedAt: '20250703',
    info: { type: 'general' as const, rewardable: true, point: 200, dueDays: 28 },
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-1-1' },
    purchasedAt: '20250703',
    info: { type: 'general' as const },
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-2' },
    purchasedAt: '20250703',
    info: { type: 'monthly' as const, rewardable: true, point: 200, dueDays: 28 },
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-2-1' },
    purchasedAt: '20250703',
    info: { type: 'monthly' as const },
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-3' },
    purchasedAt: '20250703',
    info: { type: 'experience' as const, rewardable: true, dueDays: 18 },
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-3-1' },
    purchasedAt: '20250703',
    info: { type: 'experience' as const },
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-4' },
    purchasedAt: '20250703',
    info: { type: 'gift' as const, rewardable: true, point: 200, dueDays: 30 },
    fromUser: '이*대',
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-4-1' },
    purchasedAt: '20250703',
    info: { type: 'gift' as const, point: 200, dueDays: 30 },
    fromUser: '이*대',
  },
];
// 상품 리뷰 작성,수정 상단 상품
export const prodReviewDetailItem = {
  orderItem: {
    id: 'prod-review-detail-1',
    href: '#',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
    },
    brand: 'koy',
    title: '코이 블룸 글로우 로션 토너 150ml',
    orderOptions: ['150ml', '스킨로션', '건성피부용', '블루'],
  },
  purchasedAt: '20250703',
  info: { type: 'experience' as const, rewardable: true, point: 200, dueDays: 28 },
};

// 상품 리뷰 작성,수정 이미지첨부 초기값 샘플
export const initialImages = [
  {
    id: 'img-1',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
    },
    file: null,
  },
  {
    id: 'img-2',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '브라운 캐시미어 니트 스웨터 착용 이미지',
    },
    file: null,
  },
  {
    id: 'img-3',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '브라운 캐시미어 니트 스웨터 착용 이미지',
    },
    file: null,
  },
  {
    id: 'img-4',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '브라운 캐시미어 니트 스웨터 착용 이미지',
    },
    file: null,
  },
];
// 상품 각 항목별 평가
export const prodMetricFields = [
  {
    key: 'lasting',
    title: '지속력',
    options: [
      { label: '오래가요', value: 'option1' },
      { label: '보통이에요', value: 'option2' },
      { label: '짧아요', value: 'option3' },
    ],
  },
  {
    key: 'moisture',
    title: '보습력',
    options: [
      { label: '좋아요', value: 'option1' },
      { label: '보통이에요', value: 'option2' },
      { label: '별로예요', value: 'option3' },
    ],
  },
  {
    key: 'design',
    title: '디자인',
    options: [
      { label: '마음에 들어요', value: 'option1' },
      { label: '보통이에요', value: 'option2' },
      { label: '별로예요', value: 'option3' },
    ],
  },
  {
    key: 'weight',
    title: '무게',
    options: [
      { label: '가벼워요', value: 'option1' },
      { label: '보통이에요', value: 'option2' },
      { label: '무거워요', value: 'option3' },
    ],
  },
  {
    key: 'weight2',
    title: '무게',
    options: [
      { label: '가벼워요', value: 'option1' },
      { label: '보통이에요', value: 'option2' },
      { label: '무거워요', value: 'option3' },
    ],
  },
  {
    key: 'weight3',
    title: '무게',
    options: [
      { label: '가벼워요', value: 'option1' },
      { label: '보통이에요', value: 'option2' },
      { label: '무거워요', value: 'option3' },
    ],
  },
];

// 매장 리뷰 작성,수정 상단 상품
export const mockStoreReviewItem = {
  // 이용일(테이블오더)
  id: 'store-1',
  type: 'torder',
  status: 'ORDER',
  image: {
    src: '/images/dummy/@sample_torder_01.png',
    alt: '크리스탈제이드 대표 이미지',
  },
  date: '20250703',
  badge: '테이블오더',
  title: '크리스탈제이드(매장 리뷰)',
  // info: ['짜장면, 짬뽕, 탕수육'],
  dateTime: '20251226',
  guestCount: 30,
  location: '압구정본점 4F',
};

// ==================== 작성한 리뷰  ==================== //
// 상품 작성한 리뷰
export const prodDoneData = {
  id: 'prod-review-id',
  type: 'general',
  item: {
    id: 'prod-1',
    href: '#',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
    },
    brand: '브랜드명',
    title:
      '상품명 한줄 말줄임 처리 상품명 한줄 말줄임 처리 상품명 한줄 말줄임 처리 상품명 한줄 말줄임 처리',
    orderOptions: ['150ml', '스킨로션', '건성피부용', '블루'],
  },
  purchasedAt: '20250703',
  review: {
    rating: 4.5,
    userId: 'leeja*****u',
    date: new Date('2025-03-25'),
    specs: [
      { label: '옵션', value: '네이비/L' },
      { label: '피부타입', value: '건성' },
      { label: '민감도', value: '보통' },
    ],
    flags: ['best', 'experience'],
    review:
      '항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서 항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서',
    photos: mockReviewPhotos,
  },
};
export const prodDoneList = [
  {
    ...prodDoneData,
    id: 'prod-review-1',
    type: 'general', // 일반
    review: {
      ...prodDoneData.review,
      flags: ['best'],
    },
  },
  {
    ...prodDoneData,
    id: 'prod-review-2',
    type: 'monthly', // 한달
    review: {
      ...prodDoneData.review,
      flags: [],
      photos: undefined,
    },
  },
  {
    ...prodDoneData,
    id: 'prod-review-3',
    type: 'gift', // 선물
    review: {
      ...prodDoneData.review,
      flags: ['best', 'gift'],
    },
    fromUser: '이*대', // 선물
  },
  {
    ...prodDoneData,
    id: 'prod-review-4',
    type: 'experience', // 체험단
  },
  { ...prodDoneData, id: 'prod-review-5', type: 'experience' },
];

// (매장) - 작성가능한 리뷰
export const mockReviewList = [
  // 예약신청일(예약)
  {
    id: 'test-1',
    type: 'booking',
    status: 'RESERVATION',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    date: '20250703',
    badge: '예약',
    title: '크리스탈제이드(매장 리뷰)',
    info: ['짜장면, 짬뽕, 탕수육'],
    dateTime: '202512071200',
    guestCount: 7,
    location: '압구정본점 4F',
  },
  {
    id: 'test-4',
    type: 'booking',
    status: 'RESERVATION',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    date: '20250703',
    badge: '예약',
    title: '크리스탈제이드(매장 리뷰)',
    info: ['룸 타입 예약(소형 룸)'],
    dateTime: '202512071200',
    guestCount: 7,
    location: '압구정본점 4F',
  },
  // 이용일(웨이팅)
  {
    id: 'test-2',
    type: 'waiting',
    status: 'ORDER',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '오규당 4F 대표 이미지',
    },
    date: '20250703',
    badge: '웨이팅',
    title: '오규당 4F(매장 리뷰)',
    dateTime: '20251226',
    guestCount: 7,
    location: '압구정본점 4F ',
  },
  {
    id: 'test-5',
    type: 'waiting',
    status: 'ORDER',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '오규당 4F 대표 이미지',
    },
    date: '20250703',
    badge: '웨이팅',
    title: '오규당 4F(매장 리뷰)',
    dateTime: '20251226',
    guestCount: 30,
    location: '커넥트 현대 부산 10층',
  },
  // 이용일(테이블오더)
  {
    id: 'test-3',
    type: 'torder',
    status: 'ORDER',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    date: '20250703',
    badge: '테이블오더',
    title: '크리스탈제이드(매장 리뷰)',
    dateTime: '20251226',
    guestCount: 30,
    location: '압구정본점 4F',
  },
];

// (매장) - 작성한 리뷰
const storeDoneData = {
  id: 'prod-review-id',
  item: {
    // 이용일(테이블오더)
    id: 'store-1',
    type: 'torder',
    status: 'ORDER',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    date: '20250703',
    badge: '테이블오더',
    title: '크리스탈제이드(매장 리뷰)',
    dateTime: '202512261200',
    guestCount: 30,
    location: '압구정본점 4F',
  },
  // purchasedAt: '20250703',
  review: {
    rating: 4.5,
    userId: 'leeja*****u',
    date: new Date('2025-03-25'),
    specs: [
      { label: '옵션', value: '네이비/L' },
      { label: '피부타입', value: '건성' },
      { label: '민감도', value: '보통' },
    ],
    // flags: ['best', 'gift'],
    review:
      '항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서 항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서',
    photos: mockReviewStorePhotos,
  },
};
export const storeDoneList = [
  {
    ...storeDoneData,
    id: 'prod-review-1',
    item: {
      // 예약신청일(예약)
      ...storeDoneData.item,
      type: 'booking',
      status: 'RESERVATION',
      badge: '예약',
      title: '오규당 4F',
      info: ['룸 type 예약(소형 룸)'],
    },
  },
  {
    ...storeDoneData,
    id: 'prod-review-2',
    item: {
      // 이용일(테이블오더)
      ...storeDoneData.item,
      title: '오규당 4F',
      info: ['북경오리, 새우교자&쇼마이&부추교자'],
      guestCount: null,
      dateTime: '20251226',
    },
  },
  {
    ...storeDoneData,
    id: 'prod-review-3',
    item: {
      // 이용일(웨이팅)
      ...storeDoneData.item,
      type: 'waiting',
      status: 'ORDER',
      badge: '웨이팅',
      title: '크리스탈제이드',
      dateTime: '20251226',
    },
  },
  { ...storeDoneData, id: 'prod-review-4', dateTime: '20251226' },
  { ...storeDoneData, id: 'prod-review-5', dateTime: '20251226' },
];

// ==================== 쇼핑알림  ==================== //
// 재입고알림
const restockAlarmItem = {
  id: 'restock-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: '탈리다쿰',
  title: '에이치엠베리어 시그니어처 화이트 단델리온 에센스 화장수 100ml',
  orderOptions: ['100ml', 'FREE'],
};
// 재입고알림 목록
import { RestockAlarmData } from '@/views/mypage/activity/alram/restock/RestockAlarm';
export const restockAlarmList: RestockAlarmData[] = [
  {
    orderItem: { ...restockAlarmItem, id: 'restock-1' },
    meta: { status: 'waiting' as const, date: '20251225' },
  },
  {
    orderItem: { ...restockAlarmItem, id: 'restock-2' },
    meta: { status: 'canceled' as const, date: '20251225' },
  },
  {
    orderItem: { ...restockAlarmItem, id: 'restock-3' },
    meta: { status: 'completed' as const, date: '20251225' },
  },
];
// LIVE알림
const liveAlarmItem = {
  id: 'live-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: '슬립앤슬립',
  title: '[슬립앤슬립] 아이유 깊은잠베개 단독 혜택 방송 LIVE!',
};
// LIVE알림 목록
import { LiveShowData } from '@/views/mypage/activity/alram/live/LiveAlarm';
export const liveAlarmList: LiveShowData[] = [
  {
    orderItem: { ...liveAlarmItem, id: 'live-1', liveFlag: 'comingSoon' },
    meta: { status: 'upcoming' as const, date: '20250404' },
  },
  {
    orderItem: { ...liveAlarmItem, id: 'live-2', liveFlag: 'comingSoon' },
    meta: { status: 'canceled' as const, date: '20250403' },
  },
  {
    orderItem: { ...liveAlarmItem, id: 'live-3', liveFlag: 'live' },
    meta: { status: 'onair' as const, date: '20250402' },
  },
  {
    orderItem: { ...liveAlarmItem, id: 'live-4', liveFlag: 'replay' },
    meta: { status: 'replay' as const, date: '20250402' },
  },
  {
    orderItem: { ...liveAlarmItem, id: 'live-5' },
    meta: { status: 'ended' as const, date: '20250402' },
  },
];

// 내가 팔로우한 LIVE
export const LiveFollowList = [
  { id: 'ch-1', name: '채널A' },
  { id: 'ch-2', name: '채널B' },
  { id: 'ch-3', name: '채널C' },
  { id: 'ch-4', name: '채널명 전체 표기됩니다' },
  { id: 'ch-5', name: '채널명 전체 표기됩니다' },
];

// ==================== 이벤트 참여내역 ==================== //
export const mockJoinedEventsData = [
  {
    id: 'joined-event-1',
    title: '클럽위크 경품 행운 이벤트',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    applyDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'applied' as const, //응모
  },
  {
    id: 'joined-event-1-1',
    title: '클럽위크 경품 행운 이벤트',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    applyDate: '20260125',
    type: 'applied' as const, //응모
  },
  {
    id: 'joined-event-2',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    applyDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'lost' as const, //미당첨
  },
  {
    id: 'joined-event-3',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    applyDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'lost' as const, //미당첨
    showGuide: true,
  },
  {
    id: 'joined-event-4',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    applyDate: '20260125',
    winnerInfoInputDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'won' as const, //당첨
    status: 'pending' as const,
    showGuide: true,
  },
  {
    id: 'joined-event-5',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    applyDate: '20260125',
    winnerInfoInputDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'won' as const, //당첨
    status: 'pending' as const,
  },
  {
    id: 'joined-event-6',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    applyDate: '20260125',
    winnerInfoInputDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'won' as const, //당첨
    status: 'closed' as const,
  },
  {
    id: 'joined-event-7',
    title: '[일반] 와코루 5% 쿠폰',
    applyDate: '20260125',
    winnerAnnounceDate: '20260125',
    isInstant: true,
    reward: '와코루 5% 다운로드 쿠폰',
    type: 'won' as const, //당첨
    // status: 'closed' as const,
  },
];

// ==================== 1:1문의하기 ==================== //
// 추가정보 샘플
const mockQnaAddInfoData = [
  { label: '결제 수단', value: '신용카드' },
  { label: '상품 사용 여부', value: '사용 전' },
  { label: '받는 사람', value: '김*대' },
  { label: '휴대폰 번호', value: '010-****-5678' },
  {
    label: '배송지',
    value: `서울특별시 강남구 테헤란로 32-1\n강남 푸르지오 헤리티지 리버뷰 아파트\n1004동 1004호`,
  },
  { label: '답변 알림', value: `휴대폰(010-****-5678))` },
  { label: '', value: `이메일(abc***@gmail.com)` },
];
// 답변 샘플
const mockAnswersData = [
  {
    id: 'answer-001-1',
    content:
      '고객님께서 문의하신 상품의 경우 2025-05-13 23시 이후에 입고 예정인 점 확인되나, 입고 일정은 공급사의 사정에 따라 변동될 수 있기에 구매에 참고 부탁드립니다.',
    date: '25.03.25',
  },
];
const mockProductData = {
  image: '/images/dummy/@sample_product_01.png',
  // brand: '프레데릭 말',
  title:
    '탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리 탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리',
  // orderNum: '20250328012345678',
  href: '#',
};
// 아이템 샘플
const mockOneOnOneItemData = {
  id: 'one-on-id',
  date: '25.03.25',
  question: {
    title:
      '문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리',
    content: `내용 전체가 노출됩니다. 최대 500자까지 등록가능 합니다. 내용 전체가 노출됩니다. 최대 500자까지 등록가능 합니다.`,
  },
  // answers: mockAnswersData,
  isSecret: false,
  isMyPost: true,
  photos: mockReviewPhotos,
  // product: mockProductData,
  qnaType: {
    type: '배송회수',
    detail: '기타',
  },
  addInfo: [
    { label: '답변 알림', value: `휴대폰(010-****-5678))` },
    { label: '', value: `이메일(abc***@gmail.com)` },
  ],
};
// 목록 샘플
export const mockOneOnOneData = [
  {
    ...mockOneOnOneItemData,
    id: 'one-on-001',
    product: {
      ...mockProductData,
      orderNum: '20250328012345678', // 주문번호 설정
    },
    addInfo: mockQnaAddInfoData, // 추가정보 설정
  },
  {
    ...mockOneOnOneItemData,
    id: 'one-on-002',
    answers: mockAnswersData,
    product: {
      ...mockProductData,
      orderNum: '20250328012345678', // 주문번호 설정
    },
    addInfo: mockQnaAddInfoData,
  },
  {
    ...mockOneOnOneItemData,
    id: 'one-on-003',
    product: mockProductData,
  },
  {
    ...mockOneOnOneItemData,
    id: 'one-on-004',
    answers: mockAnswersData, // 답변 설정
    product: mockProductData,
  },
];

// ==================== QnA ==================== //
// 답변 샘플
const mockQnAAnswerData = [
  {
    id: 'answer-002-1',
    content:
      '고객님께서 문의하신 상품의 경우 2025-05-13 23시 이후에 입고 예정인 점 확인되나, 입고 일정은 공급사의 사정에 따라 변동될 수 있기에 구매에 참고 부탁드립니다.',
    date: '25.03.25',
  },
  {
    id: 'answer-002-2',
    content:
      '고객님께서 문의하신 상품의 경우 2025-05-13 23시 이후에 입고 예정인 점 확인되나, 입고 일정은 공급사의 사정에 따라 변동될 수 있기에 구매에 참고 부탁드립니다.',
    date: '25.03.25',
  },
];
// 아이템 샘플
const mockQnAItemData = {
  id: 'qna-id',
  date: '25.03.24',
  question: {
    title:
      '문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리',
    content: `내용 전체가 노출됩니다. 최대 500자까지 등록가능 합니다. 내용 전체가 노출됩니다. 최대 500자까지 등록가능 합니다.`,
  },
  isSecret: false,
  isMyPost: true,
  product: {
    image: '/images/dummy/@sample_product_01.png',
    // brand: '프레데릭 말',
    title:
      '탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리 탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리',
    href: '#',
  },
  // qnaType: {
  //   type: '배송회수',
  //   detail: '기타',
  // },
};
// 목록 샘플
export const mockQnAData = [
  { ...mockQnAItemData, id: 'qna-001', isSecret: true }, // 비밀글 설정
  { ...mockQnAItemData, id: 'qna-002', answers: mockQnAAnswerData }, // 답변 설정
  { ...mockQnAItemData, id: 'qna-003' },
];

// ==================== 출석체크 전월 기록 확인하기 ==================== //
// 선물 목록 (event.ts 참조, @widgets/promotion/GiftList)
export const mockGiftListData = [
  {
    src: '/images/dummy/@sample_gift_01.png',
    title: '첫 출석 시',
    subtitle: '스타벅스 아메리카노(T)',
    winner: 30,
  },
  {
    src: '/images/dummy/@sample_gift_02.png',
    title: '10일 출석 시',
    subtitle: '스타벅스 아메리카노(T) 2잔 + 부드러운 생크림 카스텔라',
    winner: 30,
  },
  {
    src: '/images/dummy/@sample_gift_03.png',
    title: '30일 출석 시',
    subtitle: '스타벅스 e카드 5만원 교환권',
    winner: 30,
  },
];
// 누적 출석 경품 달성 목록
export const mockEventRewardList = [
  {
    id: 'status-1',
    title: '첫 출석',
    subtitle: '스타벅스 아메리카노(T)',
    status: '달성',
  },
  {
    id: 'status-2',
    title: '10일 출석',
    subtitle: '스타벅스 아메리카노(T) 2잔 + 부드러운 생크림 카스텔라 자동 응모',
    status: '달성',
  },
  {
    id: 'status-3',
    title: '30일 출석',
    subtitle: '스타벅스 e카드 5만원 교환권',
    status: '달성',
  },
];

// ==================== 자주 구매하는 상품 샘플 데이터 ==================== //
// 상품 카드 샘플 데이터
export const mockProdCard = {
  id: 'prod-1',
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '[프레데릭 말] 포트레이트 오브 어 레이디 50ml',
  price: {
    current: 129000,
    original: 189000,
    discountRate: 32,
    subPriceText: '배송비 5,000원',
  },
  button: {
    icon: 'cart',
    label: '담기',
    onClick: () => {
      console.log('버튼 클릭');
    },
  } as const,
};
// 자주 구매하는 상품 카드 목록 샘플 데이터
export const mockFavoriteProdList = [
  { id: 'prod-1', purchaseCount: 5, product: { ...mockProdCard, id: 'favorite-1' } },
  { id: 'prod-2', purchaseCount: 3, product: { ...mockProdCard, id: 'favorite-2' } },
  { id: 'prod-3', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-3' } },
  { id: 'prod-4', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-4' } },
  { id: 'prod-5', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-5' } },
  { id: 'prod-6', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-6' } },
  { id: 'prod-7', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-7' } },
  { id: 'prod-8', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-8' } },
  { id: 'prod-9', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-9' } },
  { id: 'prod-10', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-10' } },
  { id: 'prod-11', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-11' } },
  { id: 'prod-12', purchaseCount: 1, product: { ...mockProdCard, id: 'favorite-12' } },
];

// ==================== 기프트 배송조회 샘플 데이터 ====================//
export const mockGiftDeliverItem = {
  id: 'gift-delivery-1',
  status: 'delivered' as const,
  title: '[26년 명절 기프트] 발몽 브이 리프트 세럼',
  infos: { courier: '우체국택배', date: '20260431' },
};
export const mockGiftDeliverList = [
  { ...mockGiftDeliverItem, id: 'gift-delivery-1' },
  {
    ...mockGiftDeliverItem,
    id: 'gift-delivery-2',
    status: 'delivering' as const,
    title:
      '[26년 명절 기프트] 발몽 브이 리프트 세럼 (리프팅 케어 세럼) 150ml 3pcs 세트 상품명이 더 긴 경우 말줄임 상품명이 더 긴 경우 말줄임',
  },
  { ...mockGiftDeliverItem, id: 'gift-delivery-3' },
  { ...mockGiftDeliverItem, id: 'gift-delivery-4', status: 'delivering' as const },
  { ...mockGiftDeliverItem, id: 'gift-delivery-5' },
];

// ==================== 받은 선물함 ==================== //
export const mockReceivedGiftItem = {
  id: 'gift_received-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 576000,
    original: 600000,
  },
  quantity: 12,
  orderStatus: {
    status: 'giftbox_payment_completed' as const, // 선물함_결제완료
    orderCase: 'gift_received' as const, // 받은선물함
  },
};
export const mockReceivedGiftList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    senderName: '이*대',
    items: [
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-02',
        orderStatus: {
          status: 'giftbox_product_ready' as const, // 선물함_상품준비중
          orderCase: 'gift_received' as const,
        },
      },
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-02-1',
        orderStatus: {
          status: 'giftbox_payment_completed' as const, // 선물함_결제완료
          orderCase: 'gift_received' as const,
        },
      },
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-02-2',
        orderStatus: {
          status: 'giftbox_cancel_refund' as const, // 선물함_취소/환불
          orderCase: 'gift_received' as const,
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    senderName: '이*대',
    items: [
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-03',
        orderStatus: {
          status: 'giftbox_delivered_no_review' as const, // 선물함_배송완료(리뷰작성 완료)
          orderCase: 'gift_received' as const,
        },
      },
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-03-2',
        orderStatus: {
          status: 'giftbox_delivered_no_review' as const, // 선물함_배송완료(리뷰작성 완료)
          orderCase: 'gift_received' as const,
          gift: {
            isClaimable: true, //반품/교환 버튼노출
          },
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    senderName: '이*대',
    items: [
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-04',
        orderStatus: {
          status: 'giftbox_delivered_review' as const, // 선물함_배송완료(리뷰작성 전)
          orderCase: 'gift_received' as const,
        },
      },
      {
        ...mockReceivedGiftItem,
        id: 'gift_received-04-2',
        orderStatus: {
          status: 'giftbox_delivered_review' as const, // 선물함_배송완료(리뷰작성 전)
          orderCase: 'gift_received' as const,
          gift: {
            isClaimable: true, //반품/교환 버튼노출
          },
        },
      },
    ],
  },
];
// 선물보기 (받은선물함)
export const mockReceivedGiftDetail = {
  orderNumber: '25122512345678',
  orderDate: '20251225',
  items: [
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01',
      orderStatus: {
        status: 'giftbox_delivering' as const, // 선물함_배송중
        orderCase: 'gift_received' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-1',
      orderStatus: {
        status: 'giftbox_used' as const, // 선물함_사용완료
        orderCase: 'gift_received' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-2',
      orderStatus: {
        status: 'giftbox_cancel_refund' as const, // 선물함_취소/환불
        orderCase: 'gift_received' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-3',
      orderStatus: {
        status: 'giftbox_delivered_no_review' as const, // 선물함_배송완료(리뷰작성 전)
        orderCase: 'gift_received' as const,
      },
    },
    {
      ...mockReceivedGiftItem,
      id: 'gift_received-01-4',
      orderStatus: {
        status: 'giftbox_delivered_review' as const, // 선물함_배송완료(리뷰작성 완료)
        orderCase: 'gift_received' as const,
      },
    },
  ],
};
// 배송지 정보 샘플데이터
export const mockDelivery = {
  note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
};
// 받는 분 샘플데이터
export const mockReceiverDetail = [
  {
    ...mockReceivedGiftItem,
    id: 'gift_receiver-01',
    orderStatus: {
      status: 'giftbox_proposal' as const, // 선물함_선물제안
      orderCase: 'gift_received' as const,
      gift: {
        isSelectionCompleted: true, // 선택완료
      },
    },
  },
  {
    ...mockReceivedGiftItem,
    id: 'gift_receiver-02',
    orderStatus: {
      status: 'giftbox_proposal' as const, // 선물함_선물제안
      orderCase: 'gift_received' as const,
    },
  },
];

// ==================== 보낸 선물함 ==================== //
export const mockSentGiftItem = {
  id: 'gift_sent-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 576000,
    original: 600000,
  },
  quantity: 12,
  orderStatus: {
    orderCase: 'gift_sent' as const, // 받은선물함
  },
};
export const mockSentGiftList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockSentGiftItem,
        id: 'gift_sent-01',
        orderStatus: {
          status: 'giftbox_payment_completed' as const, // 선물함_결제완료
          orderCase: 'gift_sent' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02',
        orderStatus: {
          status: 'giftbox_product_ready' as const, // 선물함_상품준비중
          orderCase: 'gift_sent' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02-1',
        orderStatus: {
          status: 'giftbox_product_ready' as const, // 선물함_상품준비중
          orderCase: 'gift_sent' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02-2',
        orderStatus: {
          status: 'giftbox_order_cancel' as const, // 선물함_주문취소
          orderCase: 'gift_sent' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
      {
        ...mockSentGiftItem,
        id: 'gift_sent-02-3',
        orderStatus: {
          status: 'giftbox_delivering' as const, // 선물함_배송중
          orderCase: 'gift_sent' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    items: [
      {
        ...mockSentGiftItem,
        id: 'gift_sent-03',
        orderStatus: {
          status: 'giftbox_delivering' as const, // 선물함_배송중
          orderCase: 'gift_sent' as const,
          gift: {
            receiverName: '이*대', // 받는사람
          },
        },
      },
    ],
  },
];

// ==================== 선물픽 ==================== //
export const mockSentGiftPickItem = {
  id: 'gift_pick-id',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '예향 채식주의자용 신선한 반찬 세트 구성 이미지',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  orderOptions: ['채식주의자용', '6종 세트'],
  price: {
    current: 576000,
    original: 600000,
  },
  quantity: 12,
  orderStatus: {
    orderCase: 'gift_pick' as const, // 선물픽
  },
};
export const mockSentGiftPickList = [
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    giftPickNumber: 'P25122512345678',
    receiverName: '이*대',
    items: [
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-01',
        orderStatus: {
          status: 'giftbox_address_completed' as const, // 선물함_배송지입력 완료
          orderCase: 'gift_pick' as const,
          gift: {
            isSelectionCompleted: true, // 선택완료
          },
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-01-1',
        orderStatus: {
          status: 'giftbox_address_cancel' as const, // 선물함_배송지입력 취소
          orderCase: 'gift_pick' as const,
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    giftPickNumber: 'P25122512345678',
    receiverName: '이*대',
    items: [
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-02',
        orderStatus: {
          status: 'giftbox_soldout_cancel' as const, // 선물함_품절취소
          orderCase: 'gift_pick' as const,
          gift: {
            isSelectionCompleted: true, // 선택완료
          },
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-02-1',
        orderStatus: {
          status: 'giftbox_apply_cancel' as const, // 선물함_접수취소
          orderCase: 'gift_pick' as const,
        },
      },
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-02-2',
        orderStatus: {
          status: 'giftbox_order_cancel' as const, // 선물함_주문취소
          orderCase: 'gift_pick' as const,
        },
      },
    ],
  },
  {
    orderNumber: '25122512345678',
    orderDate: '20251225',
    giftPickNumber: 'P25122512345678',
    receiverName: '이*대',
    items: [
      {
        ...mockSentGiftPickItem,
        id: 'gift_pick-03',
        orderStatus: {
          status: 'giftbox_delivered' as const, // 선물함_배송완료
          orderCase: 'gift_pick' as const,
        },
      },
    ],
  },
];

// ====================  받는 분  ==================== //
// 주문 아이템 샘플
export const mockReceiverOrderItem = {
  ...mockReceivedGiftItem,
  id: 'gift_receiver-01',
  orderStatus: {
    status: 'giftbox_payment_completed' as const, // 선물함_결제완료
    orderCase: 'gift_sent' as const,
  },
};

// 받는분 영역 카드 (없는) 경우 아이템 - 동일카드메시지
export const mockReceiverItem = {
  id: 'receiver-id',
  receiver: { name: '김*대', phone: '010-****-5678' },
  orderData: mockReceiverDetail,
  canResend: true, // 재발송 가능 여부
};
// 보낸선물함 상세 - 카드 (없는) 목록 샘플데이터 - 동일카드메시지
export const mockReceiverList = [
  {
    ...mockReceiverItem,
    id: 'receiver-01',
    orderData: [{ ...mockReceiverOrderItem, id: 'order-01-01' }],
  },
  {
    ...mockReceiverItem,
    id: 'receiver-02',
    orderData: [
      { ...mockReceiverOrderItem, id: 'order-02-01' },
      { ...mockReceiverOrderItem, id: 'order-02-02' },
    ],
  },
  {
    ...mockReceiverItem,
    id: 'receiver-03',
    orderData: [{ ...mockReceiverOrderItem, id: 'order-03-01' }],
    canResend: false, // 재발송 가능 여부
  },
];

// 받는분 영역 카드 (있는) 경우 아이템 - 개별카드메시지
export const mockReceiverHasCardItem = {
  id: 'receiver-id',
  receiver: { name: '김*대', phone: '010-****-5678' },
  orderData: mockReceiverDetail,
  canResend: true, // 재발송 가능 여부
  sentCard: {
    cardId: 'card-1',
    message: '생일을 진심으로 축하합니다.',
    receiver: '김현대',
    orderDate: '20251215',
  },
};
// 보낸선물함 상세 - 카드 (있는) 목록 샘플데이터 - 개별카드메시지
export const mockReceiverHasCardList = [
  {
    ...mockReceiverHasCardItem,
    id: 'receiver-01',
    orderData: [{ ...mockReceiverOrderItem, id: 'order-01' }],
    sentCard: {
      cardId: 'card-2',
    },
  },
  {
    ...mockReceiverHasCardItem,
    id: 'receiver-02',
    orderData: [
      { ...mockReceiverOrderItem, id: 'order-01' },
      { ...mockReceiverOrderItem, id: 'order-02' },
    ],
    canResend: false, // 재발송 가능 여부
  },
];
