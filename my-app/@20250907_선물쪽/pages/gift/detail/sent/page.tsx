import { Metadata } from 'next';
import { Suspense } from 'react';
import GiftDeliverySearch from '@views/mypage/activity/gift/delivery/GiftDeliverySearch';

export const metadata: Metadata = {
  title: '보낸선물 상세',
};

export default function Page() {
  return (
    <Suspense>
      <GiftDeliverySearch />
    </Suspense>
  );
}
