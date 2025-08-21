import { Metadata } from 'next';
import { Suspense } from 'react';
import DeliveryManage from '@/views/mypage/info/delivery/DeliveryManage';

export const metadata: Metadata = {
  title: '배송지 관리',
};

export default function Page() {
  return (
    <Suspense>
      <DeliveryManage />
    </Suspense>
  );
}
