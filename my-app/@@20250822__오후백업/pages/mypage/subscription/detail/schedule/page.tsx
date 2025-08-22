import { Metadata } from 'next';
import { Suspense } from 'react';
import ScheduleTotal from '@/views/mypage/subscription/detail/schedule/ScheduleTotal';

export const metadata: Metadata = {
  title: '전체 구독 일정',
};

export default function Page() {
  return (
    <Suspense>
      <ScheduleTotal />
    </Suspense>
  );
}
