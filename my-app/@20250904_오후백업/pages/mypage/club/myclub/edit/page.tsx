import { Metadata } from 'next';
import { Suspense } from 'react';
import MyClubEdit from '@/views/mypage/club/myclub/MyClubEdit';

export const metadata: Metadata = {
  title: '관심정보 수정',
};

export default function Page() {
  return (
    <Suspense>
      <MyClubEdit />
    </Suspense>
  );
}
