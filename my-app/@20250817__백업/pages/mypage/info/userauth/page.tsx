import { Metadata } from 'next';
import { Suspense } from 'react';
import RecentViewProd from '@/views/mypage/activity/recent/RecentViewProd';

export const metadata: Metadata = {
  title: '본인인증',
};

export default function Page() {
  return (
    <Suspense>
      <RecentViewProd />
    </Suspense>
  );
}
