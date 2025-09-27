'use client';

import { useState } from 'react';
import { Stack, Empty, Button, SelectDrawer } from '@shared/ui';
import { TotalCount } from '@views/gem/components/index';
import { PeopleCardList } from '@/views/gem/gem/people/PeopleCardList';
import { PeopleCardProps } from './PeopleCard';
import styles from '../GemList.module.scss';

// PeopleCard의 Props에서 gem을 제외한 타입
export type PeopleCardPropsFilter = Omit<PeopleCardProps, 'gem'>;

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

interface PeopleGemListProps {
  /** 피플 목록 데이터 */
  data: PeopleCardPropsFilter[];
}
export const PeopleGemList = ({ data }: PeopleGemListProps) => {
  // 정렬 값
  const [sortPeopleValue, setSortPeopleValue] = useState('option1');

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'people-1',
    'people-2',
    'people-3',
    'people-4',
  ]);
  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (peopleId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(peopleId) ? prev : [...prev, peopleId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== peopleId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, peopleId);
  };

  return (
    <>
      <Stack type="between" className={styles.top}>
        <TotalCount type="people" count={data.length} />
        <SelectDrawer
          title="정렬"
          options={sortOptions}
          value={sortPeopleValue}
          onChange={setSortPeopleValue}
          variant="filter"
        />
      </Stack>
      {/* 피플 목록 */}
      {data.length > 0 ? (
        <PeopleCardList
          data={data}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
        />
      ) : (
        <Empty
          title="GEM한 유저가 없어요."
          desc="관심있는 유저를 GEM해 보세요."
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
