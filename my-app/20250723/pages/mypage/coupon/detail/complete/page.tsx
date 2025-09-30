import { Suspense } from 'react';
import { Metadata } from 'next';
import { UseCompleteForm } from '@/views/mypage/coupon/detail/offline/complete/UseCompleteForm';

export const metadata: Metadata = {
  title: '매장 직원 확인용',
};

export default function Page() {
  return (
    <Suspense>
      <UseCompleteForm />
    </Suspense>
  );
}
