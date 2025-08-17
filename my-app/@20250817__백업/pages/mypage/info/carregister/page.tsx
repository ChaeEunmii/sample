import { Metadata } from 'next';
import { Suspense } from 'react';
import ParkingTicketUse from '@/views/mypage/info/carregister/ParkingTicketUse';

export const metadata: Metadata = {
  title: '차량 등록 관리',
};

export default function Page() {
  return (
    <Suspense>
      <ParkingTicketUse />
    </Suspense>
  );
}
