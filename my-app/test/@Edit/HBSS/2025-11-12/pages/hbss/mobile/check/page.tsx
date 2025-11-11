import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileCheck from '@/views/hbss/special/SpecialStepVerify';

export const metadata: Metadata = {
  title: '모바일정보확인 - 메인',
};

export default function Page() {
  return (
    <Suspense>
      <MobileCheck />
    </Suspense>
  );
}
