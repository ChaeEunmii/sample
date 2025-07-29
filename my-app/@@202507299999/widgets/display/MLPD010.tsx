import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLPD010Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    tag?: string;
    flag?: string[];
    href: string;
    ad?: boolean;
  }[];
}

export const MLPD010 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLPD010Props) => {
  const refinedData = data.map(({ image, title, subtitle, tag, flag, href, ad }) => ({
    image,
    title,
    subtitle,
    tag,
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
        {...(data.length !== 1 ? { columns: 1.5 } : {})}
        bannerType="square"
      />
    </Display>
  );
};
MLPD010.displayName = 'MLPD010';
