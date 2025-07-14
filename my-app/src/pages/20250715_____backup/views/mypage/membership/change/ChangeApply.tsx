'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from '@widgets/layout/Container';
import ChangePrime from '@views/mypage/membership/change/ChangePrime';
import ChangePlus from '@views/mypage/membership/change/ChangePlus';

export default function ChangeApply() {
  // 화면상태
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  let content;
  switch (status) {
    case 'status1':
      content = <ChangePrime />;
      break;
    case 'status2':
      content = <ChangePlus />;
      break;
    default:
      content = <ChangePrime />;
      break;
  }
  return <Container title="멤버십 변경 신청">{content}</Container>;
}
