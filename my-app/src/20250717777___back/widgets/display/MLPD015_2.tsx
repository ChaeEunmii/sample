import { useState } from 'react';
import { Stack, SelectDrawer } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from '@widgets/product/ProdCardList';
import { Filter } from '@widgets/form/Filter';
import { Display, DisplayProps } from './Display';

// 임시데이터
import { mockFiltersData, mockSortOptions } from '@mocks/display';

export interface MLPD015_2Props extends DisplayProps {
  data: ProdCardItemProps[];
  columns?: 1 | 2 | 3;
  cardType?: 'horizontal' | 'vertical';
  /** 카드 사이즈(type = horizontal일 때에만 사용) */
  cardSize?: 'small' | 'medium';
}

export const MLPD015_2 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
  columns = 2,
  cardType = 'vertical',
  cardSize,
}: MLPD015_2Props) => {
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

  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortValue, setSortValue] = useState('recommended');

  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {/* 필터 영역 */}
      <Stack type="end">
        <Filter
          filters={mockFiltersData}
          selectedValues={selectedFilters}
          onSelect={setSelectedFilters}
        />
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
MLPD015_2.displayName = 'MLPD015_2';
