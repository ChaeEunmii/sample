import { Metadata } from 'next';
import { Suspense } from 'react';
import SubscriptionDetail from '@/views/mypage/subscription/detail/SubscriptionDetail';

export const metadata: Metadata = {
  title: '구독 상세 조회',
};

export default function Page() {
  return (
    <Suspense>
      <SubscriptionDetail />
    </Suspense>
  );
}
