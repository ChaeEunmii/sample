import { Metadata } from 'next';
import { Suspense } from 'react';
import AddProduct from '@views/mypage/partners/manage/shop/add/AddProduct';

export const metadata: Metadata = {
  title: '상품 추가',
};

export default function Page() {
  return (
    <Suspense>
      <AddProduct />
    </Suspense>
  );
}
