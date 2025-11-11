import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryStep4 from '@views/hbss/delivery/DeliveryStep4';

export const metadata: Metadata = {
  title: '배송지 입력 - 완료',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryStep4 />
    </Suspense>
  );
}
