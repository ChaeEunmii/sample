import { Metadata } from 'next';
import { Suspense } from 'react';
import RecentViewProd from '@/views/mypage/activity/recent/RecentViewProd';

export const metadata: Metadata = {
  title: '로그인 기록',
};

export default function Page() {
  return (
    <Suspense>
      <RecentViewProd />
    </Suspense>
  );
}
