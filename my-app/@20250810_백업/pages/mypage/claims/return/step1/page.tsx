import { Metadata } from 'next';
import { Suspense } from 'react';
import ReturnApplyStep1 from '@/views/mypage/claims/return/ReturnApplyStep1';

export const metadata: Metadata = {
  title: '반품 접수 1단계',
};

export default function Page() {
  return (
    <Suspense>
      <ReturnApplyStep1 />
    </Suspense>
  );
}
