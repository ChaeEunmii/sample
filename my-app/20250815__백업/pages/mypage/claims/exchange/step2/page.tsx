import { Metadata } from 'next';
import { Suspense } from 'react';
import ExchangeApplyStep2 from '@/views/mypage/claims/exchange/ExchangeApplyStep2';

export const metadata: Metadata = {
  title: '교환 접수 2단계',
};

export default function Page() {
  return (
    <Suspense>
      <ExchangeApplyStep2 />
    </Suspense>
  );
}
