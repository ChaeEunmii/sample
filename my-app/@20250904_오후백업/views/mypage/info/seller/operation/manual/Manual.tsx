'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import BoardAccSearch from '@/views/mypage/info/seller/components/BoardAccSearch';
import styles from './Manual.module.scss';
import { mockSellerEntryGuides } from '@views/mypage/info/seller/SellerDocs';

export default function Manual() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const nodata = searchParams.has('nodata');

  // 데이터 가져오기
  const data = nodata ? [] : mockSellerEntryGuides;

  return (
    <Container showBack title="매뉴얼">
      <Contents className={styles.layout}>
        <BoardAccSearch data={data} />
      </Contents>
    </Container>
  );
}
