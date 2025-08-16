import { Metadata } from 'next';
import { Suspense } from 'react';
import { OwnedCouponList } from '@/views/mypage/coupon/OwnedCouponList';

export const metadata: Metadata = {
  title: '보유 쿠폰',
};

export default function Page() {
  return (
    <Suspense>
      <OwnedCouponList />
    </Suspense>
  );
}
