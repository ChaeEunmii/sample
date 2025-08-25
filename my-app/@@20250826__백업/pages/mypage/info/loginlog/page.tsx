import { Metadata } from 'next';
import { Suspense } from 'react';
import LoginLog from '@/views/mypage/info/loginlog/LoginLog';

export const metadata: Metadata = {
  title: '로그인 기록',
};

export default function Page() {
  return (
    <Suspense>
      <LoginLog />
    </Suspense>
  );
}
