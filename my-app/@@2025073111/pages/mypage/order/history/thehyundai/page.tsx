import { Metadata } from 'next';
import { Suspense } from 'react';
import TheHyundaiOrderHistory from '@/views/mypage/order/history/thehyundai/TheHyundaiOrderHistory';

export const metadata: Metadata = {
  title: '현대식품관 to Home 주문/배송 조회',
};

export default function Page() {
  return (
    <Suspense>
      <TheHyundaiOrderHistory />
    </Suspense>
  );
}
