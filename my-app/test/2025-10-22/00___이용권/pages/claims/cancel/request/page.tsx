import { Metadata } from 'next';
import { Suspense } from 'react';
import CancelRequest from '@/views/mypage/claims/cancel/request/CancelRequest';

export const metadata: Metadata = {
  title: '취소 요청',
};

export default function Page() {
  return (
    <Suspense>
      <CancelRequest />
    </Suspense>
  );
}
