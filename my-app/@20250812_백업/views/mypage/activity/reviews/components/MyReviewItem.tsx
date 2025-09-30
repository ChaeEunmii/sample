'use client';

import { useState } from 'react';
import { Stack, Text } from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import { OrderItem, OrderItemType } from '@/widgets/product/OrderItem';
import { ReviewCard, ReviewCardProps } from '@widgets/review/ReviewCard';
import ImageViewerDialog from '@/views/mypage/activity/components/ImageViewerDialog';
import clsx from 'clsx';
import styles from './MyReviewItem.module.scss';

// ReviewCardProps 에서 가져옴
export type ReviewMeta = Pick<
  ReviewCardProps,
  'rating' | 'userId' | 'date' | 'specs' | 'flags' | 'review' | 'photos'
>;
// OrderItemType 에서 가져옴
export type OrderItem = Pick<
  OrderItemType,
  'id' | 'href' | 'image' | 'brand' | 'title' | 'orderOptions'
>;

export type MyReviewData = {
  id: string;
  item: OrderItem; // OrderItem 정보
  review?: ReviewMeta; // ReviewCard 정보
  purchasedAt?: string; // 구매일
  fromUser?: string; // 선물일경우 보낸사람
};

interface MyReviewItemProps {
  data: MyReviewData;
  className?: string;
}

export const MyReviewItem = ({ data, className }: MyReviewItemProps) => {
  // 이미지 크게보기
  const [isImageViewerDialog, setIsImageViewerDialog] = useState(false);

  // 포토클릭 핸들러
  const handlePhotoClick = () => {
    setIsImageViewerDialog(true);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <OrderItem
        items={[data.item]}
        orderTopData={() => (
          <Stack type="between">
            <Text as="span" size="4" color="gray3" weight="medium">
              구매일 {formatDate(data.purchasedAt, 'dot', true)}
            </Text>
            {data.fromUser && (
              <Text as="span" size="4" color="gray3" weight="medium">
                From. {data.fromUser ?? '이*대님'}
              </Text>
            )}
          </Stack>
        )}
        hideThumbLabel
      />
      {data.review && (
        <ReviewCard
          rating={data.review.rating}
          date={data.review.date}
          review={data.review.review}
          flags={data.review.flags}
          photos={data.review.photos}
          onPhotoClick={handlePhotoClick}
          viewMode
          readMore
          toggleable
          editable
        />
      )}
      {/* 이미지 크게보기 (L)*/}
      <ImageViewerDialog
        isOpen={isImageViewerDialog}
        onClose={() => setIsImageViewerDialog(false)}
      />
    </div>
  );
};
