import { Metadata } from 'next';
import { Suspense } from 'react';
import StoreReviewWrite from '@/views/mypage/activity/reviews/store/StoreReviewWrite';

export const metadata: Metadata = {
  title: '매장 리뷰 작성',
};

export default function Page() {
  return (
    <Suspense>
      <StoreReviewWrite />
    </Suspense>
  );
}
