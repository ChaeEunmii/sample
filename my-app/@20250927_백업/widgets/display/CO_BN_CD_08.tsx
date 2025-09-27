// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_CD_08Props extends DisplayProps {
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    tag?: string;
    flag?: string[];
    href: string;
    ad?: boolean;
    emblem?: string;
  }[];
}

export const CO_BN_CD_08 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_CD_08Props) => {
  const refinedData = data.map(({ image, title, tag, flag, href, ad, emblem }) => ({
    image,
    title,
    tag,
    flag,
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
        {...(data.length !== 1 ? { columns: 1.5 } : {})}
        bannerType="square"
        titleProps={{ titleLine: 1 }}
      />
    </Display>
  );
};
CO_BN_CD_08.displayName = 'CO_BN_CD_08';
