// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdTiles, ProdTilesProps } from '@widgets/product/ProdTiles';

export interface CO_PD_MS_01Props extends DisplayProps {
  data: ProdTilesProps['data'];
}

export const CO_PD_MS_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_PD_MS_01Props) => {
  const [wishlist, setWishlist] = useState<string[]>(['product-2']);

  const handleWishlistToggle = (productId: string, isActive: boolean) => {
    setWishlist((prev) => {
      if (isActive) {
        return [...prev, productId];
      } else {
        return prev.filter((id) => id !== productId);
      }
    });
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <ProdTiles
        data={data}
        pattern="1"
        wishlist={{
          activeIds: wishlist,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};
CO_PD_MS_01.displayName = 'CO_PD_MS_01';
