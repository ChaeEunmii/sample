import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetail from '@views/mypage/order/detail/OrderDeliveryDetail';

export const metadata: Metadata = {
  title: '주문 상세 정보',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetail />
    </Suspense>
  );
}
