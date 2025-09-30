import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailGlobalEMS from '@views/mypage/order/detail/OrderDeliveryDetailGlobalEMS';

export const metadata: Metadata = {
  title: '주문배송상세 역직구 EMS',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailGlobalEMS />
    </Suspense>
  );
}
