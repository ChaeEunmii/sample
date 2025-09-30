import { Metadata } from 'next';
import JoinStep4 from '@/views/mypage/seller/join/JoinStep4';

export const metadata: Metadata = {
  title: '가입 및 입점 신청 완료',
};

export default function Page() {
  return <JoinStep4 />;
}
