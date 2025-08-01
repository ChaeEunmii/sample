import { useState, useEffect } from 'react';
// 컴포넌트
import { Grid, Carousel, Button, ButtonArea, Text } from '@shared/ui';
import { ProdCard, ProdCardProps } from './ProdCard';
// 스타일
import styles from './ProdCardList.module.scss';
import clsx from 'clsx';

// ProdCard의 Props에서 gem을 제외하고 id를 추가한 타입
export type ProdCardItemProps = Omit<ProdCardProps, 'gem'>;

interface ProdCardListProps {
  /** 상품 데이터 배열 */
  data: ProdCardItemProps[];
  /** 그리드 열 수 */
  columns?: number;
  /** n줄처리 (swiper일 때) */
  rows?: number;
  /** 그리드 간격 */
  gutter?: string;
  /** 카드 리스트 스타일 변형 */
  variant?: 'grid' | 'swiper';
  /** 카드 타입 */
  cardType?: 'horizontal' | 'vertical';
  /** 카드 스타일 */
  cardVariant?: 'default' | 'boxed' | 'inverse';
  /** 카드 사이즈 */
  cardSize?: 'small' | 'medium' | 'large';
  /** 모드 설정 (위시 토글, 체크박스 선택) */
  mode?: 'wishlist' | 'select';
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
  /** 체크박스 상태 관리 */
  selection?: {
    selectedIds: (string | number)[];
    onChange: (productId: string | number, isSelected: boolean) => void;
  };
  /** 추가 클래스 */
  className?: string;
  /** 루프 여부(swiper) */
  loop?: boolean;
  /** 기준 사이즈(app width) 초과 시 열 갯수 자동맞춤 */
  autofit?: boolean;
  /** 더보기 개수 */
  moreCount?: number;
  /** 더보기 버튼에 카운터 표시 여부 */
  showCounter?: boolean;
}

export const ProdCardList = ({
  data,
  columns,
  rows,
  gutter,
  variant = 'grid',
  cardType,
  cardVariant,
  cardSize,
  mode = 'wishlist',
  wishlist,
  selection,
  className,
  loop = false,
  autofit = false,
  moreCount,
  showCounter,
  ...props
}: ProdCardListProps) => {
  const [displayedData, setDisplayedData] = useState<ProdCardItemProps[]>([]);
  const [currentCount, setCurrentCount] = useState(moreCount ?? 0);

  // 위시리스트 상태 관리
  const getWishlistProps = (productId: string) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(productId);
    return {
      isActive,
      onChange: (productId: string, newIsActive: boolean) =>
        wishlist.onToggle(productId, newIsActive),
    };
  };

  // 체크박스 상태 관리
  const getCheckProps = (productId: string) => {
    if (!selection) return undefined;
    const isSelected = selection.selectedIds.includes(productId);

    return {
      isSelected,
      onChange: (productId: string, isSelected: boolean) =>
        selection.onChange(productId, isSelected),
    };
  };

  // [more] 초기 데이터 설정
  useEffect(() => {
    if (!moreCount) return;
    setDisplayedData(data.slice(0, moreCount));
  }, [data, moreCount]);

  // [more] 더보기 버튼 핸들러
  const handleMoreClick = () => {
    if (!moreCount) return;

    // 끝까지 도달 시 처음부터
    if (currentCount >= data.length) {
      setDisplayedData(data.slice(0, moreCount));
      setCurrentCount(moreCount);
      return;
    }

    const nextCount = currentCount + moreCount;
    setDisplayedData(data.slice(currentCount, nextCount));
    setCurrentCount(nextCount);
  };

  const renderCard = (product: ProdCardItemProps, idx: number) => {
    // 모드에 따라 위시리스트, 체크박스 표시 여부 결정
    const showWishlist = mode === 'wishlist';
    const showCheckbox = mode === 'select';
    // 위시리스트 모드일 경우 gem props 설정
    const wishlistProps = showWishlist ? getWishlistProps(product.id) : undefined;
    // select 모드일 경우 check props 설정
    const checkProps = showCheckbox ? getCheckProps(product.id) : undefined;

    return (
      <ProdCard
        key={product.id || idx}
        type={cardType}
        variant={cardVariant}
        size={cardSize}
        {...product}
        gem={wishlistProps}
        check={checkProps}
        flagSlot={product.flagSlot}
      />
    );
  };

  const renderMoreButton = () => {
    if (!moreCount || displayedData.length === 0) return null;

    return (
      <ButtonArea margin="2" align="center">
        <Button
          size="small"
          suffixIcon="refresh"
          variant="tertiary"
          round
          onClick={handleMoreClick}
        >
          더보기
          {showCounter && (
            <span>
              <Text as="em" weight="semibold">
                {Math.ceil(Math.min(currentCount, data.length) / moreCount)}
              </Text>
              <Text as="span" weight="semibold" color="gray3">
                /{Math.ceil(data.length / moreCount)}
              </Text>
            </span>
          )}
        </Button>
      </ButtonArea>
    );
  };

  if (variant === 'grid') {
    return (
      <>
        <Grid
          columns={columns}
          className={clsx(styles.root, className)}
          autofit={autofit}
          gutter={
            gutter ??
            (cardType === 'vertical' ? '8px 24px' : cardVariant !== 'boxed' ? '12px 16px' : '12px')
          }
          {...props}
        >
          {(moreCount ? displayedData : data).map(renderCard)}
        </Grid>
        {renderMoreButton()}
      </>
    );
  }

  if (variant === 'swiper') {
    return (
      <>
        <Carousel
          className={clsx(styles.root, className)}
          slides={(moreCount ? displayedData : data).map(renderCard)}
          slidesPerView={columns || 1}
          spaceBetween={
            ((gutter && typeof gutter === 'number') ?? cardType === 'vertical') ? 8 : 12
          }
          loop={loop}
          autofit={autofit}
          rows={rows}
          rowGap={rows ? 16 : undefined}
          {...props}
        />
        {renderMoreButton()}
      </>
    );
  }
};

ProdCardList.displayName = 'ProdCardList';
