import { Metadata } from 'next';
import { Suspense } from 'react';
import HPointExpiring from '@/views/mypage/point/HPointExpiring';

export const metadata: Metadata = {
  title: 'H.Point 소멸예정 포인트',
};

export default function Page() {
  return (
    <Suspense>
      <HPointExpiring />
    </Suspense>
  );
}
