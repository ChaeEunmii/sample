import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';

export interface MLVDO007_1Props extends DisplayProps {
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

export const MLVDO007_1 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: MLVDO007_1Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList
        variant="grid"
        data={data}
        bannerType="live"
        textInside
        flush
        titleProps={{ titleLine: 1 }}
      />
    </Display>
  );
};
MLVDO007_1.displayName = 'MLVDO007_1';
