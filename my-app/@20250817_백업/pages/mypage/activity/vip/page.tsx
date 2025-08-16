import { Metadata } from 'next';
import { Suspense } from 'react';
import VipMileage from '@views/mypage/activity/vip/VipMileage';

export const metadata: Metadata = {
  title: 'VIP 마일리지',
};

export default function Page() {
  return (
    <Suspense>
      <VipMileage />
    </Suspense>
  );
}
