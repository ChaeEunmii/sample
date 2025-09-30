import { BannerList } from '../banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerImage, TextWithColor } from '../banner/bannerType';

export interface MLBN038Props extends DisplayProps {
  data: {
    image: BannerImage;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
  }[];
}

export const MLBN038 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN038Props) => {
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
      <BannerList data={refinedData} bannerType="thumbnail" boxed gutter={6} />
    </Display>
  );
};
MLBN038.displayName = 'MLBN038';
