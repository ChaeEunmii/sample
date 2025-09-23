import { HomefeedBanner } from '../banner/HomefeedBanner';
import { Display, DisplayProps } from '@widgets/display/Display';
import { BannerMedia } from '../banner/bannerType';

export interface HF_BN_CD_01Props {
  margin?: DisplayProps['margin'];
  title?: React.ReactNode;
  image?: BannerMedia;
  href?: string;
  bubbleText?: string;
}

export const HF_BN_CD_01 = ({ margin, title, image, href, bubbleText }: HF_BN_CD_01Props) => {
  return (
    <Display margin={margin}>
      {/* 카테고리 탭 */}
      <HomefeedBanner title={title} image={image} href={href} bubbleText={bubbleText} />
    </Display>
  );
};
HF_BN_CD_01.displayName = 'HF_BN_CD_01';
