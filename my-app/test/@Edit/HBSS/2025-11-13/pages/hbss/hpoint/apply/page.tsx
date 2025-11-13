import { Metadata } from 'next';
import { Suspense } from 'react';
import HpointApply from '@views/hbss/hpoint/HpointApply';

export const metadata: Metadata = {
  title: 'H.point 전환 - 신청',
};

export default function Page() {
  return (
    <Suspense>
      <HpointApply />
    </Suspense>
  );
}
