import { Metadata } from 'next';
import { Suspense } from 'react';
import SpecialStep3 from '@views/hbss/special/SpecialStep3';

export const metadata: Metadata = {
  title: '특별판매행사접수 모바일정보 확인 - 완료',
};

export default function Page() {
  return (
    <Suspense>
      <SpecialStep3 />
    </Suspense>
  );
}
