import { Metadata } from 'next';
import { Suspense } from 'react';
import CancelComplete from '@/views/mypage/subscription/detail/cancel/complete/CancelComplete';

export const metadata: Metadata = {
  title: '정기구독 해지 완료',
};

export default function Page() {
  return (
    <Suspense>
      <CancelComplete />
    </Suspense>
  );
}
