import { Metadata } from 'next';
import { Suspense } from 'react';
import { ReservationVisitCompleted } from '@/views/mypage/booking/reservation/ReservationVisitCompleted';

export const metadata: Metadata = {
  title: '예약 > 방문완료',
};

export default function Page() {
  return (
    <Suspense>
      <ReservationVisitCompleted />
    </Suspense>
  );
}
