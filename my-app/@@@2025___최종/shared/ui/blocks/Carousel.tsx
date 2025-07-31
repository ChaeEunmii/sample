'use client';
// 라이브러리
import { useRef, useEffect, useState, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
// 컴포넌트
import { IconButton } from '../base/IconButton';
// 스타일
import clsx from 'clsx';
import styles from './Carousel.module.scss';
import { Icon } from '../base/Icon';

interface CarouselProps {
  /** 슬라이드 스타일 변형 */
  variant?: 'default' | 'detail' | 'scale' | string;
  /** 슬라이드 데이터 */
  slides: any[];
  /** 한번에 보이는 슬라이드 개수 */
  slidesPerView?: number | 'auto';
  /** 슬라이드 중앙 정렬 여부 */
  centeredSlides?: boolean;
  /** 슬라이드 루프 여부 */
  loop?: boolean;
  /** 슬라이드 자동 재생 여부 */
  autoplay?: boolean;
  /** 초기 슬라이드 인덱스 */
  initialSlide?: number;
  /** 추가 클래스명 */
  className?: string;
  /** 추가 슬라이드 클래스명 */
  slideClassName?: string;
  /** 스와이퍼 영역 최대 넓이 */
  containerWidth?: number | string;
  /** 슬라이드 간 간격 */
  spaceBetween?: number;
  /** 한 번에 전체 슬라이드 이동 여부 (autofit과 함께 사용 불가) */
  slideGroup?: boolean;
  /** 인디케이터 형태 */
  pagination?: 'bullet' | 'fraction' | 'progressbar';
  /** 네비게이션 */
  navigation?: boolean;
  /** 슬라이드 전환 속도 */
  speed?: number;
  /** 슬라이드 화면 기준사이즈 초과 시 노출갯수 자동 조절 */
  autofit?: boolean;
  /** 슬라이드 행 수 */
  rows?: number;
  /** 슬라이드 행간 */
  rowGap?: number;
  /** 슬라이드 좌우 기본여백 제거  */
  flush?: boolean;
  /** 슬라이드 시 위치 고정 해제 */
  freeMode?: boolean;
  /** 전체보기 클릭 이벤트 (pagination ='fraction'과 함께 사용) */
  onViewAll?: () => void;
  /** 슬라이드가 메인 여백 내에서 크롭될 경우 */
  boxing?: boolean;
  /** 슬라이드 인덱스 변경 */
  slideTo?: number;
  /** 슬라이드 변경 시 콜백 */
  onSlideChange?: (index: number) => void;
  /** variant scale 시 비율 (예: 1.1 = 110%) */
  scaleRatio?: number;
  /** 추가 props */
  [key: string]: any;
}

export const Carousel = ({
  variant,
  slides,
  slidesPerView = 'auto',
  centeredSlides,
  loop = false,
  autoplay = false,
  initialSlide = 0,
  className,
  slideClassName,
  containerWidth,
  spaceBetween = 0,
  slideGroup = false,
  pagination,
  navigation,
  speed = 300,
  autofit = false,
  rows,
  rowGap,
  flush = false,
  freeMode = false,
  onViewAll,
  boxing,
  slideTo,
  onSlideChange,
  scaleRatio = 1.1,
  ...props
}: CarouselProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialSlide);
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const paginationRef = useRef<HTMLDivElement>(null);
  // navigation Ref
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // [variant : scale] 기본 설정
  const isScale = variant === 'scale';
  const scaleCentered = isScale ? (slides.length >= 3 ? true : centeredSlides) : centeredSlides;
  const scaleLoop = isScale ? (slides.length >= 3 ? true : false) : loop;
  const scaleInactive = isScale ? 1 / scaleRatio : 1;
  const scaleGutter = isScale ? (1 - scaleInactive) * 100 : 0;

  // 루프 갯수 충분할때만 동작
  const enableLoop =
    (slidesPerView === 'auto' && slides.length > 1) ||
    (typeof slidesPerView === 'number' && slides.length > slidesPerView)
      ? loop
      : false;

  const modules = [A11y, Autoplay, Pagination, FreeMode, Navigation];

  // rows에 따라 슬라이드 그룹핑
  // const enableRows = rows && slides.length / rows > 5;
  const groupedSlides = rows
    ? Array.from({ length: Math.ceil(slides.length / rows) }, () => []).map((_, idx) =>
        slides.slice(idx * rows, idx * rows + rows)
      )
    : slides.map((slide) => [slide]);

  const carouselStyles = {
    // 슬라이드 최대 너비
    ...(containerWidth && {
      '--carousel-width':
        typeof containerWidth === 'number' ? `${containerWidth}px` : containerWidth,
    }),
    // scale일 때 변수 추가
    ...(isScale && {
      '--carousel-scale-inactive': scaleInactive.toFixed(2),
      '--carousel-scale-gutter': `${(scaleGutter / 2).toFixed(2)}%`,
    }),
  } as React.CSSProperties;

  // 마운트 전까지 width 설정
  const slideWidth =
    typeof slidesPerView === 'number' ? (100 / slidesPerView).toFixed(1) + '%' : 'auto';

  // 슬라이드 그룹 사용 시 인덱스 계산
  const calculateLength = (value: number) => {
    return slideGroup ? Math.ceil(value / ((slidesPerView as number) || 1)) : value;
  };

  // slideTo 값 변경 감지하여 슬라이드 이동
  useEffect(() => {
    if (swiper && slideTo !== undefined) {
      swiper.slideTo(slideTo, 300);
    }
  }, [swiper, slideTo]);

  // 슬라이드 인덱스 업데이트
  useEffect(() => {
    if (!swiper || (pagination !== 'fraction' && !onSlideChange && !isScale)) return;

    const updateIdx = () => {
      const currentIndex = swiper.realIndex;

      // fraction 업데이트
      if (pagination === 'fraction') setCurrentSlide(swiper.realIndex + 1);
      // scale일 때 activeIndex 업데이트
      if (isScale) setActiveIndex(currentIndex);
      // 현재 인덱스 emit
      onSlideChange?.(currentIndex);
    };

    updateIdx();
    swiper.on('slideChange', updateIdx);
    return () => swiper.off('slideChange', updateIdx);
  }, [swiper, pagination]);

  // 페이지네이션 설정
  const paginationConfig = (type: string) => {
    const baseConfig = {
      el: paginationRef.current,
      clickable: true,
    };

    switch (type) {
      case 'progressbar':
        return {
          ...baseConfig,
          type: 'progressbar' as const,
        };
      case 'bullet':
      default:
        return {
          ...baseConfig,
          type: 'bullets' as const,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        };
    }
  };

  useEffect(() => {
    if (!swiper) return;

    // 페이지네이션 업데이트
    if (pagination && paginationRef.current) {
      swiper.params.pagination = {
        ...(swiper as any).params.pagination,
        ...paginationConfig(pagination),
      };
      swiper.pagination.init();
      swiper.pagination.update();
    }
  }, [swiper, pagination]);

  useEffect(() => {
    if (!swiper) return;

    // 네비게이션 업데이트
    if (
      swiper &&
      navigation &&
      prevRef.current &&
      nextRef.current &&
      swiper.params &&
      typeof swiper.params.navigation !== 'undefined' &&
      typeof swiper.navigation !== 'undefined' &&
      typeof swiper.params.navigation !== 'boolean'
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper, navigation]);

  // autoplay시 정지/재생 토글함수
  const toggleAutoplay = () => {
    if (!swiper) return;

    if (isPlaying) {
      swiper.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiper.autoplay.start();
      setIsPlaying(true);
    }
  };

  // Swiper 인스턴스 설정 핸들러
  const handleSwiper = (swiper: SwiperType) => setSwiper(swiper);

  return (
    <div
      className={clsx(
        styles.root,
        variant && styles[variant],
        flush && styles.flush,
        boxing && styles.boxing,
        className
      )}
      {...props}
    >
      <Swiper
        className={styles.carousel}
        modules={modules}
        slidesPerView={autofit || freeMode ? 'auto' : slidesPerView}
        slidesPerGroup={slideGroup && typeof slidesPerView === 'number' ? slidesPerView : undefined}
        loop={scaleLoop ?? enableLoop}
        centeredSlides={scaleCentered ?? centeredSlides}
        initialSlide={initialSlide}
        spaceBetween={typeof slidesPerView === 'number' && slidesPerView > 1 ? 0 : spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 5000,
                pauseOnMouseEnter: true,
              }
            : false
        }
        freeMode={freeMode}
        keyboard={{ enabled: true }}
        pagination={pagination ? paginationConfig(pagination) : undefined}
        navigation={
          navigation
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : undefined
        }
        style={
          {
            ...carouselStyles,
            '--carousel-space-between': `${typeof slidesPerView === 'number' && slidesPerView > 1 ? spaceBetween : 0}px`,
            '--carousel-item-default-width': autofit
              ? `calc(
                  (min(100vw, var(--ncp-layout-max-width))
                  - (var(--carousel-padding-x, 0px) * 2) 
                  + 8px * ${Math.floor((slidesPerView as number) || 1)})
                  / ${(slidesPerView as number) || 1}
                )`
              : slideWidth,
            ...(rowGap && { '--carousel-row-gap': `${rowGap}px` }),
          } as React.CSSProperties
        }
        onInit={(swiper) => {
          // centeredSlides + loop + 소수점 slidesPerView에서 초기 위치 보정
          if (
            centeredSlides &&
            enableLoop &&
            typeof slidesPerView === 'number' &&
            slidesPerView % 1 !== 0
          ) {
            setTimeout(() => {
              swiper.slideToLoop(initialSlide, 0);
            }, 0);
          }

          // navigation 연결
          const paramsNav = swiper.params?.navigation;
          if (
            navigation &&
            prevRef.current &&
            nextRef.current &&
            paramsNav &&
            typeof paramsNav !== 'boolean'
          ) {
            paramsNav.prevEl = prevRef.current;
            paramsNav.nextEl = nextRef.current;
            swiper.navigation?.destroy();
            swiper.navigation?.init();
            swiper.navigation?.update();
          }
        }}
        onSwiper={handleSwiper}
      >
        {groupedSlides.map((slides, idx) => (
          <SwiperSlide
            key={idx}
            className={clsx(
              styles.item,
              rows && styles.column,
              freeMode && styles.free,
              isScale && [
                idx === activeIndex && styles.active,
                // idx < activeIndex && styles.prev,
                // idx > activeIndex && styles.next,
              ],
              slideClassName
            )}
          >
            {rows ? (
              <>
                {slides.map((slide, slideIdx) => (
                  <Fragment key={slideIdx}>{slide}</Fragment>
                ))}
              </>
            ) : (
              slides[0]
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 인디케이터 컨테이너 */}
      {pagination && (
        <>
          {pagination !== 'fraction' && (
            <div className={clsx(styles.pagination)} ref={paginationRef} />
          )}
          {pagination === 'fraction' && currentSlide && (
            <div className={styles.fraction}>
              {autoplay && (
                <IconButton
                  name={isPlaying ? 'pause' : 'play'}
                  size="xsmall"
                  onClick={toggleAutoplay}
                >
                  {isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
                </IconButton>
              )}
              <div className={styles.fractionText}>
                <em className={styles.current}>{calculateLength(currentSlide)}</em>
                <span className={styles.separator}>/</span>
                <span>{calculateLength(groupedSlides.length)}</span>
              </div>
              {onViewAll && groupedSlides.length > 1 && (
                <IconButton name="plus" size="xsmall" onClick={onViewAll}>
                  전체보기
                </IconButton>
              )}
            </div>
          )}
        </>
      )}

      {/* 내비게이션 컨테이너 */}
      {navigation && (
        <div className={styles.navigation}>
          <button
            ref={prevRef}
            className={clsx(styles.navButton, styles.prev)}
            aria-label="이전 슬라이드"
          >
            <Icon size="medium" name="arrowLeft" />
          </button>
          <button
            ref={nextRef}
            className={clsx(styles.navButton, styles.next)}
            aria-label="다음 슬라이드"
          >
            <Icon size="medium" name="arrowRight" />
          </button>
        </div>
      )}
    </div>
  );
};
