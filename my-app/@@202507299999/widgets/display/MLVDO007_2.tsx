import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';

export interface MLVDO007_2Props extends DisplayProps {
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

export const MLVDO007_2 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: MLVDO007_2Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList
        variant={data.length === 1 ? 'grid' : 'swiper'}
        data={data}
        {...(data.length !== 1 ? { columns: 1.2 } : {})}
        bannerType="live"
        textInside
        titleProps={{ titleLine: 1 }}
      />
    </Display>
  );
};
MLVDO007_2.displayName = 'MLVDO007_2';
