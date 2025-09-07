'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SelectDrawer, Stack, Text, TextButton, Empty, Button } from '@shared/ui';
import { MyReviewList } from '@/views/mypage/activity/reviews/components/MyReviewList';
import type { StoreData } from '@/views/mypage/activity/reviews/components/MyReviewItem';
import styles from './ReviewAvailable.module.scss';

// 기간 정렬 옵션
const periodOptions = [
  { label: '최근 작성순', value: 'option1' },
  { label: '과거 작성순', value: 'option2' },
];

interface ReviewDoneProps {
  /** 작성한 상품 리뷰 데이터 */
  data?: StoreData[];
}

export function ReviewDone({ data = [] }: ReviewDoneProps) {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // 기간 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option1');

  // mock 데이터 가져오기
  const writtenReviewData = isNoData ? [] : data;

  return (
    <>
      <Stack type="between" className={styles.total}>
        <Text size="4" weight="regular" color="gray2">
          총 {writtenReviewData.length}개
        </Text>
        <SelectDrawer
          title="정렬"
          options={periodOptions}
          value={sortBrandValue}
          onChange={setSortBrandValue}
          variant="filter"
        />
      </Stack>
      {writtenReviewData.length > 0 ? (
        <>
          <MyReviewList data={writtenReviewData} type="store" />
          <div className="ncp-text-center ncp-mt-l">
            <TextButton suffixIcon="arrowDown" iconSize="xsmall">
              더보기
            </TextButton>
          </div>
        </>
      ) : (
        <Empty
          title="작성한 리뷰가 없어요."
          buttons={<Button variant="primary">샵메인 바로가기</Button>}
        />
      )}
    </>
  );
}
