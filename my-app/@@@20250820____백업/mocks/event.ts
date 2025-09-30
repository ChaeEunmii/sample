import { IconName } from '@/shared/ui';
import { GiftIconType } from '@/widgets/promotion/GiftList';
import { mockProdPromo } from './product';

// 이벤트 배너 1개 데이터
export const mockEvent = {
  id: 'event-1',
  href: '#',
  image: '/images/dummy/@sample_event_short_01.png',
  title:
    '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어 길고길고 긴 이벤트이름 테스트 길고길고 긴 이벤트이름 테스트 길고길고 긴 이벤트이름 테스트',
  subtitle: '2만원 쿠폰팩 다운로드! 1',
  date: '2026.04.01~2026.04.30',
  resultDate: '20250502',
};

// 이벤트 배너 3개 데이터 묶음
export const mockEventData = [
  mockEvent,
  {
    id: 'event-2',
    href: '#',
    image: '/images/dummy/@sample_event_short_02.png',
    title: '웰컴 혜택 이벤트',
    subtitle: '2만원 쿠폰팩 다운로드! 2',
    date: '2026.04.01~2026.04.30',
    resultDate: '20250502',
  },
  {
    id: 'event-3',
    href: '#',
    image: '/images/dummy/@sample_event_short_03.png',
    title: '도프터(폴카독베이커리) 체험 이벤트 _ 세먼세이즈 비스킷 연어',
    subtitle: '2만원 쿠폰팩 다운로드! 3',
    date: '2026.04.01~2026.04.30',
    resultDate: '20250502',
  },
];

// 이벤트 배너 10개 이상 데이터 묶음
export const mockEventDatas = [
  ...mockEventData,
  ...mockEventData.map((item, idx) => ({ ...item, id: `event-${idx + 4}` })),
  ...mockEventData.map((item, idx) => ({ ...item, id: `event-${idx + 7}` })),
  ...mockEventData.map((item, idx) => ({ ...item, id: `event-${idx + 10}` })),
  ...mockEventData.map((item, idx) => ({ ...item, id: `event-${idx + 13}` })),
  ...mockEventData.map((item, idx) => ({ ...item, id: `event-${idx + 16}` })),
  ...mockEventData.map((item, idx) => ({ ...item, id: `event-${idx + 19}` })),
];

// 이벤트 결과 데이터
export const mockEventResultDatas = mockEventDatas.map(
  ({ id, href, title, subtitle, date, resultDate }) => ({
    id,
    href,
    title,
    subtitle,
    date,
    resultDate,
  })
);

// 체험단 카테고리 데이터
export const mockEventCateDatas = [
  {
    name: '뷰티',
    data: mockEventData.map((item) => ({ ...item, dDay: 15, href: '/event/detail?exp' })),
  },
  {
    name: '리빙',
    data: mockEventData,
  },
  {
    name: '스포츠',
    data: mockEventData,
  },
];

// H.Point 참여 가능 목록 데이터
export const mockEventHPointDatas = mockEventData.map(({ id, href, image, title, date }) => ({
  id,
  href,
  image,
  title,
  date,
}));

// H.Point 참여 적립 예정 목록 데이터
export const mockEventHPointRewardDatas = mockEventDatas.map(({ subtitle, ...rest }) => ({
  ...rest,
  condition: ['바로접속, 선물하기'],
  rewardPoint: { value: 999000, isCompleted: false },
}));

// H.Point 참여 적립 완료 목록 데이터
export const mockEventHPointRewardDatas2 = mockEventDatas.map(({ subtitle, ...rest }) => ({
  ...rest,
  condition: ['바로접속, 선물하기'],
  rewardPoint: { value: 999000, isCompleted: true },
}));

// 당첨자 목록
export const mockEventWinnerData = [
  {
    name: '김현대',
    userId: 'SAMPLEUSERIDTEST',
    phoneNumber: '1234',
    prize: '[체험상품] 딥퍼랑스 퍼퓸 드 바디워시 머스키우드 본품 300ml',
  },
  {
    name: '이현대백',
    userId: 'SAMPLEUSERIDTEST',
    phoneNumber: '1235',
    prize: '4자 이름 [체험상품] 딥퍼랑스 퍼퓸 드 바디워시 머스키우드 본품 300ml',
  },
  {
    name: '박현대',
    userEmail: 'dlapdlfdbwj@gmail.com',
    phoneNumber: '1234',
    prize: '[체험상품] 딥퍼랑스 퍼퓸 드 바디워시 머스키우드 본품 300ml',
  },
  {
    name: '서현대백화',
    userEmail: 'spdlqjapdlf@naver.com',
    phoneNumber: '1236',
    prize: '5자 이름 [체험상품] 딥퍼랑스 퍼퓸 드 바디워시 머스키우드 본품 300ml',
  },
  {
    name: '강현대백화점',
    userId: 'SAMPLEUSERIDTEST',
    phoneNumber: '1237',
    prize: '6자 이름 [체험상품] 딥퍼랑스 퍼퓸 드 바디워시 머스키우드 본품 300ml',
  },
];

