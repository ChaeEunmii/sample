import { Metadata } from 'next';
import { Suspense } from 'react';
import DepositMain from '@/views/mypage/deposit/DepositMain';

export const metadata: Metadata = {
  title: '주문 취소 신청',
};

export default function Page() {
  return (
    <Suspense>
      <DepositMain />
    </Suspense>
  );
}
