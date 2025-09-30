import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from './Display';

export interface MLLIVE002Props extends DisplayProps {
  data: {
    video?: {
      src: string;
      poster?: string;
      label?: string;
    };
    title?: React.ReactNode;
    onClick: () => void;
    live?: { status: 'live' | 'upcoming' | 'replay'; value: string | number };
    product?: { image: string; title: string; brand?: string; price?: number; href?: string };
  }[];
  live?: {};
}

export const MLLIVE002 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: MLLIVE002Props) => {
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
      />
    </Display>
  );
};
MLLIVE002.displayName = 'MLLIVE002';
