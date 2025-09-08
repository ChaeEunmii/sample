import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinStep1 from '@/views/mypage/seller/join/JoinStep1';

export const metadata: Metadata = {
  title: '판매자 유형선택',
};

export default function Page() {
  return (
    <Suspense>
      <JoinStep1 />
    </Suspense>
  );
}
