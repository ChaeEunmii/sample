import { Metadata } from 'next';
import { Suspense } from 'react';
import GiftBox from '@/views/mypage/gift/list/GiftBox';

export const metadata: Metadata = {
  title: '선물함',
};

export default function Page() {
  return (
    <Suspense>
      <GiftBox />
    </Suspense>
  );
}
