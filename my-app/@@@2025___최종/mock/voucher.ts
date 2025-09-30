// 상품 이미지 샘플 데이터
const mockProdImage = {
  src: '/images/dummy/@sample_product_01.png',
  alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
};

// ==================== 바우처 ('마이페이지 - 마이바우처' 에서 사용됨) ==================== //
export const mockVoucherCard = {
  id: 'voucher-id',
  href: '#',
  image: mockProdImage,
  subTitle: '',
  title: '라이프 플랑크톤 피부강화 에센스 로션 75ml',
  infos: {
    orderNum: '2505040100737373',
    amount: 1,
    startDate: '20250401',
    endDate: '20250430',
    endTime: '오후 2시',
    useDate: '20251225',
    useTime: '오후 2시',
    usePlace: '다이슨 입점 점포',
    pickupPlace: '더현대서울 비오템',
    caution: '상품상세에서 입력한 경우에만 노출됩니다. 미입력 시 하이픈(-)',
    // createDate: '20251225',
    // cancelDate:'20251225',
  },
  rsvp: true, // rsvp 여부
  type: 'voucher' as const,
  status: 'available' as const,
};

// 카드 배열
export const mockVoucherCards = [
  // ─────────────────────── 바우처 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'voucher-available',
    type: 'voucher' as const,
    status: 'available',
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      useDate: '20251225',
      useTime: '오후 2시',
    },
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'voucher-used',
    type: 'voucher' as const,
    status: 'used' as const,
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      useDate: '20251225',
      useTime: '오후 2시',
      endDate: '20251225',
      endTime: '오후 2시',
    },
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'voucher-expired',
    type: 'voucher' as const,
    status: 'expired' as const,
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      useTime: '오후 2시',
      endDate: '20251225',
      endTime: '오후 2시',
    },
  },
  //취소
  {
    ...mockVoucherCard,
    id: 'voucher-cancelled',
    type: 'voucher' as const,
    status: 'cancelled' as const,
    title: '데코르테AQ 스킨테어 체험분_주문제작 세팅',
    subTitle: '방문픽업',
    infos: {
      amount: 1,
      cancelDate: '20251225', // 취소발생일
    },
  },

  // ─────────────────────── 방문 쿠폰 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'coupon-available',
    type: 'coupon' as const,
    status: 'available' as const,
    title: '[RSVP] 위대한 뮤지션 100인전 전시 무료 입장권',
    subTitle: '공연',
    infos: {
      // amount: 1,
      endDate: '20250716', //'오늘까지' 로 설정
    },
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'coupon-used',
    type: 'coupon' as const,
    status: 'used' as const,
    title: '[RSVP] 위대한 뮤지션 100인전 전시 무료 입장권',
    subTitle: '공연',
    infos: {
      // amount: 1,
      useDate: '20250501',
      endDate: '20250501',
    },
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'coupon-expired',
    type: 'coupon' as const,
    status: 'expired' as const,
    title: '[RSVP] 위대한 뮤지션 100인전 전시 무료 입장권',
    subTitle: '공연',
    infos: {
      // amount: 1,
      useDate: '20250501',
      endDate: '20250501',
    },
  },

  // ─────────────────────── 방문 예약 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'reservation-available',
    type: 'reservation' as const,
    status: 'available' as const,
    title: '[RSVP] 베리 스타일링 클래스(feat. 벤틀리서울)',
    subTitle: '벤틀리',
    infos: {
      amount: 1,
      endDate: '20250501',
      useTime: '오후 5시',
    },
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'reservation-used',
    type: 'reservation' as const,
    status: 'used' as const,
    title: '[RSVP] 베리 스타일링 클래스(feat. 벤틀리서울)',
    subTitle: '벤틀리',
    infos: {
      amount: 1,
      useDate: '20250501',
      endDate: '20250501',
      useTime: '오후 5시',
    },
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'reservation-expired',
    type: 'reservation' as const,
    status: 'expired' as const,
    title: '[RSVP] 베리 스타일링 클래스(feat. 벤틀리서울)',
    subTitle: '벤틀리',
    infos: {
      amount: 1,
      endDate: '20250501',
      useTime: '오후 5시',
    },
  },

  // ─────────────────────── 체험/신청 ───────────────────────
  //사용 가능
  {
    ...mockVoucherCard,
    id: 'trial-available',
    type: 'experience' as const,
    status: 'available' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      createDate: '20251225',
    },
    // options: ['WHITE', 'Fabric'],
  },
  //사용 완료
  {
    ...mockVoucherCard,
    id: 'trial-used',
    type: 'experience' as const,
    status: 'used' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      createDate: '20251225',
    },
    options: ['WHITE', 'Fabric'],
  },
  //기간 만료
  {
    ...mockVoucherCard,
    id: 'trial-expired',
    type: 'experience' as const,
    status: 'expired' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      createDate: '20251225',
    },
  },
  //취소
  {
    ...mockVoucherCard,
    id: 'trial-cancelled',
    type: 'experience' as const,
    status: 'cancelled' as const,
    title: '도미실 에코백',
    subTitle: '체험단',
    infos: {
      amount: 1,
      cancelDate: '20251225', // 취소발생일
    },
    options: ['100 ml', 'FREE'],
  },
] as const;
