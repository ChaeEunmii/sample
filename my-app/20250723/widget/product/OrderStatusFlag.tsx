import React from 'react';
import { Flag } from '@shared/ui';
import styles from './OrderStatusFlag.module.scss';
import type { OrderStatusCode } from '@/widgets/product/OrderStatus';

// 주문 상태별 정보 (라벨과 플래그 색상)
export const orderStatusMetaMap = {
  order_completed: { label: '주문완료', color: 'order1' },
  payment_completed: { label: '결제완료', color: 'order1' },
  return_requested: { label: '반품접수', color: 'order1' },
  exchange_apply: { label: '교환신청', color: 'order1' },
  apply_completed: { label: '신청완료', color: 'order1' },
  pickup_available: { label: '픽업가능', color: 'order2' },
  product_ready: { label: '상품준비', color: 'order3' },
  delivering: { label: '배송중', color: 'order3' },
  returning: { label: '반품진행중', color: 'order3' },
  exchanging: { label: '교환진행중', color: 'order3' },
  exchanging_delivering: { label: '교환배송중', color: 'order3' },
  exchanging_delivery_requested: { label: '교환배송접수', color: 'order3' },
  exchanging_delivery_ready: { label: '교환배송준비중', color: 'order3' },
  delivered: { label: '배송완료', color: 'order4' },
  delivered_pending_review: { label: '배송완료 (리뷰작성 전)', color: 'order4' },
  delivered_reviewed: { label: '배송완료 (리뷰작성 완료)', color: 'order4' },
  delivered_not_confirmed: { label: '배송완료 (구매확정 전)', color: 'order4' },
  delivered_confirmed_no_review: { label: '배송완료 (구매확정 & 리뷰작성 전)', color: 'order4' },
  delivered_claim_blocked: { label: '배송완료 (클레임 불가)', color: 'order4' },
  delivered_return_cancelled: { label: '반품신청 철회', color: 'order4' },
  cancelled: { label: '취소완료', color: 'order4' },
  pickup_completed: { label: '픽업완료', color: 'order4' },
  pickup_confirmed: { label: '픽업완료 & 구매확정', color: 'order4' },
  return_completed: { label: '반품완료', color: 'order4' },
  return_cancel: { label: '반품취소', color: 'order4' },
  exchange_return_completed: { label: '교환회수완료', color: 'order4' },
  exchange_delivery_complete: { label: '교환배송완료', color: 'order4' },
  participating: { label: '참여가능', color: 'order4' },
} as const;

// 주문 상태별 플래그 색상 타입 정의 (orderStatusMetaMap 객체 내 color 필드 타입)
export type FlagColor = (typeof orderStatusMetaMap)[OrderStatusCode]['color'];

export interface OrderStatusFlagProps {
  /** 주문 상태 코드 (orderStatusMetaMap의 키 중 하나) */
  status: OrderStatusCode;
  /** 상태 관련 날짜 (예: date: '2025-10-25T12:34:56')*/
  date?: string;
}

export const OrderStatusFlag = ({ status, date }: OrderStatusFlagProps) => {
  // status에 해당하는 정보 가져오기
  const meta = orderStatusMetaMap[status];

  // 만약 status가 orderStatusMetaMap에 없으면 렌더링하지 않음
  if (!meta) return null;

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
      <Flag data={{ label: meta.label, color: meta.color }} />
      {/* 날짜가 있을 경우 변환해서 날짜 표시 */}
      {date && <span className={styles.date}>{formatDateForDisplay(date)}</span>}
    </div>
  );
};

OrderStatusFlag.displayName = 'OrderStatusFlag';
