import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinAuth from '@/views/mypage/info/seller/join/JoinAuth';

export const metadata: Metadata = {
  title: '사업자 인증',
};

export default function Page() {
  return (
    <Suspense>
      <JoinAuth />
    </Suspense>
  );
}
