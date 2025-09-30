// =============== 웨이팅 리스트 샘플 데이터 ===============
export const mockWaitingList = [
  // 방문예정_바로입장
  {
    id: 'wating-1',
    type: 'waiting',
    status: 'VISIT_PLANNED_ENTRY',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    waitingInfo: [
      { label: '나의 순서', value: '1번째' },
      { label: '웨이팅번호', value: '1054번' },
    ],
    location: '압구정본점 4F',
    rsvp: true,
    thumbLabel: '대기없음',
  },
  // 방문예정_대기중
  {
    id: 'wating-2',
    type: 'waiting',
    status: 'VISIT_PLANNED_WAITING',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    waitingInfo: [
      { label: '나의 순서', value: '7번째' },
      { label: '웨이팅번호', value: '1054번' },
    ],
    location: '압구정본점 4F',
    rsvp: true,
    thumbLabel: '대기 6팀',
  },
  // 방문완료
  {
    id: 'wating-3',
    type: 'waiting',
    status: 'VISIT_COMPLETED',
    date: '20251224',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    waitingInfo: [{ label: '웨이팅번호', value: '1054번' }],
    location: '무역센터점 6F',
    rsvp: true,
  },
  {
    id: 'wating-4',
    type: 'waiting',
    status: 'VISIT_COMPLETED',
    date: '20251225',
    isReviewed: true,
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    waitingInfo: [{ label: '웨이팅번호', value: '1054번' }],
    location: '무역센터점 6F',
    rsvp: true,
  },
  // 방문취소
  {
    id: 'wating-5',
    type: 'waiting',
    status: 'VISIT_CANCELLED',
    date: '20251226',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    waitingInfo: [{ label: '웨이팅번호', value: '1054번' }],
    location: '무역센터점 6F',
    rsvp: true,
  },
];

// =============== 예약 리스트 샘플 데이터 ===============
export const mockBookingList = [
  // 매장 확인중
  {
    id: 'booking-1',
    type: 'booking',
    status: 'STORE_CHECKING',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    dateTime: '202512241130',
    guestCount: 4,
    info: ['룸 type 예약(소형 룸)'],
    location: '무역센터점 4F',
    deposit: 40000,
    rsvp: true,
  },
  // 예약 확정
  {
    id: 'booking-2',
    type: 'booking',
    status: 'RESERVATION_CONFIRMED',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '샤넬 메이크업 POPUP 대표 이미지',
    },
    title: '샤넬 메이크업 POPUP',
    dateTime: '202511111530',
    guestCount: 1,
    info: ['1:1 퍼스널 컬러 맞춤 메이크업'],
    location: '더현대서울 2F',
    rsvp: true,
  },
  // 예약중/예약확정 - 예약취소 불가
  {
    id: 'booking-3',
    type: 'booking',
    status: 'RESERVATION_PENDING',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '정돈 대표 이미지',
    },
    title: '정돈',
    dateTime: '202512241130',
    guestCount: 12,
    info: ['홀타입'],
    location: '압구정본점 2F',
    rsvp: true,
  },
  // 방문완료
  {
    id: 'booking-4',
    type: 'booking',
    status: 'VISIT_COMPLETED',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    dateTime: '202512241130',
    guestCount: 12,
    info: ['룸 type 예약(소형 룸)'],
    location: '무역센터점 4F',
    deposit: 40000,
    rsvp: true,
  },
  {
    id: 'booking-5',
    type: 'booking',
    status: 'VISIT_COMPLETED',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    dateTime: '202512241130',
    guestCount: 12,
    info: ['룸 type 예약(소형 룸)'],
    location: '무역센터점 4F',
    deposit: 40000,
    rsvp: true,
    isReviewed: true,
  },
  // 방문취소
  {
    id: 'booking-6',
    type: 'booking',
    status: 'VISIT_CANCELLED',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    title: '크리스탈제이드',
    dateTime: '202512241130',
    guestCount: 12,
    info: ['룸 type 예약(소형 룸)'],
    location: '무역센터점 4F',
    deposit: 40000,
    rsvp: true,
  },
];

