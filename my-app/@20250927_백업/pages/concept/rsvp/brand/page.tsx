import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptRsvpBrand from '@/views/concept/ConceptRsvpBrand';

export const metadata: Metadata = {
  title: 'RSVP 브랜드',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptRsvpBrand />
    </Suspense>
  );
}
