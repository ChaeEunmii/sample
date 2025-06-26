'use client';

import { useState } from 'react';
import { Stack } from '@shared/ui';
import styles from './MycollectionList.module.scss';
import { GemNav } from '@views/gem/components/GemNav';
import { TotalCount } from '@views/gem/components/TotalCount';
import CollectionItemList from '@/views/gem/gem/collection/CollectionList';
import { mockCollectionList } from '@mocks/gem';
import { SelectDrawer } from '@/views/gem/components/SelectDrawer';

export const tabItems = [
  { label: 'PRODUCT' },
  { label: 'BRAND' },
  { label: 'COLLECTION' },
  { label: 'PEOPLE' },
];

/**
   1. container props에 배경색 주는것 
   2. 디자인에 하단 nav잇는경우 layout.tsx에 추가하면되는것인가
   3. header type 추가된경우 직접추가?
*/

export default function MycollectionList() {
  // selectDrawer 테스트
  const [selectedValue, setSelectedValue] = useState('option1');

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'collection-1',
    'collection-2',
  ]);

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
        <GemNav activeKey="collection" />
      </div>
      <div className={styles.content}>
        <Stack type="between">
          <TotalCount type="product" count={300} tip={<>최대 300개까지 GEM할 수 있어요.</>} />
          <SelectDrawer
            title="정렬"
            options={[
              {
                label: '최신순',
                value: 'option1',
              },
              {
                label: 'GEM한순',
                value: 'option2',
              },
            ]}
            value={selectedValue}
            onChange={setSelectedValue}
            variant="filter"
          />
        </Stack>
      </div>
      <div className={styles.collectionContent}>
        <CollectionItemList
          data={mockCollectionList}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
        />
      </div>
    </div>
  );
}
