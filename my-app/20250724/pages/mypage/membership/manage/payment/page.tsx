import { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentStatus from '@/views/mypage/membership/payment/PaymentStatus';

export const metadata: Metadata = {
  title: '멤버십 결제 현황',
};

export default function Page() {
  return (
    <Suspense>
      <PaymentStatus />
    </Suspense>
  );
}
