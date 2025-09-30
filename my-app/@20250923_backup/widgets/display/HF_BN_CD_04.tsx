// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface HF_BN_CD_04Props {
  margin?: DisplayProps['margin'];
  data: {
    image?: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
  }[];
}

export const HF_BN_CD_04 = ({ margin, data }: HF_BN_CD_04Props) => {
  const refinedData = data.map(({ image, title, subtitle, href }) => ({
    image,
    title,
    subtitle,
    href,
  }));

  return (
    <Display margin={margin}>
      <BannerList
        variant="grid"
        data={refinedData}
        bannerType="tall"
        columns={2}
        textInside
        bannerSize="small"
      />
    </Display>
  );
};
HF_BN_CD_04.displayName = 'HF_BN_CD_04';
