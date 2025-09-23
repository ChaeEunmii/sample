// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_LI_01Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
    emblem?: string;
  }[];
  layout?: 'list' | 'slide';
}

export const CO_BN_LI_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  layout = 'list',
}: CO_BN_LI_01Props) => {
  const refinedData = data.map(({ image, title, subtitle, href, ad, emblem }) => ({
    image,
    title,
    subtitle,
    href,
    ad,
    emblem,
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
        flush
        {...(data.length > 1 && layout === 'slide'
          ? { bannerType: 'landscape', pagination: 'bullet' }
          : {})}
      />
    </Display>
  );
};
CO_BN_LI_01.displayName = 'CO_BN_LI_01';
