'use client';

import { useState } from 'react';
import { Dialog, ButtonArea, Button, Text, Tabs } from '@shared/ui';
import ProductCardList from '@views/gem/mycollection/components/ProductCardList';
import BrandCardList from '@views/gem/mycollection/components/BrandCardList';
import { mockProductCardList, mockBrandCardList } from '@mocks/mycollection';
import styles from './AddDialog.module.scss';

interface AddItemDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddItemDialog({ isOpen, onClose }: AddItemDialogProps) {
  // 추가할 상품 데이터 배열
  const AddProductData = mockProductCardList;
  const AddBrandData = mockBrandCardList;

  // 탭 카운팅
  const productCount = AddProductData.length;
  const brandCount = AddBrandData.length;
  const totalCount = productCount + brandCount;

  // 탭
  const [clickedTab, setClickedTab] = useState(0);

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

  // 선택없음 여부 (선택된것 없을때)
  const noSelected = selectedIds.length === 0;

  return (
    <Dialog
      title="항목 추가"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      className={styles.bgGray}
      footer={
        <>
          <ButtonArea vertical className={styles.btnArea}>
            <Text as="strong" className={styles.count}>
              선택 항목
              <em>
                ({selectedIds.length}/{totalCount})
              </em>
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
      <div className={styles.stickyTop}>
        <Tabs
          data={[{ label: `PRODUCT ${productCount}` }, { label: `BRAND ${brandCount}` }]}
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          variant="buttons"
          className={styles.tabs}
        />
      </div>
      <div className={styles.contents}>
        {clickedTab === 0 && (
          <ProductCardList
            data={AddProductData}
            mode="select"
            selection={{
              selectedIds: selectedIds,
              onChange: handleSelectToggle,
            }}
          />
        )}
        {clickedTab === 1 && (
          <BrandCardList
            data={AddBrandData}
            mode="select"
            selection={{
              selectedIds: selectedIds,
              onChange: handleSelectToggle,
            }}
          />
        )}
      </div>
    </Dialog>
  );
}
