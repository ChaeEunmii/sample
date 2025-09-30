'use client';

import { useState } from 'react';
import { Dialog, ButtonArea, Button, Text } from '@shared/ui';
import { ProdCardList } from '@widgets/product';
import { ProdCardProps } from '@widgets/product/ProdCard';
import { mockProductCardList } from '@mocks/mycollection';
import styles from './AddRemove.module.scss';

interface AddProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// 추가할 상품 데이터 배열 (href가 없으면 카드 전체영역 선택 시 체크됨)
const AddProductData: ProdCardProps[] = mockProductCardList.map((item) => ({ ...item, href: '' }));

export default function AddProductDialog({ isOpen, onClose }: AddProductDialogProps) {
  // 상품 체크 상태 관리
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);
  // 비활성화된 상품 ID 목록
  const [disabledIds, setDisabledIds] = useState<(string | number)[]>([
    'prod-card-2',
    'prod-card-3',
  ]);

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

  // 선택없음 여부 (선택된것 없을때)
  const noSelected = selectedIds.length === 0;

  return (
    <Dialog
      title="컬렉션에 상품 추가"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      mode="gray"
      footer={
        <>
          <ButtonArea vertical className={styles.btnArea}>
            <Text as="strong" className={styles.count}>
              선택 항목
              <em>({selectedIds.length}/50)</em>
            </Text>
            <div className={styles.btns}>
              <Button variant="primary" size="large" disabled={noSelected ? true : false}>
                항목 추가
              </Button>
            </div>
          </ButtonArea>
        </>
      }
    >
      <div className={styles.contents}>
        <ProdCardList
          data={AddProductData}
          variant="grid"
          columns={2}
          gutter="6px"
          cardVariant="boxed"
          mode="select"
          selection={{
            selectedIds: selectedIds,
            onChange: handleSelectToggle,
            disabledIds,
          }}
        />
      </div>
    </Dialog>
  );
}
