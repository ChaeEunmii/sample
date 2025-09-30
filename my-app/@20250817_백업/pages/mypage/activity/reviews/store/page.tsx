import { Metadata } from 'next';
import { Suspense } from 'react';
import StoreReview from '@/views/mypage/activity/reviews/store/StoreReview';

export const metadata: Metadata = {
  title: '매장 리뷰',
};

export default function Page() {
  return (
    <Suspense>
      <StoreReview />
    </Suspense>
  );
}
