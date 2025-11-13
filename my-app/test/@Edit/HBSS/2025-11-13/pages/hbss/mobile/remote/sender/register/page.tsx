import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteStep1 from '@views/hbss/mobile/remote/MobileRemoteStep1';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 보내시는 분 정보입력',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteStep1 />
    </Suspense>
  );
}
