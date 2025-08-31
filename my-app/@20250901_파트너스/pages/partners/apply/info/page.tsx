import { Metadata } from 'next';
import { Suspense } from 'react';
import PartnersApplyInfo from '@/views/mypage/partners/apply/ApplyPartnersInfo';

export const metadata: Metadata = {
  title: '파트너스 신청하기',
};

export default function Page() {
  return (
    <Suspense>
      <PartnersApplyInfo />
    </Suspense>
  );
}
