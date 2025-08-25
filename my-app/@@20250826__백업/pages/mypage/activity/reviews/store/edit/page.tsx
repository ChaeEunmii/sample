import { Metadata } from 'next';
import { Suspense } from 'react';
import StoreReviewEdit from '@/views/mypage/activity/reviews/store/StoreReviewEdit';

export const metadata: Metadata = {
  title: '매장 리뷰 수정',
};

export default function Page() {
  return (
    <Suspense>
      <StoreReviewEdit />
    </Suspense>
  );
}
