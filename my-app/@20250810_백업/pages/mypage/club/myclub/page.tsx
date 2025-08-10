import { Metadata } from 'next';
import { Suspense } from 'react';
import MyClubMain from '@/views/mypage/club/myclub/MyClubMain';

export const metadata: Metadata = {
  title: '마이클럽',
};

export default function Page() {
  return (
    <Suspense>
      <MyClubMain />
    </Suspense>
  );
}
