import { ProdCardItemProps } from '@widgets/product/ProdCardList';
import { BrandProdCard } from './BrandProdCard';
import { BrandBarProps } from '@widgets/brand/BrandBar';
import clsx from 'clsx';
import styles from './BrandProdCardList.module.scss';

// BrandBar의 Props에서 gem을 제외한 타입
export type BrandProdCardPropsFilter = Omit<BrandBarProps, 'gem'>;

interface BrandProdListProps {
  /** 브랜드상품 리스트 스타일 */
  variant?: 'gem' | 'store';
  /** 브랜드별 상품 데이터를 담은 배열 */
  brandData: {
    /** 브랜드 정보 객체 (ID, 이름, 로고, 타입 등) */
    brand: BrandProdCardPropsFilter;
    /** 해당 브랜드의 상품 리스트 */
    products: ProdCardItemProps[];
  }[];
  /** 브랜드 젬 상태 관리 */
  brandGem?: {
    /** 브랜드 젬에 포함된 브랜드 ID 배열 */
    activeIds: (string | number)[];
    /** 브랜드 젬 토글 핸들러 */
    onToggle: (brandId: string | number, val: boolean) => void;
  };
  /** 위시리스트 상태 관리 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
  /** 최상위 컨테이너에 추가할 CSS 클래스명 */
  className?: string;
  /** ProdCard 타이틀 숨김처리 여부(CSS접근성 숨김처리) */
  titleHidden?: boolean;
}

export const BrandProdCardList = ({
  variant = 'gem',
  brandData,
  wishlist,
  brandGem,
  className,
  titleHidden,
}: BrandProdListProps) => {
  return (
    <div className={clsx(styles.root, titleHidden && styles.titleHidden, className)}>
      {brandData.map(({ brand, products }) => (
        <BrandProdCard
          variant={variant}
          key={brand.id}
          brand={brand}
          products={products}
          // 브랜드 젬 활성화 상태 및 토글 함수 전달
          brandGem={brandGem}
          // 상품 위시리스트 상태 및 토글 함수 전달
          wishlist={wishlist}
        />
      ))}
    </div>
  );
};
