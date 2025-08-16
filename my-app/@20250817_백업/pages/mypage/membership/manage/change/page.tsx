import { Metadata } from 'next';
import { Suspense } from 'react';
import ChangeApply from '@/views/mypage/membership/change/ChangeApply';

export const metadata: Metadata = {
  title: 'HiHi 멤버십 변경 신청',
};

export default function Page() {
  return (
    <Suspense>
      <ChangeApply />
    </Suspense>
  );
}
