import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetailHoliday from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetailHoliday';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 명절배송',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetailHoliday />
    </Suspense>
  );
}
