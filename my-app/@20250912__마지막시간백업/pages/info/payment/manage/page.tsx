import { Metadata } from 'next';
import { Suspense } from 'react';
import RefundAndReceipt from '@/views/mypage/info/payment/manage/RefundAndReceipt';

export const metadata: Metadata = {
  title: '환불계좌 관리/현금영수증',
};

export default function Page() {
  return (
    <Suspense>
      <RefundAndReceipt />
    </Suspense>
  );
}
