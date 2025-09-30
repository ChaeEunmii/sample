import { Metadata } from 'next';
import { Suspense } from 'react';
import CancelList from '@/views/mypage/claims/cancel/list/CancelList';

export const metadata: Metadata = {
  title: '취소/반품/교환 목록',
};

export default function Page() {
  return (
    <Suspense>
      <CancelList />
    </Suspense>
  );
}
