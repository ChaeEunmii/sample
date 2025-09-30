import { Metadata } from 'next';
import { Suspense } from 'react';
import CancelApply from '@/views/mypage/claims/cancel/apply/CancelApply';

export const metadata: Metadata = {
  title: '주문 취소 신청',
};

export default function Page() {
  return (
    <Suspense>
      <CancelApply />
    </Suspense>
  );
}
