import { Metadata } from 'next';
import { Suspense } from 'react';
import ClubMain from '@/views/mypage/club/ClubMain';

export const metadata: Metadata = {
  title: '클럽 메인',
};

export default function Page() {
  return (
    <Suspense>
      <ClubMain />
    </Suspense>
  );
}
