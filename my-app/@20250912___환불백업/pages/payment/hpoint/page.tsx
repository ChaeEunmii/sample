import { Metadata } from 'next';
import { Suspense } from 'react';
import HpointPay from '@/views/mypage/payment/hpoint/HpointPay';

export const metadata: Metadata = {
  title: 'H.Point Pay',
};

export default function Page() {
  return (
    <Suspense>
      <HpointPay />
    </Suspense>
  );
}
