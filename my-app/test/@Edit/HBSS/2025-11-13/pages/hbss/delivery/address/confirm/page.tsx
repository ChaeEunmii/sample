import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryStep3 from '@/views/hbss/delivery/address/DeliveryStep3';

export const metadata: Metadata = {
  title: '배송지 입력 - 정보확인',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryStep3 />
    </Suspense>
  );
}
