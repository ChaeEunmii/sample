import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDeliveryDetailPurchaseGift from '@views/mypage/order/detail/OrderDeliveryDetailPurchaseGift';

export const metadata: Metadata = {
  title: '주문 상세 정보 - 사은품',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDeliveryDetailPurchaseGift />
    </Suspense>
  );
}
