// 컴포넌트
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBNPD001_2Props extends DisplayProps {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  products?: ProdCardItemProps[];
  productProps?: {
    columns?: 1.5 | 2.5;
    cardType?: 'horizontal' | 'vertical';
    /** 카드 사이즈(type = horizontal일 때에만 사용) */
    cardSize?: 'small' | 'medium';
  };
}

export const MLBNPD001_2 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  banner,
  products,
  productProps,
}: MLBNPD001_2Props) => {
  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
  };

  const isHorizontal = products && productProps?.cardType === 'horizontal';
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Banner {...refinedBanner} ratio="landscape" textInside textSize="4" flush />
      {products && (
        <ProdCardList
          data={products}
          variant={isHorizontal && products.length <= 2 ? 'grid' : 'swiper'}
          columns={isHorizontal ? 1 : (productProps?.columns ?? 2.5)}
          cardType={productProps?.cardType}
          cardSize={productProps?.cardSize}
          rows={isHorizontal && products.length > 2 ? 2 : undefined}
        />
      )}
    </Display>
  );
};
MLBNPD001_2.displayName = 'MLBNPD001_2';
