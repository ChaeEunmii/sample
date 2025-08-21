import { Metadata } from 'next';
import { Suspense } from 'react';
import RecentViewProd from '@/views/mypage/activity/recent/RecentViewProd';

export const metadata: Metadata = {
  title: '최근 본 상품',
};

export default function Page() {
  return (
    <Suspense>
      <RecentViewProd />
    </Suspense>
  );
}
