import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryStorePickDetail from '@views/mypage/order/detail/OrderDeliveryStorePickDetail';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 스토어픽',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryStorePickDetail />
    </Suspense>
  );
}
