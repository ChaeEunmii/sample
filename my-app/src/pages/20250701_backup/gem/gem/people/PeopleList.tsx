import PeopleItem, { PeopleItemProps } from './PeopleItem';
import styles from './PeopleList.module.scss';

// PeopleItem의 Props에서 gem을 제외하고 id를 추가한 타입
export interface PeopleItemPropsFilter extends Omit<PeopleItemProps, 'gem'> {
  /** 상품 고유 ID */
  id: string | number;
}

interface PeopleListProps {
  /** 피플 데이터 배열 (id 포함 필수) */
  data: PeopleItemPropsFilter[];
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
}

const PeopleList = ({ data, wishlist }: PeopleListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (productId: string | number) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(productId);
    return {
      isActive,
      onChange: (newIsActive: boolean) => wishlist.onToggle(productId, newIsActive),
    };
  };

  const renderCard = (product: PeopleItemPropsFilter, idx: number) => (
    <PeopleItem key={product.id || idx} {...product} gem={getWishlistProps(product.id)} />
  );

  return <div className={styles.root}>{data.map(renderCard)}</div>;
};

export default PeopleList;
