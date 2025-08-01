// 라이브러리
import { useState, useEffect } from 'react';
// 컴포넌트
import { Grid, TextButton, Empty, Text } from '@shared/ui';
import { ReviewCard, ReviewCardProps } from './ReviewCard';
import { ReviewDetail } from '@widgets/review/ReviewDetail';

export interface FilterValues {
  type: string[];
  score: string[];
  persona: string[];
  [key: string]: string[] | string;
}

export interface ReviewData extends ReviewCardProps {
  isLikedByMe?: boolean;
}
interface ReviewListProps {
  data: ReviewData[];
  rows?: number;
  readMore?: boolean;
  showMore?: boolean;
}

export const ReviewList = ({
  data,
  rows = 10,
  readMore = false,
  showMore = false,
}: ReviewListProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(rows);

  // 리뷰 데이터 관리 (like 토글용)
  const [reviews, setReviews] = useState<ReviewData[]>(
    data.map((item) => ({
      ...item,
      isLikedByMe: item.isLikedByMe || false,
    }))
  );

  useEffect(() => {
    setReviews(
      data.map((item) => ({
        ...item,
        isLikedByMe: item.isLikedByMe || false,
      }))
    );
    setDisplayCount(rows); // 새 데이터 올 때 display count 리셋
  }, [data, rows]);

  const visibleReviews = reviews.slice(0, displayCount);
  const hasMore = showMore && displayCount < reviews.length;
  const selectedReviewData = selectedId ? reviews.find((review) => review.id === selectedId) : null;

  const handlePhotoClick = (id: string) => {
    setSelectedId(id);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedId(null);
  };

  const handleLikeToggle = (id: string, newIsLiked: boolean) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? {
              ...review,
              likes: newIsLiked ? (review.likes || 0) + 1 : Math.max((review.likes || 0) - 1, 0),
              isLikedByMe: newIsLiked,
            }
          : review
      )
    );
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + rows);
  };

  if (reviews.length === 0) {
    return (
      <Empty
        title="이 상품의 첫번째 상품평을 작성해보세요."
        style={{ marginBlock: '76px' }}
        desc={
          <>
            포토 상품평 작성 시, <br />
            <Text as="span" color="point">
              H.point 200p 적립됩니다.
            </Text>
          </>
        }
      />
    );
  }

  return (
    <>
      <Grid gutter={24} margin="1">
        {visibleReviews.map((item, idx) => (
          <ReviewCard
            key={item.id}
            {...item}
            onPhotoClick={handlePhotoClick}
            readMore={readMore}
            isLiked={item.isLikedByMe}
            onLikeToggle={handleLikeToggle}
          />
        ))}
      </Grid>

      {hasMore && (
        <div className="ncp-text-center ncp-mt-m">
          <TextButton
            suffixIcon="arrowDown"
            iconSize="xsmall"
            color="gray3"
            onClick={handleShowMore}
          >
            더보기
          </TextButton>
        </div>
      )}

      {selectedReviewData && (
        <ReviewDetail isOpen={isDetailOpen} onClose={handleCloseDetail} data={selectedReviewData} />
      )}
    </>
  );
};
