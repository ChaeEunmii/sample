import { Metadata } from 'next';
import { Suspense } from 'react';
import Leave from '@/views/mypage/info/leave/Leave';

export const metadata: Metadata = {
  title: '회원탈퇴',
};

export default function Page() {
  return (
    <Suspense>
      <Leave />
    </Suspense>
  );
}
