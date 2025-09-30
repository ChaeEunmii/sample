import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface DMLBN025_2Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
}

export const DMLBN025_2 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: DMLBN025_2Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <IconBanner data={data} columns={3} iconType="square" />
    </Display>
  );
};
DMLBN025_2.displayName = 'DMLBN025_2';
