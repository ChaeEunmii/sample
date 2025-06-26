'use client';

import { useState } from 'react';
import { Tabs, Checkbox } from '@shared/ui';
import styles from './GemList.module.scss';
import { GemNav } from '@views/gem/components/GemNav';
import { CheckableProdCardList } from '@/views/gem/@test/CheckableProdCardList';
import { mockProductList } from '@mocks/gem';

export const tabItems = [
  { label: 'PRODUCT' },
  { label: 'BRAND' },
  { label: 'COLLECTION' },
  { label: 'PEOPLE' },
];

export default function GemList() {
  // 탭
  const [clickedTab, setClickedTab] = useState('0');
  const tabsWithClick = tabItems.map((tab, index) => ({
    ...tab,
    onClick: () => setClickedTab(`${index}`),
  }));

  // 상품 카드 선택 상태
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const isAllSelected = selectedIds.length === mockProductList.length;
  // 전체선택 핸들러
  const toggleAll = () => {
    setSelectedIds(isAllSelected ? [] : mockProductList.map((item) => item.id));
  };
  //상품 체크
  const toggleSingle = (id: string | number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    console.log('selectedIds: ', selectedIds);
  };

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['prod-1', 'prod-3']);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(productId) ? prev : [...prev, productId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== productId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.sticky}>
        <GemNav activeKey="gem" />
        <Tabs data={tabsWithClick} defaultActive={0} variant="buttons" className={styles.tabs} />
      </div>

      <div className={styles.content}>
        <div>clickedTab: {clickedTab}</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <Checkbox checked={isAllSelected} onChange={toggleAll} label="전체 선택" />
        </div>
        <CheckableProdCardList
          data={mockProductList}
          selectedIds={selectedIds}
          onSelectItem={toggleSingle}
          variant="grid"
          columns={2}
          cardType="vertical"
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
        />
        <div style={{ marginTop: 16 }}>
          <strong>선택된 ID:</strong> {JSON.stringify(selectedIds)}
        </div>
        <div style={{ marginTop: 16 }}>
          <strong>선택된 상품 정보:</strong>
          <ul>
            {mockProductList
              .filter((item) => selectedIds.includes(item.id))
              .map((item) => (
                <li key={item.id}>
                  (ID: {item.id})<br /> {item.brand}
                  <br /> {item.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
