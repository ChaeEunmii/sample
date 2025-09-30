/* 마이페이지 나의활동 */

// ==================== 상품 리뷰 - 작성가능한리뷰 ==================== //
export const prodOrderItem = {
  id: 'prod-review-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: '브랜드명',
  title: '상품명 한줄 말줄임 처리',
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
    userId: 'user123',
    date: '2025.03.25',
    question: {
      title:
        '문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리',
    },
    isSecret: true,
    isMyPost: true,
  },
  {
    id: 'qna-002',
    userId: 'user456',
    date: '2025.03.24',
    question: {
      title:
        '제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다',
      content: `제품 배송은 언제 되나요? 빨리 받아보고 싶은데요.. 너무 오래 걸리는 것 같습니다 ㅠㅠ`,
    },
    answers: [
      {
        id: 'answer-002-1',
        content:
          '고객님께서 문의하신 상품의 경우 2025-05-13 23시 이후에 입고 예정인 점 확인되나, 입고 일정은 공급사의 사정에 따라 변동될 수 있기에 구매에 참고 부탁드립니다.',
        date: '2025.03.25',
      },
      {
        id: 'answer-002-2',
        content:
          '고객님께서 문의하신 상품의 경우 2025-05-13 23시 이후에 입고 예정인 점 확인되나, 입고 일정은 공급사의 사정에 따라 변동될 수 있기에 구매에 참고 부탁드립니다.',
        date: '2025.03.25',
      },
    ],
    isSecret: true,
  },
  {
    id: 'qna-003',
    userId: 'user123',
    date: '2025.03.25',
    question: {
      title:
        '문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리 문의 제목이 출력됩니다. 최대 2줄까지 노출되며 초과 시 말줄임 처리',
    },
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
    isSecret: true,
    isMyPost: true,
  },
];
