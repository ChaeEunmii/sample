import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetailStorePick from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetailStorePick';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 스토어픽',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetailStorePick />
    </Suspense>
  );
}
