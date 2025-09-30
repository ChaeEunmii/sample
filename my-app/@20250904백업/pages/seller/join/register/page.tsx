import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinRegister from '@views/mypage/info/seller/join/JoinRegister';

export const metadata: Metadata = {
  title: '판매자 입점신청 정보 입력',
};

export default function Page() {
  return (
    <Suspense>
      <JoinRegister />
    </Suspense>
  );
}
