'use client';

import { useState } from 'react';
import { Stack, Empty, Button } from '@shared/ui';
import { TotalCount, SelectDrawer } from '@views/gem/components/index';
import { ProdCardItemProps } from '@widgets/product/ProdCardList';
import BrandProdList from '@views/gem/gem/brand/BrandProdList';
import type { BrandInfo } from './BrandProdItem';
import styles from '../GemList.module.scss';

// BrandProdItem의 Props에서 gem을 제외하고 id를 추가한 타입
export interface BrandProdItemPropsFilter extends Omit<BrandInfo, 'gem'> {
  /** 상품 고유 ID */
  id: string | number;
}

// 정렬 옵션
const sortOptions = [
  {
    label: '최신순',
    value: 'option1',
  },
  {
    label: 'GEM한순',
    value: 'option2',
  },
];

interface BrandGemListProps {
  /** 브랜드별 상품 데이터를 담은 배열 */
  data: {
    /** 브랜드 정보 객체 (ID, 이름, 로고, 타입 등) */
    brand: BrandProdItemPropsFilter;
    /** 해당 브랜드의 상품 리스트 */
    products: ProdCardItemProps[];
  }[];
}
export const BrandGemList = ({ data }: BrandGemListProps) => {
  // 정렬 값
  const [sortBrandValue, setSortBrandValue] = useState('option1');

  // 브랜드잼 상태 관리
  const [gemBrandIds, setGemBrandIds] = useState<(string | number)[]>([
    'diptyque',
    'atkinsons',
    'ralphlauren',
  ]);
  // 브랜드잼 토글 핸들러
  const handleBrandGemToggle = (brandId: string | number, isActive: boolean) => {
    setGemBrandIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(brandId) ? prev : [...prev, brandId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== brandId);
      }
    });

    console.log(`브랜드젬 ${isActive ? '추가' : '제거'}:`, brandId);
  };

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'diptyque-prod-1',
    'atkinsons-prod-1',
  ]);
  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(productId) ? prev : [...prev, productId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== productId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

  return (
    <>
      <div className={styles.brand}>
        <Stack type="between" className={styles.top}>
          <TotalCount type="brand" count={data.length} />
          <SelectDrawer
            title="정렬"
            options={sortOptions}
            value={sortBrandValue}
            onChange={setSortBrandValue}
            variant="filter"
          />
        </Stack>
        {/* 브랜드 목록 */}
        {data.length > 0 ? (
          <BrandProdList
            brandData={data}
            wishlist={{
              activeIds: wishlistIds,
              onToggle: handleWishlistToggle,
            }}
            brandGem={{
              activeIds: gemBrandIds,
              onToggle: handleBrandGemToggle,
            }}
          />
        ) : (
          <Empty
            title="GEM한 브랜드가 없어요."
            desc="관심있는 브랜드를 GEM해 보세요."
            buttons={
              <>
                <Button variant="primary">GEM하러 가기</Button>
              </>
            }
          />
        )}
      </div>
    </>
  );
};
