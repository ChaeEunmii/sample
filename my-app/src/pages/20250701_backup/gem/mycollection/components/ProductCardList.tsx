import { Grid, Checkbox } from '@shared/ui';
import { ProdCard, ProdCardProps } from '@widgets/product/ProdCard'; //기존사용하던 prodCard 스타일만 변경
import styles from './ProductCardList.module.scss';
import clsx from 'clsx';

// ProdCard 의 Props에서 gem을 제외하고 id를 추가한 타입
export interface ProdCardPropsFilter extends Omit<ProdCardProps, 'gem'> {
  /** 상품 고유 ID */
  id: string | number;
}

interface ProductCardListProps {
  /** 상품 카드 데이터 배열 (id 포함 필수) */
  data: ProdCardPropsFilter[];
  /** 'wishlist': 위시 토글, 'select': 체크박스 선택 */
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
}

const ProductCardList = ({
  data,
  mode = 'wishlist',
  wishlist,
  selection,
}: ProductCardListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (productId: string | number) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(productId);
    return {
      isActive,
      onChange: (newIsActive: boolean) => wishlist.onToggle(productId, newIsActive),
    };
  };

  // 체크박스 상태 관리
  const getCheckbox = (productId: string | number) => {
    if (!selection) return null;
    const isSelected = selection.selectedIds.includes(productId);

    return (
      <Checkbox
        checked={isSelected}
        onChange={(e) => selection.onChange(productId, e.target.checked)}
        label="체크박스"
        hideLabel
        className={styles.checkbox}
      />
    );
  };

  const renderCard = (product: ProdCardPropsFilter, idx: number) => {
    // 모드에 따라 위시리스트, 체크박스 표시 여부 결정
    const showWishlist = mode === 'wishlist';
    const showCheckbox = mode === 'select';
    // 위시리스트 prop 설정
    const wishlistProps = showWishlist ? getWishlistProps(product.id) : undefined;
    // 체크박스 컴포넌트 생성
    const checkbox = showCheckbox ? getCheckbox(product.id) : null;

    return (
      <div key={product.id || idx} className={styles.cardCustom}>
        {checkbox}
        <ProdCard {...product} type="vertical" gem={wishlistProps} className={styles.prodCustom} />
      </div>
    );
  };

  return (
    <Grid columns={2} className={clsx(styles.root)} gutter="6px">
      {data.map(renderCard)}
    </Grid>
  );
};

export default ProductCardList;
