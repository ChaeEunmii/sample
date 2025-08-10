import { Metadata } from 'next';
import { Suspense } from 'react';
import PasswordCheck from '@/views/mypage/info/password/PasswordCheck';

export const metadata: Metadata = {
  title: '비밀번호 확인',
};

export default function Page() {
  return (
    <Suspense>
      <PasswordCheck />
    </Suspense>
  );
}
