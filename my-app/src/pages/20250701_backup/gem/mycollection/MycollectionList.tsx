'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Stack, Empty } from '@shared/ui';
import { GemNav } from '@views/gem/components/GemNav';
import { TotalCount } from '@views/gem/components/TotalCount';
import { SelectDrawer } from '@views/gem/components/SelectDrawer';
import CollectionList from '@views/gem/gem/collection/CollectionList';
import { mockCollectionList } from '@mocks/mycollection';
import styles from './MycollectionList.module.scss';

// 탭
export const tabItems = [
  { label: 'PRODUCT' },
  { label: 'BRAND' },
  { label: 'COLLECTION' },
  { label: 'PEOPLE' },
];

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

export default function MycollectionList() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const collectionData = isNoData ? [] : mockCollectionList;

  // 정렬 값
  const [sortCollectionValue, setSortCollectionValue] = useState('option1');

  return (
    <Container mode="gray" type="gem">
      <Contents className={styles.layout}>
        <div className={styles.sticky}>
          <GemNav activeKey="collection" />
        </div>
        <div className={styles.content}>
          <Stack type="between">
            <TotalCount type="mycollection" count={collectionData.length} />
            <SelectDrawer
              title="정렬"
              options={sortOptions}
              value={sortCollectionValue}
              onChange={setSortCollectionValue}
              variant="filter"
            />
          </Stack>
          {/* 상품 목록 */}
          {collectionData.length > 0 ? (
            <CollectionList data={collectionData} />
          ) : (
            <Empty
              title="생성한 컬렉션이 없어요."
              desc={
                <>
                  컬렉션을 생성해 상품/브랜드를
                  <br />
                  편하게 모아 보세요.
                </>
              }
            ></Empty>
          )}
        </div>
      </Contents>
    </Container>
  );
}
