// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Button, ButtonArea, Tabs } from '@shared/ui';
import { Banner } from '@widgets/banner/Banner';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from '@widgets/display/Display';
// 타입
import { BannerMedia, TextWithColor } from '../banner/bannerType';
export interface CO_TB_GD_02Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  layout?: 'vert' | 'horiz';
  banner: {
    image: BannerMedia;
    title?: TextWithColor;
    subtitle?: TextWithColor;
    href: string;
    ad?: boolean;
  };
  products?: ProdCardItemProps[];
}

export const CO_TB_GD_02 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  defaultTab,
  onTabChange,
  layout,
  banner,
  products,
}: CO_TB_GD_02Props) => {
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
    horiz: {
      bannerRatio: 'landscape' as const,
      columns: 1,
      cardType: 'horizontal' as const,
      cardSize: 'small' as const,
    },
    vert: {
      bannerRatio: 'square' as const,
      columns: 3,
      cardType: 'vertical' as const,
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
      <Tabs
        data={tabs}
        variant="buttons"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />
      <Banner
        {...refinedBanner}
        ratio={config.bannerRatio}
        titleProps={{ titleLine: 1 }}
        textInside
        textSize="4"
      />
      {products && (
        <ProdCardList
          data={products}
          variant="grid"
          columns={config.columns}
          cardType={config.cardType}
          cardSize={config.cardSize}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
          className="ncp-mt-s"
        />
      )}
      <ButtonArea margin="1">
        <Button variant="tertiary">추천 상품 한번에 담기</Button>
      </ButtonArea>
    </Display>
  );
};
CO_TB_GD_02.displayName = 'CO_TB_GD_02';
