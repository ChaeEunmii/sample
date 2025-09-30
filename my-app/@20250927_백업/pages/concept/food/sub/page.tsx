import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptFoodSub from '@/views/concept/ConceptFoodSub';

export const metadata: Metadata = {
  title: '식품관 서브',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptFoodSub />
    </Suspense>
  );
}
