import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDetailVisit from '@/views/mypage/order/history/thehyundai/detail/OrderDetailVisit';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 방문픽업',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDetailVisit />
    </Suspense>
  );
}
