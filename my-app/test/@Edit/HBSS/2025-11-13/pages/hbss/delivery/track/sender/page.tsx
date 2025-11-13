import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryTrackSender from '@/views/hbss/delivery/track/DeliveryTrackSender';

export const metadata: Metadata = {
  title: 'HBSS 배송조회 - 보내시는 분',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryTrackSender />
    </Suspense>
  );
}
