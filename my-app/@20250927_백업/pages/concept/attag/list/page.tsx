import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptAttagProducts from '@/views/concept/ConceptAttagProducts';

export const metadata: Metadata = {
  title: 'Attag 상품',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptAttagProducts />
    </Suspense>
  );
}
