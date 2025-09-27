import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCountList, ProdCountItemProps } from '@widgets/product/ProdCountList';

export interface TM_PD_CD_01Props extends DisplayProps {
  data: Omit<ProdCountItemProps, 'period'>[];
}

export const TM_PD_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: TM_PD_CD_01Props) => {
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <ProdCountList
        data={data}
        variant={data.length === 1 ? 'grid' : 'swiper'}
        countType="inline"
        {...(data.length !== 1 ? { columns: 1.5 } : {})}
        gutter="8px 24px"
        wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
      />
    </Display>
  );
};
TM_PD_CD_01.displayName = 'TM_PD_CD_01';