// 선물 리스트
export const mockGiftListData = [
  {
    src: '/images/dummy/@sample_gift_01.png',
    title: '첫 출석 시',
    subtitle: '스타벅스 아메리카노(T)',
    winner: 30,
  },
  {
    src: '/images/dummy/@sample_gift_02.png',
    title: '첫 출석 시',
    subtitle: '스타벅스 아메리카노(T) 2잔 + 부드러운 생크림 카스텔라',
    winner: 30,
  },
  {
    src: '/images/dummy/@sample_gift_03.png',
    title: '첫 출석 시',
    subtitle: '스타벅스 e카드 5만원 교환권',
    winner: 30,
  },
  {
    icon: 'coupon' as GiftIconType,
    title: '첫 출석 시',
    subtitle: '쿠폰',
    winner: 30,
  },
  {
    icon: 'point' as GiftIconType,
    title: '첫 출석 시',
    subtitle: '포인트',
    winner: 30,
  },
  {
    icon: 'coffee' as GiftIconType,
    title: '첫 출석 시',
    subtitle: '커피',
    winner: 30,
  },
  {
    icon: 'pizza' as GiftIconType,
    title: '첫 출석 시',
    subtitle: '피자',
    winner: 30,
  },
  {
    icon: 'donut' as GiftIconType,
    title: '30일 출석 시',
    subtitle: '도넛',
    winner: 10,
  },
  {
    icon: 'chicken' as GiftIconType,
    title: '30일 출석 시',
    subtitle: '치킨',
    winner: 10,
  },
  {
    icon: 'cake' as GiftIconType,
    title: '30일 출석 시',
    subtitle: '케이크',
    winner: 10,
  },
  {
    icon: 'giftbox' as GiftIconType,
    title: '30일 출석 시',
    subtitle: '선물박스',
    winner: 10,
  },
];

// 다양한 혜택을 즐기는 방법
export const iconLinkListData = [
  {
    href: '#',
    icon: 'download' as IconName,
    title: '아직! APP 다운을 하지 않으셨나요?',
    desc: '앱 다운로드 받고 다양한 혜택 받으세요',
  },
  {
    href: '#',
    icon: 'bell' as IconName,
    title: '수신동의 하면? 혜택이 왕창 쏟아짐!',
    desc: '다양한 혜택을 미리 받으세요',
  },
  {
    href: '#',
    icon: 'share' as IconName,
    title: '카카오톡 공유하기',
    desc: '친구에게도 공유해보세요',
  },
];

// ⚠️ 커스텀으로 텍스트 크기를 조절하는 경우, 큰글씨/작은글씨로 나뉘지만 '어드민에서 값을 받아와 해당 값으로 커스텀하는 텍스트 컴포넌트(custom/text 등)'의 확장 및 재사용성을 위해 숫자로 넣음.
const mockEventNotice = [
  {
    weight: undefined, // 기본: regular
    size: undefined, // 기본: 12px, 작은: 11px
    color: undefined, // 기본: #8c8c8c
    text: '(기본) 이벤트 기간 내 구매했어도 참여하기 버튼을 클릭해야만 스탬프가 지급됩니다.',
  },
  {
    weight: undefined, // 기본: regular
    size: undefined, // 기본: 12px, 작은: 11px
    color: '#05b15b', // 기본: #8c8c8c
    text: '(색상 적용)스탬프 1개 지급 기준은 아래와 같습니다.\n> 펫 클럽 대상 상품 최종 결제 금액 기준 5만원 이상 결제 시, 스탬프 1개 지급 (1일 최대 1개)',
  },
  {
    weight: 'bold', // 기본: regular
    size: undefined, // 기본: 12px, 작은: 11px
    color: undefined, // 기본: #8c8c8c
    text: '(굵기 적용) 포인트 지급 전에 스탬프가 지급된 구매 건 취소/반품 시 스탬프가 회수됩니다.',
  },
  {
    weight: undefined, // 기본: regular
    size: 11, // 기본: 12px, 작은: 11px
    color: undefined, // 기본: #8c8c8c
    text: '(작은 사이즈 적용) 포인트 지급 전에 스탬프가 지급된 구매 건 취소/반품 시 스탬프가 회수됩니다.',
  },
] as const;

