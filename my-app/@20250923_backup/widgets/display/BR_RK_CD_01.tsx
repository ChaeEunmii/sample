// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdRankingList, ProdRankingItemProps } from '@widgets/product/ProdRankingList';

export interface BR_RK_CD_01Props {
  margin?: DisplayProps['margin'];
  data: ProdRankingItemProps[];
  columns?: 1.5 | 2.5;
}

export const BR_RK_CD_01 = ({ margin, data, columns = 1.5 }: BR_RK_CD_01Props) => {
  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['prod-1', 'prod-3']);

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
    <Display margin={margin} title="BEST" tip="브랜드에서 가장 인기가 많은 품목이에요">
      <ProdRankingList
        variant="swiper"
        data={data}
        columns={columns}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
        showChange
      />
    </Display>
  );
};
BR_RK_CD_01.displayName = 'BR_RK_CD_01';
