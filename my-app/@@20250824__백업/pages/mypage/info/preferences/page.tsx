import { Metadata } from 'next';
import { Suspense } from 'react';
import PersonalSetting from '@/views/mypage/info/preferences/PersonalSetting';

export const metadata: Metadata = {
  title: '나의 맞춤정보 관리',
};

export default function Page() {
  return (
    <Suspense>
      <PersonalSetting />
    </Suspense>
  );
}
