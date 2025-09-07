import { Metadata } from 'next';
import { Suspense } from 'react';
import JoinedEvents from '@views/mypage/activity/event/history/JoinedEvents';

export const metadata: Metadata = {
  title: '나의 이벤트 참여내역',
};

export default function Page() {
  return (
    <Suspense>
      <JoinedEvents />
    </Suspense>
  );
}
