import { Metadata } from 'next';
import { Suspense } from 'react';
import ManagePartners from '@/views/mypage/partners/manage/ManagePartners';

export const metadata: Metadata = {
  title: '파트너스 활동 관리',
};

export default function Page() {
  return (
    <Suspense>
      <ManagePartners />
    </Suspense>
  );
}
