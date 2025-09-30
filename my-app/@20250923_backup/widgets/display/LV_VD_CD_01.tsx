import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface LV_VD_CD_01Props extends DisplayProps {
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

export const LV_VD_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: LV_VD_CD_01Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <BannerList variant="swiper" data={data} columns={1.2} bannerType="live" prodInside />
    </Display>
  );
};
LV_VD_CD_01.displayName = 'LV_VD_CD_01';
