import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface MLBN025_1Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  iconType?: 'round' | 'square';
}

export const MLBN025_1 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  iconType,
}: MLBN025_1Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 카테고리 탭 */}
      <IconBanner data={data} columns={4} iconType={iconType} />
    </Display>
  );
};
MLBN025_1.displayName = 'MLBN025_1';
