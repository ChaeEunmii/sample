import { Metadata } from 'next';
import { Suspense } from 'react';
import SellerCenter from '@/views/mypage/seller/SellerCenter';

export const metadata: Metadata = {
  title: '비즈니스 문의하기',
};

export default function Page() {
  return (
    <Suspense>
      <SellerCenter />
    </Suspense>
  );
}
