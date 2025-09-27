// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface BR_BN_CD_08Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  }[];
}

export const BR_BN_CD_08 = ({ title, subtitle, moreUrl, margin, data }: BR_BN_CD_08Props) => {
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
        variant={data.length === 1 ? 'grid' : 'activeScale'}
        data={refinedData}
        bannerType="portrait"
        align="center"
      />
    </Display>
  );
};
BR_BN_CD_08.displayName = 'BR_BN_CD_08';
