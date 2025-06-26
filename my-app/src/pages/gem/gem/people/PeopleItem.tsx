import { Link } from '@shared/ui';
import { ProdGem } from '@widgets/product/ProdGem';
import styles from './PeopleItem.module.scss';

export interface PeopleItemProps {
  /** 상품 링크 */
  href?: string;
  image: {
    src: string;
    alt: string;
  };
  name: string;
  infos: string[];
  badge?: boolean;
  /** 젬 정보 */
  gem?: {
    isActive: boolean;
    onChange: (isActive: boolean) => void;
  };
}

const PeopleItem = ({ href = '#', image, name, infos, badge, gem }: PeopleItemProps) => {
  return (
    <div className={styles.peopleItem}>
      <Link href={href} type="block" className={styles.thumb}>
        <span className={styles.user}>
          <img src={image.src} alt={image.alt} className={styles.image} />
        </span>
        <div className={styles.people}>
          <p className={styles.peopleName}>
            {name}
            {badge && <img src={'/images/icon_badge.svg'} alt="badge" className={styles.badge} />}
          </p>
          <ul className={styles.peopleInfos}>
            {infos.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      </Link>
      {gem && <ProdGem isActive={gem.isActive} onChange={gem.onChange} className={styles.gem} />}
    </div>
  );
};

export default PeopleItem;
