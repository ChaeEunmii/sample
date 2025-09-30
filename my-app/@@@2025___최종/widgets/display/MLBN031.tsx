import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBN031Props extends DisplayProps {
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    flag?: string[];
    href: string;
    ad?: boolean;
  }[];
}

export const MLBN031 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN031Props) => {
  const refinedData = data.map(({ image, title, subtitle, flag, href, ad }) => ({
    image,
    title,
    subtitle,
    flag,
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
MLBN031.displayName = 'MLBN031';
