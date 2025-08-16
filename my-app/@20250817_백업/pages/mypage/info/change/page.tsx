import { Metadata } from 'next';
import { Suspense } from 'react';
import ChangeInfo from '@/views/mypage/info/change/ChangeInfo';

export const metadata: Metadata = {
  title: '회원정보 변경',
};

export default function Page() {
  return (
    <Suspense>
      <ChangeInfo />
    </Suspense>
  );
}
