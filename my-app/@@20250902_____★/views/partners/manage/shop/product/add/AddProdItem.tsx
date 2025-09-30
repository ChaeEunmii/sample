'use client';

import { useState } from 'react';
import { useToast } from '@shared/contexts/ToastContext';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import { ProdSearch } from '@/views/mypage/partners/manage/components/ProdSearch';
import styles from './AddProdItem.module.scss';
import { mockProdSelectCards } from '@mocks/partners';

export default function AddProdItem() {
  const { showToast } = useToast();
  const MAX_SELECT = 50; // 최대 선택 개수

  // 상품 체크 상태 관리
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  // 상품 체크 토글 핸들러
  const handleSelectToggle = (productId: string | number, isSelected: boolean) => {
    // (초과 여부 체크 + 토스트
    if (isSelected && !selectedIds.includes(productId) && selectedIds.length >= MAX_SELECT) {
      showToast(`상품 큐레이션은 최대 ${MAX_SELECT}개까지 가능합니다.`);
      return;
    }
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

  const selectedCount = selectedIds.length;

  return (
    <Container showBack title="상품 추가">
      <Contents className={styles.layout}>
        <ProdSearch
          data={mockProdSelectCards}
          selectedIds={selectedIds}
          onSelectToggle={handleSelectToggle}
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large" variant="primary" disabled={selectedCount === 0}>
          선택 완료 ({selectedCount}/{MAX_SELECT})
        </Button>
      </ButtonArea>
    </Container>
  );
}
