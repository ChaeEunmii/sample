import { Grid } from '@shared/ui';
// 컴포넌트
import { BrandCard, BrandCardProps } from '@widgets/brand/BrandCard';
// 스타일
import styles from './BrandCardList.module.scss';
import clsx from 'clsx';

// BrandCard의 Props에서 gem을 제외한 타입
export type BrandCardPropsFilter = Omit<BrandCardProps, 'gem'>;

interface BrandCardListProps {
  /** 브랜드 데이터 배열 */
  data: BrandCardPropsFilter[];
  /** 모드 설정 (위시 토글, 체크박스 선택) */
  mode?: 'wishlist' | 'select';
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (brandId: string | number, isActive: boolean) => void;
  };
  /** 체크박스 상태 관리 */
  selection?: {
    selectedIds: (string | number)[];
    onChange: (brandId: string | number, isSelected: boolean) => void;
    disabledIds?: (string | number)[];
  };
  /** 브랜드카드 스타일 */
  variant?: BrandCardProps['variant'];
  /** 그리드 열 수 */
  columns?: number;
  /** 그리드 간격 */
  gutter?: string;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const BrandCardList = ({
  data,
  mode = 'wishlist',
  wishlist,
  selection,
  variant = 'default',
  columns,
  gutter,
  className,
}: BrandCardListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (brandId: string) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(brandId);
    return {
      isActive,
      onChange: (brandId: string, newIsActive: boolean) => wishlist.onToggle(brandId, newIsActive),
    };
  };

  // 체크박스 상태 관리
  const getCheckProps = (brandId: string) => {
    if (!selection) return undefined;
    const isSelected = selection.selectedIds.includes(brandId);

    return {
      isSelected,
      onChange: (brandId: string, isSelected: boolean) => selection.onChange(brandId, isSelected),
      disabled: selection.disabledIds?.includes(brandId) ?? false,
    };
  };

  const renderCard = (brand: BrandCardPropsFilter, idx: number) => {
    // 모드에 따라 위시리스트, 체크박스 표시 여부 결정
    const showWishlist = mode === 'wishlist';
    const showCheckbox = mode === 'select';
    // 위시리스트 모드일 경우 gem props 설정
    const wishlistProps = showWishlist ? getWishlistProps(brand.id) : undefined;
    // select 모드일 경우 check props 설정
    const checkProps = showCheckbox ? getCheckProps(brand.id) : undefined;

    return (
      <BrandCard
        key={brand.id || idx}
        {...brand}
        gem={wishlistProps}
        check={checkProps}
        variant={variant}
      />
    );
  };

  return (
    <Grid
      columns={columns ? columns : 2}
      className={clsx(styles.root, className)}
      gutter={gutter ? gutter : '6px'}
    >
      {data.map(renderCard)}
    </Grid>
  );
};

BrandCardList.displayName = 'BrandCardList';
