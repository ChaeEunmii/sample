import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor, BannerTextAlign } from '../banner/bannerType';

export interface MLBN010Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
  dataOptions?: {
    align: BannerTextAlign;
  };
}

export const MLBN010 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  dataOptions,
}: MLBN010Props) => {
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
        variant={data.length === 1 ? 'grid' : 'activeScale'}
        data={refinedData}
        bannerType="portrait"
        align={dataOptions?.align}
      />
    </Display>
  );
};
MLBN010.displayName = 'MLBN010';
