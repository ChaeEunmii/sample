import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetailVisit from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetailVisit';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 방문픽업',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetailVisit />
    </Suspense>
  );
}
