import { Metadata } from 'next';
import { Suspense } from 'react';
import RecentViewProd from '@/views/mypage/activity/recent/RecentViewProd';

export const metadata: Metadata = {
  title: '배송지 관리',
};

export default function Page() {
  return (
    <Suspense>
      <RecentViewProd />
    </Suspense>
  );
}
