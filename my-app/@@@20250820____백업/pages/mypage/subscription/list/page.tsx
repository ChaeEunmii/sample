import { Metadata } from 'next';
import { Suspense } from 'react';
import SubscriptionList from '@/views/mypage/subscription/list/SubscriptionList';

export const metadata: Metadata = {
  title: '구독 관리 목록',
};

export default function Page() {
  return (
    <Suspense>
      <SubscriptionList />
    </Suspense>
  );
}
