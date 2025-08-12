import { Metadata } from 'next';
import { Suspense } from 'react';
import RemoteReturnDetail from '@/views/mypage/claims/return/remote/detail/RemoteReturnDetail';

export const metadata: Metadata = {
  title: '비대면 반품 상세',
};

export default function Page() {
  return (
    <Suspense>
      <RemoteReturnDetail />
    </Suspense>
  );
}
