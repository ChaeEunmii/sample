'use client';

import { Fragment, useState } from 'react';
// 컴포넌트
import { Button, ButtonArea } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

interface GroupItem {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
    emblem?: string;
  };
  products?: ProdCardItemProps[];
}

export interface CO_BP_LI_01Props extends DisplayProps {
  data: GroupItem[];
}

export const CO_BP_LI_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data = [],
}: CO_BP_LI_01Props) => {
  const [index, setIndex] = useState(0);
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...prev, productId] : prev.filter((id) => id !== productId)
    );
  };

  const handleMoreClick = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const current = data[index];

  const renderItem = (item: GroupItem, index?: number) => {
    const { banner, products } = item;

    // banner 정제
    const refinedBanner = {
      image: banner.image,
      title: banner.title,
      subtitle: banner.subtitle,
      href: banner.href,
      ad: banner.ad,
      emblem: banner.emblem,
    };

    return (
      <Fragment key={index}>
        <Banner {...refinedBanner} textInside textSize="4" />
        {products && (
          <ProdCardList
            data={products}
            variant="grid"
            cardType="horizontal"
            cardSize="small"
            wishlist={{
              activeIds: wishlistIds,
              onToggle: handleWishlistToggle,
            }}
            className="ncp-mt-s"
          />
        )}
      </Fragment>
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
      {current && <>{renderItem(current, index)}</>}

      {data.length > 1 && (
        <ButtonArea margin="1" align="center">
          <Button
            size="small"
            suffixIcon="refresh"
            variant="tertiary"
            round
            onClick={handleMoreClick}
          >
            새로보기
          </Button>
        </ButtonArea>
      )}
    </Display>
  );
};
CO_BP_LI_01.displayName = 'CO_BP_LI_01';
