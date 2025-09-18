import { Metadata } from 'next';
import { Suspense } from 'react';
import Setting from '@/views/mypage/util/setting/Setting';

export const metadata: Metadata = {
  title: '설정',
};

export default function Page() {
  return (
    <Suspense>
      <Setting />
    </Suspense>
  );
}
