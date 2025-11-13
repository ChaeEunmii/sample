import { Metadata } from 'next';
import { Suspense } from 'react';
import MobileRemoteMain from '@views/hbss/mobile/remote/MobileRemoteMain';

export const metadata: Metadata = {
  title: '모바일 비대면 접수 - 랜딩페이지',
};

export default function Page() {
  return (
    <Suspense>
      <MobileRemoteMain />
    </Suspense>
  );
}
