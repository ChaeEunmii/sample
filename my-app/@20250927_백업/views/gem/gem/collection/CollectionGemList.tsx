'use client';

import { useState } from 'react';
import { Stack, Empty, Button, SelectDrawer } from '@shared/ui';
import { TotalCount } from '@views/gem/components/index';
import { CollectionCardList } from '@widgets/collection/CollectionCardList';
import { CollectionCardProps } from '@widgets/collection/CollectionCard';
import styles from '../GemList.module.scss';

// CollectionCard 의 Props에서 gem을 제외한 타입
export type CollectionCardPropsFilter = Omit<CollectionCardProps, 'gem'>;

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
  data: CollectionCardPropsFilter[];
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
  const handleWishlistToggle = (collectionId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(collectionId) ? prev : [...prev, collectionId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== collectionId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, collectionId);
  };

  return (
    <>
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
        <CollectionCardList
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
    </>
  );
};
