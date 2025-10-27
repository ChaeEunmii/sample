/**
 *
 * TagFilterSetDrawer 에서 사용하는
 * 모드, 필드, 옵션데이터
 *
 */

// 모드별 사용 필드 (mode = key)
export const FIELDS_BY_MODE = {
  orders: ['service', 'delivery'],
  claims: ['service', 'order'],
  reservation: ['reservation'],
  subscription: ['subscription'],
  trip: ['trip'],
  tohome: ['tohome'],
} as const;

// 모드별 필드 키 타입
export type FilterKey = (typeof FIELDS_BY_MODE)[keyof typeof FIELDS_BY_MODE][number];

// 모든 필드 초기값
export const INITIAL_FILTERS: Record<CatalogKey, string> = {
  service: 'all',
  delivery: 'all',
  order: 'all',
  reservation: 'all',
  subscription: 'all',
  trip: 'trip-1',
  tohome: 'all',
};

// 카탈로그 키 타입
export type CatalogKey =
  | 'service'
  | 'delivery'
  | 'order'
  | 'reservation'
  | 'subscription'
  | 'trip'
  | 'tohome';

// 옵션 항목 타입
export type CatalogOption = { label: string; value: string };

// 카탈로그 옵션 데이터
export const CATALOG: Record<CatalogKey, CatalogOption[]> = {
  // 서비스 옵션
  service: [
    { label: '전체', value: 'all' },
    { label: 'e슈퍼', value: 'service-1' },
    { label: '새벽/당일배송', value: 'service-2' },
    { label: '오늘배송', value: 'service-3' },
    { label: '내일배송', value: 'service-4' },
    { label: '택배배송', value: 'service-5' },
    { label: '스토어픽', value: 'service-6' },
    { label: '이용권&쿠폰', value: 'service-7' },
    { label: '퀵배송', value: 'service-8' },
    { label: '렌탈', value: 'service-9' },
    { label: '명절', value: 'service-10' },
    { label: '선물주문', value: 'service-11' },
    { label: '구독', value: 'service-12' },
    { label: '옴니주문', value: 'service-13' },
  ],
  // 배송상태 옵션
  delivery: [
    { label: '전체', value: 'all' },
    { label: '주문완료', value: 'delivery-1' },
    { label: '결제완료', value: 'delivery-2' },
    { label: '상품준비', value: 'delivery-3' },
    { label: '배송중', value: 'delivery-4' },
    { label: '배송/픽업완료', value: 'delivery-5' },
    { label: '취소', value: 'delivery-6' },
    { label: '반품', value: 'delivery-7' },
    { label: '교환', value: 'delivery-8' },
  ],
  // 주문상태 옵션
  order: [
    { label: '전체', value: 'all' },
    { label: '취소', value: 'order-1' },
    { label: '반품', value: 'order-2' },
    { label: '교환', value: 'order-3' },
  ],
  // 예약 옵션
  reservation: [
    { label: '전체', value: 'all' },
    { label: '방문예정', value: 'reservation-1' },
    { label: '방문완료', value: 'reservation-2' },
    { label: '취소/노쇼', value: 'reservation-3' },
  ],
  // 정기구독
  subscription: [
    { label: '전체', value: 'all' },
    { label: '진행중', value: 'subscription-1' },
    { label: '구독종료', value: 'subscription-2' },
    { label: '구독해제', value: 'subscription-3' },
  ],
  // 여행
  trip: [
    { label: '여행', value: 'trip-1' },
    { label: '항공', value: 'trip-2' },
    { label: '패키지', value: 'trip-3' },
  ],
  // 투홈(과거주문내역조회)
  tohome: [
    { label: '전체', value: 'all' },
    { label: '새벽배송', value: 'history-1' },
    { label: '택배배송', value: 'history-2' },
    { label: '정기배송', value: 'history-3' },
    { label: '명절배송', value: 'history-4' },
    { label: '선물배송', value: 'history-5' },
    { label: '투홈구독', value: 'history-6' },
    { label: 'e슈퍼', value: 'history-7' },
    { label: '테이블오더', value: 'history-8' },
  ],
};
