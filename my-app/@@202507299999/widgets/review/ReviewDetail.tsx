'use client';
// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Dialog, Carousel, Image } from '@shared/ui';
import { ReviewCard, ReviewCardProps } from './ReviewCard';
import { PhotoCard } from './PhotoCard';
// 스타일
import styles from './ReviewDetail.module.scss';
import clsx from 'clsx';

interface ReviewDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: ReviewCardProps;
}

export const ReviewDetail = ({ isOpen, onClose, data }: ReviewDetailProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const renderSlides = () => {
    return (
      data.photos?.map(({ src, alt }, idx) => (
        <Image
          key={idx}
          src={src}
          alt={alt}
          figure={idx === 0}
          figurecaption={idx === 0 ? '상품 대표이미지' : ''}
          className={styles.image}
        />
      )) || []
    );
  };

  const renderPhotos = () => {
    return (
      data.photos?.map(({ src, alt }, idx) => (
        <PhotoCard
          key={idx}
          src={src}
          alt={alt}
          onClick={() => handleSetActive(idx)}
          className={clsx(styles.item, slideIndex === idx && styles.active)}
        />
      )) || []
    );
  };

  const handleSetActive = (idx: number) => {
    setSlideIndex(idx);
  };

  // photos 제외 데이터
  const { photos, ...reviewCardData } = data;

  return (
    <Dialog title="상품평 상세보기" isOpen={isOpen} onClose={onClose} maximize showClose flush>
      {photos && photos.length > 0 && (
        <Carousel
          slides={renderSlides()}
          pagination="fraction"
          className={styles.gallery}
          slideTo={slideIndex}
          onSlideChange={handleSetActive}
          flush
        />
      )}

      <div className={styles.content}>
        {photos && photos.length > 0 && (
          <Carousel
            slides={renderPhotos()}
            slidesPerView={5}
            spaceBetween={6}
            slideTo={slideIndex}
          />
        )}

        <ReviewCard {...reviewCardData} className={styles.review} />
      </div>
    </Dialog>
  );
};
