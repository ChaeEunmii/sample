import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN011Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
    color?: string; // ribbon banner color
  }[];
}

export const MLBN011 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN011Props) => {
  const refinedData = data.map(({ image, title, href, ad, color }) => ({
    image,
    title,
    href,
    ad,
    color,
  }));

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList variant="swiper" data={refinedData} bannerType="ribbon" boxing />
    </Display>
  );
};
MLBN011.displayName = 'MLBN011';
