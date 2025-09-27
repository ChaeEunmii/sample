import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptRsvp from '@/views/concept/ConceptRsvp';

export const metadata: Metadata = {
  title: 'RSVP 관',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptRsvp />
    </Suspense>
  );
}
