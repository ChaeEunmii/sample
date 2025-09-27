'use client';

import { useState } from 'react';
// 컴포넌트
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface CO_BP_CD_01Props extends DisplayProps {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
    emblem?: string;
  };
  products?: ProdCardItemProps[];
  layout?: 'vert' | 'horiz';
}

export const CO_BP_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  banner,
  products,
  layout,
}: CO_BP_CD_01Props) => {
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

  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
    emblem: banner.emblem,
  };

  // 레이아웃 설정
  const layoutConfigMap = {
    horiz: {
      variant: 'grid' as const,
      columns: 1,
      cardType: 'horizontal' as const,
      cardSize: 'small' as const,
    },
    vert: {
      variant: 'swiper' as const,
      columns: 2.5,
      cardType: 'vertical' as const,
      cardSize: undefined,
    },
  };
  const config = layoutConfigMap[layout ?? 'vert'];

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Banner {...refinedBanner} textInside textSize="4" flush />
      {products && (
        <ProdCardList
          data={products}
          variant={config.variant}
          columns={config.columns}
          cardType={config.cardType}
          cardSize={config.cardSize}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
          className="ncp-mt-s"
        />
      )}
    </Display>
  );
};
CO_BP_CD_01.displayName = 'CO_BP_CD_01';
