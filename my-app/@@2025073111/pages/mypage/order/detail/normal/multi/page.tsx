import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailMulti from '@views/mypage/order/detail/OrderDeliveryDetailMulti';

export const metadata: Metadata = {
  title: '주문 상세 정보 상세 멀티',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailMulti />
    </Suspense>
  );
}
