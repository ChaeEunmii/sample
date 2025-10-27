import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetailRental from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetailRental';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 렌탈',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetailRental />
    </Suspense>
  );
}
