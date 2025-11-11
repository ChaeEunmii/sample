import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryStep2 from '@views/hbss/delivery/DeliveryStep2';

export const metadata: Metadata = {
  title: '배송지 입력 - 정보입력',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryStep2 />
    </Suspense>
  );
}
