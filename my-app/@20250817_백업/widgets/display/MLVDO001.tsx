import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';

export interface MLVDO001Props extends DisplayProps {
  data: {
    video?: {
      src: string;
      poster?: string;
      label?: string;
    };
    title?: React.ReactNode;
    onClick: () => void;
  }[];
  variant?: 'grid' | 'swiper';
  columns?: 1 | 2 | 2.5;
}

export const MLVDO001 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  variant = 'swiper',
  columns = 2.5,
}: MLVDO001Props) => {
  const refinedData = data.map(({ video, title, onClick }) => ({
    video,
    title,
    onClick,
  }));

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList
        variant={data.length < 3 ? 'grid' : variant}
        data={refinedData}
        columns={data.length === 1 ? 1 : data.length === 2 ? 2 : columns}
        bannerType="live"
        textSize="2"
      />
    </Display>
  );
};
MLVDO001.displayName = 'MLVDO001';
