// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_VD_COL2_01Props {
  margin?: DisplayProps['margin'];
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

export const HF_VD_COL2_01 = ({ margin, data }: HF_VD_COL2_01Props) => {
  const refinedData = data.map(({ video, onClick, title, subtitle, brand }) => ({
    video,
    onClick,
    title,
    subtitle,
    brand,
  }));
  console.log(refinedData);

  return (
    <Display margin={margin}>
      <BannerList
        variant="grid"
        data={refinedData}
        columns={2}
        bannerType="live"
        bannerSize="small"
        gutter="8px 16px"
      />
    </Display>
  );
};
HF_VD_COL2_01.displayName = 'HF_VD_COL2_01';
