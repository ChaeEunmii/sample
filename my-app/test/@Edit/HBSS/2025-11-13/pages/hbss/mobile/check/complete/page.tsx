import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileCheckStep4 from '@views/hbss/mobile/check/MobileCheckStep4';

export const metadata: Metadata = {
  title: '모바일정보확인 - 완료',
};

export default function Page() {
  return (
    <Suspense>
      <MobileCheckStep4 />
    </Suspense>
  );
}
