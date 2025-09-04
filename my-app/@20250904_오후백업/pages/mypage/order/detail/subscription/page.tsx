import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailSubscription from '@views/mypage/order/detail/OrderDeliveryDetailSubscription';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 정기구독',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailSubscription />
    </Suspense>
  );
}
