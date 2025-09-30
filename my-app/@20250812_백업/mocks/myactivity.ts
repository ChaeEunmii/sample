/* 마이페이지 나의활동 */
// 리뷰포토들 샘플
const mockReviewPhotos = [
  { src: '/images/dummy/@sample_review_01.png', alt: '상품 리뷰 사진 1' },
  { src: '/images/dummy/@sample_review_02.png', alt: '상품 리뷰 사진 2' },
];

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
    info: { type: 'trial' as const, rewardable: true, dueDays: 18 },
  },
  {
    orderItem: { ...prodOrderItem, id: 'prod-review-3-1' },
    purchasedAt: '20250703',
    info: { type: 'trial' as const },
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
  info: { type: 'trial' as const, rewardable: true, point: 200, dueDays: 28 },
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
    winnerAnnounceDate: '20260125',
    type: 'applied' as const, //응모
  },
  {
    id: 'joined-event-2',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'lost' as const, //미당첨
  },
  {
    id: 'joined-event-3',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'lost' as const, //미당첨
    showGuide: true,
  },
  {
    id: 'joined-event-4',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'won' as const, //당첨
    status: 'pending' as const,
  },
  {
    id: 'joined-event-5',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'won' as const, //당첨
    status: 'submitted' as const,
  },
  {
    id: 'joined-event-6',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    eventStartDate: '20260125',
    eventEndDate: '20260125',
    winnerAnnounceDate: '20260125',
    type: 'won' as const, //당첨
    status: 'closed' as const,
  },
];

// ==================== QnA ==================== //
export const mockQnAData = [
  {
    id: 'qna-001',
    userId: 'user456',
    date: '2025.03.24',
    question: {
      title:
        '제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다',
      content: `제품 배송은 언제 되나요? 빨리 받아보고 싶은데요.. 너무 오래 걸리는 것 같습니다 ㅠㅠ`,
    },
    qnaType: {
      type: '배송회수',
      detail: '기타',
    },
    isSecret: false,
    isMyPost: true,
    addInfo: [
      { label: '결제 수단', value: '신용카드' },
      { label: '상품 사용 여부', value: '사용 전' },
      { label: '받는 사람', value: '김*대' },
      { label: '휴대폰 번호', value: '010-****-5678' },
      {
        label: '배송지',
        value: `서울특별시 강남구 테헤란로 32-1\n강남 푸르지오 헤리티지 리버뷰 아파트\n1004동 1004호`,
      },
      { label: '답변 알림', value: `휴대폰(010-****-5678)\n이메일(abc***@gmail.com)` },
    ],
    photos: mockReviewPhotos,
    product: {
      image: '/images/dummy/@sample_product_01.png',
      // brand: '프레데릭 말',
      title:
        '탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리 탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리',
      orderNum: '20250328012345678',
    },
  },
  {
    id: 'qna-002',
    userId: 'user123',
    date: '25.03.25',
    question: {
      title:
        '문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리',
      content: `주문했는데.. 배송지를 변경하고 싶어요. 도와주세요~ 내용 전체가 노출됩니다.  최대 500자까지 등록가능 합니다. 주문했는데.. 배송지를 변경하고 싶어요. 도와주세요~ 내용 전체가 노출됩니다.  최대 500자까지 등록가능 합니다.`,
    },
    qnaType: {
      type: '배송회수',
      detail: '기타',
    },
    answers: [
      {
        id: 'answer-001-1',
        content:
          '고객님께서 문의하신 상품의 경우 2025-05-13 23시 이후에 입고 예정인 점 확인되나, 입고 일정은 공급사의 사정에 따라 변동될 수 있기에 구매에 참고 부탁드립니다.',
        date: '25.03.25',
      },
    ],
    isSecret: false,
    isMyPost: true,
    addInfo: [
      { label: '결제 수단', value: '신용카드' },
      { label: '상품 사용 여부', value: '사용 전' },
      { label: '받는 사람', value: '김*대' },
      { label: '휴대폰 번호', value: '010-****-5678' },
      {
        label: '배송지',
        value: `서울특별시 강남구 테헤란로 32-1\n강남 푸르지오 헤리티지 리버뷰 아파트\n1004동 1004호`,
      },
      { label: '답변 알림', value: `휴대폰(010-****-5678)\n이메일(abc***@gmail.com)` },
    ],
    photos: mockReviewPhotos,
    product: {
      image: '/images/dummy/@sample_product_01.png',
      // brand: '프레데릭 말',
      title:
        '탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리 탈리다쿰 에이치엠베리어 시그니어처 화이트 단델리',
      orderNum: '20250328012345678',
    },
  },
  {
    id: 'qna-003',
    userId: 'user123',
    date: '2025.03.25',
    question: {
      title:
        '문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리',
      content: `주문했는데.. 배송지를 변경하고 싶어요. 도와주세요~ 내용 전체가 노출됩니다.  최대 500자까지 등록가능 합니다. 주문했는데.. 배송지를 변경하고 싶어요. 도와주세요~ 내용 전체가 노출됩니다.  최대 500자까지 등록가능 합니다.`,
    },
    qnaType: {
      type: '배송회수',
      detail: '기타',
    },
    isSecret: false,
    isMyPost: true,
  },
  {
    id: 'qna-004',
    userId: 'user123',
    date: '2025.03.25',
    question: {
      title:
        '문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리',
    },
    qnaType: {
      type: '배송회수',
      detail: '기타',
    },
    isSecret: false,
    isMyPost: true,
  },
];
