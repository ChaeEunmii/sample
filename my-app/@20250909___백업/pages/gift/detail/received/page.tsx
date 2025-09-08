import { Metadata } from 'next';
import { Suspense } from 'react';
import DetailReceived from '@/views/mypage/gift/detail/received/DetailReceived';

export const metadata: Metadata = {
  title: '받은선물 선물보기',
};

export default function Page() {
  return (
    <Suspense>
      <DetailReceived />
    </Suspense>
  );
}
