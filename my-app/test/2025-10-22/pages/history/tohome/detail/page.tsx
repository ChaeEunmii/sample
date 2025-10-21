import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDetail from '@/views/mypage/order/history/tohome/detail/OrderDetail';

export const metadata: Metadata = {
  title: '투홈 주문확인/배송조회 상세',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDetail />
    </Suspense>
  );
}
