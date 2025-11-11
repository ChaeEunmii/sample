import { Metadata } from 'next';
import { Suspense } from 'react';
import SpecialStepMain from '@/views/hbss/special/SpecialStepMain';

export const metadata: Metadata = {
  title: '특별판매행사접수 모바일정보 확인 - 메인',
};

export default function Page() {
  return (
    <Suspense>
      <SpecialStepMain />
    </Suspense>
  );
}
