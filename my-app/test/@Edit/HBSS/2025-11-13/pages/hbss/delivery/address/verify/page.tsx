import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryStep1 from '@/views/hbss/delivery/address/DeliveryStep1';

export const metadata: Metadata = {
  title: '배송지 입력 - 본인확인',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryStep1 />
    </Suspense>
  );
}
