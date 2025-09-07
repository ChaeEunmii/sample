'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, Text } from '@shared/ui';
import styles from './StoreReview.module.scss';
import { ReviewAvailable } from '@/views/mypage/activity/reviews/store/components/ReviewAvailable';
import { ReviewDone } from '@/views/mypage/activity/reviews/store/components/ReviewDone';
import type { ReservedItem } from '@/widgets/o4o/ReservedList';
import type { StoreData } from '@/views/mypage/activity/reviews/components/MyReviewItem';
import { mockReviewList, storeDoneList } from '@/mocks/myactivity';

export default function StoreReview() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // 샘플데이터 가져오기
  const availableReviewData = isNoData ? [] : (mockReviewList as ReservedItem[]);
  const doneReviewData = isNoData ? [] : (storeDoneList as StoreData[]);

  // 탭
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [
    {
      label: `작성가능한 리뷰`,
      labelSuffix: (
        <Text as="span" size="1" color="gray3" weight="regular">
          (9,999)
        </Text>
      ),
    },
    {
      label: `작성한 리뷰`,
      labelSuffix: (
        <Text as="span" size="1" color="gray3" weight="regular">
          (9,999)
        </Text>
      ),
    },
  ];

  return (
    <Container showBack title="매장 리뷰">
      <Contents className={styles.layout}>
        <div className={styles.sticky}>
          <Tabs activeTab={activeIndex} onTabChange={(i) => setActiveIndex(i)} data={tabItems} />
        </div>
        {/* 작성가능한 리뷰 */}
        {activeIndex === 0 && <ReviewAvailable data={availableReviewData} />}
        {/* 작성한 리뷰 */}
        {activeIndex === 1 && <ReviewDone data={doneReviewData} />}
      </Contents>
    </Container>
  );
}
