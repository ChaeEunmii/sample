import { Metadata } from 'next';
import { Suspense } from 'react';
import TohomeOrderDetail from '@/views/mypage/order/history/tohome/detail/TohomeOrderDetail';

export const metadata: Metadata = {
  title: '투홈 주문확인/배송조회 상세',
};

export default function Page() {
  return (
    <Suspense>
      <TohomeOrderDetail />
    </Suspense>
  );
}
