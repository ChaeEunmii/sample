import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptAttag from '@/views/concept/ConceptAttag';

export const metadata: Metadata = {
  title: 'Attag 관',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptAttag />
    </Suspense>
  );
}
