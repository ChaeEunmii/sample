import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinStep3Detail from '@/views/mypage/seller/join/JoinStep3Detail';

export const metadata: Metadata = {
  title: '판매자 입점신청 정보 상세',
};

export default function Page() {
  return (
    <Suspense>
      <JoinStep3Detail />
    </Suspense>
  );
}
