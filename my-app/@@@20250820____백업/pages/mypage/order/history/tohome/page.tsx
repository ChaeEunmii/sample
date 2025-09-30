import { Metadata } from 'next';
import { Suspense } from 'react';
import TohomeOrderHistory from '@/views/mypage/order/history/tohome/TohomeOrderHistory';

export const metadata: Metadata = {
  title: '현대식품관 to Home 주문/배송 조회',
};

export default function Page() {
  return (
    <Suspense>
      <TohomeOrderHistory />
    </Suspense>
  );
}
