import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN017Props extends DisplayProps {
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export const MLBN017 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN017Props) => {
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
        variant={data.length === 1 ? 'grid' : 'swiper'}
        data={refinedData}
        {...(data.length !== 1 ? { columns: 1.2 } : {})}
        bannerType="portrait"
      />
    </Display>
  );
};
MLBN017.displayName = 'MLBN017';
