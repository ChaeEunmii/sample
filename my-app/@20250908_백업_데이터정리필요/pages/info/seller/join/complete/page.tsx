import { Metadata } from 'next';
import JoinComplete from '@views/mypage/info/seller/join/JoinComplete';

export const metadata: Metadata = {
  title: '가입 및 입점 신청 완료',
};

export default function Page() {
  return <JoinComplete />;
}
