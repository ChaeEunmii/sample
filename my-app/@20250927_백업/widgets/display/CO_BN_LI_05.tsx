// 컴포넌트
import { TypographBanner } from '@widgets/banner/TypographBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerImage } from '@widgets/banner/bannerType';

export interface CO_BN_LI_05Props extends DisplayProps {
  data: {
    image: BannerImage;
    text: string;
    href: string;
  }[];
}

export const CO_BN_LI_05 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: CO_BN_LI_05Props) => {
  const refinedData = data.map(({ image, text, href }) => ({
    image,
    text,
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
      <TypographBanner data={refinedData} />
    </Display>
  );
};
CO_BN_LI_05.displayName = 'CO_BN_LI_05';
