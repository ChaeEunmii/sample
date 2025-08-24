import { Metadata } from 'next';
import { Suspense } from 'react';
import SearchAddress from '@/views/mypage/info/delivery/search/SearchAddress';

export const metadata: Metadata = {
  title: '주소찾기',
};

export default function Page() {
  return (
    <Suspense>
      <SearchAddress />
    </Suspense>
  );
}
