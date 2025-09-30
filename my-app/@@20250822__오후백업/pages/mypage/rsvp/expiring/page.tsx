import { Metadata } from 'next';
import { Suspense } from 'react';
import RsvpExpiring from '@/views/mypage/point/RsvpExpiring';

export const metadata: Metadata = {
  title: 'RSVP 소멸예정 포인트',
};

export default function Page() {
  return (
    <Suspense>
      <RsvpExpiring />
    </Suspense>
  );
}
