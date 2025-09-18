import { Metadata } from 'next';
import { Suspense } from 'react';
import MypageMain from '@/views/mypage/MypageMain';

export const metadata: Metadata = {
  title: '마이페이지 메인',
};

export default function Page() {
  return (
    <Suspense>
      <MypageMain />
    </Suspense>
  );
}
