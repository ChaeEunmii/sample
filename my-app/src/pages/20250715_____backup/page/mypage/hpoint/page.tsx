import { Metadata } from 'next';
import { Suspense } from 'react';
import HPointMain from '@/views/mypage/hpoint/HPointMain';

export const metadata: Metadata = {
  title: 'H.Point',
};

export default function Page() {
  return (
    <Suspense>
      <HPointMain />
    </Suspense>
  );
}
