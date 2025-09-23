// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';

export interface CO_PD_COL2_02Props extends DisplayProps {
  data: ProdCardItemProps[];
  layout?: 'vert2' | 'vert3' | 'horizS';
}

export const CO_PD_COL2_02 = ({
  margin,
  title,
  subtitle,
  moreUrl,
  data,
  layout,
}: CO_PD_COL2_02Props) => {
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

  // 레이아웃 설정
  const layoutConfigMap = {
    vert2: { columns: 2, cardType: 'vertical' as const, cardSize: undefined, defaultCount: 4 },
    vert3: { columns: 3, cardType: 'vertical' as const, cardSize: undefined, defaultCount: 6 },
    horizS: {
      columns: 1,
      cardType: 'horizontal' as const,
      defaultCount: 3,
      cardSize: 'small' as const,
    },
  };
  const config = layoutConfigMap[layout ?? 'vert2'];

  return (
    <Display margin={margin} title={title} subtitle={subtitle} moreUrl={moreUrl}>
      <ProdCardList
        data={data}
        columns={config.columns}
        cardType={config.cardType}
        cardSize={config.cardSize}
        defaultCount={config.defaultCount}
        moreCount={6}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};
CO_PD_COL2_02.displayName = 'CO_PD_COL2_02';
