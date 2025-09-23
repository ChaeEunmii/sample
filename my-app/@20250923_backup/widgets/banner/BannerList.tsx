// 컴포넌트
import { Grid, Carousel } from '@shared/ui';
import { Banner, BannerProps } from './Banner';
import { FlatBanner, FlatBannerProps } from './FlatBanner';
import { ThumbBanner, ThumbBannerProps } from './ThumbBanner';
import { LiveBanner, LiveBannerProps } from './LiveBanner';
// 스타일
import styles from './BannerList.module.scss';
import clsx from 'clsx';

// bannerType
type BannerType =
  | 'ribbon'
  | 'standard'
  | 'event'
  | 'square'
  | 'landscape'
  | 'portrait'
  | 'tall'
  | 'thumbnail'
  | 'live';

// 기본 배너 데이터 타입 (live 제외)
type DefaultBannerData =
  | Omit<BannerProps, 'align' | 'textInside' | 'ratio' | 'textSize' | 'textSpacing' | 'flush'>
  | Omit<FlatBannerProps, 'variant' | 'round'>
  | Omit<ThumbBannerProps, 'boxed'>;

// Live 배너 데이터 타입
type LiveBannerData = Omit<LiveBannerProps, 'prodInside' | 'textInside' | 'textSize' | 'flush'>;

// 조건부 타입 지정
type BannerDataType<T extends BannerType> = T extends 'live' ? LiveBannerData : DefaultBannerData;

interface BannerListProps<T extends BannerType = BannerType> {
  variant?: 'grid' | 'swiper' | 'activeScale';
  columns?: number;
  rows?: number;
  data?: BannerDataType<T>[];
  bannerType?: T;
  bannerSize?: 'small' | 'medium';
  className?: string;
  align?: 'left' | 'center' | 'right';
  textInside?: boolean;
  textCentered?: boolean;
  textSize?: '1' | '2' | '3' | '4';
  textSpacing?: 'in1' | 'in2' | 'out1' | 'out2';
  titleProps?: {
    reverse?: boolean;
    titleLine?: number | 'auto';
    subtitleLine?: number | 'auto';
    titleWeight?: 'medium' | 'bold';
    subtitleWeight?: 'regular' | 'medium' | 'bold';
  };
  flush?: boolean;
  round?: boolean;
  boxed?: boolean;
  /** 그리드 레이아웃에서 배너 간격 */
  gutter?: number | string;
  /** 스와이퍼 인디케이터 스타일 */
  pagination?: 'fraction' | 'bullet';
  boxing?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  onViewAll?: () => void;
  /** margin top 설정 기본이 24px (12px) */
  margin?: '1';
  prodInside?: boolean;
  centered?: boolean;
  vdoAutoplay?: boolean;
}

export const BannerList = ({
  variant = 'grid',
  columns = 1,
  rows,
  data = [],
  className,
  align,
  bannerType,
  bannerSize,
  textInside,
  textCentered,
  textSize,
  textSpacing,
  titleProps,
  flush,
  round,
  boxed,
  gutter,
  pagination,
  boxing,
  autoplay,
  loop,
  onViewAll,
  margin,
  prodInside,
  centered,
  vdoAutoplay,
}: BannerListProps) => {
  const rootClass = clsx(styles.root, margin && styles[`mt${margin}`], className);

  const renderBanner = (item: any, index: number) => {
    if (bannerType === 'ribbon' || bannerType === 'standard' || bannerType === 'event') {
      // FlatBanner 사용
      return (
        <FlatBanner
          key={index}
          {...item}
          variant={bannerType}
          round={bannerType === 'ribbon' && round}
        />
      );
    } else if (bannerType === 'thumbnail') {
      // ThumbBanner 사용
      return <ThumbBanner key={index} {...item} boxed={boxed} />;
    } else if (bannerType === 'live') {
      return (
        <LiveBanner
          key={index}
          {...item}
          textInside={textInside}
          prodInside={prodInside}
          textSize={textSize}
          titleProps={titleProps}
          flush={flush}
          autoPlay={vdoAutoplay}
          size={bannerSize}
        />
      );
    } else {
      // Banner 사용 (square, landscape, portrait)
      return (
        <Banner
          key={index}
          {...item}
          align={align}
          textInside={textInside}
          textCentered={textCentered}
          ratio={bannerType}
          textSize={textSize}
          textSpacing={textSpacing}
          titleProps={titleProps}
          flush={flush}
          vdoAutoplay={vdoAutoplay}
          size={bannerSize}
        />
      );
    }
  };

  if (variant === 'grid') {
    return (
      <Grid
        columns={columns}
        className={rootClass}
        gutter={gutter || (bannerType === 'square' ? '8px 12px' : '8px 24px')}
        flush={flush}
      >
        {data.map(renderBanner)}
      </Grid>
    );
  }

  if (variant === 'swiper') {
    // bannerType에 따른 설정
    const swiperConfig = {
      ...(bannerType === 'standard' && { autoHeight: true }),
      pagination:
        pagination === 'bullet'
          ? ('bullet' as const)
          : columns % 1 !== 0
            ? undefined
            : ('fraction' as const),
    };

    const chunkArray = (array: any, size: number) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    };

    const standardRows = rows ?? 3;
    return (
      <Carousel
        slides={
          bannerType === 'standard' && standardRows > 1
            ? chunkArray(data, standardRows).map((chunk, index) => (
                <div key={index} className={styles.rows}>
                  {chunk.map(renderBanner)}
                </div>
              ))
            : data.map(renderBanner)
        }
        className={clsx(rootClass, bannerType && styles[bannerType])}
        slidesPerView={columns}
        spaceBetween={flush ? 0 : 8}
        loop={loop}
        boxing={boxing}
        flush={flush}
        autoplay={autoplay}
        {...swiperConfig}
        onViewAll={onViewAll}
        centeredSlides={centered}
        rows={rows}
        rowGap={8}
      />
    );
  }

  if (variant === 'activeScale') {
    return (
      <Carousel
        slides={data.map(renderBanner)}
        slidesPerView={1.2}
        initialSlide={0}
        className={clsx(rootClass, styles.scale)}
        spaceBetween={8}
        variant="scale"
        centeredSlides
      />
    );
  }

  // 기본 : Grid
  return (
    <Grid columns={columns} className={rootClass} gutter="8px 16px">
      {data.map(renderBanner)}
    </Grid>
  );
};

BannerList.displayName = 'BannerList';
