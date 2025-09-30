import { Metadata } from 'next';
import { Suspense } from 'react';
import ShoppingAlram from '@views/mypage/activity/alram/ShoppingAlram';

export const metadata: Metadata = {
  title: '쇼핑 알림',
};

export default function Page() {
  return (
    <Suspense>
      <ShoppingAlram />
    </Suspense>
  );
}
