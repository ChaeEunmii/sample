import { Metadata } from 'next';
import { Suspense } from 'react';
import PrivacyInfoUsage from '@/views/mypage/info/privacyinfo/PrivacyInfoUsage';

export const metadata: Metadata = {
  title: '개인정보 이용현황',
};

export default function Page() {
  return (
    <Suspense>
      <PrivacyInfoUsage />
    </Suspense>
  );
}
