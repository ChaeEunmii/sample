'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from '@widgets/layout/Container';
import CancelStep1 from '@views/mypage/membership/cancel/CancelStep1';
import CancelStep2 from '@views/mypage/membership/cancel/CancelStep2';

export default function MembershipCancel() {
  // 화면상태
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  let content;
  switch (status) {
    case 'status1':
      content = <CancelStep1 />;
      break;
    case 'status2':
      content = <CancelStep2 />;
      break;
    default:
      content = <CancelStep1 />;
      break;
  }

  return (
    <Container title="HiHi 멤버십 해지하기" showBack>
      {content}
    </Container>
  );
}
