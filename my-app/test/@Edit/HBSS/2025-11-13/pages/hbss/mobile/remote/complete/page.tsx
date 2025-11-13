import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteStep5 from '@views/hbss/mobile/remote/MobileRemoteStep5';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 완료',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteStep5 />
    </Suspense>
  );
}
