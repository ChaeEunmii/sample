import { Metadata } from 'next';
import { Suspense } from 'react';
import GemList from '@/views/gem/gem/GemList';

export const metadata: Metadata = {
  title: '마이바우처',
};

export default function Page() {
  return (
    <Suspense>
      <GemList />
    </Suspense>
  );
}
