import { Metadata } from 'next';
import { Suspense } from 'react';
import SpecialStep1 from '@views/hbss/special/SpecialStep1';

export const metadata: Metadata = {
  title: '특별판매행사접수 모바일정보 확인 - 정보입력',
};

export default function Page() {
  return (
    <Suspense>
      <SpecialStep1 />
    </Suspense>
  );
}
