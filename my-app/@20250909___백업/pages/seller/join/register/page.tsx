import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinStep3 from '@/views/mypage/seller/join/JoinStep3';

export const metadata: Metadata = {
  title: '판매자 입점신청 정보 입력',
};

export default function Page() {
  return (
    <Suspense>
      <JoinStep3 />
    </Suspense>
  );
}
