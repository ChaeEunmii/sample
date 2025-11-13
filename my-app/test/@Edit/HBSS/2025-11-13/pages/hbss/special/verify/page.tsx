import { Metadata } from 'next';
import { Suspense } from 'react';
import SpecialStepVerify from '@views/hbss/special/SpecialStepVerify';

export const metadata: Metadata = {
  title: '특별판매행사접수 모바일정보 확인 - 인증',
};

export default function Page() {
  return (
    <Suspense>
      <SpecialStepVerify />
    </Suspense>
  );
}
