import { Metadata } from 'next';
import { Suspense } from 'react';
import GroupEdit from '@/views/mypage/partners/manage/shop/product/group/GroupEdit';

export const metadata: Metadata = {
  title: '상품 그룹명 수정',
};

export default function Page() {
  return (
    <Suspense>
      <GroupEdit />
    </Suspense>
  );
}