const mockEventCustomTextList = [
  {
    color: undefined,
    weight: undefined,
    size: undefined,
    text: '(기본) 커스텀 가능한 텍스트 리스트 샘플 데이터 / 하나면 일반 텍스트',
  },
  {
    color: '#05b15b', // 기본: #222222
    weight: undefined,
    size: undefined,
    text: '(색상 적용) 커스텀 가능한 텍스트 리스트 샘플 데이터 / 둘 이상 리스트',
  },
  {
    color: undefined,
    weight: 'bold' as const, // 기본: regular
    size: undefined,
    text: '(굵기 적용) 커스텀 가능한 텍스트 리스트 샘플 데이터',
  },
  {
    color: undefined,
    weight: undefined,
    size: 13, // 기본: 14px
    text: '(작은 사이즈 적용) 커스텀 가능한 텍스트 리스트 샘플 데이터',
  },
  {
    color: '#05b15b', // 기본: #222222
    weight: undefined,
    size: 13, // 기본: 14px
    text: '(색상,작은 사이즈 적용) 커스텀 가능한 텍스트 리스트 샘플 데이터',
  },
  {
    color: undefined,
    weight: 'bold' as const, // 기본: regular
    size: 13, // 기본: 14px
    text: '(굵기,작은 사이즈 적용) 커스텀 가능한 텍스트 리스트 샘플 데이터',
  },
];

// 응모 완료 팝업 데이터
export const mockEventCompleted = {
  title: '오답입니다. 다음 기회에...',
  subTitle: '다음 미션에도 도전해보세요!',
};
export const mockEventCompletedLanding = {
  ...mockEventCompleted,
  landing: {
    text: '쇼핑하러 가기',
    href: '#',
  },
};
export const mockEventCompletedPoint = {
  ...mockEventCompleted,
  benefit: {
    type: 'point' as const,
    name: '100',
    period: '발급일 7일 후 자정까지',
  },
};
export const mockEventCompletedGift = {
  ...mockEventCompleted,
  benefit: {
    type: 'gift' as const,
    name: '파리바게뜨 10,000원 권',
    period: '2026.07.15(수)',
  },
};
export const mockEventCompletedHasBanner = {
  ...mockEventCompleted,
  benefit: {
    type: 'coupon' as const,
    name: '장바구니 10%',
    period: '발급 당일 자정까지',
  },
  banner: [
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
  ],
};
export const mockEventCompletedHasBanner2 = {
  ...mockEventCompleted,
  banner: [
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_01.png', href: '#' },
    { src: '/images/dummy/@sample_banner_link_02.png', href: '#' },
  ],
};

// 이벤트 댓글
export const mockEventComment = {
  userId: 'user123',
  date: new Date('2025-03-25'),
  comment:
    '예시 댓글 항목이며, 최대 500자까지 입력가능합니다. 기본 3-4줄 노출 예정 예시 댓글 항목이며, 최대 500자까지 입력가능합니다. 기본 3-4줄 노출 예정 예시 댓글 항목이며, 최대 500자까지 입력가능합니다. 기본 3-4줄 노출 예정',
};
export const mockEventComments = [
  {
    id: 'qna-001',
    ...mockEventComment,
  },
  {
    id: 'qna-002',
    ...mockEventComment,
    userId: 'user456',
    date: new Date('2025-03-24'),
    isMyPost: true,
  },
  {
    id: 'qna-003',
    ...mockEventComment,
    userId: 'user789',
    date: new Date('2025-03-23'),
  },
  {
    id: 'qna-004',
    ...mockEventComment,
  },
  {
    id: 'qna-005',
    ...mockEventComment,
  },
  {
    id: 'qna-006',
    ...mockEventComment,
  },
  {
    id: 'qna-007',
    ...mockEventComment,
  },
  {
    id: 'qna-008',
    ...mockEventComment,
  },
  {
    id: 'qna-009',
    ...mockEventComment,
  },
  {
    id: 'qna-010',
    ...mockEventComment,
  },
  {
    id: 'qna-011',
    ...mockEventComment,
  },
  {
    id: 'qna-012',
    ...mockEventComment,
  },
];

