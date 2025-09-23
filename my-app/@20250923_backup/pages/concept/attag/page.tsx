import { Metadata } from 'next';
import { Suspense } from 'react';
import Attag from '@/views/shop/concept/attag/Attag';

export const metadata: Metadata = {
  title: 'Attag 관',
};

export default function Page() {
  return (
    <Suspense>
      <Attag />
    </Suspense>
  );
}
