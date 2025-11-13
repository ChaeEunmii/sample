import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileCheckStep1 from '@views/hbss/mobile/check/MobileCheckStep1';

export const metadata: Metadata = {
  title: '모바일정보확인 - 인증',
};

export default function Page() {
  return (
    <Suspense>
      <MobileCheckStep1 />
    </Suspense>
  );
}