// ------------------------------------------
// 체험단형
// ------------------------------------------
export const mockExpEvent = {
  backgroundImage: '/images/dummy/@sample_banner_02.png',
  title: {
    text: ['PERFUME 긴 첫번째 타이틀 필드 여기까지', 'HAND CREAM'],
  },
  subtitle: {
    text: '딥퍼랑스 퍼퓸 핸드크림 50ml',
  },
  notice: mockEventNotice,
  info: {
    period: '2026.03.23(월) ~ 2026.03.29(일)',
    target: '클럽 뷰티 회원',
    submissionCount: '기간중 1회',
    numberOfWinner: 150,
    announcement: '2026.04.03(금)',
    deliveryDate: '2026.04.04(토)',
    howtoJoin: mockEventCustomTextList.slice(0, 1),
  },
  gift: mockProdPromo,
  landingButton: {
    href: '#',
    label: '기획전 보러가기',
  },
};

// ------------------------------------------
// 난수 쿠폰
// ------------------------------------------
export const mockRandomCoupon = {
  backgroundImage: undefined,
  title: {
    text: ['(색상 적용) 정원e샵', '30% 할인 쿠폰'],
    color: '#05b15b', // 기본: #000000
  },
  notice: mockEventNotice,
  affiliate: { name: '정원e샵', href: '#' },
  info: {
    period: '2026.03.23(월) ~ 2026.03.29(일)',
    howtoJoin: mockEventCustomTextList,
  },
};

// ------------------------------------------
// 친구 초대
// ------------------------------------------
export const mockFriendReferral = {
  backgroundImage: undefined,
  speech: undefined,
  title: {
    text: '친구 초대 EVENT (색상 미적용)',
  },
  subtitle: {
    text: '(색상 적용) 친구는 1만 포인트, 나는 최대 5만 포인트 적립!',
    color: '#05b15b', // 기본: #000000
  },
  notice: mockEventNotice,
  reward: {
    type: 'coupon' as const,
    value: '10,000P',
    desc: '[친구초대] 10,000P 쿠폰',
  },
  info: {
    target: {
      send: 'H.Point 통합 회원',
      receive: 'H.Point(NCP) 통합 신규 가입 회원',
    },
    period: '2026.03.23(월) ~ 2026.03.29(일)',
    announcement: '2026.03.23(월)',
    howtoJoin: mockEventCustomTextList,
  },
  moreBenefit: {
    threshold: 3,
    reward: {
      type: 'coupon' as const,
      item: {
        value: '5%',
        desc: '[친구초대] 5% 쿠폰',
      },
    },
    rewardDate: '2026.03.23(월)',
  },
};
// ------------------------------------------
// 친구 초대
// ------------------------------------------
export const mockFriendReferralGift = {
  ...mockFriendReferral,
  moreBenefit: {
    ...mockFriendReferral.moreBenefit,
    reward: {
      type: 'gift' as const,
      item: {
        icon: 'coupon' as GiftIconType,
        title: '파리바게뜨 10,000원 권',
        subtitle: '2026.03.23(월) ~ 2026.03.29(일)',
      },
    },
  },
};

// ------------------------------------------
// 출석 체크
// ------------------------------------------
export const mockAttendanceCheck = {
  backgroundImage: undefined,
  title: {
    text: '8월 출석 체크!',
  },
  subtitle: {
    text: '매일 출첵하고 경품 받으세요!',
  },
  notice: mockEventNotice,
  info: {
    target: 'H.Point 통합회원 (ID당 1일 1회)',
    period: '2026.03.23(월) ~ 2026.03.29(일)',
    howtoJoin: mockEventCustomTextList,
    giftList: mockGiftListData,
    announcement: '2026.03.23(월)',
  },
  doubleDays: [9, 18, 29],
};

// ------------------------------------------
// 스탬프 모으기
// ------------------------------------------
export const mockCollectionStamp = {
  backgroundImage: '/images/dummy/@sample_banner_02.png',
  title: {
    text: '펫 클럽 스템프 이벤트',
  },
  subtitle: {
    text: '상품 구매하고 추가 H.Point 받아가세요.',
  },
  notice: mockEventNotice,
  stamp: [1000, 3000, 5000, 7000, 10000],
  info: {
    target: 'H.Point 통합회원 (중복 불가)',
    period: '2026.03.23(월) ~ 2026.03.29(일)',
    reward: { date: '2026.07.15 (수)', point: 3000 },
    missionList: mockEventCustomTextList,
    howtoJoin: mockEventCustomTextList,
    minValue: 50000,
  },
};

