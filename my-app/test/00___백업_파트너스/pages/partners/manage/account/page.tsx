import { Metadata } from 'next';
import { Suspense } from 'react';
import { AccountManage } from '@/views/mypage/partners/manage/account/AccountManage';

export const metadata: Metadata = {
  title: '파트너스 정산 계좌 관리',
};

export default function Page() {
  return (
    <Suspense>
      <AccountManage />
    </Suspense>
  );
}
