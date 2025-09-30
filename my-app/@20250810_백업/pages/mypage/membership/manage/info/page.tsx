import { Metadata } from 'next';
import { Suspense } from 'react';
import MembershipInfo from '@/views/mypage/membership/MembershipInfo';

export const metadata: Metadata = {
  title: 'HiHi 멤버십 안내',
};

export default function Page() {
  return (
    <Suspense>
      <MembershipInfo />
    </Suspense>
  );
}
