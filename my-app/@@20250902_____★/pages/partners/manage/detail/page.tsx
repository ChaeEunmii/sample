import { Metadata } from 'next';
import { Suspense } from 'react';
import { ManagePartnersDetail } from '@/views/mypage/partners/manage/ManagePartnersDetail';

export const metadata: Metadata = {
  title: '활동 상세 실적',
};

export default function Page() {
  return (
    <Suspense>
      <ManagePartnersDetail />
    </Suspense>
  );
}
