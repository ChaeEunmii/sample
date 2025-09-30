// 컴포넌트
import { BannerList } from '../banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerImage, TextWithColor } from '@widgets/banner/bannerType';

export interface CO_BN_LI_04Props extends DisplayProps {
  data: {
    image: BannerImage;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
  }[];
}

export const CO_BN_LI_04 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_LI_04Props) => {
  const refinedData = data.map(({ image, title, subtitle, href }) => ({
    image,
    title,
    subtitle,
    href,
  }));
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList data={refinedData} bannerType="thumbnail" boxed gutter={6} />
    </Display>
  );
};
CO_BN_LI_04.displayName = 'CO_BN_LI_04';