// =============== 예약 리스트 영문 샘플 데이터 ===============
export const mockEnBookingList = [
  // 매장 확인중
  {
    id: 'booking-1',
    type: 'booking',
    status: 'STORE_CHECKING',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: 'Crystal Jade',
    },
    title: 'Crystal Jade',
    dateTime: '202512241130',
    guestCount: 4,
    info: ['Small Room Reservation'],
    location: 'Trade Center Branch 6F',
    deposit: 40000,
    rsvp: true,
  },
  // 예약 확정
  {
    id: 'booking-2',
    type: 'booking',
    status: 'RESERVATION_CONFIRMED',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: 'Crystal Jade',
    },
    title: 'Crystal Jade',
    dateTime: '202512241130',
    guestCount: 4,
    info: ['Small Room Reservation'],
    location: 'Trade Center Branch 6F',
    deposit: 40000,
    rsvp: true,
  },
];

// =============== 테이블오더 리스트 샘플 데이터 ===============
export const mockTorderList = [
  // 주문완료 - 노랑이 픽업존 N번
  {
    id: 'torder-1',
    type: 'torder',
    status: 'ORDER_COMPLETED',
    branchName: '노랑이 픽업존 N번',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '오규당 대표 이미지',
    },
    title: '오규당',
    location: '대전아울렛점 3F',
    price: {
      current: 18500,
      original: 20000,
    },
    orderItems: [
      {
        id: 'torder-1-1',
        title: '잡채소고기덮밥',
        price: {
          current: 18500,
        },
        quantity: 1,
      },
    ],
  },
  // 주문완료 - 88번 테이블(같은 그룹인 경우 groupId 값 넣기)
  {
    id: 'torder-2',
    groupId: 'torder-3-1',
    type: 'torder',
    status: 'ORDER_COMPLETED',
    branchName: '88번 테이블',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '오규당 대표 이미지',
    },
    title: '오규당',
    location: '압구정본점 3F',
    price: {
      current: 18500,
    },
    orderItems: [
      {
        id: 'torder-2-1',
        title: '깐풍기',
        price: {
          current: 18500,
        },
        quantity: 1,
      },
    ],
  },
  {
    id: 'torder-3',
    groupId: 'torder-3-1',
    type: 'torder',
    status: 'ORDER_COMPLETED',
    branchName: '88번 테이블',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '앤티앤스프레즐 대표 이미지',
    },
    title: '앤티앤스프레즐',
    location: '압구정본점 3F',
    price: {
      current: 14200,
    },
    orderItems: [
      {
        id: 'torder-3-1',
        title: '아몬드 크림 치즈스틱',
        price: {
          current: 9000,
        },
        quantity: 1,
        options: ['기본맛', '레몬소다 (+4,000원)'],
      },
      {
        id: 'torder-3-2',
        title: '블랙페퍼 치즈 핫도그',
        price: {
          current: 5200,
        },
        quantity: 1,
      },
    ],
  },
  // 주문취소
  {
    id: 'torder-4',
    type: 'torder',
    status: 'ORDER_CANCELLED',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '오규당 대표 이미지',
    },
    title: '오규당',
    location: '무역센터점',
    orderItems: [
      {
        id: 'torder-4-1',
        title: '깐풍기',
        price: {
          current: 18500,
        },
        quantity: 1,
      },
      {
        id: 'torder-4-2',
        title: '짜장면',
        price: {
          current: 6000,
        },
        quantity: 1,
      },
      {
        id: 'torder-4-3',
        title: '짬뽕',
        price: {
          current: 6000,
        },
        quantity: 1,
      },
      {
        id: 'torder-4-4',
        title: '만두',
        price: {
          current: 5000,
        },
        quantity: 1,
      },
      {
        id: 'torder-4-5',
        title: '마파두부',
        price: {
          current: 9000,
        },
        quantity: 1,
        options: ['곱빼기 (+1,000원)'],
      },
    ],
    price: {
      current: 41500,
    },
  },
  // 주문완료
  {
    id: 'torder-5',
    type: 'torder',
    status: 'ORDER_COMPLETED',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '오규당 대표 이미지',
    },
    title: '오규당',
    location: '압구정본점 3F',
    price: {
      current: 18500,
      original: 20000,
    },
    orderItems: [
      {
        id: 'torder-5-1',
        title: '깐풍기',
        price: {
          current: 18500,
        },
        quantity: 1,
      },
    ],
  },
];

// =============== 리뷰 페이지 샘플 데이터 ===============
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
    dateTime: '202512261200',
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
    dateTime: '202512261200',
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
    dateTime: '202512261200',
    guestCount: 30,
    location: '압구정본점 4F',
  },
];
