import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailHoliday from '@views/mypage/order/detail/OrderDeliveryDetailHoliday';

export const metadata: Metadata = {
  title: '명절배송 주문 상세 정보',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailHoliday />
    </Suspense>
  );
}
