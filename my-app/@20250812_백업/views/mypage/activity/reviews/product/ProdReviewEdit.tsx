'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Flag } from '@shared/ui';
import { OrderItem } from '@widgets/product';
import {
  StarRating,
  ReviewMetrics,
  ReviewImageAttach,
  ReviewText,
} from '@views/mypage/activity/reviews/components';
import { reviewFlagMap } from '@views/mypage/activity/reviews/product/components/ReviewAvailable';
import { prodReviewDetailItem, initialImages, prodMetricFields } from '@mocks/myactivity';
import styles from './ProdReview.module.scss';

export default function ProdReviewEdit() {
  // 샘플데이터 가져오기
  const ReviewDetailProdData = prodReviewDetailItem;
  const MetricFieldsData = prodMetricFields;

  // 리뷰작성 상태
  const reviewTextData = `항상 여기서 주문하고 있어요.\n원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서 항상 여기서 주문하고 있어요. 사용해 보니 좋다고 하네요.`;
  const [reviewText, setReviewText] = useState(reviewTextData);

  // 항목별 선택 상태
  // 기존 리뷰 데이터
  const reviewMetricsData: Record<string, string> = {
    lasting: 'option1',
    moisture: 'option2',
    design: 'option1',
    weight: 'option3',
    weight2: 'option2',
    weight3: 'option1',
  };

  // 항목별 선택 상태 (초기값: 기존 데이터 있으면 사용, 없으면 첫 번째 옵션)
  const [metrics, setMetrics] = useState<Record<string, string>>(
    Object.fromEntries(
      MetricFieldsData.map((f) => [f.key, reviewMetricsData[f.key] ?? f.options[0].value])
    )
  );

  // 항목별 상품 평가 핸들러
  const handleMetricsChange = (next: Record<string, string>) => {
    console.log('metrics:', next); // 전체 상태
    setMetrics(next);
  };

  return (
    <Container showBack title="상품 리뷰 수정">
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
        <StarRating defaultValue={5} onChange={(v) => console.log('rating:', v)} />
        {/* 항목별 평가 */}
        <ReviewMetrics data={MetricFieldsData} value={metrics} onChange={handleMetricsChange} />
        {/* 리뷰 작성란 */}
        <ReviewText value={reviewText} onChange={setReviewText} />
        {/* 이미지 첨부 */}
        <ReviewImageAttach
          defaultValue={initialImages}
          onChange={(images) => {
            console.log(images);
          }}
        />
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
