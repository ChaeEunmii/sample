import { PeopleCard, PeopleCardProps } from './PeopleCard';
import styles from './PeopleCardList.module.scss';

// PeopleCard의 Props에서 gem을 제외한 타입
export type PeopleCardPropsFilter = Omit<PeopleCardProps, 'gem'>;

interface PeopleListProps {
  /** 피플 데이터 배열 (id 포함 필수) */
  data: PeopleCardPropsFilter[];
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (peopleId: string | number, isActive: boolean) => void;
  };
}

export const PeopleCardList = ({ data, wishlist }: PeopleListProps) => {
  // 위시리스트 상태 관리
  const getWishlistProps = (peopleId: string) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(peopleId);
    return {
      isActive,
      onChange: (peopleId: string, newIsActive: boolean) =>
        wishlist.onToggle(peopleId, newIsActive),
    };
  };

  const renderCard = (people: PeopleCardPropsFilter, idx: number) => (
    <PeopleCard key={people.id || idx} {...people} gem={getWishlistProps(people.id)} />
  );

  return <div className={styles.root}>{data.map(renderCard)}</div>;
};
