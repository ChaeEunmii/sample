import { Metadata } from 'next';
import { Suspense } from 'react';
import EntryGuide from '@/views/mypage/info/seller/entry/guide/EntryGuide';

export const metadata: Metadata = {
  title: '매뉴얼',
};

export default function Page() {
  return (
    <Suspense>
      <EntryGuide />
    </Suspense>
  );
}
