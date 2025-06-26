import { Icon } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { ProdGem } from '@widgets/product/ProdGem';
import styles from './BrandProdItem.module.scss';

type BrandType = 'official' | 'sellerShop';

export interface BrandInfo {
  /** 브랜드 링크 */
  href?: string;
  /** 브랜드 이미지 */
  image: {
    src: string;
    alt: string;
  };
  /** 브랜드명 */
  name: string;
  /** 브랜드 한글명 */
  namekor: string;
  /** 뱃지타입 */
  type?: BrandType;
}

interface BrandProdItemProps {
  /** 브랜드 정보 객체 (이름, 로고, ID 등) */
  brand: BrandInfo;
  /** 해당 브랜드의 상품 리스트 (ProdCard 형식) */
  products: ProdCardItemProps[];
  /** 브랜드 젬(GEM) 상태 관리 */
  brandGem?: {
    /** 현재 젬 활성화 여부 */
    isActive: boolean;
    /** 젬 상태 변경 핸들러 (true → false 또는 반대) */
    onChange: (value: boolean) => void;
  };
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
}

const BrandProdItem = ({ brand, products, brandGem, wishlist }: BrandProdItemProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.brandHeader}>
        <div className={styles.header}>
          <img src={brand.image.src} alt={brand.image.alt} className={styles.logo} />
          <div className={styles.info}>
            <div className={styles.nameWrapper}>
              <span className={styles.brandName}>{brand.name}</span>
              {brand.type === 'official' && <span className={styles.badge}>공식</span>}
              {brand.type === 'sellerShop' && <span className={styles.badge}>셀러샵</span>}
              {/* type이 없으면 뱃지 없음 */}
            </div>
            <div className={styles.nameKor}>{brand.namekor}</div>
          </div>
        </div>
        {brandGem && (
          <ProdGem
            isActive={brandGem.isActive}
            onChange={brandGem.onChange}
            className={styles.gem}
          />
        )}
      </div>
      {products.length === 0 ? (
        <div className={styles.empty}>
          <Icon name="info" size="small" />
          브랜드에서 추천할 상품을 준비하고 있어요.
        </div>
      ) : (
        <div className={styles.cards}>
          <ProdCardList
            data={products}
            variant="swiper"
            columns={2}
            cardType="vertical"
            wishlist={wishlist}
            autofit
            // loop
          />
        </div>
      )}
    </section>
  );
};

export default BrandProdItem;
