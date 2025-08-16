'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Flag } from '@shared/ui';
import { OrderItem } from '@widgets/product';
import {
  StarRating,
  ReviewMetrics,
  ReviewImageAttach,
  ReviewPointGuide,
  ReviewText,
} from '@views/mypage/activity/reviews/components';
import { reviewFlagMap } from '@views/mypage/activity/reviews/product/components/ReviewAvailable';
import { prodReviewDetailItem, prodMetricFields } from '@mocks/myactivity';
import styles from './ProdReview.module.scss';

export default function ProdReviewWrite() {
  // 샘플데이터 가져오기
  const ReviewDetailProdData = prodReviewDetailItem;
  const MetricFieldsData = prodMetricFields;

  // 항목별 선택 상태
  const [metrics, setMetrics] = useState<Record<string, string>>(
    Object.fromEntries(MetricFieldsData.map((f) => [f.key, '']))
  );
  // 항목별 상품 평가 핸들러
  const handleMetricsChange = (next: Record<string, string>) => {
    console.log('metrics:', next); // 전체 상태
    setMetrics(next);
  };

  return (
    <Container showBack title="상품 리뷰 작성">
      <Contents className={styles.wrap}>
        {/* 상품 정보 */}
        <OrderItem
          items={[ReviewDetailProdData.orderItem]}
          orderTopSlot={() => {
            // 리뷰 타입별 플래그 표시
            const flagData = reviewFlagMap[ReviewDetailProdData.info.type];
            // 있으면 표시
            return flagData ? (
              <Flag data={{ label: flagData.label, color: flagData.color }} />
            ) : null;
          }}
          isVerticalCenter
          hideThumbLabel
        />
        {/* 상품 별점 평가*/}
        <StarRating onChange={(v) => console.log('rating:', v)} />
        {/* 항목별 평가 */}
        <ReviewMetrics data={MetricFieldsData} value={metrics} onChange={handleMetricsChange} />
        {/* 리뷰 작성란 */}
        <ReviewText onChange={() => {}} />
        {/* 이미지 첨부 */}
        <ReviewImageAttach
          onChange={(images) => {
            console.log(images);
          }}
        />
        {/* 안내 */}
        <ReviewPointGuide onClickGuide={() => {}} />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">취소</Button>
        <Button variant="primary" size="large">
          등록
        </Button>
      </ButtonArea>
    </Container>
  );
}
