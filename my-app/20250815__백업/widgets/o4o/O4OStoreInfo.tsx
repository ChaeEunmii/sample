'use client';
import React, { useState } from 'react';
import { Image, Text, TextButton, Stack, Button, Heading, IconButton, Rating } from '@/shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import styles from './O4OStoreInfo.module.scss';
import { mockTorderStoreDetail } from '@/mocks/torder';
import TorderStoreDetailDialog from '@/views/o4o/torder/TorderStoreDetailDialog';

interface O4OMenuListProps {
  /** 매장 상세 데이터 */
  data: {
    /** id */
    id: string;
    /** 매장 이미지 */
    image: {
      src: string;
      alt: string;
    };
    /** 매장명 */
    title: string;
    /** 지점명 */
    location: string;
    /** 층수 */
    floor: string;
    /** 리뷰 */
    reviews: {
      /** 평균 별점 */
      rasting: string;
      /** 리뷰 개수 */
      total: number;
    };
    /** 매장 설명 */
    desc: string;
  };
  /** 추가 클래스명 */
  className?: string;
}

export const O4OStoreInfo = ({ data, className }: O4OMenuListProps) => {
  // 상태 관리
  const [isTorderStoreDetailDialogOpen, setIsTorderStoreDetailDialogOpen] = useState(false);

  // 리뷰 섹션으로 스크롤 이동 (고정 헤더 높이만큼 보정)
  const handleScrollToReview = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();

    const target = document.querySelector('#review');
    const header = document.getElementById('header');
    const headerHeight = header?.clientHeight || 0;

    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top });
    }
  };

  return (
    <>
      <article className={className}>
        <Image src={data.image.src} alt={data.image.alt} className={styles.imgBox} />
        <Stack type="between" className="ncp-mt-s">
          <Text color="gray2" indent>
            {data.location} {data.floor}
          </Text>
          <div className={styles.infoWrap}>
            <Button
              size="tiny"
              variant="neutral"
              onClick={() => setIsTorderStoreDetailDialogOpen(true)}
            >
              매장정보
            </Button>
            <IconButton name="share" size="large" className={styles.share}>
              공유
            </IconButton>
          </div>
        </Stack>
        <Heading as="h2" size="6" indent className="ncp-mt-xs">
          {data.title}
        </Heading>
        <Stack className="ncp-mt-x6">
          <Rating rating={data.reviews.rasting} size="small" />
          <TextButton href="#review" size="1" variant="underline" onClick={handleScrollToReview}>
            리뷰 {formatNumber(data.reviews.total, 'count')}
          </TextButton>
        </Stack>
        <Text color="gray2" indent>
          {data.desc}
        </Text>
      </article>

      {/* 매장정보 (L) */}
      <TorderStoreDetailDialog
        data={mockTorderStoreDetail}
        isOpen={isTorderStoreDetailDialogOpen}
        onClose={() => setIsTorderStoreDetailDialogOpen(false)}
      />
    </>
  );
};

O4OStoreInfo.displayName = 'O4OStoreInfo';
