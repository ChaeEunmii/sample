import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface SF_VD_LI_01Props extends DisplayProps {
  columns?: 1 | 2;
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

export const SF_VD_LI_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  columns = 1,
  data,
}: SF_VD_LI_01Props) => {
  const isLarge = columns === 1;
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
        columns={columns}
        data={data}
        bannerType="live"
        textInside
        flush={isLarge}
        gutter={isLarge ? '20px' : '8px 16px'}
        titleProps={{ titleLine: 1 }}
        bannerSize={!isLarge ? 'small' : undefined}
      />
    </Display>
  );
};
SF_VD_LI_01.displayName = 'SF_VD_LI_01';
