import { Suspense } from 'react';
import { Metadata } from 'next';
import { ParkingTicketForm } from '@/views/mypage/coupon/detail/online/parking/ParkingTicketForm';

export const metadata: Metadata = {
  title: '주차권 사용하기',
};

export default function Page() {
  return (
    <Suspense>
      <ParkingTicketForm />
    </Suspense>
  );
}
