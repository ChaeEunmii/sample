// 컴포넌트
import { AccordionBanner } from '@widgets/banner/AccordionBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerImage } from '@widgets/banner/bannerType';

export interface CO_BN_LI_06Props extends DisplayProps {
  data: {
    title: string;
    subtitle?: React.ReactNode;
    image?: BannerImage;
  }[];
  defaultActive?: number;
}

export const CO_BN_LI_06 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  defaultActive,
}: CO_BN_LI_06Props) => {
  const refinedData = data.map(({ image, title, subtitle }) => ({
    image,
    title,
    subtitle,
  }));
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <AccordionBanner data={data} defaultActive={defaultActive} />
    </Display>
  );
};
CO_BN_LI_06.displayName = 'CO_BN_LI_06';
