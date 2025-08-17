import { Metadata } from 'next';
import { Suspense } from 'react';
import PrivacyInfoPolicy from '@/views/mypage/info/privacyinfo/PrivacyInfoPolicy';

export const metadata: Metadata = {
  title: '개인정보 수집 및 이용',
};

export default function Page() {
  return (
    <Suspense>
      <PrivacyInfoPolicy />
    </Suspense>
  );
}
