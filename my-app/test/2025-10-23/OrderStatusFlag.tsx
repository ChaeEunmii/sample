import React from 'react';
import { Flag } from '@shared/ui';
import styles from './OrderStatusFlag.module.scss';
import type { OrderStatusCode } from '@/widgets/product/OrderStatus';

// 주문 상태별 정보 (라벨과 플래그 색상)
export const orderStatusMetaMap = {
  order_completed: { label: '주문완료', color: 'gray3' },
  payment_completed: { label: '결제완료', color: 'gray3' },
  apply_completed: { label: '신청완료', color: 'gray3' },
  pickup_available: { label: '결제완료', color: 'gray3' }, //픽업가능
  product_ready: { label: '상품준비중', color: 'gray4' },
  delivering: { label: '배송중', color: 'gray4' },
  delivered: { label: '배송완료', color: 'dark2' },
  delivered_pending_review: { label: '배송완료', color: 'dark2' }, //배송완료 (리뷰작성 전)
  delivered_reviewed: { label: '배송완료', color: 'dark2' }, //배송완료 (리뷰작성 완료)
  delivered_not_confirmed: { label: '배송완료', color: 'dark2' }, //배송완료 (구매확정 전)
  delivered_confirmed_no_review: { label: '배송완료', color: 'dark2' }, //배송완료 (구매확정 & 리뷰작성 전)
  delivered_claim_blocked: { label: '배송완료', color: 'dark2' }, // 배송완료_클레임_불가상품
  delivered_return_cancelled: { label: '배송완료', color: 'dark2' }, // 배송완료_반품신청_클레임_철회상품
  cancelled: { label: '주문취소', color: 'gray3' }, // 취소완료 (주문취소)
  cancel_apply_digital: { label: '결제완료', color: 'gray3' }, // 취소요청(무형상품의 경우 '결제완료')
  pickup_completed: { label: '사용완료', color: 'dark2' }, // 픽업완료
  pickup_confirmed: { label: '사용완료', color: 'dark2' }, //픽업완료 & 구매확정
  return_requested: { label: '반품접수', color: 'gray3' }, // 반품접수
  return_requested_digital: { label: '취소요청', color: 'gray4' }, // 반품접수(무형상품의 경우 '취소요청')
  returning: { label: '반품진행중', color: 'gray4' }, // 반품진행중
  return_completed: { label: '반품완료', color: 'dark2' }, // 반품완료
  return_completed_digital: { label: '취소완료', color: 'dark2' }, // 반품완료(무형상품의 경우 '취소완료')
  return_cancel: { label: '반품취소', color: 'gray3' }, // 반품취소
  exchange_apply: { label: '교환접수', color: 'gray3' }, // 교환회수 접수
  exchanging: { label: '교환진행중', color: 'gray4' }, // 교환회수 진행중
  exchange_return_completed: { label: '교환진행중', color: 'dark2' }, // 교환회수 완료
  exchanging_delivery_requested: { label: '교환진행중', color: 'gray4' }, // 교환배송 접수
  exchanging_delivery_ready: { label: '교환진행중', color: 'gray4' }, // 교환배송 준비중
  exchanging_delivering: { label: '교환진행중', color: 'gray4' }, // 교환배송중
  exchange_delivery_complete: { label: '교환완료', color: 'dark2' }, // 교환배송 완료
  participating: { label: '참여가능', color: 'dark2' },
  subscription_payment_completed: { label: '주문완료', color: 'gray3' }, // 정기구독_결제완료
  subscription_product_ready_release: { label: '주문완료', color: 'gray3' }, // 정기구독_상품준비(출고지시)
  subscription_active: { label: '진행중', color: 'green3' }, // 정기구독_진행중
  subscription_ended: { label: '구독종료', color: 'dark2' }, // 정기구독_구독종료
  subscription_canceled: { label: '구독해지', color: 'red2' }, // 정기구독_구독해지
  giftbox_payment_completed: { label: '결제완료', color: 'dark2' }, // 선물함_결제완료
  giftbox_product_ready: { label: '상품준비중', color: 'gray3' }, // 선물함_상품준비중
  giftbox_delivering: { label: '배송중', color: 'gray3' }, // 선물함_배송중
  giftbox_delivered: { label: '배송완료', color: 'dark2' }, // 선물함_배송완료
  giftbox_delivered_no_review: { label: '배송완료', color: 'dark2' }, // 선물함_배송완료(리뷰작성 전)
  giftbox_delivered_review: { label: '배송완료', color: 'dark2' }, // 선물함_배송완료(리뷰작성 완료)
  giftbox_address_completed: { label: '배송지입력완료', color: 'dark2' }, // 선물함_배송지입력 완료
  giftbox_address_cancel: { label: '배송지미입력취소', color: 'dark2' }, // 선물함_배송지미입력 취소
  giftbox_order_cancel: { label: '주문취소', color: 'gray4' }, // 선물함_주문취소
  giftbox_soldout_cancel: { label: '품절취소', color: 'gray4' }, // 선물함_품절취소
  giftbox_apply_cancel: { label: '접수취소', color: 'gray4' }, // 선물함_접수취소
  giftbox_cancel_refund: { label: '취소/환불', color: 'gray4' }, // 선물함_취소/환불
  giftbox_used: { label: '사용완료', color: 'dark2' }, // 선물함_사용완료
  giftbox_unused: { label: '사용안함', color: 'dark2' }, // 선물함_사용안함
  giftbox_pickup_completed: { label: '픽업완료', color: 'dark2' }, // 선물함_픽업완료
  giftbox_proposal: { label: '선물제안', color: 'gray3' }, // 선물함_선물제안
  trip_payment_completed: { label: '결제완료', color: 'dark2' }, // 여행_결제완료
  trip_reserve_confirmed: { label: '예약확정', color: 'dark2' }, // 여행_예약확정
  trip_cancle_apply: { label: '취소요청', color: 'gray4' }, // 여행_취소요청
  trip_cancelled: { label: '취소완료', color: 'gray3' }, // 여행_취소완료
  trip_completed: { label: '여행완료', color: 'gray3' }, // 여행_여행완료
  trip_completed_no_review: { label: '여행완료', color: 'gray3' }, // 여행_여행완료(리뷰작성 전)
  trip_completed_review: { label: '여행완료', color: 'gray3' }, // 여행_여행완료(리뷰작성 완료)
} as const;

