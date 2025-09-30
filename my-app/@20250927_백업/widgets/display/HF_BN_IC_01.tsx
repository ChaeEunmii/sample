import { IconBanner } from '@widgets/banner/IconBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
import { TextWithColor } from '../banner/bannerType';

export interface HF_BN_IC_01Props {
  margin?: DisplayProps['margin'];
  data: {
    image: string;
    title: TextWithColor;
    href: string;
  }[];
  iconType?: 'round' | 'square';
}

export const HF_BN_IC_01 = ({ margin, data, iconType }: HF_BN_IC_01Props) => {
  return (
    <Display margin={margin}>
      {/* 카테고리 탭 */}
      <IconBanner data={data} columns={4.5} variant="swiper" iconType={iconType} />
    </Display>
  );
};
HF_BN_IC_01.displayName = 'HF_BN_IC_01';
