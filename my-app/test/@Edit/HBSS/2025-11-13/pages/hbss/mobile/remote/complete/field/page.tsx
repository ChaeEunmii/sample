import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteStep5Field from '@/views/hbss/mobile/remote/MobileRemoteStep5Field';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 완료(현장 배송 접수)',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteStep5Field />
    </Suspense>
  );
}
