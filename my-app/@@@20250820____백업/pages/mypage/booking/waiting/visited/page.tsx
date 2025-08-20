import { Metadata } from 'next';
import { Suspense } from 'react';
import { WaitingVisitCompleted } from '@/views/mypage/booking/waiting/WaitingVisitCompleted';

export const metadata: Metadata = {
  title: '웨이팅 > 방문완료',
};

export default function Page() {
  return (
    <Suspense>
      <WaitingVisitCompleted />
    </Suspense>
  );
}
