// 컴포넌트
import { Grid } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { CampaignBanner } from '@widgets/banner/CampaignBanner';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface CO_BN_LI_10Props {
  /** Display 여백 옵션 */
  margin?: DisplayProps['margin'];
  /** 배너 데이터 */
  data: {
    image: BannerMedia;
    title?: TextWithColor;
    href: string;
  }[];
}

export const CO_BN_LI_10 = ({ margin, data }: CO_BN_LI_10Props) => {
  const refinedData = data.map(({ image, title, href }) => ({
    image,
    title: title?.text,
    href,
  }));

  return (
    <Display margin={margin}>
      <Grid gutter={16}>
        {refinedData.map((item, idx) => (
          <CampaignBanner key={idx} {...item} />
        ))}
      </Grid>
    </Display>
  );
};

CO_BN_LI_10.displayName = 'CO_BN_LI_10';
