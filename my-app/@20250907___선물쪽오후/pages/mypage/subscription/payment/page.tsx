import { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentMethodSelect from '@/views/mypage/subscription/payment/PaymentMethodSelect';

export const metadata: Metadata = {
  title: '정기구독 결제수단 선택',
};

export default function Page() {
  return (
    <Suspense>
      <PaymentMethodSelect />
    </Suspense>
  );
}
