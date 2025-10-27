import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetail from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetail';

export const metadata: Metadata = {
  title: '더현대 주문확인/배송조회 상세',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetail />
    </Suspense>
  );
}
