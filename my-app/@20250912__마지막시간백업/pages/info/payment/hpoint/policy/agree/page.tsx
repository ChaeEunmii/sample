import { Metadata } from 'next';
import { Suspense } from 'react';
import AgreeAndRegister from '@/views/mypage/info/payment/hpoint/method/policy/AgreeAndRegister';

export const metadata: Metadata = {
  title: 'H.Point Pay 이용약관 동의 및 등록',
};

export default function Page() {
  return (
    <Suspense>
      <AgreeAndRegister />
    </Suspense>
  );
}
