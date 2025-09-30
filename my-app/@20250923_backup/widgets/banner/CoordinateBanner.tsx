// 컴포넌트
import { useEffect, useMemo, useState } from 'react';
import { Carousel, Grid, Heading, Image, Link, Popover, ReadMore, Text } from '@shared/ui';
import CoordinateBannerDrawer from './CoordinateBannerDrawer';
// 스타일
import clsx from 'clsx';
import styles from './CoordinateBanner.module.scss';
// 타입
import { BannerImage } from './bannerType';

/** 좌표 배너 리스트 출력 타입 */
export type CoordinateBannerListType = 'list' | 'swiper';

/** 좌표 타입 */
export interface CoordinateType {
  /** 가로 좌표 (360px 기준) */
  x: number;
  /** 세로 좌표 (360px 기준) */
  y: number;
  /** 상품 이미지 */
  image: BannerImage;
  /** 상품 타이틀 */
  title: string;
  /** 상품 링크 */
  href: string;
}

/** 좌표 배너 타입 */
export interface CoordinateBannerType {
  /** 배너 이미지 */
  image: BannerImage;
  /** 타이틀 텍스트 */
  title: string;
  /** 서브타이틀 텍스트 */
  subtitle: string;
  /** 배너 좌표 */
  coordinate: CoordinateType[];
}

/** 좌표 배너 */
interface CoordinateBannerProps {
  /** 하단 상품 이미지 리스트 노출 여부 (CO_TG_GD_01의 경우 true) */
  showProdList?: boolean;
  /** 더보기 줄 수 */
  readmore?: number;
  /** 더보기 상태 초기화를 위한 슬라이드 변경값 */
  activeIndex?: number;
  /** 배너 데이터 */
  data: CoordinateBannerType;
}

/** 좌표 배너 리스트 */
interface CoordinateBannerListProps {
  /** 리스트 노출 타입 */
  type?: CoordinateBannerListType;
  /** 하단 상품 이미지 리스트 노출 여부 (CO_TG_GD_01의 경우 true) */
  showProdList?: boolean;
  /** 배너 데이터 */
  data: CoordinateBannerProps['data'][];
}

/** ========== 좌표 팝오버 ========== */
function CoordinatePopover({
  coord,
  style,
  closeSign,
  onStateChange,
}: {
  coord: CoordinateType;
  style: React.CSSProperties;
  closeSign: number; // 팝오버 닫기 신호
  onStateChange?: (open: boolean) => void; // 팝오버 상태 변경 감지
}) {
  const [isOpen, setIsOpen] = useState(false);
  const changedPopoverState = (state: boolean) => {
    setIsOpen(state);
    onStateChange?.(state);
  };

  // 슬라이드가 바뀌면 닫기
  useEffect(() => {
    setIsOpen(false);
    onStateChange?.(false);
  }, [closeSign]);

  return (
    <Popover
      trigger={
        <button style={style} className={styles.coordinate}>
          <Image src={`/images/icon/icon_coordinate.svg`} />
          <span className="ncp-blind">상품 보기</span>
        </button>
      }
      gap={8}
      placement={['bottom', 'start']}
      isOpen={isOpen}
      popoverState={changedPopoverState}
    >
      <Link href={coord.href} className={styles.popover}>
        <Text size="3" color="white" className={styles.title}>
          {coord.title}
        </Text>
      </Link>
    </Popover>
  );
}

/** ========== 좌표 배너 단일 컴포넌트 ========== */
function CoordinateBanner({
  data,
  readmore = 2,
  showProdList = false,
  activeIndex,
}: CoordinateBannerProps) {
  const { image, title, subtitle, coordinate } = data;
  /** 360px 기준 → % 변환 */
  const percentCoords = useMemo(
    () =>
      coordinate.map((c) => ({
        x: (c.x / 360) * 100,
        y: (c.y / 360) * 100,
      })),
    [coordinate]
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);

  // 슬라이드 변경 시 모든 Popover 닫힘으로 간주
  useEffect(() => {
    setOpenCount(0);
  }, [activeIndex]);

  // 열린 popover가 있는지 체크
  const handleOpenChange = (open: boolean) => {
    setOpenCount((prev) => (open ? prev + 1 : Math.max(0, prev - 1)));
  };
  const hasPopOpen = openCount > 0;

  return (
    <div className={styles.banner}>
      <div className={styles.cont}>
        <div className={clsx(styles.imageWrap, hasPopOpen && styles.openPop)}>
          <Image {...image} className={styles.image} />
          {percentCoords.map((pt, idx) => {
            const style = {
              '--item-x': `${pt.x}%`,
              '--item-y': `${pt.y}%`,
            } as React.CSSProperties;
            return (
              <CoordinatePopover
                key={idx}
                style={style}
                coord={coordinate[idx]}
                closeSign={activeIndex ?? -1}
                onStateChange={handleOpenChange}
              />
            );
          })}
        </div>
        <Heading size="5" className="ncp-mt-s">
          {title}
        </Heading>
        <ReadMore
          key={!showProdList ? activeIndex : undefined}
          type={showProdList ? 'below' : 'inline'}
          lines={readmore}
          textProps={{ size: '5' }}
          className={styles.subtitleText}
          onClick={
            showProdList
              ? () => {
                  setIsDrawerOpen(true);
                }
              : undefined
          }
        >
          {subtitle}
        </ReadMore>
      </div>
      {/* 상품 이미지 리스트 영역 */}
      {coordinate.length > 0 && showProdList && (
        <ul className={styles.itemImageList}>
          {coordinate.slice(0, 3).map((coord, idx) => {
            const hasMore = idx === 2 && coordinate.length > 3;
            return (
              <li key={idx}>
                <Link
                  type="block"
                  href={!hasMore ? coord.href : ''}
                  onClick={
                    hasMore
                      ? () => {
                          setIsDrawerOpen(true);
                        }
                      : undefined
                  }
                  className={styles.imageWrap}
                >
                  <Image {...coord.image} className={clsx(hasMore && styles.overflow)} />
                  {hasMore && (
                    <Text as="span" className={styles.rest}>
                      더보기
                    </Text>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {/* 더보기 바텀시트 */}
      <CoordinateBannerDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={title}
        subtitle={subtitle}
        coordinate={coordinate}
      />
    </div>
  );
}

/** ========== 좌표 배너 리스트 ========== */
export default function CoordinateBannerList({
  type = 'list',
  showProdList = false,
  data,
}: CoordinateBannerListProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  /** 리스트 형태 */
  if (type === 'list' || data.length === 1) {
    return (
      <Grid columns={1} gutter={'8px 24px'}>
        {data.map((d, idx) => (
          <CoordinateBanner key={idx} data={d} showProdList={showProdList} />
        ))}
      </Grid>
    );
  }

  /** 스와이퍼 형태 */
  if (type === 'swiper') {
    return (
      <Carousel
        slides={data.map((d, idx) => (
          <CoordinateBanner
            key={idx}
            data={d}
            readmore={showProdList ? 3 : 2}
            showProdList={showProdList}
            activeIndex={activeIdx}
          />
        ))}
        slidesPerView={1.2}
        spaceBetween={12}
        onSlideChange={(i) => setActiveIdx(i)}
      />
    );
  }
}
