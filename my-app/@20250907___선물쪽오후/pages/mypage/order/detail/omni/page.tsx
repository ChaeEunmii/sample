import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailOmni from '@views/mypage/order/detail/OrderDeliveryDetailOmni';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 옴니결제',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailOmni />
    </Suspense>
  );
}
