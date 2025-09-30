// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { BrandBanners, BrandBannersItem } from '@widgets/brand/BrandBanners';

export interface CO_BN_CD_11Props extends DisplayProps {
  data: BrandBannersItem[];
  showGem?: boolean;
}

export const CO_BN_CD_11 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  showGem = false,
}: CO_BN_CD_11Props) => {
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
CO_BN_CD_11.displayName = 'CO_BN_CD_11';
