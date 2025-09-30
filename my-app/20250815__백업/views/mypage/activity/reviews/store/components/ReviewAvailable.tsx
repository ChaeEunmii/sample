'use client';

import { useState } from 'react';
import { TextButton, TitleBar, Tabs, Empty, Button } from '@shared/ui';
import styles from './ReviewAvailable.module.scss';
import StoreReviewGuideDialog from '@/views/mypage/activity/reviews/components/StoreReviewGuideDialog';
// 테이블 오더 소스
import { ReservedList } from '@/widgets/o4o';
import type { ReservedItem } from '@/widgets/o4o/ReservedList';

interface ReviewAvailableProps {
  /** 매장 리뷰 작성 가능한 리뷰 배열 */
  data: ReservedItem[];
}

export default function ReviewAvailable({ data }: ReviewAvailableProps) {
  // 리뷰작성안내 팝업 상태
  const [isStoreReviewGuideDialog, setIsStoreReviewGuideDialog] = useState(false);
  // 탭 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 탭 항목
  const tabItems = [{ label: '예약' }, { label: '웨이팅' }, { label: '테이블오더' }];

  // index, 리뷰 타입 매핑
  const reviewTypeMap = {
    0: 'booking',
    1: 'waiting',
    2: 'torder',
  } as const satisfies Record<number, ReservedItem['type']>;

  // 현재 선택된 리뷰 타입
  const selectedType: ReservedItem['type'] =
    reviewTypeMap[activeIndex as keyof typeof reviewTypeMap] ?? 'booking';

  // 현재 탭에 해당하는 아이템만 필터링
  const filteredData = data.filter((item) => item.type === selectedType);

  // 타이틀 렌더링
  const RewardTitle = () => {
    return (
      <>
        예약하신 상품의
        <br />
        리뷰를 작성해 보세요
      </>
    );
  };

  return (
    <>
      <Tabs
        activeTab={activeIndex}
        variant="buttons"
        onTabChange={(i) => setActiveIndex(i)}
        data={tabItems}
      />
      <div className={styles.top}>
        <TitleBar type="docs" title={<RewardTitle />} level="1" className={styles.titBar} />
        <TextButton
          variant="underline"
          size="1"
          color="gray3"
          className={styles.infoBtn}
          onClick={() => setIsStoreReviewGuideDialog(true)}
        >
          리뷰 작성안내
        </TextButton>
      </div>
      {/* 목록 */}
      <ReservedList
        data={filteredData}
        isReview
        showSelectDrawer
        empty={() => (
          <Empty
            title="작성 가능한 리뷰가 없어요"
            buttons={<Button variant="primary">이용하러 가기</Button>}
          />
        )}
      />
      {/* 매장 리뷰 작성안내 (L) */}
      <StoreReviewGuideDialog
        isOpen={isStoreReviewGuideDialog}
        onClose={() => setIsStoreReviewGuideDialog(false)}
      />
    </>
  );
}
