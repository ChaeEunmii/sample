import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface DMLBN025_1Props extends DisplayProps {
  layout?: 'list' | 'more';
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
}

export const DMLBN025_1 = ({
  layout = 'list',
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: DMLBN025_1Props) => {
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
        columns={4}
        iconType="square"
        variant={layout === 'more' ? 'more' : undefined}
      />
    </Display>
  );
};
DMLBN025_1.displayName = 'DMLBN025_1';
