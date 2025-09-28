'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TextBanner } from '@widgets/banner/TextBanner';
import { ProdCardList } from '@widgets/product';
// 공통 검색필터
import { SearchFilters } from '@views/search/SearchFilters';
import { ResultTitle } from '@views/search/result/ResultTitle';
// 임시 데이터
import { mockProdCards2 } from '@mocks/product';
import { sortProducts, filterItems, mockFilterData } from '@/mocks/search';

// 중카테고리 배너
const mockTextBanners = Array.from({ length: 6 }, () => ({
  title: '중카테고리',
  subtitle: '중카테고리',
  href: '#',
}));

export default function ConceptRsvpProducts() {
  // 공통 검색필터
  const [sortValue, setSortValue] = useState('recommended');
  //위시리스트
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };

  const products = mockProdCards2; //상품목록

  return (
    <Container title="RSVP" showBack type="store">
      <Contents>
        {mockTextBanners.length > 0 && <TextBanner data={mockTextBanners} className="ncp-mt-s" />}
        {/* 공통 검색필터 */}
        {products.length > 1 && <SearchFilters filters={filterItems} filterData={mockFilterData} />}
        <ResultTitle
          count={products.length}
          options={sortProducts}
          value={sortValue}
          onChange={setSortValue}
          showSort={products.length > 1}
        />
        {/* 상품 목록 */}
        <ProdCardList
          data={products}
          columns={2}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />
      </Contents>
    </Container>
  );
}
