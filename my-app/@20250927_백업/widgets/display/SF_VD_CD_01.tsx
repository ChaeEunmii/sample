import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface SF_VD_CD_01Props extends DisplayProps {
  columns?: 1.5 | 2.5;
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

export const SF_VD_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  columns = 1.5,
  data,
}: SF_VD_CD_01Props) => {
  const isLarge = columns === 1.5;
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
        columns={columns - 0.2}
        data={isLarge ? data : data.map(({ brand, subtitle, ...rest }) => rest)}
        bannerType="live"
        textInside
        gutter={isLarge ? '20px' : '8px 16px'}
        titleProps={{ titleLine: 1 }}
        bannerSize={!isLarge ? 'small' : undefined}
      />
    </Display>
  );
};
SF_VD_CD_01.displayName = 'SF_VD_CD_01';
