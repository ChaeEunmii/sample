// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_CD_05Props extends DisplayProps {
  data: {
    image?: { src: string; alt?: string; figure?: boolean };
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
    emblem?: string;
    flag?: string[];
  }[];
  layout?: 'list' | 'slide';
}

export const CO_BN_CD_05 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  layout = 'list',
}: CO_BN_CD_05Props) => {
  const refinedData = data.map(({ image, title, subtitle, href, ad, emblem, flag }) => ({
    image,
    title,
    subtitle,
    href,
    ad,
    emblem,
    flag,
  }));

  const isSlide = data.length > 1 && layout === 'slide';
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList
        variant={isSlide ? 'swiper' : 'grid'}
        data={refinedData}
        columns={isSlide ? 1.2 : 1}
        bannerType="square"
        gutter={24}
        titleProps={{
          titleLine: 1,
          subtitleLine: 5,
        }}
      />
    </Display>
  );
};
CO_BN_CD_05.displayName = 'CO_BN_CD_05';
