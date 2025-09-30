import { Metadata } from 'next';
import { Suspense } from 'react';
import CancelDetail from '@/views/mypage/claims/cancel/detail/CancelDetail';

export const metadata: Metadata = {
  title: '취소/반품/교환 상세',
};

export default function Page() {
  return (
    <Suspense>
      <CancelDetail />
    </Suspense>
  );
}