// ------------------------------------------
// 빙고
// ------------------------------------------
export const mockBingo = {
  backgroundImage: '/images/dummy/@sample_banner_event_01.png',
  speech: {
    backgroundColor: '#3cb9ab', // 기본: #000000
    weight: 'bold' as const, // 기본: medium
    size: 14, // 기본: 11px
    color: '#713cb9', // 기본: #ffffff
    text: '빙고하GO!\n선물받GO!',
  },
  title: {
    text: 'MISSION 빙고 이벤트!',
  },
  subtitle: {
    text: '각 미션 통해 다양한 경품을 드려요',
  },
  notice: mockEventNotice,
  bingo: [
    { id: 1, label: '10개 찜하기', reward: '1,000P 적립' },
    { id: 2, label: '아웃도어 클럽 페이지 방문', reward: '500P 적립' },
    { id: 3, label: '리뷰 작성', reward: '2,000P 적립' },
    { id: 4, label: '체험단 이벤트 신청하기', reward: '무료배송 쿠폰 증정' },
    { id: 5, label: '펫 클럽 상품\n3회 구매', reward: '5% 쿠폰 증정' },
    { id: 6, label: '장바구니 10개 담기', reward: '1,000P 적립' },
    { id: 7, label: '선물하기 구매', reward: '3% 쿠폰 증정' },
    { id: 8, label: '마케팅 수신 동의', reward: '1,500P 적립' },
    { id: 9, label: '아웃도어 클럽 페이지 방문', reward: '10% 쿠폰 증정' },
  ],
  info: {
    bingoTitle: '미션하GO! 선물받GO!',
    target: 'H.Point 통합회원 (중복 불가)',
    period: '2026.03.23(월) ~ 2026.03.29(일)',
    howtoJoin: mockEventCustomTextList,
    singleReward: [
      {
        type: 'coupon' as const,
        value: ['5%', '3,000원', '무료배송'],
      },
      {
        type: 'point' as const,
        value: [5, 10, 50],
      },
      {
        type: 'gift' as const,
        value: ['스타벅스 기프트콘'],
      },
    ],
    lineReward: [
      {
        line: 1,
        type: 'point' as const,
        value: 100,
      },
      {
        line: 2,
        type: 'coupon' as const,
        value: '5% 할인 장바구니 쿠폰',
        tip: '100,000원 이상 구매 시 사용 가능, 최대 10,000원',
      },
      {
        line: 3,
        type: 'gift' as const,
        value: '호텔도슨 향수 오드퍼퓸',
        image: '/images/dummy/@sample_product_01.png',
      },
    ],
  },
};

export const mockBingoCommonGuide = [
  {
    textProps: { color: 'gray1' } as const,
    text: '미션 1개 완료 시 마다 해당 칸의 혜택이 지급됩니다.',
  },
  {
    textProps: { color: 'gray1' } as const,
    text: '미션 3개 완료하여 가로, 세로, 대각선 줄 완성 시 빙고 성공!\n빙고 성공 개수만큼 혜택이 지급됩니다.',
  },
];

export const mockBingoMissionGuide = [
  {
    type: 'review',
    title: '[리뷰] 내가 바로 리뷰왕!',
    guide: ['이벤트 기간 중 상품 리뷰를 남기면 미션 완료', '리뷰 혜택까지 추가로 받을 수 있어요'],
  },
  {
    type: 'visit',
    title: '[방문] 새로운 행사 정보 구경하기!',
    guide: [
      '특정 탭/페이지에서 행사 내용을 15초 이상 둘러보면 미션 완료',
      '탭/페이지는 매번 달라져요',
    ],
  },
  {
    type: 'wish',
    title: '[찜] 나만의 쇼핑 위시리스트 만들기!',
    guide: ['이벤트 기간 중 <찜>하기 버튼을 n개 이상 누르면 미션 완료'],
  },
  {
    type: 'review',
    title: '[리뷰] 내가 바로 리뷰왕!',
    guide: ['이벤트 기간 중 상품 리뷰를 남기면 미션 완료', '리뷰 혜택까지 추가로 받을 수 있어요'],
  },
  {
    type: 'cart',
    title: '[장바구니] 갖고 싶은 상품 장바구니에 쏙!',
    guide: ['이벤트 기간 중 <장바구니>에 상품을 n개 이상 담아두면 미션 완료'],
  },
  {
    type: 'shopping',
    title: '[구매] 더현대닷컴에서 신나는 쇼핑!',
    guide: [
      '이벤트 기간 중 구매 조건 충족 시 미션 완료',
      '스탬프는 배송 완료 후 7일 후에 지급되며, 주문 취소 및 반품 건은 스탬프가 즉시 회수돼요',
    ],
  },
  {
    type: 'experience',
    title: '[체험단] 궁금하면 직접 써봐야지!',
    guide: [
      '이벤트 기간 중 운영 중인 <체험단> 이벤트에 참여하면 미션 완료',
      '체험단의 기회까지 덤으로 가질 수도 있어요',
    ],
  },
  {
    type: 'attendance',
    title: '[출석] 오늘도 잊지말고 출첵!',
    guide: ['오늘 출석체크 이벤트 페이지에서 출석 도장 찍으면 미션 완료'],
  },
  {
    type: 'alram',
    title: '[수신동의] 이벤트 알림을 발빠르게 받아요!',
    guide: [
      '마케팅 수신동의 페이지로 이동하여 알림 버튼 켜면 완료',
      '기존에 수신동의 고객은 자동으로 미션이 완료돼요',
    ],
  },
];

