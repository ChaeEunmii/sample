// ✅ 방문예정 데이터
export const upcomingDetailData = {
  // 페이지 타이틀
  title: {
    ko: '방문예정',
    en: 'Planned visit',
    cn: '计划访问',
  },

  // 상단 title 영역
  titleArea: {
    pending: {
      ko: '예약 내용을 매장에서 확인중입니다',
      en: 'The store is currently checking your reservation details',
      cn: '商店目前正在检查您的预订详情',
    },
    confirmed: {
      ko: '예약이 완료되었습니다',
      en: 'Your reservation has been confirmed',
      cn: '您的预订已确认',
    },
    subTitle: {
      name: {
        ko: '크리스탈제이드',
        en: 'Crystal Jade',
        cn: '翡翠拉面小笼包',
      },
      location: {
        ko: '무역센터점 6F',
        en: 'Trade Center Branch 6F',
        cn: '贸易中心店 6楼',
      },
    },
  },

  // 예약 내용 하단 안내글
  bookinginInfoGuide: {
    ko: '예약 진행 과정은 알림톡/SMS로 안내드리겠습니다.\n매장 상황에 따라 부득이하게 예약 취소 될 수 있는 점 양해 부탁드립니다.',
    en: 'We will guide you through the reservation process via KakaoTalk/SMS.\nPlease understand that reservations may be cancelled due to unavoidable circumstances.',
    cn: '我们将通过 KakaoTalk/SMS 指导您完成预订流程。\n若店铺出现不可避免的情况，可能会取消预约，敬请谅解。',
  },

  // 고객정보
  customerInfo: {
    title: {
      ko: '고객 정보',
      en: 'My Contact Information',
      cn: '我的联系方式',
    },
  },

  // 매장 이용 시 안내사항
  information: {
    title: {
      ko: '매장 이용 시 안내 사항',
      en: 'Precautions when using the store',
      cn: '使用商店时的注意事项',
    },
    textList: {
      ko: [
        '이용이 불가능하신 경우 다른 고객님들을 위해 예약 취소 부탁드립니다.',
        '예약 시간보다 연락 없이 10분 이상 늦으시는 경우 예약이 자동 취소 됩니다.',
        '모든 유아 의자가 사용되는 경우, 제공되지 않을 수 있는 점 양해 부탁드립니다.',
      ],
      en: [
        'If you are unable to use it, please cancel your reservation for the sake of other customers.',
        'If you are more than 10 minutes late from the reservation time without notice, your reservation will be automatically canceled.',
      ],
      cn: [
        '若您无法使用该服务，请为其他顾客取消预订。',
        '如果您未经通知而迟到超过 10 分钟，您的预订将被自动取消。',
      ],
    },
  },

  // 하단 버튼
  buttons: {
    cancel: {
      ko: '예약 취소',
      en: 'Cancel Reservation',
      cn: '取消预订',
    },
    confirm: {
      ko: '예약내역 확인',
      en: 'Reservation List',
      cn: '查看预订详情',
    },
  },
} as const;

// ✅ 예약취소 데이터
export const cancelData = {
  // 페이지 타이틀
  title: {
    ko: '예약취소',
    en: 'Cancel reservation',
    cn: '',
  },

  // 상단 title 영역
  titleArea: {
    default: {
      ko: '예약이 취소되었습니다',
      en: 'Your reservation has been canceled',
      cn: '',
    },
    noshow: {
      ko: '안내드린 시간 내 도착 확인이 되지 않아',
      en: '',
      cn: '',
    },
    subTitle: {
      name: {
        ko: '크리스탈제이드',
        en: 'Crystal Jade',
        cn: '翡翠拉面小笼包',
      },
      location: {
        ko: '무역센터점 6F',
        en: 'Trade Center Branch 6F',
        cn: '贸易中心店 6楼',
      },
    },
  },

  // 고객정보
  customerInfo: {
    title: {
      ko: '고객 정보',
      en: 'My Contact Information',
      cn: '我的联系方式',
    },
  },

  // 하단 버튼
  buttons: {
    list: {
      ko: '목록으로',
      en: 'List',
      cn: '',
    },
    available: {
      ko: '예약가능 매장보기',
      en: 'Available Stores',
      cn: '',
    },
  },
} as const;

// ✅ 방문완료 데이터
export const visitCompletedData = {
  // 페이지 타이틀
  title: {
    ko: '방문완료',
    en: 'Visit completed',
    cn: '',
  },

  // 상단 title 영역
  titleArea: {
    title: {
      ko: '방문해주셔서 감사합니다',
      en: 'Thank you for visiting\nWe will come back with better service next time',
      cn: '',
    },
    subTitle: {
      name: {
        ko: '크리스탈제이드',
        en: 'Crystal Jade',
        cn: '翡翠拉面小笼包',
      },
      location: {
        ko: '무역센터점 6F',
        en: 'Trade Center Branch 6F',
        cn: '贸易中心店 6楼',
      },
    },
  },

  // 고객정보
  customerInfo: {
    title: {
      ko: '고객 정보',
      en: 'My Contact Information',
      cn: '我的联系方式',
    },
  },

  // 하단 버튼
  buttons: {
    revisit: {
      ko: '재방문',
      en: 'Revisit',
      cn: '',
    },
    write: {
      ko: '리뷰 쓰기',
      en: 'Write Review',
      cn: '',
    },
    edit: {
      ko: '리뷰 수정',
      en: 'Edit Review',
      cn: '',
    },
  },
} as const;
