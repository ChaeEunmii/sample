import { Suspense } from 'react';
import { Metadata } from 'next';
import { PartnerEventForm } from '@/views/mypage/coupon/detail/offline/event/PartnerEventForm';

export const metadata: Metadata = {
  title: '쿠폰 상세',
};

export default function Page() {
  return (
    <Suspense>
      <PartnerEventForm />
    </Suspense>
  );
}
