import { Metadata } from 'next';
import { Suspense } from 'react';
import SellerCenter from '@/views/mypage/info/seller/SellerCenter';

export const metadata: Metadata = {
  title: '판매자 센터',
};

export default function Page() {
  return (
    <Suspense>
      <SellerCenter />
    </Suspense>
  );
}
