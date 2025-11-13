import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileCheckStep2 from '@/views/hbss/mobile/check/MobileCheckStep2';

export const metadata: Metadata = {
  title: '모바일정보확인 - 정보입력',
};

export default function Page() {
  return (
    <Suspense>
      <MobileCheckStep2 />
    </Suspense>
  );
}
