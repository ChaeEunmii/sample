import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptRsvpProductsSub from '@/views/concept/ConceptRsvpProductsSub';

export const metadata: Metadata = {
  title: 'RSVP 상품 카테고리',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptRsvpProductsSub />
    </Suspense>
  );
}
