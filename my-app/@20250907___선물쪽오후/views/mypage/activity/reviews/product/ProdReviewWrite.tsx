'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import { OrderItem } from '@widgets/product';
import {
  StarRating,
  ReviewMetrics,
  ReviewImageAttach,
  ReviewPointGuide,
  ReviewText,
} from '@views/mypage/activity/reviews/components';
import { OrderReviewType } from '@views/mypage/activity/reviews/product/components/ReviewType';
import { ReviewProdFlag } from '@views/mypage/activity/reviews/product/components/ReviewProdFlag';
import { prodReviewDetailItem, prodMetricFields } from '@mocks/myactivity';
import styles from './ProdReview.module.scss';

export default function ProdReviewWrite() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isType1 = searchParams.has('type1'); // 일반리뷰
  const isType2 = searchParams.has('type2'); // 한달사용리뷰
  const isType3 = searchParams.has('type3'); // 받은선물리뷰

  // 케이스별 화면보기 모드
  type ReviewMode = OrderReviewType;
  const mode: ReviewMode = isType1
    ? 'general'
    : isType2
      ? 'monthly'
      : isType3
        ? 'gift'
        : 'experience';

  // 샘플데이터 가져오기
  const ReviewDetailProdData = {
    ...prodReviewDetailItem,
    info: {
      ...prodReviewDetailItem.info,
      type: mode, // 'general' | 'monthly' | 'gift' | 'experience'
    },
  };

  // 화면상태별  placeholder 샘플
  const placeholderByMode: Record<ReviewMode, string> = {
    general: `꿀팁과 솔직한 사용 후기를 20자 이상 작성해 주세요.\n상품 특성에 맞는 자세한 리뷰는 다른 고객에게 큰 도움이 됩니다.`,
    monthly: `한 달간 사용해보신 솔직한 후기를 20자 이상 작성해 주세요.\n상품 특성에 맞는 꿀팁과 사용 경험을 공유해 주세요.\n자세한 리뷰는 다른 고객에게 큰 도움이 됩니다.`,
    gift: `받으신 선물, 사용해보시니 어떠셨나요?\n20자 이상, 상품 특성에 맞는 솔직한 후기를 작성해 주세요.\n자세한 리뷰는 선물 선택에 큰 도움이 됩니다.`,
    experience: `본 체험단 리뷰는 1,000자 이상 작성 필수입니다.\n상품 특성, 사용 경험, 꿀팁을 자세히 작성해 주세요. 정성스러운 리뷰는 다른 고객에게 큰 도움이 됩니다.`,
  };

  // 항목별 평기 필드
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
          orderTopSlot={() => <ReviewProdFlag type={ReviewDetailProdData.info.type} />}
          isVerticalCenter
          hideThumbLabel
          titleProps={{
            line: 1,
          }}
        />
        {/* 상품 별점 평가*/}
        <StarRating onChange={(v) => console.log('rating:', v)} />
        {/* 항목별 평가 */}
        <ReviewMetrics data={MetricFieldsData} value={metrics} onChange={handleMetricsChange} />
        {/* 리뷰 작성란 */}
        <ReviewText placeholder={placeholderByMode[mode]} onChange={() => {}} />
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
