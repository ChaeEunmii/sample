import { Metadata } from 'next';
import { Suspense } from 'react';
import { ReservationUpcomingDetail } from '@/views/mypage/booking/reservation/ReservationUpcomingDetail';

export const metadata: Metadata = {
  title: '예약 > 방문예정',
};

export default function Page() {
  return (
    <Suspense>
      <ReservationUpcomingDetail />
    </Suspense>
  );
}
