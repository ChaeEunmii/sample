import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface MLBN024Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  iconType?: 'round' | 'square';
}

export const MLBN024 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  iconType,
}: MLBN024Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 카테고리 탭 */}
      <IconBanner data={data} columns={5} iconType={iconType} />
    </Display>
  );
};
MLBN024.displayName = 'MLBN024';
