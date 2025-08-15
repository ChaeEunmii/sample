'use client';

import { useState } from 'react';
// 컴포넌트
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface DMLBNPD009Props extends DisplayProps {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  products?: ProdCardItemProps[];
}

export const DMLBNPD009 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  banner,
  products = [],
}: DMLBNPD009Props) => {
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...prev, productId] : prev.filter((id) => id !== productId)
    );
  };

  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
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
        rows={isSwiper ? 3 : undefined}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};

DMLBNPD009.displayName = 'DMLBNPD009';
