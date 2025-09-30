import { ReservationCancel } from '@/views/mypage/booking/reservation/ReservationCancel';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '예약 > 예약 취소',
};

export default function Page() {
  return (
    <Suspense>
      <ReservationCancel />
    </Suspense>
  );
}
