// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface BR_BN_CD_07Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const BR_BN_CD_07 = ({ title, subtitle, moreUrl, margin, data }: BR_BN_CD_07Props) => {
  const refinedData = data.map(({ image, title, subtitle, href, ad }) => ({
    image,
    title,
    subtitle,
    href,
    ad,
  }));
  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      <BannerList
        variant={refinedData.length > 1 ? 'swiper' : 'grid'}
        data={refinedData}
        bannerType="landscape"
        textInside
        textSize="4"
        boxing
        {...(refinedData.length > 1 ? { pagination: 'bullet' } : {})}
      />
    </Display>
  );
};
BR_BN_CD_07.displayName = 'BR_BN_CD_07';
