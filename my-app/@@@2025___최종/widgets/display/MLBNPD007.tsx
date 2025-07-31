// 컴포넌트
import { Tabs } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface MLBNPD007Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  products?: ProdCardItemProps[];
  productProps?: {
    cardType?: 'horizontal' | 'vertical';
  };
}

export const MLBNPD007 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  defaultTab,
  onTabChange,
  banner,
  products,
  productProps = { cardType: 'vertical' },
}: MLBNPD007Props) => {
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
      <Tabs
        data={tabs}
        variant="buttons"
        className="ncp-mt-l"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />
      <Banner {...refinedBanner} ratio="portrait" textInside textSize="4" />
      {products && (
        <ProdCardList
          data={products}
          variant="grid"
          columns={productProps.cardType === 'vertical' ? 3 : 1}
          cardType={productProps.cardType}
        />
      )}
    </Display>
  );
};
MLBNPD007.displayName = 'MLBNPD007';
