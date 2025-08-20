import { Metadata } from 'next';
import { Suspense } from 'react';
import ReturnApplyStep3 from '@/views/mypage/claims/return/ReturnApplyStep3';

export const metadata: Metadata = {
  title: '반품 접수 3단계',
};

export default function Page() {
  return (
    <Suspense>
      <ReturnApplyStep3 />
    </Suspense>
  );
}
