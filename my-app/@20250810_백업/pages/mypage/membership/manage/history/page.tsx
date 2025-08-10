import { Metadata } from 'next';
import { MembershipHistory } from '@views/mypage/membership/MembershipHistory';

export const metadata: Metadata = {
  title: '이용 내역 상세 보기',
};

export default function Page() {
  return <MembershipHistory />;
}
