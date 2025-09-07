import { Metadata } from 'next';
import { Suspense } from 'react';
import { TorderGuestOrderForm } from '@/views/mypage/booking/torder/guest/TorderGuestOrderForm';

export const metadata: Metadata = {
  title: '주문내역조회(비회원)',
};

export default function Page() {
  return (
    <Suspense>
      <TorderGuestOrderForm />
    </Suspense>
  );
}
