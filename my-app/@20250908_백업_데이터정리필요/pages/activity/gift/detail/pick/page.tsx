import { Metadata } from 'next';
import { Suspense } from 'react';
import DetailPick from '@views/mypage/activity/gift/detail/pick/DetailPick';

export const metadata: Metadata = {
  title: '선물픽 상세',
};

export default function Page() {
  return (
    <Suspense>
      <DetailPick />
    </Suspense>
  );
}
