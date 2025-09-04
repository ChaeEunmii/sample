import { Metadata } from 'next';
import { Suspense } from 'react';
import LoginSeller from '@/views/mypage/info/seller/login/LoginSeller';

export const metadata: Metadata = {
  title: '판매자 로그인',
};

export default function Page() {
  return (
    <Suspense>
      <LoginSeller />
    </Suspense>
  );
}
