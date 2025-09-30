'use client';

// 컴포넌트
import { useState } from 'react';
import { Button, ButtonArea } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface DMLBNPD002Props extends DisplayProps {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  products?: ProdCardItemProps[][];
}

export const DMLBNPD002 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  banner,
  products = [],
}: DMLBNPD002Props) => {
  const [index, setIndex] = useState(0);

  const handleMoreClick = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const currentProducts = products[index] ?? [];

  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Banner {...refinedBanner} textSize="3" />
      {currentProducts.length > 0 && (
        <ProdCardList
          data={currentProducts}
          variant="grid"
          cardType="horizontal"
          className="ncp-mt-l"
        />
      )}
      {products.length > 1 && (
        <ButtonArea margin="2" align="center">
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
DMLBNPD002.displayName = 'DMLBNPD002';