// 주문 상태별 플래그 색상 타입 정의 (orderStatusMetaMap 객체 내 color 필드 타입)
export type FlagColor = (typeof orderStatusMetaMap)[OrderStatusCode]['color'];

// 상태 외에 앞쪽에 붙일 추가 플래그 (라벨과 플래그 색상)
export const extraFlagMetaMap = {
  selectionCompleted: { label: '선택완료', color: 'green3' },
} as const;
// 상태 외에 앞쪽에 붙일 추가 플래그 key들을 타입으로 추출
export type ExtraFlagCode = keyof typeof extraFlagMetaMap;

export interface OrderStatusFlagProps {
  /** 주문 상태 코드 (orderStatusMetaMap의 키 중 하나) */
  status: OrderStatusCode;
  /** 상태 관련 날짜 (예: date: '2025-10-25T12:34:56')*/
  date?: string;
  /** 상태 외에 앞쪽에 붙일 추가 플래그들 */
  extraFlags?: ExtraFlagCode[];
}

export const OrderStatusFlag = ({ status, date, extraFlags }: OrderStatusFlagProps) => {
  // status에 해당하는 정보 가져오기
  const meta = orderStatusMetaMap[status];

  // 만약 status가 orderStatusMetaMap에 없으면 렌더링하지 않음
  if (!meta) return null;

  // 추가 플래그(조건부) + 기본 상태 플래그를 합쳐서 표시
  const flags = [
    ...(extraFlags?.map((k) => extraFlagMetaMap[k]) ?? []),
    { label: meta.label, color: meta.color },
  ];

  // 날짜 문자열을 "MM.DD HH:mm:ss" 형식으로 변환하는 함수
  function formatDateForDisplay(dateString: string): string {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString; // 유효하지 않은 날짜면 원본 반환

      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${month}.${day} ${hours}:${minutes}:${seconds}`;
    } catch {
      return dateString; // 변환 중 오류 시 원본 반환
    }
  }

  return (
    <div className={styles.root}>
      {/* 플래그 컴포넌트에 라벨과 색상 전달 */}
      <Flag data={flags} />
      {/* 날짜가 있을 경우 변환해서 날짜 표시 */}
      {date && <span className={styles.date}>{formatDateForDisplay(date)}</span>}
    </div>
  );
};

OrderStatusFlag.displayName = 'OrderStatusFlag';
