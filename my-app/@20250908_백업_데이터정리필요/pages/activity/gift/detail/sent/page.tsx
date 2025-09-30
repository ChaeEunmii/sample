import { Metadata } from 'next';
import { Suspense } from 'react';
import DetailSent from '@views/mypage/activity/gift/detail/sent/DetailSent';

export const metadata: Metadata = {
  title: '보낸선물 상세',
};

export default function Page() {
  return (
    <Suspense>
      <DetailSent />
    </Suspense>
  );
}
