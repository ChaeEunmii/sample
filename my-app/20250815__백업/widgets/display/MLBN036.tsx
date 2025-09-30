import { useState } from 'react';
import { Display, DisplayProps } from './Display';
import { BrandBanners, BrandBannersItem } from '@widgets/brand/BrandBanners';

export interface MLBN036Props extends DisplayProps {
  data: BrandBannersItem[];
  showGem?: boolean;
}

export const MLBN036 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  showGem = false,
}: MLBN036Props) => {
  const [activeIds, setActiveIds] = useState<(string | number)[]>(['brand-1', 'brand-3']);

  const wishlist = showGem
    ? {
        activeIds,
        onToggle: (productId: string | number, isActive: boolean) => {
          setActiveIds((prev) =>
            isActive ? [...prev, productId] : prev.filter((id) => id !== productId)
          );
          console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
        },
      }
    : undefined;

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BrandBanners data={data} wishlist={wishlist} />
    </Display>
  );
};
MLBN036.displayName = 'MLBN036';
