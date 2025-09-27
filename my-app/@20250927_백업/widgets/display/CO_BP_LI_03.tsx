'use client';

import { useState } from 'react';
// 컴포넌트
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface CO_BP_LI_03Props extends DisplayProps {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
    emblem?: string;
  };
  products?: ProdCardItemProps[];
}

export const CO_BP_LI_03 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  banner,
  products = [],
}: CO_BP_LI_03Props) => {
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...prev, productId] : prev.filter((id) => id !== productId)
    );
  };

  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    href: banner.href,
    ad: banner.ad,
    emblem: banner.emblem,
  };

  const isSwiper = products.length >= 4;

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Banner {...refinedBanner} titleProps={{ titleLine: 3 }} textSize="2" />
      <ProdCardList
        data={products}
        variant={isSwiper ? 'swiper' : 'grid'}
        cardType="horizontal"
        cardSize="small"
        rows={isSwiper ? 3 : undefined}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};

CO_BP_LI_03.displayName = 'CO_BP_LI_03';
