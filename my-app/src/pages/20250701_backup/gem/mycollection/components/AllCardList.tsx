import { Masonry, Checkbox } from '@shared/ui';
import { ProdCard, ProdCardProps } from '@widgets/product/ProdCard';
import BrandCard, { BrandCardProps } from './BrandCard';
import styles from './AllCardList.module.scss';

// 카드 아이템의 타입 정의
// product 카드와 brand 카드를 구분하기 위해 cardtype 필드를 포함
export type AllCardItem =
  | ({ cardtype: 'product' } & Omit<ProdCardProps, 'gem'> & { id: string | number })
  | ({ cardtype: 'brand' } & Omit<BrandCardProps, 'gem'> & { id: string | number });

// 아이템이 product 카드 타입인지 확인
const isProductItem = (item: AllCardItem): item is Extract<AllCardItem, { cardtype: 'product' }> =>
  item.cardtype === 'product';

// 아이템이 brand 카드 타입인지 확인
const isBrandItem = (item: AllCardItem): item is Extract<AllCardItem, { cardtype: 'brand' }> =>
  item.cardtype === 'brand';

interface AllCardListProps {
  /** 전체(상품 + 브랜드) 카드 데이터 배열 */
  data: AllCardItem[];
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
const AllCardList = ({ data, mode = 'wishlist', wishlist, selection }: AllCardListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (id: string | number) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(id);
    return {
      isActive,
      onChange: (newIsActive: boolean) => wishlist.onToggle(id, newIsActive),
    };
  };

  // 체크박스 상태 관리
  const getCheckbox = (id: string | number) => {
    if (!selection) return null;
    const isSelected = selection.selectedIds.includes(id);

    return (
      <Checkbox
        checked={isSelected}
        onChange={(e) => selection.onChange(id, e.target.checked)}
        label="체크박스"
        hideLabel
        className={styles.checkbox}
      />
    );
  };

  const renderCard = (item: AllCardItem, idx: number) => {
    // 모드에 따라 위시리스트, 체크박스 표시 여부 결정
    const showWishlist = mode === 'wishlist';
    const showCheckbox = mode === 'select';
    // 위시리스트 prop 설정
    const wishlistProps = showWishlist ? getWishlistProps(item.id) : undefined;
    // 체크박스 컴포넌트 생성
    const checkbox = showCheckbox ? getCheckbox(item.id) : null;

    if (isProductItem(item)) {
      const { id, ...prodProps } = item;
      return (
        <div key={id || idx} className={styles.cardCustom}>
          {checkbox}
          <ProdCard
            {...prodProps}
            gem={wishlistProps}
            type="vertical"
            className={styles.prodCustom}
          />
        </div>
      );
    }

    if (isBrandItem(item)) {
      const { id, ...brandProps } = item;
      return (
        <div key={id || idx} className={styles.cardCustom}>
          {checkbox}
          <BrandCard {...brandProps} gem={wishlistProps} />
        </div>
      );
    }

    return null;
  };

  return (
    <Masonry columns={2} gutter={6}>
      {data.map(renderCard)}
    </Masonry>
  );
};

export default AllCardList;
