import { Metadata } from 'next';
import { Suspense } from 'react';
import PrivacyInfoOutsourcing from '@/views/mypage/info/privacyinfo/PrivacyInfoOutsourcing';

export const metadata: Metadata = {
  title: '개인정보 처리 위탁',
};

export default function Page() {
  return (
    <Suspense>
      <PrivacyInfoOutsourcing />
    </Suspense>
  );
}
