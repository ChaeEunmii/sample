// 컴포넌트
import { Grid, Carousel } from '@shared/ui';
import { Banner, BannerProps } from './Banner';
import { FlatBanner, FlatBannerProps } from './FlatBanner';
import { ThumbBanner, ThumbBannerProps } from './ThumbBanner';
import { LiveBanner, LiveBannerProps } from './LiveBanner';
import { BrandBanner, BrandBannerProps } from './BrandBanner';
// 스타일
import styles from './BannerList.module.scss';
import clsx from 'clsx';

// bannerType
type BannerType =
  | 'ribbon'
  | 'standard'
  | 'square'
  | 'landscape'
  | 'portrait'
  | 'tall'
  | 'thumbnail'
  | 'live'
  | 'brand';

// 기본 배너 데이터 타입 (live 제외)
type DefaultBannerData =
  | Omit<BannerProps, 'align' | 'textInside' | 'ratio' | 'textSize' | 'textSpacing' | 'flush'>
  | Omit<FlatBannerProps, 'variant' | 'round'>
  | Omit<ThumbBannerProps, 'boxed'>
  | BrandBannerProps;

// Live 배너 데이터 타입
type LiveBannerData = Omit<LiveBannerProps, 'prodInside' | 'textInside' | 'textSize' | 'flush'>;

// 조건부 타입 지정
type BannerDataType<T extends BannerType> = T extends 'live' ? LiveBannerData : DefaultBannerData;

interface BannerListProps<T extends BannerType = BannerType> {
  variant?: 'grid' | 'swiper' | 'activeScale';
  columns?: number;
  data?: BannerDataType<T>[];
  bannerType?: T;
  className?: string;
  align?: 'left' | 'center' | 'right';
  textInside?: boolean;
  textSize?: '1' | '2' | '3' | '4';
  textSpacing?: 'in1' | 'out1' | 'out2';
  titleProps?: {
    reverse?: boolean;
    titleLine?: number;
    subtitleLine?: number;
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
}

export const BannerList = ({
  variant = 'grid',
  columns = 1,
  data = [],
  className,
  align,
  bannerType,
  textInside,
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
}: BannerListProps) => {
  const rootClass = clsx(styles.root, margin && styles[`mt${margin}`], className);

  const renderBanner = (item: any, index: number) => {
    if (bannerType === 'ribbon' || bannerType === 'standard') {
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
        />
      );
    } else if (bannerType === 'brand') {
      return <BrandBanner key={index} {...item} />;
    } else {
      // Banner 사용 (square, landscape, portrait)
      return (
        <Banner
          key={index}
          {...item}
          align={align}
          textInside={textInside}
          ratio={bannerType}
          textSize={textSize}
          textSpacing={textSpacing}
          titleProps={titleProps}
          flush={flush}
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
      ...(bannerType === 'standard' && { rows: 3, rowGap: 8 }),
      pagination:
        pagination === 'bullet'
          ? ('bullet' as const)
          : columns % 1 !== 0
            ? undefined
            : ('fraction' as const),
    };

    return (
      <Carousel
        slides={data.map(renderBanner)}
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
