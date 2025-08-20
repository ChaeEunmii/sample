import { Metadata } from 'next';
import { Suspense } from 'react';
import HPointPay from '@/views/mypage/subscription/payment/hpointpay/HPointPay';

export const metadata: Metadata = {
  title: 'H.Point Pay',
};

export default function Page() {
  return (
    <Suspense>
      <HPointPay />
    </Suspense>
  );
}
