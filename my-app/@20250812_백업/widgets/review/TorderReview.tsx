'use client';
// 라이브러리
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// 컴포넌트
import { Heading, Rating, Stack, Text, TitleBar } from '@shared/ui';
import { ReviewList, ReviewData } from '@widgets/review/ReviewList';

interface TorderReviewProps {
  data: ReviewData[];
  totalCount?: number;
  readMore?: boolean;
  showMore?: boolean;
}

export const TorderReview = ({
  data,
  totalCount,
  readMore = false,
  showMore = false,
}: TorderReviewProps) => {
  const router = useRouter();

  // 리뷰 데이터 상태
  const [reviews, setReviews] = useState<ReviewData[]>(data);

  const total = totalCount || reviews.length;

  return (
    <article id="review">
      <Stack>
        <Heading as="h2" size="5">
          리뷰{' '}
          <Text as="span" size="5" color="gray2" weight="regular">
            ({total}건)
          </Text>
        </Heading>
        {reviews.length > 0 && <Rating rating="4.5" size="small" separator="left" />}
      </Stack>

      {/* 리뷰 목록 */}
      <ReviewList
        data={reviews}
        rows={3}
        showMore={showMore}
        readMore={readMore}
        imageReviewDetail
        hideLikes
        toggleable
        emptyTitle="등록된 리뷰가 없습니다."
        hideEmptyDesc
      />
    </article>
  );
};
