import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface MLBN026Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  iconType?: 'round' | 'square';
}

export const MLBN026 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  iconType,
}: MLBN026Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 카테고리 탭 */}
      <IconBanner data={data} columns={4.5} variant="swiper" iconType={iconType} />
    </Display>
  );
};
MLBN026.displayName = 'MLBN026';
