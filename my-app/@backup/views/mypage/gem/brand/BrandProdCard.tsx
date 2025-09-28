import { Icon, Text } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { BrandBar, BrandBarProps } from '@widgets/brand/BrandBar';
import styles from './BrandProdCard.module.scss';

interface BrandProdCardProps {
  /** 브랜드상품 리스트 스타일 */
  variant?: 'gem' | 'store';
  /** 브랜드 정보 객체 (이름, 로고, ID 등) */
  brand: BrandBarProps;
  /** 해당 브랜드의 상품 리스트 (ProdCard 형식) */
  products: ProdCardItemProps[];
  /** 브랜드 젬 상태 관리 */
  brandGem?: {
    /** 브랜드 젬에 포함된 브랜드 ID 배열 */
    activeIds: (string | number)[];
    /** 브랜드 젬 토글 핸들러 */
    onToggle: (brandId: string | number, isActive: boolean) => void;
  };
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
}

export const BrandProdCard = ({
  variant = 'gem',
  brand,
  products,
  brandGem,
  wishlist,
}: BrandProdCardProps) => {
  // 브랜드 유형 플래그 : 공식/일반/셀러샵
  const brandFlag = [];
  if (brand.flag === 'official') {
    brandFlag.push({ color: 'gray2' as const, label: '공식' });
  }
  if (brand.flag === 'sellerShop') {
    brandFlag.push({ color: 'gray2' as const, label: '셀러샵' });
  }

  // 브랜드젬 상태 관리
  const getBrandGemProps = (brandId: string) => {
    if (!brandGem) return undefined;

    const isActive = brandGem.activeIds.includes(brandId);
    return {
      isActive,
      onChange: (brandId: string, newIsActive: boolean) => brandGem.onToggle(brandId, newIsActive),
    };
  };

  return (
    <section className={styles.section}>
      <BrandBar
        id={brand.id}
        href={brand.href ?? '#'}
        image={brand.image}
        name={brand.name}
        namekor={brand.namekor}
        flag={brand.flag}
        gem={getBrandGemProps(brand.id)}
        variant={variant === 'store' ? 'store' : 'default'}
      />
      {/* 상품 렌더 */}
      {products.length === 0 ? (
        <div className={styles.empty}>
          <Icon name="info" size="small" />
          <Text as="span">브랜드에서 추천할 상품을 준비하고 있어요.</Text>
        </div>
      ) : (
        <div className={styles.cards}>
          <ProdCardList
            data={products}
            variant="swiper"
            columns={2.5}
            cardType="vertical"
            wishlist={wishlist}
            freeMode={variant === 'gem' ? true : false}
          />
        </div>
      )}
    </section>
  );
};
