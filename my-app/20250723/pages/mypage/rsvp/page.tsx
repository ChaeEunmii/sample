import { Metadata } from 'next';
import { Suspense } from 'react';
import RsvpMain from '@/views/mypage/point/RsvpMain';

export const metadata: Metadata = {
  title: 'RSVP 포인트',
};

export default function Page() {
  return (
    <Suspense>
      <RsvpMain />
    </Suspense>
  );
}
