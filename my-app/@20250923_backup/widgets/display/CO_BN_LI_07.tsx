import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface CO_BN_LI_07Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    href: string;
    ad?: boolean;
    color?: string; // ribbon banner color
  }[];
  layout?: 'list' | 'slide';
}

export const CO_BN_LI_07 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  layout = 'list',
}: CO_BN_LI_07Props) => {
  const refinedData = data.map(({ image, title, href, ad, color }) => ({
    image,
    title,
    href,
    ad,
    color,
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
        variant={data.length > 1 && layout === 'slide' ? 'swiper' : 'grid'}
        data={refinedData}
        bannerType="ribbon"
        gutter={8}
        boxing
      />
    </Display>
  );
};
CO_BN_LI_07.displayName = 'CO_BN_LI_07';
