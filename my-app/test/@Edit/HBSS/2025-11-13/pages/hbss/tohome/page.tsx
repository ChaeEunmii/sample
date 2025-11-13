import { Metadata } from 'next';
import { Suspense } from 'react';
import TohomeVerify from '@/views/hbss/tohome/TohomeVerify';

export const metadata: Metadata = {
  title: '더현대 투홈, 수취인 배송조회  본인 인증',
};

export default function Page() {
  return (
    <Suspense>
      <TohomeVerify />
    </Suspense>
  );
}
