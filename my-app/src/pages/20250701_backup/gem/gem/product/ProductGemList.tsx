'use client';

import { useState } from 'react';
import { Stack, Empty, Button } from '@shared/ui';
import { TotalCount, SelectDrawer } from '@views/gem/components/index';
import { ProdCardList } from '@widgets/product';
import { ProdCardProps } from '@widgets/product/ProdCard';
import styles from '../GemList.module.scss';

// ProdCard의 Props에서 gem을 제외하고 id를 추가한 타입
export interface ProdCardItemProps extends Omit<ProdCardProps, 'gem'> {
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

interface ProductGemListProps {
  /** 상품 목록 데이터 */
  data: ProdCardItemProps[];
}
export const ProductGemList = ({ data }: ProductGemListProps) => {
  // 정렬 값
  const [sortProdValue, setSortProdValue] = useState('option1');

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

  return (
    <>
      {/* PRODUCT */}
      <div className={styles.product}>
        <Stack type="between" className={styles.top}>
          <TotalCount type="product" count={data.length} />
          <SelectDrawer
            title="정렬"
            options={sortOptions}
            value={sortProdValue}
            onChange={setSortProdValue}
            variant="filter"
          />
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
            autofit
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
      </div>
    </>
  );
};
