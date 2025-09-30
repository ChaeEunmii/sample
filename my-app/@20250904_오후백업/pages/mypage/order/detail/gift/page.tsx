import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryGiftDetail from '@views/mypage/order/detail/OrderDeliveryGiftDetail';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 선물하기',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryGiftDetail />
    </Suspense>
  );
}
