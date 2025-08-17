import { TextBanner } from '@widgets/banner/TextBanner';
import { Display, DisplayProps } from './Display';

export interface MLBCT001Props extends DisplayProps {
  data: {
    title: string;
    href: string;
  }[];
  withBg?: boolean;
}

export const MLBCT001 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  withBg,
}: MLBCT001Props) => {
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
      <TextBanner data={refinedData} variant="boxed" color={withBg ? 'white' : 'gray'} />
    </Display>
  );
};
MLBCT001.displayName = 'MLBCT001';
