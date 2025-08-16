import { mockProdImage } from './order';

// 주문 완료 > 결제금액 샘플 데이터 목록
export const mockPaymentList = [
  {
    id: 'price-1',
    title: '상품금액',
    price: 99390000,
  },
  {
    id: 'price-5',
    title: '배송비',
    price: 0,
  },
  {
    id: 'price-2',
    title: '할인금액',
    price: -2300000,
  },
  {
    id: 'price-3',
    title: '포인트사용',
    price: -2000000,
  },
  {
    id: 'price-4',
    title: '결제수단 혜택',
    price: -2000000,
  },
];

// 테이블오더 > 주문 완료 > 결제금액 샘플 데이터 목록
export const mockTorderPaymentList = [
  {
    id: 'price-10',
    title: '상품금액',
    price: 99390000,
  },
  {
    id: 'price-11',
    title: '할인금액',
    price: -2300000,
  },
  {
    id: 'price-12',
    title: '포인트사용',
    price: -2000000,
  },
];

// 주문 완료 > 주문상품 샘플 아이템 데이터
export const mockOrderProdItem = [
  {
    id: 'orderProd-1',
    brand: '브랜드명',
    title:
      '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
    gift: '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르',
  },
];

// 주문 완료 > 주문상품 샘플 데이터 목록
export const mockOrderProdList = [
  {
    id: 'orderProd-1',
    brand: '브랜드명',
    title:
      '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
    gift: '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르',
  },
  {
    id: 'orderProd-2',
    brand: '쿼드쎄라',
    title: '포헤르츠 3D 부스터 마스크 젤 80g',
    gift: '포헤르츠 멜라리스 에이징컷 앰플 10ml',
  },
  {
    id: 'orderProd-3',
    brand: '브랜드명',
    title:
      '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
    gift: '포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르',
  },
];

// 주문 완료 > 문화센터 주문상품 샘플 아이템 데이터
export const mockOrderCultureItem = [
  {
    id: 'orderProd-1',
    brand: '브랜드명',
    title:
      '문화센터 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
    alert: '10월 8일 (목) 24시 이후에는 주문취소가 불가합니다.',
  },
];

// 주문 완료 > 방문 쿠폰 샘플 아이템 데이터
export const mockOrderRentallItem = [
  {
    id: 'orderProd-1',
    brand: '렌탈 브랜드명',
    title:
      '렌탈 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
    gift: '렌탈 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르 포헤르츠 멜라리스 에이징컷 앰플 10ml 포헤르',
    rental: {
      price: 44000,
      period: 60,
      optional: 1,
    },
  },
];

// 주문 완료 > 방문 쿠폰 샘플 아이템 데이터
export const mockOrderVoucherItem = [
  {
    id: 'orderProd-1',
    image: mockProdImage,
    title:
      '방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 쿠폰방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 방문쿠폰명 쿠폰',
    visitInfo: {
      venue: '더 현대서울 지하 2층 바클린 매장 내 팝업스토어',
      available: '2025. 05. 01 ~ 2025. 12. 31',
    },
  },
];

// 주문 완료 > 방문 신청 샘플 아이템 데이터
export const mockOrderApplicationItem = [
  {
    id: 'orderProd-1',
    image: mockProdImage,
    title:
      '0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방 0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방',
    // (이용 장소, 예약 기간, 이용 기간, 사용 기간, 예약 일시)
    visitInfo: {
      venue: '압구정 본점 3층 발렌티노',
      booking: '2025. 05. 01 ~ 2025. 12. 31',
      service: '2025. 06. 10 ~ 2025. 12. 31',
      available: '2025. 07. 01 ~ 2025. 12. 31',
      bookingTime: '2025. 05. 10. 15:00',
    },
  },
];

// 주문 완료 > 사은품 신청 샘플 아이템 데이터
export const mockOrderGiftItem = [
  {
    id: 'orderProd-1',
    image: mockProdImage,
    title:
      '0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방 0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방문예약형 0원상품 방',
    // (이용 장소, 예약 기간, 이용 기간, 사용 기간, 예약 일시)
    info: {
      weight: '옵션 1',
      size: '옵션 2',
    },
  },
];
