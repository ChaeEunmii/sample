import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryTrackVerify from '@/views/hbss/delivery/track/DeliveryTrackVerify';

export const metadata: Metadata = {
  title: 'HBSS 배송조회 - 본인 인증',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryTrackVerify />
    </Suspense>
  );
}
