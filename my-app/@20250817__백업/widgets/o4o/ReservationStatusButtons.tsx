import React from 'react';
import { Button } from '@/shared/ui';
import { ReservationStatus } from './ReservedList';

interface ReservationStatusButtonsProps {
  type?: 'waiting' | 'booking' | 'torder';
  status?: ReservationStatus;
  isReviewed?: boolean;
}

export const ReservationStatusButtons = ({
  type = 'waiting',
  status,
  isReviewed = false,
}: ReservationStatusButtonsProps) => {
  switch (status) {
    // 방문 예정 - 바로 입장
    case ReservationStatus.VisitPlannedEntry:
      return (
        <>
          <Button variant="tertiary">웨이팅 취소</Button>
          <Button variant="primary">미루기</Button>
        </>
      );
    // 방문 완료
    case ReservationStatus.VisitCompleted:
      return (
        <>
          <Button variant="tertiary">재방문</Button>
          <Button variant="tertiary">리뷰 {isReviewed ? '작성' : '쓰기'}</Button>
        </>
      );
    // 방문 취소
    case ReservationStatus.VisitCancelled:
      return <Button variant="tertiary">{type === 'booking' ? '예약' : '웨이팅'} 하기</Button>;
    // 주문완료/주문취소
    case ReservationStatus.OrderCompleted:
    case ReservationStatus.OrderCancelled:
      return null;
    // 예약일/주문일
    case ReservationStatus.Reservation:
    case ReservationStatus.Order:
      return (
        <Button variant="tertiary">
          {type === 'booking' ? '예약' : type === 'torder' ? '테이블오더' : '웨이팅'} 리뷰쓰기
        </Button>
      );

    default:
      return <Button variant="tertiary">{type === 'booking' ? '예약' : '웨이팅'} 취소</Button>;
  }
};
