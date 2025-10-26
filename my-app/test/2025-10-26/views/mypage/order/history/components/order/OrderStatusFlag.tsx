import React from 'react';
import { Flag } from '@shared/ui';
import styles from './OrderStatusFlag.module.scss';
import type { OrderStatusCode } from '@/views/mypage/order/history/components/order/OrderStatus';

// '과거주문내역조회' 주문 상태별 정보 (라벨과 플래그 색상)
export const orderStatusMetaMap = {
  order_completed: { label: '주문접수', color: 'gray3' },
  payment_completed: { label: '결제완료', color: 'gray3' },
  delivery_ready: { label: '배송준비중', color: 'gray4' },
  delivering: { label: '배송중', color: 'gray4' },
  delivered: { label: '배송완료', color: 'dark2' },
  pickup_waiting: { label: '픽업대기', color: 'gray3' }, // 픽업대기
  pickup_available: { label: '픽업가능', color: 'gray3' }, // 픽업가능
  pickup_completed: { label: '픽업완료', color: 'dark2' }, // 픽업완료
  order_cancel: { label: '주문취소', color: 'gray3' },
  exchanging: { label: '교환진행중', color: 'gray4' },
  claim_return: { label: '반품진행중', color: 'gray4' },
  claim_exchange: { label: '교환진행중', color: 'gray4' },
  accept_pending: { label: '수락대기', color: 'gray3' },
  accepted_gift_ready: { label: '선물준비중', color: 'gray4' },
  apply_completed: { label: '신청완료', color: 'gray3' },
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
  /** 상태 관련 날짜 (예: date: '2025년 12월 24일(수)')*/
  date?: string;
  /** 날짜시간 표기 우측 (data에 대한 추가정보 예: 도착예정, 도착...)*/
  dateNote?: string;
  /** 상태 관련 텍스트 (예: 받는 분 거절) list/detail에서 둘다 보임 */
  note?: string;
  /** 플래그 우측 (텍스트로 표현할정보) : detail에서만 보임  */
  detailNote?: string;
  /** 상태 외에 앞쪽에 붙일 추가 플래그들 */
  extraFlags?: ExtraFlagCode[];
}

export const OrderStatusFlag = ({
  status,
  date,
  dateNote,
  note,
  detailNote,
  extraFlags,
}: OrderStatusFlagProps) => {
  // status에 해당하는 정보 가져오기
  const meta = orderStatusMetaMap[status];

  // 만약 status가 orderStatusMetaMap에 없으면 렌더링하지 않음
  if (!meta) return null;

  // 추가 플래그(조건부) + 기본 상태 플래그를 합쳐서 표시
  const flags = [
    ...(extraFlags?.map((k) => extraFlagMetaMap[k]) ?? []),
    { label: meta.label, color: meta.color },
  ];

  return (
    <div className={styles.root}>
      {/* 플래그 컴포넌트에 라벨과 색상 전달 */}
      <Flag data={flags} />
      {/* date,dateNote 텍스가 있는 경우 */}
      {(date || dateNote) && (
        <span className={styles.date}>
          {date} {dateNote}
        </span>
      )}
      {/* 텍스트 정보가 있을 경우 표시 ex: 받는 분 거절 */}
      {note && <span className={styles.note}>{note}</span>}
      {/* 플래그 우측 (텍스트로 표현할정보) : detail에서만 보임 */}
      {detailNote && <span className={styles.note}>{detailNote}</span>}
    </div>
  );
};

OrderStatusFlag.displayName = 'OrderStatusFlag';
