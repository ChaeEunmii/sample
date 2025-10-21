import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDetailTorder from '@/views/mypage/order/history/tohome/detail/OrderDetailTorder';

export const metadata: Metadata = {
  title: '투홈 과거주문내역조회 주문 상세 - 테이블오더',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDetailTorder />
    </Suspense>
  );
}
