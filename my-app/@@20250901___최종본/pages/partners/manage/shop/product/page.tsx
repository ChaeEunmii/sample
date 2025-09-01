import { Metadata } from 'next';
import { Suspense } from 'react';
import PartnersShop from '@views/mypage/partners/manage/shop/PartnersShop';

export const metadata: Metadata = {
  title: '파트너스샵',
};

export default function Page() {
  return (
    <Suspense>
      <PartnersShop />
    </Suspense>
  );
}