// ------------------------------------------
// 퀴즈 이벤트
// ------------------------------------------
export const mockQuizEvent = {
  backgroundImage: undefined,
  title: {
    text: '더 현대 퀴즈',
  },
  notice: mockEventNotice,
  info: {
    target: 'H.Point 통합회원 (ID당 1회)',
    period: '2026.06.01(월) ~ 2026.06.30(화), 30일간',
    howtoJoin: ['퀴즈 참여하고 혜택 받아요!\n정답을 맞추시면 10p, 틀리시면 2p 를 드려요.'],
  },
  quiz: {
    type: 'text',
    question:
      '[홍보] 매일 매일 즐겁게 쌓는 혜택! H.Point의 H.Game이 새롭게 바뀌었어요! 다음 중 리뉴얼된 H.Game에서 플레이할 수 없는 게임은 무엇일까요?',
    questionImage: '/images/dummy/@sample_banner_link_01.png',
    hint: {
      text: '더욱 재미있고 다양해진 H.Game에 참여하려면 H.Point App 최신 업데이트가 필수에요 🎮',
      href: '#',
    },
    choices: {
      list: [
        '매치월드',
        '블록팡팡블록팡팡블록팡팡블록팡팡블록팡팡',
        '미니펫 런런미니펫 런런미니펫 런런',
        '퍼즐 트립퍼즐 트립',
      ],
    },
    reward: {
      correct: '10 포인트',
      incorrect: '2 포인트',
    },
  },
  answer: 2,
};

export const mockQuizEventImage = {
  ...mockQuizEvent,
  quiz: {
    ...mockQuizEvent.quiz,
    type: 'image',
    choices: {
      list: [
        { src: '/images/dummy/@sample_people_01.png', alt: '이미지 설명1' },
        { src: '/images/dummy/@sample_people_02.png', alt: '이미지 설명2' },
        { src: '/images/dummy/@sample_people_03.png', alt: '이미지 설명3' },
        { src: '/images/dummy/@sample_people_04.png', alt: '이미지 설명4' },
      ],
    },
  },
  answer: 1,
};
export const mockQuizEventImageText = {
  ...mockQuizEvent,
  quiz: {
    ...mockQuizEvent.quiz,
    type: 'imageText',
    choices: {
      list: [
        { src: '/images/dummy/@sample_people_01.png', alt: '이미지 설명1' },
        { src: '/images/dummy/@sample_people_02.png', alt: '이미지 설명2' },
        { src: '/images/dummy/@sample_people_03.png', alt: '이미지 설명3' },
        { src: '/images/dummy/@sample_people_04.png', alt: '이미지 설명4' },
      ],
    },
  },
  answer: 3,
};
export const mockQuizEventSubjective = {
  ...mockQuizEvent,
  quiz: {
    ...mockQuizEvent.quiz,
    type: 'subjective',
  },
  answer: 'ABC정답123',
};

