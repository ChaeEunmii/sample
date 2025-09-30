import { Metadata } from 'next';
import { Suspense } from 'react';
import ReturnForm from '@/views/mypage/claims/return/ReturnForm';

export const metadata: Metadata = {
  title: '반품 접수',
};

export default function Page() {
  return (
    <Suspense>
      <ReturnForm />
    </Suspense>
  );
}
