import { Metadata } from 'next';
import { Suspense } from 'react';
import BusinessInquiry from '@/views/mypage/seller/customer/business/BusinessInquiry';

export const metadata: Metadata = {
  title: '비즈니스 문의하기',
};

export default function Page() {
  return (
    <Suspense>
      <BusinessInquiry />
    </Suspense>
  );
}