// ------------------------------------------
// 설문 이벤트
// ------------------------------------------
export const mockSurveyEvent = {
  backgroundImage: undefined,
  title: {
    text: ['크리스마스 때', '받고 싶은 선물은?'],
  },
  subtitle: {
    text: '총 문항 수 : 4개',
  },
  notice: mockEventNotice,
  showVoteCount: false,
  surveyIntro: '올 한해도 수고 많으셨어요! 나를 위한 선물로 가장 어울릴만한 걸 골라보세요.',
  survey: [
    {
      type: 'text' as const,
      question: '[단일] 다음 중에서 크리스마스 때 가장 받고 싶은 선물을 골라주세요',
      choices: {
        type: 'single' as const,
        list: [
          { value: '1-1', label: '크리스마스 트리 세트', vote: 20 },
          { value: '1-2', label: '크리스마스 케익', vote: 15 },
        ],
      },
    },
    {
      type: 'text' as const,
      question: '[복수] 다음 중에서 크리스마스 때 가장 받고 싶은 선물을 골라주세요',
      choices: {
        type: 'multiple' as const,
        list: [
          { value: '1-1', label: '크리스마스 트리 세트', vote: 30 },
          { value: '1-2', label: '크리스마스 케익', vote: 20 },
          { value: '1-3', label: '현대백화점 상품권 10만원 권', vote: 15 },
          { value: '1-4', label: '크리스마스 한정 디퓨저 세트', vote: 50 },
        ],
      },
    },
    {
      type: 'text' as const,
      question:
        '[단일+기타] H.Point의 H.Game이 새롭게 바뀌었어요! 다음 중 리뉴얼된 H.Game에서 플레이할 수 없는 게임은 무엇일까요?',
      choices: {
        type: 'single' as const,
        list: [
          { value: '1-1', label: '크리스마스 트리 세트', vote: 40 },
          { value: '1-2', label: '현대백화점 상품권 10만원 권', vote: 108 },
          { value: '1-3', label: '현대백화점 상품권 10만원 권', vote: 15 },
          { value: '1-4', label: '크리스마스 한정 디퓨저 세트', vote: 50 },
        ],
      },
    },
    {
      type: 'text' as const,
      question:
        '[복수+기타] H.Point의 H.Game이 새롭게 바뀌었어요! 다음 중 리뉴얼된 H.Game에서 플레이할 수 없는 게임은 무엇일까요?',
      choices: {
        type: 'multiple' as const,
        list: [
          { value: '1-1', label: '크리스마스 트리 세트', vote: 70 },
          { value: '1-2', label: '크리스마스 케익', vote: 0 },
          { value: '1-3', label: '현대백화점 상품권 10만원 권', vote: 48 },
          { value: '1-4', label: '크리스마스 한정 디퓨저 세트', vote: 94 },
          { value: '1-5', label: '기타 항목 타이틀', additional: true, vote: 16 },
        ],
      },
    },
    {
      type: 'image' as const,
      question:
        '[단일] H.Point의 H.Game이 새롭게 바뀌었어요! 다음 중 리뉴얼된 H.Game에서 플레이할 수 없는 게임은 무엇일까요?',
      choices: {
        type: 'single' as const,
        list: [
          { src: '/images/dummy/@sample_people_02.png', alt: '이미지 설명2', vote: 12 },
          { src: '/images/dummy/@sample_people_03.png', alt: '이미지 설명3', vote: 123 },
        ],
      },
    },
    {
      type: 'image' as const,
      question:
        '[복수] H.Point의 H.Game이 새롭게 바뀌었어요! 다음 중 리뉴얼된 H.Game에서 플레이할 수 없는 게임은 무엇일까요?',
      choices: {
        type: 'multiple' as const,
        list: [
          { src: '/images/dummy/@sample_people_01.png', alt: '이미지 설명1', vote: 0 },
          { src: '/images/dummy/@sample_people_02.png', alt: '이미지 설명2', vote: 485 },
          { src: '/images/dummy/@sample_people_03.png', alt: '이미지 설명3', vote: 748 },
          { src: '/images/dummy/@sample_people_04.png', alt: '이미지 설명4', vote: 652 },
        ],
      },
    },
  ],
  reward: '500 포인트',
};

// ------------------------------------------
// 보물찾기
// ------------------------------------------
export const mockTreasureHunt = {
  backgroundImage: undefined,
  title: {
    text: ['보물찾기 이벤트!'],
  },
  subtitle: {
    text: '새로운 더현대에서 보물 찾고 경품 받으세요',
  },
  notice: mockEventNotice,
  info: {
    target: '클럽 가입 회원',
    period: '2025.11.15(토) ~ 2015.12.31(수)',
    howtoJoin: [
      '새로운 더현대 곳곳에 숨어있는 보물을 찾아보세요.\n모든 보물을 찾고 경품 받기 버튼을 누르시면 즉시 경품을 받으실 수 있어요.',
    ],
  },
  treasure: {
    useBasic: true,
    count: 9,
    image: '/images/dummy/@sample_gift_01.png',
  },
};

