import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryGiftDetailMulti from '@/views/mypage/order/detail/OrderDeliveryGiftDetailMulti';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 선물하기 멀티',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryGiftDetailMulti />
    </Suspense>
  );
}
