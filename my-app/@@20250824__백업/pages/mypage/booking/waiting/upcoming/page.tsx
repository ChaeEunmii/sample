import { Metadata } from 'next';
import { Suspense } from 'react';
import { WaitingUpcomingDetail } from '@/views/mypage/booking/waiting/WaitingUpcomingDetail';

export const metadata: Metadata = {
  title: '웨이팅 > 방문예정',
};

export default function Page() {
  return (
    <Suspense>
      <WaitingUpcomingDetail />
    </Suspense>
  );
}
