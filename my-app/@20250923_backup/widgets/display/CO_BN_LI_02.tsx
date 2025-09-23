// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerImage, TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_LI_02Props extends DisplayProps {
  data: {
    image?: BannerImage;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const CO_BN_LI_02 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_LI_02Props) => {
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
        variant={refinedData.length < 4 ? 'grid' : 'swiper'}
        data={refinedData}
        bannerType="standard"
        pagination="bullet"
        {...(refinedData.length < 4 ? { gutter: 8 } : {})}
        boxing
      />
    </Display>
  );
};
CO_BN_LI_02.displayName = 'CO_BN_LI_02';
