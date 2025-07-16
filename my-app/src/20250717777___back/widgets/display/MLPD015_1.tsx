import { useState } from 'react';
import { Tabs, Stack, SelectDrawer } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Display, DisplayProps } from './Display';

// 임시데이터
import { mockFiltersData, mockSortOptions } from '@mocks/display';

export interface MLPD015_1Props extends DisplayProps {
  tabs: Array<{
    id: string;
    label: string;
    thumb?: string;
  }>;
  price?: Array<{
    id: string;
    label: string;
  }>;
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  defaultPriceTab?: string;
  onPriceTabChange?: (id: string) => void;
  data: ProdCardItemProps[];
  columns?: 1 | 2 | 3;
  cardType?: 'horizontal' | 'vertical';
  /** 카드 사이즈(type = horizontal일 때에만 사용) */
  cardSize?: 'small' | 'medium';
}

export const MLPD015_1 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  tabs,
  data,
  defaultTab,
  onTabChange,
  price,
  defaultPriceTab,
  onPriceTabChange,
  columns = 2,
  cardType = 'vertical',
  cardSize,
}: MLPD015_1Props) => {
  // [Tab] 초기 탭 설정
  const defaultTabIdx = defaultTab ? tabs.findIndex((tab) => tab.id === defaultTab) : 0;
  // 활성 탭 변경 핸들러
  const handleTabChange = (activeIdx: number) => {
    const activeId = tabs[activeIdx]?.id;
    onTabChange?.(activeId);
  };

  // [Price Tab] 가격 탭 상태 관리
  const defaultFilterIdx = defaultPriceTab ? price?.findIndex((p) => p.id === defaultPriceTab) : 0;

  // 가격 탭 변경 핸들러
  const handlePriceTabChange = (activeIdx: number) => {
    if (!price) return;
    const activeId = price[activeIdx]?.id;
    onPriceTabChange?.(activeId);
  };

  // [Product] 위시리스트 상태 관리
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

  const [sortValue, setSortValue] = useState('recommended');

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 카테고리 탭 */}
      <Tabs
        data={tabs}
        variant="buttons"
        defaultActive={defaultTabIdx}
        onTabChange={handleTabChange}
      />

      {/* 가격 선택 탭 */}
      {price && (
        <Tabs
          data={price}
          variant="texts"
          defaultActive={defaultFilterIdx}
          onTabChange={handlePriceTabChange}
          textActiveType="none"
        />
      )}

      {/* 필터 영역 */}
      <Stack type="end">
        <SelectDrawer
          title="정렬"
          options={mockSortOptions}
          value={sortValue}
          onChange={setSortValue}
          variant="filter"
        />
      </Stack>

      {/* 상품 리스트 */}
      <ProdCardList
        data={data}
        variant="grid"
        columns={columns}
        cardType={cardType}
        cardSize={cardSize}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
        autofit
      />
    </Display>
  );
};
MLPD015_1.displayName = 'MLPD015_1';
