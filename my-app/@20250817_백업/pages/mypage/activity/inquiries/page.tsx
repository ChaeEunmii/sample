import { Metadata } from 'next';
import { Suspense } from 'react';
import MyInquiries from '@/views/mypage/activity/inquiries/MyInquiries';

export const metadata: Metadata = {
  title: '나의 문의내역',
};

export default function Page() {
  return (
    <Suspense>
      <MyInquiries />
    </Suspense>
  );
}
