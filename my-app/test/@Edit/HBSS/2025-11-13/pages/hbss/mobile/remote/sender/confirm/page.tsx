import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteStep2 from '@views/hbss/mobile/remote/MobileRemoteStep2';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 보내시는 분 정보확인',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteStep2 />
    </Suspense>
  );
}
