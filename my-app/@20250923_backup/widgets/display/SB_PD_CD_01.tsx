// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdVolList, ProdVolItemProps } from '@widgets/product/ProdVolList';

export interface SB_PD_CD_01Props extends DisplayProps {
  data: ProdVolItemProps[];
  columns: 1.5 | 2;
}

export const SB_PD_CD_01 = ({
  margin,
  title,
  subtitle,
  moreUrl,
  data,
  columns,
}: SB_PD_CD_01Props) => {
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

  const showColumns = data.length > 1 ? columns : undefined;
  const displayType = data.length > 1 ? (columns === 2 ? 'grid' : 'swiper') : 'grid';
  const swiperMode = data.length > 1 && columns === 1.5;

  return (
    <Display margin={margin} title={title} subtitle={subtitle} moreUrl={moreUrl}>
      <ProdVolList
        data={data}
        variant={displayType}
        columns={showColumns}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
        centered={swiperMode}
        loop={swiperMode}
      />
    </Display>
  );
};
SB_PD_CD_01.displayName = 'SB_PD_CD_01';
