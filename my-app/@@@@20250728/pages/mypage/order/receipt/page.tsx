import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderReceipt from '@/views/mypage/order/receipt/OrderReceipt';

export const metadata: Metadata = {
  title: '영수증',
};

export default function Page() {
  return (
    <Suspense>
      <OrderReceipt />
    </Suspense>
  );
}
