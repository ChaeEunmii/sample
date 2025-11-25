'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, IconButton, Empty } from '@shared/ui';
import { ProdCardList, type ProdCardItemProps } from '@widgets/product/ProdCardList';
import styles from './EditProdItem.module.scss';
import { mockProdSelectCards } from '@mocks/partners';

export default function EditProdItem() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const nodata = searchParams.has('nodata');

  // 상품 목록 샘플 데이터 가져옴
  const editProdListData = nodata ? [] : mockProdSelectCards;

  // ProdCard 삭제버튼 설정
  const dataWithExtras: ProdCardItemProps[] = editProdListData.map((item) => ({
    ...item,
    flagSlot: (
      <IconButton
        size="medium"
        name="deleteBg"
        className={styles.delete}
        onClick={() => console.log(`${item.id} 삭제`)}
      >
        삭제
      </IconButton>
    ),
  }));

  return (
    <Container showBack title="상품 그룹 항목 수정">
      <Contents className={styles.layout}>
        {/* 상품 목록 */}
        {dataWithExtras.length > 0 ? (
          <ProdCardList data={dataWithExtras} variant="grid" columns={3} />
        ) : (
          <Empty title="등록된 상품이 없습니다" desc="상품검색을 통해 상품을 추가해 보세요." />
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">상품 추가하기</Button>
        <Button size="large" variant="primary" disabled={nodata}>
          수정 완료
        </Button>
      </ButtonArea>
    </Container>
  );
}
