import { Metadata } from 'next';
import { Suspense } from 'react';
import EmployeeAuth from '@/views/mypage/info/employee/EmployeeAuth';

export const metadata: Metadata = {
  title: '임직원 인증',
};

export default function Page() {
  return (
    <Suspense>
      <EmployeeAuth />
    </Suspense>
  );
}
