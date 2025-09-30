import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryList from '@/views/mypage/order/list/OrderDeliveryList';

export const metadata: Metadata = {
  title: '구독 상세 조회',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryList />
    </Suspense>
  );
}
