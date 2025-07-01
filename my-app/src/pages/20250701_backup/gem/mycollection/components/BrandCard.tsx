import { Link, Image, Heading } from '@shared/ui';
import { ProdGem } from '@widgets/product/ProdGem';
import styles from './BrandCard.module.scss';

// 브랜드 유형 플래그 :  공식/일반/셀러샵
type flagType = 'official' | 'normal' | 'sellerShop';

export interface BrandCardProps {
  /** 상품 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt: string;
  };
  /** 브랜드명 */
  brand: string;
  /** 브랜드 유형 플래그 */
  flag?: flagType;
  /** 젬 정보 */
  gem?: {
    isActive: boolean;
    onChange: (isActive: boolean) => void;
  };
}

const BrandCard = ({ href = '#', image, brand, flag, gem }: BrandCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={href} type="block" className={styles.thumb}>
        <Image src={image.src} alt={image.alt} />
        <div className={styles.brandInfo}>
          <div className={styles.top}>
            {/* type이 있으면 뱃지 노출 */}
            {flag && flag !== 'normal' && (
              <span className={styles.flag}>
                {flag === 'official' && '공식'}
                {flag === 'sellerShop' && '셀러샵'}
              </span>
            )}
          </div>
          <Heading as="strong" className={styles.name}>
            {brand}
          </Heading>
        </div>
      </Link>
      {gem && <ProdGem isActive={gem.isActive} onChange={gem.onChange} className={styles.gem} />}
    </div>
  );
};

export default BrandCard;
