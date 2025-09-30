import { Metadata } from 'next';
import { Suspense } from 'react';
import { DownloadableCouponList } from '@/views/mypage/coupon/DownloadableCouponList';

export const metadata: Metadata = {
  title: '다운 가능 쿠폰',
};

export default function Page() {
  return (
    <Suspense>
      <DownloadableCouponList />
    </Suspense>
  );
}
