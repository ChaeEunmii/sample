import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteStep3 from '@views/hbss/mobile/remote/MobileRemoteStep3';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 받으시는 분 정보입력',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteStep3 />
    </Suspense>
  );
}
