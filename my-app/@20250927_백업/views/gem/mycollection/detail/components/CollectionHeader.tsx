import { Heading, Icon, IconName, Avatar } from '@shared/ui';
import { UserBadge } from '@views/gem/components/index';
import { ProdGem } from '@widgets/product';
import styles from './CollectionHeader.module.scss';

export type CollectionStatType = 'gem' | 'update';

export interface CollectionMeta {
  /** 컬렉션 고유 ID */
  id: string | number;
  /** 컬렉션 제목 */
  title: string;
  /** 타인경우 유저정보 */
  user: {
    name: string;
    image: {
      src: string;
      alt: string;
    };
    badge?: boolean;
  };
  /** 컬렉션 정보 (CollectionStatType) */
  stats: {
    type: CollectionStatType;
    value: string | number;
  }[];
  /** 본인 여부(true일 경우 작성자 정보 숨김) */
  isMine?: boolean;
  /** 공개/비공개 여부 */
  isLock?: boolean;
}

interface CollectionHeaderProps {
  meta: CollectionMeta;
  wishlist?: {
    activeIds: (string | number)[];
    onToggle: (id: string | number, isActive: boolean) => void;
  };
}

export const CollectionHeader = ({ meta, wishlist }: CollectionHeaderProps) => {
  const { title, user, stats, isMine, isLock } = meta;

  // wishlist가 있으면 활성 여부 확인, 없으면 false
  const isActive = wishlist ? wishlist.activeIds.includes(meta.id) : false;

  // 상태 변경 시 wishlist.onToggle 호출
  const onChange = (newVal: boolean) => {
    wishlist?.onToggle(meta.id, newVal);
  };

  // CollectionStatType에 따른 아이콘 매핑 함수
  const getStatIcon = (type: CollectionStatType): IconName => {
    switch (type) {
      case 'gem':
        return 'gem';
      case 'update':
        return 'info';
      default:
        return 'gem';
    }
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <Heading as="strong" className={styles.tit}>
          {title}
          {isLock && (
            <>
              <Icon name="lock" className={styles.lock} />
            </>
          )}
        </Heading>
        {wishlist && !isMine && (
          <ProdGem isActive={isActive} onChange={onChange} className={styles.gem} />
        )}
      </div>
      <ul className={styles.infos}>
        {!isMine && (
          <li>
            <Avatar size="2" src={user.image.src} alt={user.image.alt} />
            <Heading as="strong" className={styles.name}>
              {user.name}
            </Heading>
            {user.badge && <UserBadge />}
          </li>
        )}
        {stats.map((stat, index) => (
          <li key={index}>
            <Icon name={getStatIcon(stat.type)} size="xsmall" />
            {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
