// 컴포넌트
import { Tabs } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBNPD001_1Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    caption?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  products: ProdCardItemProps[];
  productProps?: {
    variant?: 'grid' | 'swiper';
    columns?: 2 | 2.5 | 3;
  };
}

export const MLBNPD001_1 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  banner,
  defaultTab,
  onTabChange,
  products,
  productProps,
}: MLBNPD001_1Props) => {
  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
  };

  // 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Banner {...refinedBanner} ratio="landscape" textInside textSize="4" flush />
      <Tabs
        data={tabs}
        variant="texts"
        className="ncp-mt-l"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />

      {products && (
        <ProdCardList
          data={products}
          variant={productProps?.variant ?? 'swiper'}
          columns={productProps?.columns ?? 2.5}
        />
      )}
    </Display>
  );
};
MLBNPD001_1.displayName = 'MLBNPD001_1';
