'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import { ProductSearchList } from '@/views/mypage/partners/components/ProductSearchList';
import { mockProdCards2 } from '@views/mypage/partners/partners';
import styles from './AddProduct.module.scss';

export default function AddProduct() {
  // 상품 체크 상태 관리
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  // 상품 체크 토글 핸들러
  const handleSelectToggle = (productId: string | number, isSelected: boolean) => {
    setSelectedIds((prev) => {
      let next = prev;
      // 선택된 상태면, 목록에 없을 때만 추가
      if (isSelected) {
        if (!prev.includes(productId)) {
          next = [...prev, productId];
        }
      } else {
        // 선택 해제면, 목록에서 제거
        next = prev.filter((id) => id !== productId);
      }

      console.log('업데이트된 상품 체크목록:', next);
      console.log(`상품 체크리스트 ${isSelected ? '추가' : '제거'}:`, productId);

      return next;
    });
  };

  // 전체 개수는 원본 데이터 기준
  const totalCount = mockProdCards2.length;
  const selectedCount = selectedIds.length;

  return (
    <Container showBack title="상품 추가">
      <Contents className={styles.layout}>
        <ProductSearchList
          data={mockProdCards2}
          selectedIds={selectedIds}
          onSelectToggle={handleSelectToggle}
          // emptySlot={
          //   <div className={styles.myEmpty}>
          //     <strong>앗!</strong> 해당 검색어의 상품이 없어요.
          //   </div>
          // }
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large" variant="primary" disabled={selectedCount === 0}>
          선택 완료 ({selectedCount}/{totalCount})
        </Button>
      </ButtonArea>
    </Container>
  );
}
