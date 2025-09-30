import { Metadata } from 'next';
import { Suspense } from 'react';
import OpenApiGuide from '@/views/mypage/seller/operation/api/OpenApiGuide';

export const metadata: Metadata = {
  title: '오픈 API 가이드',
};

export default function Page() {
  return (
    <Suspense>
      <OpenApiGuide />
    </Suspense>
  );
}
