import { Link, Heading } from '@shared/ui';
import { ProdGem } from '@widgets/product/ProdGem';
import { Badge, Avatar } from '@views/gem/components/index';
import styles from './PeopleItem.module.scss';

export interface PeopleItemProps {
  /** 상품 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt: string;
  };
  /** 닉네임 */
  name: string;
  /** 대표 키워드 */
  infos: string[];
  /** 사용자 유형 뱃지 유무 */
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
        <Avatar size="3" src={image.src} alt={image.alt} />
        <div className={styles.people}>
          <Heading as="strong" className={styles.peopleName}>
            {name}
            {badge && <Badge />}
          </Heading>
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
