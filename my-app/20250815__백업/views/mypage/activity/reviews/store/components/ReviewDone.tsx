'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SelectDrawer, Stack, Text, TextButton, Empty, Button } from '@shared/ui';
import { MyReviewList } from '@/views/mypage/activity/reviews/components/MyReviewList';
import styles from './ReviewAvailable.module.scss';

// 기간 정렬 옵션
const periodOptions = [
  { label: '최근 작성순', value: 'option1' },
  { label: '과거 작성순', value: 'option2' },
];

// 매장 임시데이터
const mockReviewPhotos = [
  { src: '/images/dummy/@sample_torder_01.png', alt: '매장 리뷰 사진 1' },
  { src: '/images/dummy/@sample_torder_01.png', alt: '매장 리뷰 사진 2' },
];
const storeData = {
  id: 'prod-review-1',
  item: {
    id: 'store-1',
    type: 'torder',
    status: 'ORDER',
    image: {
      src: '/images/dummy/@sample_torder_01.png',
      alt: '크리스탈제이드 대표 이미지',
    },
    date: '20250703',
    badge: '테이블오더',
    title: '크리스탈제이드(매장 리뷰)',
    dateTime: '202512261200',
    guestCount: 30,
    location: '압구정본점 4F',
  },
  // purchasedAt: '20250703',
  review: {
    rating: 4.5,
    userId: 'leeja*****u',
    date: '25.03.25',
    specs: [
      { label: '옵션', value: '네이비/L' },
      { label: '피부타입', value: '건성' },
      { label: '민감도', value: '보통' },
    ],
    // flags: ['best', 'gift'],
    review:
      '항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서 항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서',
    photos: mockReviewPhotos,
  },
};

const storeDataList = [
  { ...storeData, id: 'product-1' },
  { ...storeData, id: 'product-2' },
  { ...storeData, id: 'product-3' },
  { ...storeData, id: 'product-4' },
  { ...storeData, id: 'product-5' },
];

export default function ReviewDone() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // 기간 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option1');

  // mock 데이터 가져오기
  const writtenReviewData = isNoData ? [] : storeDataList;

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
