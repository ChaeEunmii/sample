import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetailExperience from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetailExperience';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 체험단',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetailExperience />
    </Suspense>
  );
}
