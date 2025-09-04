import { Metadata } from 'next';
import { Suspense } from 'react';
import ApplyPartnersForm from '@/views/mypage/partners/apply/ApplyPartnersForm';

export const metadata: Metadata = {
  title: '파트너스 신청하기',
};

export default function Page() {
  return (
    <Suspense>
      <ApplyPartnersForm />
    </Suspense>
  );
}
