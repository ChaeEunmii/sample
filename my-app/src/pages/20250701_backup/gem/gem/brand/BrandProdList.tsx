import clsx from 'clsx';
import styles from './BrandProdList.module.scss';
import { ProdCardItemProps } from '@widgets/product/ProdCardList';
import BrandProdItem from './BrandProdItem';
import type { BrandInfo } from './BrandProdItem';

// BrandProdItem의 Props에서 gem을 제외하고 id를 추가한 타입
export interface BrandProdItemPropsFilter extends Omit<BrandInfo, 'gem'> {
  /** 상품 고유 ID */
  id: string | number;
}

interface BrandProdListProps {
  /** 브랜드별 상품 데이터를 담은 배열 */
  brandData: {
    /** 브랜드 정보 객체 (ID, 이름, 로고, 타입 등) */
    brand: BrandProdItemPropsFilter;
    /** 해당 브랜드의 상품 리스트 */
    products: ProdCardItemProps[];
  }[];
  /** 브랜드 젬(GEM) 활성화 상태 및 토글 핸들러를 묶은 객체 */
  brandGem?: {
    /** 활성화된 브랜드 ID 배열 */
    activeIds: (string | number)[];
    /** 브랜드 젬 활성화 상태 변경 콜백 (브랜드 ID와 변경 값 전달) */
    onToggle: (brandId: string | number, val: boolean) => void;
  };
  /** 상품 위시리스트 상태 및 토글 핸들러 */
  wishlist?: {
    /** 위시리스트에 포함된 상품 ID 배열 */
    activeIds: (string | number)[];
    /** 위시리스트 토글 핸들러 */
    onToggle: (productId: string | number, isActive: boolean) => void;
  };
  /** 최상위 컨테이너에 추가할 CSS 클래스명 */
  className?: string;
}

const BrandProdList = ({ brandData, wishlist, brandGem, className }: BrandProdListProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      {brandData.map(({ brand, products }) => (
        <BrandProdItem
          key={brand.id}
          brand={brand}
          products={products}
          // 브랜드 젬 활성화 상태 및 토글 함수 전달
          brandGem={
            brandGem
              ? {
                  // 현재 브랜드가 활성화된 젬 목록에 포함되어 있는지 여부
                  isActive: brandGem.activeIds.includes(brand.id),
                  // 젬 활성화 상태 변경 시 호출되는 콜백
                  onChange: (val) => brandGem.onToggle(brand.id, val),
                }
              : undefined
          }
          // 상품 위시리스트 상태 및 토글 함수 전달
          wishlist={wishlist}
        />
      ))}
    </div>
  );
};

export default BrandProdList;
