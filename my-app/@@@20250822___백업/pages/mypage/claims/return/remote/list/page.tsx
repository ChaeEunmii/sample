import { Metadata } from 'next';
import { Suspense } from 'react';
import RemoteReturnList from '@/views/mypage/claims/return/remote/list/RemoteReturnList';

export const metadata: Metadata = {
  title: '비대면 반품 목록',
};

export default function Page() {
  return (
    <Suspense>
      <RemoteReturnList />
    </Suspense>
  );
}
