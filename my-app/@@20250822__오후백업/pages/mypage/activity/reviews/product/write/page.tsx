import { Metadata } from 'next';
import { Suspense } from 'react';
import ProdReviewWrite from '@/views/mypage/activity/reviews/product/ProdReviewWrite';

export const metadata: Metadata = {
  title: '상품 리뷰 작성',
};

export default function Page() {
  return (
    <Suspense>
      <ProdReviewWrite />
    </Suspense>
  );
}
