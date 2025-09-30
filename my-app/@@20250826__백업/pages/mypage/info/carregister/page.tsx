import { Metadata } from 'next';
import { Suspense } from 'react';
import CarRegisterManage from '@/views/mypage/info/carregister/CarRegisterManage';

export const metadata: Metadata = {
  title: '차량 등록 관리',
};

export default function Page() {
  return (
    <Suspense>
      <CarRegisterManage />
    </Suspense>
  );
}
