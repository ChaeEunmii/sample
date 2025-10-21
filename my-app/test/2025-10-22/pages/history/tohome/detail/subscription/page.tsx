import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDetailSubscription from '@/views/mypage/order/history/tohome/detail/OrderDetailSubscription';

export const metadata: Metadata = {
  title: '투홈 과거주문내역조회 주문 상세 - 구독',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDetailSubscription />
    </Suspense>
  );
}
