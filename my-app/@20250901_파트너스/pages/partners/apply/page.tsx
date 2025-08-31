import { Metadata } from 'next';
import { Suspense } from 'react';
import PartnersApply from '@/views/mypage/partners/apply/ApplyPartners';

export const metadata: Metadata = {
  title: '파트너스 신청하기',
};

export default function Page() {
  return (
    <Suspense>
      <PartnersApply />
    </Suspense>
  );
}
