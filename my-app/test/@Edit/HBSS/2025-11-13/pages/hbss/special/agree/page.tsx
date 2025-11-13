import { Metadata } from 'next';
import { Suspense } from 'react';
import SpecialStepAgree from '@/views/hbss/special/SpecialStepAgree';

export const metadata: Metadata = {
  title: '특별판매행사접수 모바일정보 확인 - 개인정보제공동의',
};

export default function Page() {
  return (
    <Suspense>
      <SpecialStepAgree />
    </Suspense>
  );
}
