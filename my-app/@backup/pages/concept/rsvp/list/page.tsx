import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptRsvpProducts from '@/views/concept/ConceptRsvpProducts';

export const metadata: Metadata = {
  title: 'RSVP 상품',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptRsvpProducts />
    </Suspense>
  );
}
