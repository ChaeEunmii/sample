import { Metadata } from 'next';
import { Suspense } from 'react';
import GuestOrderHistory from '@/views/mypage/order/history/guest/GuestOrderHistory';

export const metadata: Metadata = {
  title: '과거 주문 내역 조회(비로그인)',
};

export default function Page() {
  return (
    <Suspense>
      <GuestOrderHistory />
    </Suspense>
  );
}
