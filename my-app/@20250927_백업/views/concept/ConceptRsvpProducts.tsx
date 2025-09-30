'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TextBanner } from '@widgets/banner/TextBanner';
import { ProdCardList } from '@widgets/product';
// import { SearchFilters } from '@views/search/SearchFilters';
// import { ResultTitle } from '@views/search/result/ResultTitle';
// import { sortProducts, filterItems, mockFilterData } from '@/mocks/search';
// import styles from './ConceptRsvp.module.scss';

// 임시 데이터
import { mockProdBanner } from '@mocks/product';

// 중카테고리 배너
const mockTextBanners = Array.from({ length: 6 }, () => ({
  title: '중카테고리',
  subtitle: '중카테고리',
  href: '#',
}));

export default function ConceptRsvpProducts() {
  //위시리스트
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };

  return (
    <Container title="RSVP" showBack type="store">
      <Contents>
        {mockTextBanners.length > 0 && <TextBanner data={mockTextBanners} className="ncp-mt-s" />}
        <p>공통 검색필터 영역</p>
        {/* 상품 목록 */}
        <ProdCardList
          data={mockProdBanner}
          columns={2}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />
      </Contents>
    </Container>
  );
}
