import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileCheckStep3 from '@views/hbss/mobile/check/MobileCheckStep3';

export const metadata: Metadata = {
  title: '모바일정보확인 - 정보확인',
};

export default function Page() {
  return (
    <Suspense>
      <MobileCheckStep3 />
    </Suspense>
  );
}
