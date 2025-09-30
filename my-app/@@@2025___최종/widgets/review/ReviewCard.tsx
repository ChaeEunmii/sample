'use client';
// 라이브러리
import React from 'react';
import { useRouter } from 'next/navigation';
// 컴포넌트
import { Icon, Text, Flag, TextButton, Carousel, ReadMore } from '@shared/ui';
import { PhotoCard } from './PhotoCard';
// 스타일
import styles from './ReviewCard.module.scss';
import clsx from 'clsx';

type Flag = 'gift' | 'best' | 'experience' | 'monthly';

interface InfoBarItem {
  label: string;
  value: string;
}

export interface ReviewCardProps {
  id?: string;
  rating: number;
  userId: string;
  date: string;
  specs?: InfoBarItem[];
  flags?: (Flag | (string & {}))[];
  review: React.ReactNode;
  readMore?: boolean;
  photos?: { src: string; alt: string }[];
  onPhotoClick?: (reviewId: string) => void;
  likes?: number;
  isLiked?: boolean;
  onLikeToggle?: (reviewId: string, isLiked: boolean) => void;
  className?: string;
}

export const ReviewCard = ({
  id,
  rating,
  userId,
  date,
  specs,
  flags,
  review,
  readMore,
  photos,
  onPhotoClick,
  likes,
  isLiked = false,
  onLikeToggle,
  className,
}: ReviewCardProps) => {
  const router = useRouter();

  const InfoBar = ({
    data = [],
    className,
  }: {
    data: InfoBarItem[] | React.ReactNode[];
    className?: string;
  }) => {
    if (data.length === 0) return null;

    return (
      <ul className={clsx(styles.info, className)}>
        {data.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            {React.isValidElement(item) ? (
              item
            ) : (
              <>
                <Text as="span">{(item as InfoBarItem).label}</Text>
                <Text as="span" weight="medium">
                  {(item as InfoBarItem).value}
                </Text>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const metaData = [
    <>
      <Icon name="rating" size="xsmall" label="별점" />
      <Text as="strong">{rating}</Text>
    </>,
    <>
      <span className="ncp-blind">아이디</span>
      <Text as="span">{userId}</Text>
    </>,
    <>
      <span className="ncp-blind">날짜</span>
      <Text as="time" color="gray3" dateTime={date}>
        {date}
      </Text>
    </>,
  ];

  const handlePhotoClick = () => {
    const reviewId = id || `${userId}-${date}`; // id 사용
    onPhotoClick?.(reviewId);
  };

  const handleLikeToggle = () => {
    const reviewId = id || `${userId}-${date}`;
    onLikeToggle?.(reviewId, !isLiked);
  };

  const renderPhotos = () => {
    return photos?.map(({ src, alt }) => (
      <PhotoCard src={src} alt={alt} onClick={handlePhotoClick} />
    ));
  };

  const isBest = flags?.includes('best');
  const isExperience = flags?.includes('experience');
  const isGift = flags?.includes('gift');
  const isMonthly = flags?.includes('monthly');

  const handleReport = () => {
    // 신고버튼 로직
    console.log(id);

    router.push('/shop/review/report');
  };

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.summary}>
        <InfoBar data={metaData} className={styles.meta} />
        {specs && <InfoBar data={specs} className={styles.specs} />}
      </div>

      <div className={styles.detail}>
        {flags && flags.length > 0 && (
          <Flag
            data={[
              ...(isBest ? [{ color: 'green2' as const, label: '베스트 상품평' }] : []),
              ...(isExperience ? [{ color: 'gray' as const, label: '체험단' }] : []),
              ...(isGift ? [{ color: 'gray' as const, label: '받은선물' }] : []),
              ...(isMonthly ? [{ color: 'gray' as const, label: '한달사용' }] : []),
            ]}
          />
        )}
        {isGift && (
          <div className={styles.more}>
            <TextButton variant="underline" size="inherit" color="gray3">
              선물상품 더보기
            </TextButton>
          </div>
        )}
        {readMore ? (
          <ReadMore>{review}</ReadMore>
        ) : (
          <Text size="4" indent>
            {review}
          </Text>
        )}
      </div>

      {/* 상품평 이미지 */}
      {photos && <Carousel slides={renderPhotos() as any} slidesPerView={3.5} spaceBetween={6} />}
      {isExperience && (
        <Text size="3" color="gray3" indent className={styles.desc}>
          <Icon name="info" size="small" />
          해당 상품평은 체험단 선정되어 상품을 무료로 제공받아 작성되었습니다.
        </Text>
      )}

      {/* 상품평 이미지 */}
      <div className={styles.footer}>
        <TextButton
          size="1"
          color="gray3"
          prefixIcon={isLiked ? 'highfiveOn' : 'highfiveOff'}
          iconSize="medium"
          onClick={handleLikeToggle}
          aria-selected={isLiked}
          aria-label={isLiked ? '도움이 됐어요 취소' : `${likes}명에게 도움이 됐어요`}
        >
          {likes || 0}
        </TextButton>
        <TextButton size="inherit" color="gray3" onClick={handleReport}>
          신고
        </TextButton>
      </div>
    </div>
  );
};

ReviewCard.displayName = 'ReviewCard';
