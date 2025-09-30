'use client';

// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Tabs } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';

export interface CO_BTP_CD_01Props extends DisplayProps {
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  tabs: Array<{
    id: string;
    label: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  layout?: 'vert' | 'horiz' | 'horizM';
  products: ProdCardItemProps[];
}

export const CO_BTP_CD_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  banner,
  defaultTab,
  onTabChange,
  layout,
  products,
}: CO_BTP_CD_01Props) => {
  const refinedBanner = {
    image: banner.image,
    title: banner.title,
    subtitle: banner.subtitle,
    href: banner.href,
    ad: banner.ad,
  };

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['prod-1', 'prod-3']);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(productId) ? prev : [...prev, productId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== productId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

  // 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };

  // 레이아웃 설정
  const layoutConfigMap = {
    vert: {
      variant: 'swiper' as const,
      columns: 2.5,
      cardType: 'vertical' as const,
      cardSize: undefined,
    },
    horiz: {
      variant: 'grid' as const,
      columns: 1,
      cardType: 'horizontal' as const,
      cardSize: 'small' as const,
    },
    horizM: {
      variant: 'grid' as const,
      columns: 1,
      cardType: 'horizontal' as const,
      cardSize: undefined,
    },
  };
  const config = layoutConfigMap[layout ?? 'vert'];

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <Banner {...refinedBanner} textInside textSize="4" flush />
      <Tabs
        data={tabs}
        variant="divid"
        className="ncp-mt-s"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />
      {products && (
        <ProdCardList
          data={products}
          variant={config.variant}
          columns={config.columns}
          cardType={config.cardType}
          cardSize={config.cardSize}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
        />
      )}
    </Display>
  );
};
CO_BTP_CD_01.displayName = 'CO_BTP_CD_01';
