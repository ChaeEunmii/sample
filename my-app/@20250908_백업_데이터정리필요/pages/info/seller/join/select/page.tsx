import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinSelect from '@/views/mypage/info/seller/join/JoinSelect';

export const metadata: Metadata = {
  title: '판매자 유형선택',
};

export default function Page() {
  return (
    <Suspense>
      <JoinSelect />
    </Suspense>
  );
}
