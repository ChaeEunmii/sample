import { Metadata } from 'next';
import { Suspense } from 'react';
import ProductShare from '@/views/mypage/partners/manage/product/ProductShare';

export const metadata: Metadata = {
  title: '파트너스 활동 상품 공유하기',
};

export default function Page() {
  return (
    <Suspense>
      <ProductShare />
    </Suspense>
  );
}
