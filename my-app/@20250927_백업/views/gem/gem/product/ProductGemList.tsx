'use client';

import { useState, useEffect } from 'react';
import { Stack, Empty, Button } from '@shared/ui';
import { useFAB } from '@/shared/contexts/FABContext';
import { TotalCount } from '@views/gem/components/index';
import { ProdCardList } from '@widgets/product';
import { ProdCardProps } from '@widgets/product/ProdCard';
import styles from '../GemList.module.scss';

// ProdCard의 Props에서 gem을 제외한 타입
export type ProdCardItemProps = Omit<ProdCardProps, 'gem'>;

interface ProductGemListProps {
  /** 상품 목록 데이터 */
  data: ProdCardItemProps[];
}
export const ProductGemList = ({ data }: ProductGemListProps) => {
  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'prod-1',
    'prod-2',
    'prod-3',
    'prod-4',
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
      {/* PRODUCT */}
      <Stack type="between" className={styles.top}>
        <TotalCount type="product" count={data.length} />
      </Stack>
      {/* 상품 목록 */}
      {data.length > 0 ? (
        <ProdCardList
          data={data}
          variant="grid"
          columns={2}
          cardType="vertical"
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
        />
      ) : (
        <Empty
          title="GEM한 상품이 없어요."
          desc="관심있는 상품을 GEM해 보세요."
          buttons={
            <>
              <Button variant="primary">GEM하러 가기</Button>
            </>
          }
        ></Empty>
      )}
    </>
  );
};
