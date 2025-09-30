import { Metadata } from 'next';
import { Suspense } from 'react';
import ConceptRsvpVoucher from '@/views/concept/ConceptRsvpVoucher';

export const metadata: Metadata = {
  title: '바우처 전체보기',
};

export default function Page() {
  return (
    <Suspense>
      <ConceptRsvpVoucher />
    </Suspense>
  );
}
