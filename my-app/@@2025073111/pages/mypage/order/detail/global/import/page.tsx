import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailGlobal from '@views/mypage/order/detail/OrderDeliveryDetailGlobal';

export const metadata: Metadata = {
  title: '주문배송상세_직구',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailGlobal />
    </Suspense>
  );
}
