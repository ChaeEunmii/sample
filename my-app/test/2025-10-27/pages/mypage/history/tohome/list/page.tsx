import { Metadata } from 'next';
import { Suspense } from 'react';
import TohomeOrderList from '@/views/mypage/order/history/tohome/list/TohomeOrderList';

export const metadata: Metadata = {
  title: '투홈 주문확인/배송조회 목록',
};

export default function Page() {
  return (
    <Suspense>
      <TohomeOrderList />
    </Suspense>
  );
}
