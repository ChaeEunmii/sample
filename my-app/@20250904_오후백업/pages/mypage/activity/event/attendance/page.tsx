import { Metadata } from 'next';
import { Suspense } from 'react';
import AttendanceHistory from '@/views/mypage/activity/event/attendance/AttendanceHistory';

export const metadata: Metadata = {
  title: '출석체크 전월 기록 확인하기',
};

export default function Page() {
  return (
    <Suspense>
      <AttendanceHistory />
    </Suspense>
  );
}
