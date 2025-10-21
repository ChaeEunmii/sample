import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDetailGift from '@/views/mypage/order/history/thehyundai/detail/OrderDetailGift';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 선물하기',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDetailGift />
    </Suspense>
  );
}
