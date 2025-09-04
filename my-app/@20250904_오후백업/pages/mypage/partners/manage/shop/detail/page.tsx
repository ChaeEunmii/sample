import { Metadata } from 'next';
import { Suspense } from 'react';
import PartnersShopDetail from '@views/mypage/partners/manage/shop/PartnersShopDetail';

export const metadata: Metadata = {
  title: '파트너스샵 상세',
};

export default function Page() {
  return (
    <Suspense>
      <PartnersShopDetail />
    </Suspense>
  );
}
