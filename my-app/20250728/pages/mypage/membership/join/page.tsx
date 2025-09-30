import { Metadata } from 'next';
import MembershipJoin from '@/views/mypage/membership/MembershipJoin';

export const metadata: Metadata = {
  title: 'HiHi 멤버십 가입하기',
};

export default function Page() {
  return <MembershipJoin />;
}
