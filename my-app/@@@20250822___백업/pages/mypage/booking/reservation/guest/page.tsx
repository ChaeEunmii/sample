import { Metadata } from 'next';
import { Suspense } from 'react';
import { ReservationGuestOrderForm } from '@/views/mypage/booking/reservation/guest/ReservationGuestOrderForm';

export const metadata: Metadata = {
  title: '예약 > 비로그인 주문 조회',
};

export default function Page() {
  return (
    <Suspense>
      <ReservationGuestOrderForm />
    </Suspense>
  );
}
