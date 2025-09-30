// 라이브러리
import { Fragment } from 'react';
// 컴포넌트
import { Carousel, Grid } from '@shared/ui';
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
  products?: ProdCardItemProps[];
}

export interface DMLBNPD003Props extends DisplayProps {
  layout?: 'list' | 'slide';
  data: SlideItem[];
}

export const DMLBNPD003 = ({
  layout = 'list',
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: DMLBNPD003Props) => {
  const renderItem = (item: SlideItem, index?: number) => {
    const { banner, products } = item;

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
      {data.length === 1 ? (
        renderItem(data[0])
      ) : layout === 'slide' ? (
        <Carousel
          slides={data.map((item, index) => renderItem(item, index))}
          slidesPerView={1.1}
          spaceBetween={8}
        />
      ) : (
        <Grid columns={1} gutter={32}>
          {data.map((item, index) => (
            <Grid.Item key={index}>{renderItem(item, index)}</Grid.Item>
          ))}
        </Grid>
      )}
    </Display>
  );
};

DMLBNPD003.displayName = 'DMLBNPD003';
