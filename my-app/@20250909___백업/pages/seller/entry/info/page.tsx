import { Metadata } from 'next';
import { Suspense } from 'react';
import EntryInfo from '@/views/mypage/seller/entry/info/EntryInfo';

export const metadata: Metadata = {
  title: '입점 안내',
};

export default function Page() {
  return (
    <Suspense>
      <EntryInfo />
    </Suspense>
  );
}
