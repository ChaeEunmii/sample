import { Metadata } from 'next';
import { Suspense } from 'react';
import TripList from '@/views/mypage/trip/list/TripList';

export const metadata: Metadata = {
  title: '여행',
};

export default function Page() {
  return (
    <Suspense>
      <TripList />
    </Suspense>
  );
}
