import { TypographBanner } from '@widgets/banner/TypographBanner';
import { Display, DisplayProps } from './Display';
import { BannerImage } from '../banner/bannerType';

export interface MLBN041Props extends DisplayProps {
  data: {
    image: BannerImage;
    text: string;
    href: string;
  }[];
}

export const MLBN041 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN041Props) => {
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
MLBN041.displayName = 'MLBN041';
