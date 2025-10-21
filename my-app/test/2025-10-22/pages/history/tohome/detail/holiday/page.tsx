import { Metadata } from 'next';
import { Suspense } from 'react';
import OrderDetailHoliday from '@/views/mypage/order/history/tohome/detail/OrderDetailHoliday';

export const metadata: Metadata = {
  title: '투홈 과거주문내역조회 주문 상세 - 명절배송',
};

export default function Page() {
  return (
    <Suspense>
      <OrderDetailHoliday />
    </Suspense>
  );
}
