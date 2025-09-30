import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderHistoryView from '@/views/mypage/order/history/OrderHistoryView';

export const metadata: Metadata = {
  title: '과거 주문 내역 조회',
};

export default function Page() {
  return (
    <Suspense>
      <OrderHistoryView />
    </Suspense>
  );
}
