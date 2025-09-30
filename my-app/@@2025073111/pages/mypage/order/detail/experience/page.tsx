import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailExperience from '@views/mypage/order/detail/OrderDeliveryDetailExperience';

export const metadata: Metadata = {
  title: '체험단 주문 상세 정보',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailExperience />
    </Suspense>
  );
}
