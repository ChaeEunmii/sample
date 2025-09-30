import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN007Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const MLBN007 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN007Props) => {
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
      <BannerList
        variant="grid"
        data={refinedData}
        columns={2}
        bannerType="square"
        textSize="1"
        textSpacing="out1"
      />
    </Display>
  );
};
MLBN007.displayName = 'MLBN007';
