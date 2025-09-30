import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerImage, TextWithColor } from '../banner/bannerType';

export interface MLBN005Props extends DisplayProps {
  data: {
    image?: BannerImage;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const MLBN005 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN005Props) => {
  const refinedData = data.map(({ image, title, subtitle, href, ad }) => ({
    image,
    title,
    subtitle,
    href,
    ad,
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
        variant={refinedData.length < 4 ? 'grid' : 'swiper'}
        data={refinedData}
        bannerType="standard"
        pagination="bullet"
        {...(refinedData.length < 4 ? { gutter: 8 } : {})}
        boxing
      />
    </Display>
  );
};
MLBN005.displayName = 'MLBN005';
