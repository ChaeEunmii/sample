import { Metadata } from 'next';
import { Suspense } from 'react';
import ExchangeApplyStep3 from '@/views/mypage/claims/exchange/ExchangeApplyStep3';

export const metadata: Metadata = {
  title: '교환 접수 3단계',
};

export default function Page() {
  return (
    <Suspense>
      <ExchangeApplyStep3 />
    </Suspense>
  );
}
