import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetailGift from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetailGift';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 선물하기',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetailGift />
    </Suspense>
  );
}
