import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteStep4 from '@views/hbss/mobile/remote/MobileRemoteStep4';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 받으시는 분 정보확인',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteStep4 />
    </Suspense>
  );
}
