import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderHistory from '@/views/mypage/order/history/OrderHistory';

export const metadata: Metadata = {
  title: '과거 주문 내역 조회',
};

export default function Page() {
  return (
    <Suspense>
      <OrderHistory />
    </Suspense>
  );
}
