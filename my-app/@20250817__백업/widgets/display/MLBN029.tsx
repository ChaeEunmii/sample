import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN029Props extends DisplayProps {
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    category?: string;
    href: string;
    ad?: boolean;
  }[];
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export const MLBN029 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN029Props) => {
  const refinedData = data.map(({ image, title, subtitle, category, href, ad }) => ({
    image,
    title,
    subtitle,
    category,
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
        bannerType="landscape"
      />
    </Display>
  );
};
MLBN029.displayName = 'MLBN029';
