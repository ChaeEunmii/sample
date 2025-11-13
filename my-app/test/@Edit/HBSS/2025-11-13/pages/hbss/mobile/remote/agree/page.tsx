import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteAgree from '@/views/hbss/mobile/remote/MobileRemoteAgree';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 개인정보제공동의',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteAgree />
    </Suspense>
  );
}
