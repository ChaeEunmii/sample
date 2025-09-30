import { Metadata } from 'next';
import { Suspense } from 'react';
import TermsAndPolicies from '@/views/mypage/info/payment/hpoint/method/policy/TermsAndPolicies';

export const metadata: Metadata = {
  title: 'H.Point Pay 이용약관 및 정책',
};

export default function Page() {
  return (
    <Suspense>
      <TermsAndPolicies />
    </Suspense>
  );
}
