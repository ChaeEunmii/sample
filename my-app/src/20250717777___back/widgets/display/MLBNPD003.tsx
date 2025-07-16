// 라이브러리
import { Fragment } from 'react';
// 컴포넌트
import { TitleBar, Carousel } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

interface SlideItem {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  prodTitle?: {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
  };
  products?: ProdCardItemProps[];
}

export interface MLBNPD003Props extends DisplayProps {
  data: SlideItem[];
}

export const MLBNPD003 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: MLBNPD003Props) => {
  const renderItem = (item: SlideItem, index?: number) => {
    const { banner, prodTitle, products } = item;

    // banner 정제
    const refinedBanner = {
      image: banner.image,
      title: banner.title,
      subtitle: banner.subtitle,
      href: banner.href,
      ad: banner.ad,
    };

    return (
      <Fragment key={index}>
        <Banner {...refinedBanner} ratio="portrait" textInside textSize="4" />
        {prodTitle && (
          <TitleBar type="module" title={prodTitle.title} subtitle={prodTitle.subtitle} level="2" />
        )}
        {products && <ProdCardList data={products} variant="grid" cardType="horizontal" />}
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
      {data.length > 1 ? (
        <Carousel
          slides={data.map((item, index) => renderItem(item, index))}
          slidesPerView={1.1}
          spaceBetween={8}
        />
      ) : (
        renderItem(data[0])
      )}
    </Display>
  );
};

MLBNPD003.displayName = 'MLBNPD003';
