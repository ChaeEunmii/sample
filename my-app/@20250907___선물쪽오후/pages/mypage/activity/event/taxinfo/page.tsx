import { Metadata } from 'next';
import { Suspense } from 'react';
import TaxInfo from '@/views/mypage/activity/event/taxInfo/TaxInfo';

export const metadata: Metadata = {
  title: '제세공과금 안내',
};

export default function Page() {
  return (
    <Suspense>
      <TaxInfo />
    </Suspense>
  );
}
