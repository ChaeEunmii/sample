import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerImage, TextWithColor } from '../banner/bannerType';

export interface MLBN036Props extends DisplayProps {
  data: {
    image: BannerImage;
    title?: TextWithColor;
    href: string;
  }[];
}

export const MLBN036 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN036Props) => {
  const refinedData = data.map(({ image, title, href }) => ({
    image,
    title,
    href,
  }));
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList
        variant={data.length < 3 ? 'grid' : 'swiper'}
        data={refinedData}
        columns={data.length >= 3 ? 2.5 : 2}
        bannerType="brand"
      />
    </Display>
  );
};
MLBN036.displayName = 'MLBN036';
