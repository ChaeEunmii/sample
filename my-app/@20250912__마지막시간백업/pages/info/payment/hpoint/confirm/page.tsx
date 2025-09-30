import { Metadata } from 'next';
import { Suspense } from 'react';
import ConfirmCard from '@/views/mypage/info/payment/hpoint/method/confirm/ConfirmCard';

export const metadata: Metadata = {
  title: '현대백화점 카드 확인',
};

export default function Page() {
  return (
    <Suspense>
      <ConfirmCard />
    </Suspense>
  );
}
