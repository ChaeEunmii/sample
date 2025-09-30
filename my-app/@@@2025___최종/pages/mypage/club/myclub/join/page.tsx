import { Metadata } from 'next';
import { Suspense } from 'react';
import MyClubJoin from '@/views/mypage/club/myclub/MyClubJoin';

export const metadata: Metadata = {
  title: '클럽 가입',
};

export default function Page() {
  return (
    <Suspense>
      <MyClubJoin />
    </Suspense>
  );
}
