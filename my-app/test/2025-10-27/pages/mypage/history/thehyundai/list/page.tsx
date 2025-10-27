import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderList from '@/views/mypage/order/history/thehyundai/list/TheHdOrderList';

export const metadata: Metadata = {
  title: '더현대 주문확인/배송조회 목록',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderList />
    </Suspense>
  );
}
