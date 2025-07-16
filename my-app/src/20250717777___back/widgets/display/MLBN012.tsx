import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerImage, TextWithColor } from '../banner/bannerType';

export interface MLBN012Props extends DisplayProps {
  data: {
    image?: BannerImage;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const MLBN012 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN012Props) => {
  const refinedData = data.map(({ image, title, href, ad }) => ({
    image,
    title,
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
      <BannerList variant="grid" data={refinedData} bannerType="ribbon" round gutter={8} />
    </Display>
  );
};
MLBN012.displayName = 'MLBN012';
