import { Metadata } from 'next';
import { Suspense } from 'react';
import { WaitingCancel } from '@/views/mypage/booking/waiting/WaitingCancel';

export const metadata: Metadata = {
  title: '웨이팅 > 웨이팅 취소',
};

export default function Page() {
  return (
    <Suspense>
      <WaitingCancel />
    </Suspense>
  );
}
