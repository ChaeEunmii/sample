import { TextBanner } from '@widgets/banner/TextBanner';
import { Display, DisplayProps } from './Display';

export interface MLBN032Props extends DisplayProps {
  data: {
    title: string;
    href: string;
  }[];
}

export const MLBN032 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN032Props) => {
  const refinedData = data.map(({ title, href }) => ({
    title,
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
      <TextBanner data={refinedData} />
    </Display>
  );
};
MLBN032.displayName = 'MLBN032';
