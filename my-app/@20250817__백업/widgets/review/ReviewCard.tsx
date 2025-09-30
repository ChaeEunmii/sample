'use client';
// 라이브러리
import React from 'react';
import { useRouter } from 'next/navigation';
// 컴포넌트
import { Icon, Text, Flag, TextButton, Carousel, ReadMore } from '@shared/ui';
import { PhotoCard } from './PhotoCard';
import { ProdBar } from '@widgets/product';
import { formatDate } from '@shared/utils/ui';
// 스타일
import styles from './ReviewCard.module.scss';
import clsx from 'clsx';

type Flag = 'gift' | 'best' | 'experience' | 'monthly';

interface InfoBarItem {
  label: string;
  value: string;
  hideLabel?: boolean;
}

export interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 고유 id */
  id?: string;
  /** 사용자 평점 */
  rating: number;
  /** 작성자 ID */
  userId?: string;
  /** 리뷰 작성일 (Date 객체 또는 ISO 문자열) */
  date: Date | string;
  /** 이용 내역 */
  usage?: string;
  /** 작성자 이름 */
  userName?: string;
  /** 제품 스펙 정보 (예: 색상, 사이즈 등) */
  specs?: InfoBarItem[];
  /** 리뷰 상태 */
  flags?: (Flag | (string & {}))[];
  /** 리뷰 내용 */
  review: React.ReactNode;
  /** 더보기 버튼 사용 여부 */
  readMore?: boolean;
  /** 제품 사진 */
  photos?: { src: string; alt: string }[];
  /** 사진 클릭 시 호출되는 콜백 */
  onPhotoClick?: (reviewId: string) => void;
  /** 좋아요 수 */
  likes?: number;
  /** 현재 사용자가 좋아요 눌렀는지 여부 */
  isLiked?: boolean;
  /** 좋아요 토글 콜백 */
  onLikeToggle?: (reviewId: string, isLiked: boolean) => void;
  /** 추가 클래스명 */
  className?: string;
  /** 리뷰 상품 정보 */
  product?: {
    image: string;
    title: string;
    brand?: string;
    href?: string;
  };
  /** 보기모드(좋아요, 신고 등 액션 미노출) */
  viewMode?: boolean;
  /** 배경색 위에 있는지 여부 */
  withBg?: boolean;
  /** 리뷰 영역 추가 옵션 */
  reviewProps?: {
    line?: number;
  };
  /** 도움이 됐어요 버튼 숨김 여부(기본: false) */
  hideLikes?: boolean;
  /** 토글 가능 여부 (true: 접기/더보기 둘 다, false: 더보기만) */
  toggleable?: boolean;
  /** 수정 가능 여부 (수정버튼 노출, 선물상품 더보기 미노출) */
  editable?: boolean;
  /** 체험단 안내문구 숨김 여부(기본: false)*/
  hideExpNotice?: boolean;
}

export const ReviewCard = ({
  id,
  rating,
  userId,
  date,
  usage,
  userName,
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
  product,
  viewMode = false,
  withBg,
  hideLikes = false,
  toggleable = false,
  editable = false,
  hideExpNotice = false,
  reviewProps,
  ...props
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
                <Text as="span" className={clsx((item as InfoBarItem).hideLabel && 'ncp-blind')}>
                  {(item as InfoBarItem).label}
                </Text>
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
    ...(userId
      ? [
          <>
            <span className="ncp-blind">아이디</span>
            <Text as="span">{userId}</Text>
          </>,
        ]
      : []),
    <>
      <span className="ncp-blind">날짜</span>
      <Text as="time" color="gray3" dateTime={typeof date === 'string' ? date : date.toISOString()}>
        {typeof date === 'string' ? date : formatDate(date, 'dot')}
      </Text>
    </>,
    ...(usage
      ? [
          <>
            <span className="ncp-blind">이용 내역</span>
            <Text as="span" color="gray3">
              {usage}
            </Text>
          </>,
        ]
      : []),
    ...(userName
      ? [
          <>
            <span className="ncp-blind">이름</span>
            <Text as="span" color="gray3">
              {userName}
            </Text>
          </>,
        ]
      : []),
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

    router.push('/report');
  };

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.summary}>
        <InfoBar data={metaData} className={styles.meta} />
        {specs && <InfoBar data={specs} className={styles.specs} />}
        {editable && (
          <TextButton size="1" color="gray3" variant="underline" className={styles.edit}>
            수정
          </TextButton>
        )}
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
        {isGift && !editable && (
          <div className={styles.more}>
            <TextButton variant="underline" size="inherit" color="gray3">
              선물상품 더보기
            </TextButton>
          </div>
        )}
        {readMore ? (
          <ReadMore lines={reviewProps?.line ?? 3} toggleable={toggleable}>
            {review}
          </ReadMore>
        ) : (
          <Text
            size="4"
            indent
            reading
            className={clsx(reviewProps?.line && styles.truncate)}
            style={
              {
                ...(reviewProps?.line !== undefined
                  ? { '--review-text-truncate': reviewProps.line }
                  : {}),
              } as React.CSSProperties
            }
          >
            {review}
          </Text>
        )}
      </div>

      {/* 상품평 이미지 */}
      {photos && <Carousel slides={renderPhotos() as any} slidesPerView={3.5} spaceBetween={6} />}
      {isExperience && !hideExpNotice && (
        <Text size="3" color="gray3" indent className={styles.desc}>
          <Icon name="info" size="small" />
          해당 상품평은 체험단 선정되어 상품을 무료로 제공받아 작성되었습니다.
        </Text>
      )}

      {/* 상품평 관련 제품 정보 */}
      {product && <ProdBar {...product} variant="review" color={withBg ? 'white' : 'gray'} />}

      {/* 좋아요 & 신고하기 */}
      {!viewMode && (
        <div className={clsx(styles.footer, hideLikes && 'ncp-ml-auto')}>
          {!hideLikes && (
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
          )}
          <TextButton size="inherit" color="gray3" onClick={handleReport}>
            신고
          </TextButton>
        </div>
      )}
    </div>
  );
};

ReviewCard.displayName = 'ReviewCard';
