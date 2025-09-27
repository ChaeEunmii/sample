// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Button, ButtonArea, Tabs } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdTiles, ProdTilesProps } from '@widgets/product/ProdTiles';
import { Banner } from '../banner/Banner';
export interface CO_TB_GD_03Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  banner: ProdTilesProps['banner'];
  products?: ProdTilesProps['data'];
}

export const CO_TB_GD_03 = ({
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
}: CO_TB_GD_03Props) => {
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
        variant="texts"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />
      <ProdTiles
        banner={banner}
        data={products ? products : []}
        pattern="2"
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
      <ButtonArea margin="1">
        <Button variant="tertiary">더보기</Button>
      </ButtonArea>
    </Display>
  );
};
CO_TB_GD_03.displayName = 'CO_TB_GD_03';
