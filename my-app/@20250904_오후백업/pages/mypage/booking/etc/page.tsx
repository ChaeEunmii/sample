'use client';
import { useState } from 'react';
import { Button, ButtonArea } from '@/shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import PostponeOrderDialog from '@/views/mypage/booking/waiting/PostponeOrderDialog';
import { ReservationCancelDrawer, WaitingCancelDrawer } from '@/widgets/o4o';
import { PaymentReceiptDialog } from '@/widgets/payment';

export default function Page() {
  // 상태 관리
  const [isPostponeOrderDialogOpen, setIsPostponeOrderDialogOpen] = useState(false);
  const [isWaitingCancelDrawerOpen, setIsWaitingCancelDrawerOpen] = useState(false);
  const [isReservationCancelDrawerOpen, setIsReservationCancelDrawerOpen] = useState(false);
  const [isEnReservationCancelDrawerOpen, setIsEnReservationCancelDrawerOpen] = useState(false);
  const [isCnReservationCancelDrawerOpen, setIsCnReservationCancelDrawerOpen] = useState(false);
  const [isPaymentReceiptDialogOpen, setIsPaymentReceiptDialogOpen] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical>
          <Button onClick={() => setIsPostponeOrderDialogOpen(true)}>미루기 순서 선택 (L)</Button>
          <Button onClick={() => setIsWaitingCancelDrawerOpen(true)}>웨이팅 취소 (D)</Button>
          <Button onClick={() => setIsReservationCancelDrawerOpen(true)}>얘약 취소 (D)</Button>
          <Button onClick={() => setIsEnReservationCancelDrawerOpen(true)}>
            얘약 취소 - EN (D)
          </Button>
          <Button onClick={() => setIsCnReservationCancelDrawerOpen(true)}>
            얘약 취소 - CN (D)
          </Button>
          <Button onClick={() => setIsPaymentReceiptDialogOpen(true)}>영수증 보기 (L)</Button>
        </ButtonArea>

        {/* 미루기 순서 선택 (L) */}
        <PostponeOrderDialog
          isOpen={isPostponeOrderDialogOpen}
          onClose={() => setIsPostponeOrderDialogOpen(false)}
        />
        {/* 웨이팅 취소 (D) */}
        <WaitingCancelDrawer
          isOpen={isWaitingCancelDrawerOpen}
          onClose={() => setIsWaitingCancelDrawerOpen(false)}
        />
        {/* 예약 취소 (D) */}
        <ReservationCancelDrawer
          isOpen={isReservationCancelDrawerOpen}
          onClose={() => setIsReservationCancelDrawerOpen(false)}
        />
        <ReservationCancelDrawer
          lang="en"
          isOpen={isEnReservationCancelDrawerOpen}
          onClose={() => setIsEnReservationCancelDrawerOpen(false)}
        />
        <ReservationCancelDrawer
          lang="cn"
          isOpen={isCnReservationCancelDrawerOpen}
          onClose={() => setIsCnReservationCancelDrawerOpen(false)}
        />
        {/* 영수증 보기 (L) */}
        <PaymentReceiptDialog
          isOpen={isPaymentReceiptDialogOpen}
          onClose={() => setIsPaymentReceiptDialogOpen(false)}
        />
      </Contents>
    </Container>
  );
}
