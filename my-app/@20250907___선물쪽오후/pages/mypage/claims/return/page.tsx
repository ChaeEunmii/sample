import { Metadata } from 'next';
import { Suspense } from 'react';
import ReturnApplyStep2 from '@/views/mypage/claims/return/ReturnApplyStep2';

export const metadata: Metadata = {
  title: '반품 접수',
};

export default function Page() {
  return (
    <Suspense>
      <ReturnApplyStep2 />
    </Suspense>
  );
}
