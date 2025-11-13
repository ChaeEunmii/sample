import { Metadata } from 'next';
import { Suspense } from 'react';
import HpointComplete from '@views/hbss/hpoint/HpointComplete';

export const metadata: Metadata = {
  title: 'H.point 전환 - 완료',
};

export default function Page() {
  return (
    <Suspense>
      <HpointComplete />
    </Suspense>
  );
}
