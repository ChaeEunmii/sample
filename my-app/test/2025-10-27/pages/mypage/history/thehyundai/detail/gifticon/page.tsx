import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHdOrderDetailGifticon from '@/views/mypage/order/history/thehyundai/detail/TheHdOrderDetailGifticon';

export const metadata: Metadata = {
  title: '더현대 과거주문내역조회 주문 상세 - 기프티콘',
};

export default function Page() {
  return (
    <Suspense>
      <TheHdOrderDetailGifticon />
    </Suspense>
  );
}
