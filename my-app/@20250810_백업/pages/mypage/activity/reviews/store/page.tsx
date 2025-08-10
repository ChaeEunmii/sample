import { Metadata } from 'next';
import { Suspense } from 'react';
import ProdReview from '@/views/mypage/activity/reviews/product/ProdReview';

export const metadata: Metadata = {
  title: '상품 리뷰',
};

export default function Page() {
  return (
    <Suspense>
      <ProdReview />
    </Suspense>
  );
}
