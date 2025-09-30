// 컴포넌트
import { FullBanner } from '@widgets/banner/FullBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia } from '@widgets/banner/bannerType';

export interface CO_BN_LI_03Props {
  margin?: DisplayProps['margin'];
  data: {
    image: BannerMedia;
    href?: string;
  }[];
}

export const CO_BN_LI_03 = ({ margin, data }: CO_BN_LI_03Props) => {
  return (
    <Display margin={margin}>
      <FullBanner data={data} />
    </Display>
  );
};
CO_BN_LI_03.displayName = 'CO_BN_LI_03';
