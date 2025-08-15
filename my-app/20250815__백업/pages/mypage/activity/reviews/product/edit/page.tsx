import { Metadata } from 'next';
import { Suspense } from 'react';
import ProdReviewWrite from '@/views/mypage/activity/reviews/product/ProdReviewEdit';

export const metadata: Metadata = {
  title: '상품 리뷰 수정',
};

export default function Page() {
  return (
    <Suspense>
      <ProdReviewWrite />
    </Suspense>
  );
}
