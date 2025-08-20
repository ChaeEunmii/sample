import { Metadata } from 'next';
import { Suspense } from 'react';
import CancelInfo from '@/views/mypage/subscription/detail/cancel/info/CancelInfo';

export const metadata: Metadata = {
  title: '정기구독 해지 안내',
};

export default function Page() {
  return (
    <Suspense>
      <CancelInfo />
    </Suspense>
  );
}
