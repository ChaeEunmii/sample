import { Metadata } from 'next';
import { Suspense } from 'react';
import { ReservationList } from '@/views/mypage/booking/reservation/ReservationList';

export const metadata: Metadata = {
  title: '예약 > 목록',
};

export default function Page() {
  return (
    <Suspense>
      <ReservationList />
    </Suspense>
  );
}
