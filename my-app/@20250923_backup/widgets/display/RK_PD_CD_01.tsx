// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdRankingList, ProdRankingItemProps } from '@widgets/product/ProdRankingList';
import { Button, ButtonArea } from '@/shared/ui';

export interface RK_PD_CD_01Props extends DisplayProps {
  data: ProdRankingItemProps[];
  columns?: 1.5 | 2.5;
}

export const RK_PD_CD_01 = ({
  margin,
  title,
  subtitle,
  moreUrl,
  data,
  columns = 1.5,
}: RK_PD_CD_01Props) => {
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
      <ProdRankingList
        variant="swiper"
        data={data}
        columns={columns}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
        showChange
        loop
      />
      <ButtonArea margin="1" align="center">
        <Button variant="tertiary" size="small" round>
          더보기
        </Button>
      </ButtonArea>
    </Display>
  );
};
RK_PD_CD_01.displayName = 'RK_PD_CD_01';
