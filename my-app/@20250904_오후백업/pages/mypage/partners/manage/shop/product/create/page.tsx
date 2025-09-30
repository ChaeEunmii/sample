import { Metadata } from 'next';
import { Suspense } from 'react';
import GroupCreate from '@/views/mypage/partners/manage/shop/product/ProdGroupCreate';

export const metadata: Metadata = {
  title: '상품 그룹 생성',
};

export default function Page() {
  return (
    <Suspense>
      <GroupCreate />
    </Suspense>
  );
}
