// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_CD_04Props extends DisplayProps {
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
    emblem?: string;
  }[];
}

export const CO_BN_CD_04 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_CD_04Props) => {
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
        variant={data.length === 1 ? 'grid' : 'swiper'}
        data={refinedData}
        {...(data.length !== 1 ? { columns: 1.2 } : {})}
        bannerType="portrait"
      />
    </Display>
  );
};
CO_BN_CD_04.displayName = 'CO_BN_CD_04';
