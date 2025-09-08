import { Metadata } from 'next';
import { Suspense } from 'react';
import Faq from '@/views/mypage/seller/operation/faq/Faq';

export const metadata: Metadata = {
  title: '자주 묻는 질문',
};

export default function Page() {
  return (
    <Suspense>
      <Faq />
    </Suspense>
  );
}
