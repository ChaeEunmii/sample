'use client';

import { useState, useEffect } from 'react';
import { Stack, Empty, Button } from '@shared/ui';
import { useFAB } from '@/shared/contexts/FABContext';
import { TotalCount } from '@views/gem/components/index';
import { ProdCardItemProps } from '@widgets/product/ProdCardList';
import { BrandProdCardList } from '@/views/gem/gem/brand/BrandProdCardList';
import { BrandBarProps } from '@widgets/brand/BrandBar';
import styles from '../GemList.module.scss';

// BrandBar의 Props에서 gem을 제외한 타입
export type BrandProdCardPropsFilter = Omit<BrandBarProps, 'gem'>;

interface BrandGemListProps {
  /** 브랜드별 상품 데이터를 담은 배열 */
  data: {
    /** 브랜드 정보 객체 (ID, 이름, 로고, 타입 등) */
    brand: BrandProdCardPropsFilter;
    /** 해당 브랜드의 상품 리스트 */
    products: ProdCardItemProps[];
  }[];
}
export const BrandGemList = ({ data }: BrandGemListProps) => {
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
    'diptyque-prod-2',
    'diptyque-prod-3',
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

  // useFAB
  const { setActions, clearActions } = useFAB();
  useEffect(() => {
    setActions([
      {
        name: 'plus',
        label: '추가 fab',
        onClick: () => console.log('추가 fab!'),
      },
    ]);
    return () => clearActions();
  }, [setActions]);

  return (
    <>
      <Stack type="between" className={styles.top}>
        <TotalCount type="brand" count={data.length} />
      </Stack>
      {/* 브랜드 목록 */}
      {data.length > 0 ? (
        <BrandProdCardList
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
    </>
  );
};
