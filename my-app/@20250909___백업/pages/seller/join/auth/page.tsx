import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinStep2 from '@/views/mypage/seller/join/JoinStep2';

export const metadata: Metadata = {
  title: '사업자 인증',
};

export default function Page() {
  return (
    <Suspense>
      <JoinStep2 />
    </Suspense>
  );
}
