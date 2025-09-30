// 컴포넌트
import { TitleBar } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBNPD002Props extends DisplayProps {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  prodTitle?: {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
  };
  products?: ProdCardItemProps[];
}

export const MLBNPD002 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  banner,
  prodTitle,
  products,
}: MLBNPD002Props) => {
  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
  };
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Banner {...refinedBanner} ratio="landscape" textInside textSize="4" />
      {prodTitle && (
        <TitleBar type="module" title={prodTitle.title} subtitle={prodTitle.subtitle} level="2" />
      )}
      {products && (
        <ProdCardList
          data={products}
          variant="grid"
          cardType="horizontal"
          moreCount={3}
          showCounter
        />
      )}
    </Display>
  );
};
MLBNPD002.displayName = 'MLBNPD002';
