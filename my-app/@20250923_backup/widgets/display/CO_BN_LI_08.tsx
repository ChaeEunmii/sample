// 컴포넌트
import { BenefitBanner } from '@widgets/banner/BenefitBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerImage } from '@widgets/banner/bannerType';

export interface CO_BN_LI_08Props {
  margin?: DisplayProps['margin'];
  data: {
    title: string;
    subtitle?: React.ReactNode;
    description?: React.ReactNode[];
    image?: BannerImage;
  };
}

export const CO_BN_LI_08 = ({ margin, data }: CO_BN_LI_08Props) => {
  return (
    <Display margin={margin}>
      <BenefitBanner {...data} />
    </Display>
  );
};
CO_BN_LI_08.displayName = 'CO_BN_LI_08';
