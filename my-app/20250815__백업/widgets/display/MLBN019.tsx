import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, BannerTextAlign, TextWithColor } from '../banner/bannerType';

export interface MLBN019Props extends DisplayProps {
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
  dataOptions?: {
    align: BannerTextAlign;
  };
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export const MLBN019 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  dataOptions,
}: MLBN019Props) => {
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
        variant={data.length < 3 ? 'grid' : 'swiper'}
        data={refinedData}
        columns={data.length < 3 ? 2 : 2.5}
        bannerType="portrait"
        align={dataOptions?.align}
      />
    </Display>
  );
};
MLBN019.displayName = 'MLBN019';
