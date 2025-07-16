import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';

export interface MLVDO007_3Props extends DisplayProps {
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

export const MLVDO007_3 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: MLVDO007_3Props) => {
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
        columns={2}
        bannerType="live"
        textInside
        titleProps={{ oneLine: true }}
      />
    </Display>
  );
};
MLVDO007_3.displayName = 'MLVDO007_3';
