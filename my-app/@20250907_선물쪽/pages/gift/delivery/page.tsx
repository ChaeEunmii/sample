import { Metadata } from 'next';
import { Suspense } from 'react';
import GiftDeliverySearch from '@views/mypage/activity/gift/delivery/GiftDeliverySearch';

export const metadata: Metadata = {
  title: '기프트 배송조회',
};

export default function Page() {
  return (
    <Suspense>
      <GiftDeliverySearch />
    </Suspense>
  );
}
