import { Metadata } from 'next';
import { Suspense } from 'react';
import TohomeOrderDetailTorder from '@/views/mypage/order/history/tohome/detail/TohomeOrderDetailTorder';

export const metadata: Metadata = {
  title: '투홈 과거주문내역조회 주문 상세 - 테이블오더',
};

export default function Page() {
  return (
    <Suspense>
      <TohomeOrderDetailTorder />
    </Suspense>
  );
}
