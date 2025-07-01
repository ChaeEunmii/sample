'use client';

import { useState } from 'react';
import { Stack, Empty, Button } from '@shared/ui';
import { TotalCount, SelectDrawer } from '@views/gem/components/index';
import CollectionList from '@views/gem/gem/collection/CollectionList';
import { CollectionItemProps } from './CollectionItem';
import styles from '../GemList.module.scss';

// CollectionItem의 Props에서 gem을 제외하고 id를 추가한 타입
export interface CollectionItemPropsFilter extends Omit<CollectionItemProps, 'gem'> {
  /** 상품 고유 ID */
  id: string | number;
}

// 정렬 옵션
const sortOptions = [
  {
    label: '최신순',
    value: 'option1',
  },
  {
    label: 'GEM한순',
    value: 'option2',
  },
];

interface CollectionGemListProps {
  /** 컬렉션 목록 데이터 */
  data: CollectionItemPropsFilter[];
}
export const CollectionGemList = ({ data }: CollectionGemListProps) => {
  // 정렬 값
  const [sortCollectionValue, setSortCollectionValue] = useState('option1');

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'collection-1',
    'collection-2',
    'collection-3',
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
    <>
      <div className={styles.collection}>
        <Stack type="between" className={styles.top}>
          <TotalCount type="collection" count={data.length} />
          <SelectDrawer
            title="정렬"
            options={sortOptions}
            value={sortCollectionValue}
            onChange={setSortCollectionValue}
            variant="filter"
          />
        </Stack>
        {/* 컬렉션 목록 */}
        {data.length > 0 ? (
          <CollectionList
            data={data}
            wishlist={{
              activeIds: wishlistIds,
              onToggle: handleWishlistToggle,
            }}
          />
        ) : (
          <Empty
            title="GEM한 컬렉션이 없어요."
            desc="관심있는 컬렉션을 GEM해 보세요."
            buttons={
              <>
                <Button variant="primary">GEM하러 가기</Button>
              </>
            }
          />
        )}
      </div>
    </>
  );
};
