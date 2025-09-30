import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryCultureDetail from '@views/mypage/order/detail/OrderDeliveryCultureDetail';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 문화센터',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryCultureDetail />
    </Suspense>
  );
}
