import { Metadata } from 'next';
import { Suspense } from 'react';
import CancelComfirm from '@/views/mypage/subscription/detail/cancel/confirm/CancelComfirm';

export const metadata: Metadata = {
  title: '정기구독 해지 확인',
};

export default function Page() {
  return (
    <Suspense>
      <CancelComfirm />
    </Suspense>
  );
}
