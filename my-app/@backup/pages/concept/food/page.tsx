import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptFood from '@/views/concept/ConceptFood';

export const metadata: Metadata = {
  title: '식품관',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptFood />
    </Suspense>
  );
}
