// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';

export interface CO_PD_COL2_01Props extends DisplayProps {
  data: ProdCardItemProps[];
  columns: 1 | 2;
}

export const CO_PD_COL2_01 = ({
  margin,
  title,
  subtitle,
  moreUrl,
  data,
  columns,
}: CO_PD_COL2_01Props) => {
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
    <Display margin={margin} title={title} subtitle={subtitle} moreUrl={moreUrl}>
      <ProdCardList
        data={data}
        columns={columns}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};
CO_PD_COL2_01.displayName = 'CO_PD_COL2_01';
