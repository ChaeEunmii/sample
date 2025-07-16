import { Metadata } from 'next';
import { Suspense } from 'react';
import MyVoucher from '@/views/mypage/myvoucher/MyVoucher';

export const metadata: Metadata = {
  title: '마이바우처',
};

export default function Page() {
  return (
    <Suspense>
      <MyVoucher />
    </Suspense>
  );
}
