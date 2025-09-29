// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { CategoryFilter } from '@/widgets/form/CategoryFilter';

// 카테고리 필터탭 구조
export type CategoryFilterTabItem = {
  label: string;
  subTabs?: CategoryFilterTabItem[];
  detTabs?: CategoryFilterTabItem[];
};

export interface CO_TP_LI_09Props extends DisplayProps {
  categoryTabs: CategoryFilterTabItem[];
  onCategoryChange?: (mid: number, sub: number, det: number, sort: string) => void;
  data: ProdCardItemProps[];
}

export const CO_TP_LI_09 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  categoryTabs,
  onCategoryChange,
  data,
}: CO_TP_LI_09Props) => {
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

  // 카테고리 필터 변경 핸들러
  const handleCategoryChange = (mid: number, sub: number, det: number, sort: string) => {
    onCategoryChange?.(mid, sub, det, sort);
  };

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <CategoryFilter tabData={categoryTabs} onTabChange={handleCategoryChange} />
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
CO_TP_LI_09.displayName = 'CO_TP_LI_09';