// ------------------------------------------
// 사다리타기
// ------------------------------------------
export const mockGhostleg = {
  backgroundImage: undefined,
  speech: {
    text: '(기본 세팅) 100% 당첨',
  },
  title: {
    text: ['매일 사다리 타고', '경품 받아가세요'],
  },
  subtitle: {
    text: 'H.Point 5p 부터 10% 할인 쿠폰 까지',
  },
  notice: mockEventNotice,
  info: {
    target: '클럽 가입 회원',
    period: '2025.11.15(토) ~ 2015.12.31(수)',
    howtoJoin: ['APP에 로그인 → 아이콘 클릭 후 즉시 혜택 확인!\n※ APP에서만 참여 및 응모 가능'],
    rewardInfo: [
      {
        type: 'coupon' as const,
        value: ['5%', '3,000원', '무료배송'],
      },
      {
        type: 'point' as const,
        value: [5, 10, 50],
      },
      {
        type: 'gift' as const,
        value: ['스타벅스 기프트콘'],
      },
    ],
  },
  gameTitle: {
    color: '#000000',
    weight: undefined,
    size: 20, // 기본: 20px
    text: 'H.Point 5p 부터 10% 할인 쿠폰 까지',
  },
};

// ------------------------------------------
// 룰렛 이벤트
// ------------------------------------------
export const mockRoulette = {
  backgroundImage: undefined,
  speech: {
    text: '(기본 세팅) 100% 당첨',
  },
  title: {
    text: ['매일 룰렛 돌리고', '경품 받아가세요'],
  },
  subtitle: {
    text: 'H.Point 5p 부터 스타벅스 기프티콘 까지',
  },
  notice: mockEventNotice,
  info: {
    target: '클럽 가입 회원',
    period: '2025.11.15(토) ~ 2015.12.31(수), 47 일간',
    howtoJoin: ['룰렛 돌리고 100% 혜택 당첨 확인하기'],
    sendGifticonDate: '2026.05.31',
  },
  landingButton: {
    href: '#',
    label: '기획전 보러가기',
  },
};

// ------------------------------------------
// 적립금 리워드
// ------------------------------------------
export const mockPointReward = {
  backgroundImage: undefined,
  title: {
    text: ['앤아더스토리즈 뉴 시즌 컬렉션'],
  },
  subtitle: {
    text: '최대 10만원의 적립금 지급',
  },
  notice: mockEventNotice,
  info: {
    period: '2026.06.01 ~ 2025.06.30',
    target: 'NCP 앤아더스토리즈 전상품',
    caution: [
      '쿠폰할인, 배송비, H.Point 사용금액은 행사대상 구매금액으로 인정되지 않습니다.',
      '본 행사 기간 중 신청하기 버튼을 통해서 꼭 신청하셔야 합니다. (구매 전 신청 가능)',
    ],
  },
  includePointValue: false,
  autoEntry: false,
  rewardType: 'fix' as const,
  rewardDate: ['2026.08.03(월) 오후 6시 이후', '적립일로부터 60일간 사용 가능'],
  rewardThreshold: [
    { count: 1, value: 150000, point: 10000 },
    { count: 3, value: 300000, point: 20000 },
    { count: 5, value: 500000, point: 30000 },
    { count: 7, value: 800000, point: 70000 },
    { count: 10, value: 1000000, point: 100000 },
    { count: 15, value: 1500000, point: 120000 },
  ],
  rewardThresholdInfo:
    '1인당 최대 4만원 H.Point 적립 가능\n(ex. 70만원 구매 시 H.Point 4만원 적립)',
};
export const mockPointReward2 = {
  ...mockPointReward,
  rewardType: 'rate' as const,
  rewardThreshold: [
    { value: 150000, point: 1 },
    { value: 300000, point: 2 },
    { value: 500000, point: 5 },
    { value: 800000, point: 7 },
    { value: 1000000, point: 10 },
    { value: 1500000, point: 12 },
  ],
};

// ------------------------------------------
// 댓글 작성 경품 즉시 부여
// ------------------------------------------
export const mockCommentPoint = {
  backgroundImage: undefined,
  title: {
    text: ['응원 댓글 달고', 'H.Point 받으세요'],
  },
  subtitle: {
    text: '아시안게임 국가대표 응원 이벤트',
  },
  notice: mockEventNotice,
  info: {
    period: '2026.06.01 ~ 2025.06.30',
    gift: 'H.Point 50 포인트',
    howtoJoin: [
      '아시안게임에 출전하는 국가대표 선수들에게 응원 메시지를 남겨주시면, 즉시 H.Point를 드립니다.',
    ],
  },
};
