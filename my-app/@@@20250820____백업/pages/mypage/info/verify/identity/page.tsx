import { Metadata } from 'next';
import { Suspense } from 'react';
import IdentityAuth from '@/views/mypage/info/verify/identity/IdentityAuth';

export const metadata: Metadata = {
  title: '본인 인증',
};

export default function Page() {
  return (
    <Suspense>
      <IdentityAuth />
    </Suspense>
  );
}
