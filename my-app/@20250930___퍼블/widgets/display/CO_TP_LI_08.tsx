// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { CategoryFilter } from '@/widgets/form/CategoryFilter';

// 카테고리 필터탭 구조
export type CategoryFilterTabItem = {
  id: string;
  label: string;
  subTabs?: CategoryFilterTabItem[];
  detTabs?: CategoryFilterTabItem[];
};

export interface CO_TP_LI_08Props extends DisplayProps {
  categoryTabs: CategoryFilterTabItem[];
  defaultCategoryTab?: { mid?: string; sub?: string; det?: string; sort?: string };
  onCategoryChange?: (mid: string, sub: string, det: string, sort: string) => void;
  data: ProdCardItemProps[];
}

export const CO_TP_LI_08 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  categoryTabs,
  defaultCategoryTab,
  onCategoryChange,
  data,
}: CO_TP_LI_08Props) => {
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

  // 초기 탭 설정 (없는 id면 -1 → 0으로 보정, 꼬임 방지)
  const defaultCategory = {
    mid: defaultCategoryTab?.mid
      ? Math.max(
          0,
          categoryTabs.findIndex((tab) => tab.id === defaultCategoryTab.mid)
        )
      : 0,
    sub: defaultCategoryTab?.sub
      ? Math.max(
          0,
          categoryTabs[0]?.subTabs?.findIndex((tab) => tab.id === defaultCategoryTab.sub) ?? 0
        )
      : 0,
    det: defaultCategoryTab?.det
      ? Math.max(
          0,
          categoryTabs[0]?.subTabs?.[0]?.detTabs?.findIndex(
            (tab) => tab.id === defaultCategoryTab.det
          ) ?? 0
        )
      : 0,
    sort: defaultCategoryTab?.sort ?? 'recommended',
  };

  // 활성 탭 변경 핸들러
  const handleCategoryChange = (midIdx: number, subIdx: number, detIdx: number, sort: string) => {
    onCategoryChange?.(
      categoryTabs[midIdx]?.id ?? '',
      categoryTabs[midIdx]?.subTabs?.[subIdx]?.id ?? '',
      categoryTabs[midIdx]?.subTabs?.[subIdx]?.detTabs?.[detIdx]?.id ?? '',
      sort
    );
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <CategoryFilter
        tabData={categoryTabs}
        onTabChange={handleCategoryChange}
        defaultActive={defaultCategory}
      />
      <ProdCardList
        data={data}
        variant="grid"
        columns={2}
        wishlist={{
          activeIds: wishlistIds,
          onToggle: handleWishlistToggle,
        }}
      />
    </Display>
  );
};
CO_TP_LI_08.displayName = 'CO_TP_LI_08';
