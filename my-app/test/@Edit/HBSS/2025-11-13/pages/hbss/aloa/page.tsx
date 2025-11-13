import { Metadata } from 'next';
import { Suspense } from 'react';
import AloaDeliveryInfo from '@views/hbss/aloa/AloaDeliveryInfo';

export const metadata: Metadata = {
  title: 'ALOA 배송조회 - 배송 안내',
};

export default function Page() {
  return (
    <Suspense>
      <AloaDeliveryInfo />
    </Suspense>
  );
}
