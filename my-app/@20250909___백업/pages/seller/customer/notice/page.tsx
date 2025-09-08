import { Metadata } from 'next';
import { Suspense } from 'react';
import Notice from '@/views/mypage/seller/customer/notice/Notice';

export const metadata: Metadata = {
  title: '공지사항',
};

export default function Page() {
  return (
    <Suspense>
      <Notice />
    </Suspense>
  );
}
