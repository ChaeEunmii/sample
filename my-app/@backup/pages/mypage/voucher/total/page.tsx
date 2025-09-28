import { Metadata } from 'next';
import { Suspense } from 'react';
import MyVoucherTotal from '@/views/mypage/myvoucher/MyVoucherTotal';

export const metadata: Metadata = {
  title: '마이바우처 전체보기',
};

export default function Page() {
  return (
    <Suspense>
      <MyVoucherTotal />
    </Suspense>
  );
}
