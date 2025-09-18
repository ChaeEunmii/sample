import { Metadata } from 'next';
import { Suspense } from 'react';
import TripDetail from '@/views/mypage/trip/detail/TripDetail';

export const metadata: Metadata = {
  title: '여행 상세 정보',
};

export default function Page() {
  return (
    <Suspense>
      <TripDetail />
    </Suspense>
  );
}
