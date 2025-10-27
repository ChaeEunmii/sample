import { Metadata } from 'next';
import { Suspense } from 'react';
import TohomeOrderDetailHoliday from '@/views/mypage/order/history/tohome/detail/TohomeOrderDetailHoliday';

export const metadata: Metadata = {
  title: '투홈 과거주문내역조회 주문 상세 - 명절선물',
};

export default function Page() {
  return (
    <Suspense>
      <TohomeOrderDetailHoliday />
    </Suspense>
  );
}
