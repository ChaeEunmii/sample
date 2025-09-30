import { TagBanner } from '@widgets/banner/TagBanner';
import { Display, DisplayProps } from './Display';
import { TextWithColor } from '../banner/bannerType';

export interface MLBN023Props extends DisplayProps {
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
}

export const MLBN023 = ({ title, subtitle, moreUrl, titleAlign, margin, data }: MLBN023Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 카테고리 탭 */}
      <TagBanner data={data} />
    </Display>
  );
};
MLBN023.displayName = 'MLBN023';
