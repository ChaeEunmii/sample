// 라이브러리
import React from 'react';
// 컴포넌트
import { Text, Grid, Image } from '@shared/ui';
import { ProdCard, ProdGem } from '@widgets/product';
// 스타일
import styles from './CollectionList.module.scss';

// 타입 정의
interface ProductInfo {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  brand?: string;
  title: string;
  price?: {
    current: number | string;
    discountRate?: number;
  };
  updateAt: Date | string;
}

interface BrandInfo {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  name: string;
  updateAt: Date | string;
}

export interface CollectionListProps {
  products?: ProductInfo[];
  brands?: BrandInfo[];
  wishlist?: {
    activeIds: string[];
    onToggle: (id: string, isActive: boolean) => void;
  };
}

export const CollectionList = ({ products, brands, wishlist }: CollectionListProps) => {
  // 위시리스트 props 생성 함수
  const getWishlistProps = (itemId: string) => {
    if (!wishlist) return undefined;

    const isActive = wishlist.activeIds.includes(itemId);
    return {
      isActive,
      onChange: (id: string, newIsActive: boolean) => wishlist.onToggle(id, newIsActive),
    };
  };

  const allItems = [
    ...(products || []).map((item) => ({ ...item, type: 'product' as const })),
    ...(brands || []).map((item) => ({ ...item, type: 'brand' as const })),
  ].sort((a, b) => {
    return new Date(b.updateAt).getTime() - new Date(a.updateAt).getTime();
  });

  return (
    <>
      <ul className={styles.info}>
        {products && products.length > 0 && <li>상품 {products.length}</li>}
        {brands && brands.length > 0 && <li>브랜드 {brands.length}</li>}
      </ul>
      <Grid gutter={16} margin="1">
        {allItems.map((item, index) => {
          const wishlistProps = wishlist ? getWishlistProps(item.id) : undefined;

          if (item.type === 'product') {
            const { type, ...productData } = item;
            return (
              <ProdCard
                key={item.id}
                {...productData}
                type="horizontal"
                size="small"
                gem={wishlistProps}
              />
            );
          } else {
            const { type, ...brandData } = item;
            return (
              <div className={styles.brand} key={index}>
                <Image {...brandData.image} className={styles.thumb} />
                <Text as="strong" weight="semibold" size="6">
                  {brandData.name}
                </Text>
                {wishlistProps && (
                  <ProdGem
                    isActive={wishlistProps.isActive}
                    onChange={(isActive) => wishlistProps.onChange(brandData.id, isActive)}
                    className={styles.gem}
                  />
                )}
              </div>
            );
          }
        })}
      </Grid>
    </>
  );
};
