import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryVisitDetail from '@views/mypage/order/detail/OrderDeliveryVisitDetail';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 방문픽업',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryVisitDetail />
    </Suspense>
  );
}
