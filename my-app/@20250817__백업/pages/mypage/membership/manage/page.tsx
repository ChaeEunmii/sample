import { Metadata } from 'next';
import { Suspense } from 'react';
import MemberShipManage from '@views/mypage/membership/MemberShipManage';

export const metadata: Metadata = {
  title: 'HiHi 멤버십 관리 메인',
};

export default function Page() {
  return (
    <Suspense>
      <MemberShipManage />
    </Suspense>
  );
}
