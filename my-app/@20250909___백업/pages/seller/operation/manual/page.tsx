import { Metadata } from 'next';
import { Suspense } from 'react';
import Manual from '@/views/mypage/seller/operation/manual/Manual';

export const metadata: Metadata = {
  title: '매뉴얼',
};

export default function Page() {
  return (
    <Suspense>
      <Manual />
    </Suspense>
  );
}
