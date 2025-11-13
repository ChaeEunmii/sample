import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryTrackReceiver from '@/views/hbss/delivery/track/DeliveryTrackReceiver';

export const metadata: Metadata = {
  title: 'HBSS 배송조회 - 받으시는 분',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryTrackReceiver />
    </Suspense>
  );
}
