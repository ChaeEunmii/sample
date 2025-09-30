import { Masonry } from '@shared/ui';
import { ProdCard, ProdCardProps } from '@widgets/product/ProdCard';
import { BrandCard, BrandCardProps } from '@widgets/brand/BrandCard';
import styles from './AllCardList.module.scss';

// 카드 아이템의 타입 정의
// product 카드와 brand 카드를 구분하기 위해 cardtype 필드를 포함
export type AllCardItem =
  | ({ cardtype: 'product' } & Omit<ProdCardProps, 'gem'>)
  | ({ cardtype: 'brand' } & Omit<BrandCardProps, 'gem'>);

// 아이템이 product 카드 타입인지 확인
const isProductItem = (item: AllCardItem): item is Extract<AllCardItem, { cardtype: 'product' }> =>
  item.cardtype === 'product';

// 아이템이 brand 카드 타입인지 확인
const isBrandItem = (item: AllCardItem): item is Extract<AllCardItem, { cardtype: 'brand' }> =>
  item.cardtype === 'brand';

interface AllCardListProps {
  /** 전체(상품 + 브랜드) 카드 데이터 배열 */
  data: AllCardItem[];
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
}
export const AllCardList = ({ data, mode = 'wishlist', wishlist, selection }: AllCardListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (id: string) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(id);
    return {
      isActive,
      onChange: (id: string, newIsActive: boolean) => wishlist.onToggle(id, newIsActive),
    };
  };

  // 체크박스 상태 관리
  const getCheckProps = (id: string) => {
    if (!selection) return undefined;
    const isSelected = selection.selectedIds.includes(id);

    return {
      isSelected,
      onChange: (id: string, isSelected: boolean) => selection.onChange(id, isSelected),
    };
  };

  const renderCard = (item: AllCardItem, idx: number) => {
    // 모드에 따라 위시리스트, 체크박스 표시 여부 결정
    const showWishlist = mode === 'wishlist';
    const showCheckbox = mode === 'select';
    // 위시리스트 모드일 경우 gem props 설정
    const wishlistProps = showWishlist ? getWishlistProps(item.id) : undefined;
    // select 모드일 경우 check props 설정
    const checkProps = showCheckbox ? getCheckProps(item.id) : undefined;

    if (isProductItem(item)) {
      const { ...prodProps } = item;
      return (
        <div key={item.id || idx} className={styles.box}>
          <ProdCard
            type="vertical"
            variant="boxed"
            {...prodProps}
            gem={wishlistProps}
            check={checkProps}
          />
        </div>
      );
    }

    if (isBrandItem(item)) {
      const { ...brandProps } = item;
      return (
        <div key={item.id} className={styles.box}>
          <BrandCard {...brandProps} gem={wishlistProps} check={checkProps} />
        </div>
      );
    }

    return null;
  };

  return (
    <Masonry columns={2} gutter={6} className={styles.root}>
      {data.map(renderCard)}
    </Masonry>
  );
};
