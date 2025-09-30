'use client';

import { useState } from 'react';
import { Stack, Text } from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import { OrderItem, OrderItemType } from '@/widgets/product/OrderItem';
import { ReservedList, ReservedItem } from '@/widgets/o4o/ReservedList';
import { ReviewCard, ReviewCardProps } from '@widgets/review/ReviewCard';
import ImageViewerDialog from '@/views/mypage/activity/components/ImageViewerDialog';
import clsx from 'clsx';
import styles from './MyReviewItem.module.scss';

// 리뷰카드 Pick
export type ReviewMeta = Pick<
  ReviewCardProps,
  'rating' | 'userId' | 'date' | 'specs' | 'flags' | 'review' | 'photos'
>;

// 상품 데이터
export type ProductData = {
  id: string;
  item: OrderItemType;
  review?: ReviewMeta;
  purchasedAt?: string;
  fromUser?: string;
};
// 매장 데이터
export type StoreData = {
  id: string;
  item: ReservedItem;
  review?: ReviewMeta;
};

// 타입별로 데이터 설정
export type MyReviewItemProps =
  | { type: 'product'; data: ProductData; className?: string }
  | { type: 'store'; data: StoreData; className?: string };

export const MyReviewItem = (props: MyReviewItemProps) => {
  const { className } = props;

  // 분기별로 확정 타입 변수로 좁힘
  const product = props.type === 'product' ? props.data : undefined;
  const store = props.type === 'store' ? props.data : undefined;

  // 이미지 크게보기
  const [isImageViewerDialog, setIsImageViewerDialog] = useState(false);
  const handlePhotoClick = () => setIsImageViewerDialog(true);

  return (
    <div className={clsx(styles.root, className)}>
      {/* 상품 정보 */}
      {product && (
        <OrderItem
          items={[product.item]} // OrderItemType[]
          orderTopData={() => (
            <Stack type="between">
              {product.purchasedAt && (
                <Text as="span" size="4" color="gray3" weight="medium">
                  구매일 {formatDate(product.purchasedAt, 'dot', true)}
                </Text>
              )}
              {product.fromUser && (
                <Text as="span" size="4" color="gray3" weight="medium">
                  From. {product.fromUser ?? '이*대님'}
                </Text>
              )}
            </Stack>
          )}
          hideThumbLabel
          isVerticalCenter
          titleProps={{ line: 1 }}
        />
      )}
      {/* 매장 정보 */}
      {store && (
        <ReservedList
          data={[store.item]} // ReservedItem[]
          isReview
          hideBtns
          hideCount
          marginTop="0"
        />
      )}

      {/* 리뷰 카드 */}
      {props.data.review && (
        <ReviewCard
          rating={props.data.review.rating}
          date={props.data.review.date}
          review={props.data.review.review}
          flags={props.data.review.flags}
          photos={props.data.review.photos}
          onPhotoClick={handlePhotoClick}
          viewMode
          readMore
          toggleable
          editable
          className="ncp-mt-m"
        />
      )}
      {/* 이미지 크게보기 (L) */}
      <ImageViewerDialog
        isOpen={isImageViewerDialog}
        onClose={() => setIsImageViewerDialog(false)}
        data={props.data.review?.photos ?? []}
      />
    </div>
  );
};
