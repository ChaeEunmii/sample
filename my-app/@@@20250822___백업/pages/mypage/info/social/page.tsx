import { Metadata } from 'next';
import { Suspense } from 'react';
import SocialConnections from '@/views/mypage/info/social/SocialConnections';

export const metadata: Metadata = {
  title: '간편계정 연결관리',
};

export default function Page() {
  return (
    <Suspense>
      <SocialConnections />
    </Suspense>
  );
}
