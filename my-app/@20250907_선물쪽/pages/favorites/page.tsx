import { Metadata } from 'next';
import { Suspense } from 'react';
import FavoriteProduct from '@views/mypage/activity/favorites/FavoriteProduct';

export const metadata: Metadata = {
  title: '자주 구매하는 상품',
};

export default function Page() {
  return (
    <Suspense>
      <FavoriteProduct />
    </Suspense>
  );
}
