// 컴포넌트
import { BannerList } from '@widgets/banner/BannerList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '@widgets/banner/bannerType';

export interface BR_BN_CD_06Props {
  margin?: DisplayProps['margin'];
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    href: string;
  }[];
}

export const BR_BN_CD_06 = ({ margin, data }: BR_BN_CD_06Props) => {
  const refinedData = data.map(({ image, title, href }) => ({
    image,
    title,
    href,
  }));

  return (
    <Display title="LOOKBOOK" margin={margin}>
      <BannerList variant="swiper" data={refinedData} columns={1.2} bannerType="landscape" />
    </Display>
  );
};
BR_BN_CD_06.displayName = 'BR_BN_CD_06';
