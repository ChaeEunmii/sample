import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryList from '@/views/mypage/order/list/OrderDeliveryList';

export const metadata: Metadata = {
  title: '마이페이지 주문/배송조회 목록',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryList />
    </Suspense>
  );
}
