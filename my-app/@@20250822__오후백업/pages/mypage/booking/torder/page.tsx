import { Metadata } from 'next';
import { Suspense } from 'react';
import { TorderList } from '@/views/mypage/booking/torder/TorderList';

export const metadata: Metadata = {
  title: '테이블오더 > 목록',
};

export default function Page() {
  return (
    <Suspense>
      <TorderList />
    </Suspense>
  );
}
