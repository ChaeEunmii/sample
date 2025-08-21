import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailRental from '@views/mypage/order/detail/OrderDeliveryDetailRental';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 렌탈',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailRental />
    </Suspense>
  );
}
