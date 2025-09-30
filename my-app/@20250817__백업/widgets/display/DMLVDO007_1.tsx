import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';

export interface DMLVDO007_1Props extends DisplayProps {
  layout?: 'list' | 'slide';
  columns?: number;
  data: {
    video?: {
      src: string;
      poster?: string;
      label?: string;
    };
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    onClick: () => void;
    brand?: { image: string; name: string };
  }[];
}

export const DMLVDO007_1 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  layout = 'list',
  columns = 1,
  data,
}: DMLVDO007_1Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList
        variant={layout === 'list' ? 'grid' : 'swiper'}
        columns={layout === 'list' ? columns : 1.5}
        data={data}
        bannerType="live"
        textInside
        flush={layout === 'list' && columns === 1 ? true : false}
        gutter={columns === 1 ? '20px' : '8px 16px'}
        titleProps={{ titleLine: 1 }}
      />
    </Display>
  );
};
DMLVDO007_1.displayName = 'DMLVDO007_1';
