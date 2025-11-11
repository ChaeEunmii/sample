import { Metadata } from 'next';
import { Suspense } from 'react';
import HpointComplete from '@views/hbss/hpoint/HpointComplete';

export const metadata: Metadata = {
  title: '모바일 비대면 접수',
};

export default function Page() {
  return (
    <Suspense>
      <HpointComplete />
    </Suspense>
  );
}
