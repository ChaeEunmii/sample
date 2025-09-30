import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface DMLBN024Props extends DisplayProps {
  layout?: 'list' | 'slide';
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
}

export const DMLBN024 = ({
  layout = 'list',
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: DMLBN024Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 카테고리 탭 */}
      <IconBanner
        data={data}
        columns={layout === 'slide' ? 4.5 : 5}
        variant={layout === 'slide' ? 'swiper' : undefined}
        iconType="square"
      />
    </Display>
  );
};
DMLBN024.displayName = 'DMLBN024';
