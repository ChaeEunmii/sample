import { Metadata } from 'next';
import { Suspense } from 'react';
import DepositMain from '@/views/mypage/deposit/DepositMain';

export const metadata: Metadata = {
  title: '교환 접수 완료',
};

export default function Page() {
  return (
    <Suspense>
      <DepositMain />
    </Suspense>
  );
}
