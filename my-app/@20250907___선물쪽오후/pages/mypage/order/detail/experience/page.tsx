import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailExperience from '@views/mypage/order/detail/OrderDeliveryDetailExperience';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 체험단',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailExperience />
    </Suspense>
  );
}
