import { Metadata } from 'next';
import { Suspense } from 'react';
import { WaitingList } from '@/views/mypage/booking/waiting/WaitingList';

export const metadata: Metadata = {
  title: '웨이팅 > 목록',
};

export default function Page() {
  return (
    <Suspense>
      <WaitingList />
    </Suspense>
  );
}
