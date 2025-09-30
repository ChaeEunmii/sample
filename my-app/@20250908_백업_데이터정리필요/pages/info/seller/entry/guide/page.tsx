import { Metadata } from 'next';
import { Suspense } from 'react';
import EntryGuide from '@/views/mypage/info/seller/entry/guide/EntryGuide';

export const metadata: Metadata = {
  title: '입점 가이드',
};

export default function Page() {
  return (
    <Suspense>
      <EntryGuide />
    </Suspense>
  );
}
