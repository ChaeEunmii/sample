import { Metadata } from 'next';
import { Suspense } from 'react';
import MembershipCancel from '@/views/mypage/membership/MembershipCancel';

export const metadata: Metadata = {
  title: 'HiHi 멤버십 해지하기',
};

export default function Page() {
  return (
    <Suspense>
      <MembershipCancel />
    </Suspense>
  );
}
