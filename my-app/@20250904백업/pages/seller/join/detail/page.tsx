import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinStep2 from '@views/auth/join//biz/JoinStep2';

export const metadata: Metadata = {
  title: '판매자 입점신청 정보 상세',
};

export default function Page() {
  return (
    <Suspense>
      <JoinStep2 />
    </Suspense>
  );
}
