import { Metadata } from 'next';
import { Suspense } from 'react';
import { TorderCompleted } from '@/views/mypage/booking/torder/TorderCompleted';

export const metadata: Metadata = {
  title: '테이블오더 > 주문완료',
};

export default function Page() {
  return (
    <Suspense>
      <TorderCompleted />
    </Suspense>
  );
}
