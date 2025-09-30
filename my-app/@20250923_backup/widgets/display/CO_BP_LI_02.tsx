'use client';

// 라이브러리
import { useState, Fragment } from 'react';
// 컴포넌트
import { Carousel, Grid } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

interface SlideItem {
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

export interface CO_BP_LI_02Props extends DisplayProps {
  data: SlideItem[];
  columns: 1 | 1.5;
}

export const CO_BP_LI_02 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  columns,
}: CO_BP_LI_02Props) => {
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...prev, productId] : prev.filter((id) => id !== productId)
    );
  };

  const renderItem = (item: SlideItem, index?: number) => {
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
        <Banner {...refinedBanner} ratio="portrait" textInside textSize="4" />
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
      {data.length === 1 ? (
        renderItem(data[0])
      ) : columns === 1.5 ? (
        <Carousel
          slides={data.map((item, index) => renderItem(item, index))}
          slidesPerView={1.1}
          spaceBetween={8}
        />
      ) : (
        <Grid columns={1} gutter={24}>
          {data.map((item, index) => (
            <Grid.Item key={index}>{renderItem(item, index)}</Grid.Item>
          ))}
        </Grid>
      )}
    </Display>
  );
};

CO_BP_LI_02.displayName = 'CO_BP_LI_02';
