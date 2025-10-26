import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDetailRental from '@/views/mypage/order/history/thehyundai/detail/OrderDetailRental';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 렌탈',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDetailRental />
    </Suspense>
  );
}
