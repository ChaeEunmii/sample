import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerImage, TextWithColor } from '../banner/bannerType';

export interface MLBN030Props extends DisplayProps {
  data: {
    image: BannerImage;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
  }[];
}

export const MLBN030 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN030Props) => {
  const refinedData = data.map(({ image, title, subtitle, href }) => ({
    image,
    title,
    subtitle,
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
      <BannerList data={refinedData} bannerType="thumbnail" />
    </Display>
  );
};
MLBN030.displayName = 'MLBN030';
