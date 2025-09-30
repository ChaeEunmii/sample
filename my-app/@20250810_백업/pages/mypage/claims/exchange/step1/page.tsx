import { Metadata } from 'next';
import { Suspense } from 'react';
import ExchangeApplyStep1 from '@/views/mypage/claims/exchange/ExchangeApplyStep1';

export const metadata: Metadata = {
  title: '교환 접수 1단계',
};

export default function Page() {
  return (
    <Suspense>
      <ExchangeApplyStep1 />
    </Suspense>
  );
}
