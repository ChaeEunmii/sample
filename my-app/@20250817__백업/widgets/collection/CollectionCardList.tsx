import { CollectionCard, CollectionCardProps } from './CollectionCard';
import styles from './CollectionCardList.module.scss';

// CollectionCard 의 Props에서 gem을 제외한 타입
export type CollectionCardPropsFilter = Omit<CollectionCardProps, 'gem'>;

interface CollectionCardListProps {
  /** 컬렉션 데이터 배열 (id 포함 필수) */
  data: CollectionCardPropsFilter[];
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (collectionId: string | number, isActive: boolean) => void;
  };
}

export const CollectionCardList = ({ data, wishlist }: CollectionCardListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (collectionId: string) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(collectionId);
    return {
      isActive,
      onChange: (collectionId: string, newIsActive: boolean) =>
        wishlist.onToggle(collectionId, newIsActive),
    };
  };

  const renderCard = (collection: CollectionCardPropsFilter, idx: number) => (
    <CollectionCard
      key={collection.id || idx}
      {...collection}
      gem={getWishlistProps(collection.id)}
    />
  );

  return <div className={styles.root}>{data.map(renderCard)}</div>;
};
