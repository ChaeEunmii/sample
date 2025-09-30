import { Metadata } from 'next';
import { Suspense } from 'react';
import Alram from '@/views/mypage/util/alram/Alram';

export const metadata: Metadata = {
  title: '알림',
};

export default function Page() {
  return (
    <Suspense>
      <Alram />
    </Suspense>
  );
}
