import { Metadata } from 'next';
import { Suspense } from 'react';
import EditProduct from '@/views/mypage/partners/manage/shop/product/edit/EditProdItem';

export const metadata: Metadata = {
  title: '상품 그룹 항목 수정하기',
};

export default function Page() {
  return (
    <Suspense>
      <EditProduct />
    </Suspense>
  );
}
