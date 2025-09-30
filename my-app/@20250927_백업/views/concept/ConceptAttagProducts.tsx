'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ProdCardList } from '@widgets/product';
import { CategoryFilter } from '@widgets/form/CategoryFilter';

// 임시 데이터
import { mockProdBanner } from '@mocks/product';
// 탭
const tabData = [
  {
    label: '전체',
    subTabs: [],
  },
  {
    label: '대카테고리',
    subTabs: [
      {
        label: '중카테고리',
      },
      {
        label: '중카테고리',
      },
      {
        label: '중카테고리',
      },
    ],
  },
  {
    label: '대카테고리',
    subTabs: [
      {
        label: '중카테고리',
      },
      {
        label: '중카테고리',
      },
      {
        label: '중카테고리',
      },
    ],
  },
];

export default function AttagProducts() {
  //위시리스트
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };

  // mock 데이터가져오기
  const attagProdList = mockProdBanner;

  return (
    <Container title="Attag 상품" showBack type="basket">
      <Contents>
        {/* 상단 탭 */}
        <CategoryFilter tabData={tabData} isSticky />
        {/* 상품 목록 */}
        <ProdCardList
          data={attagProdList}
          columns={2}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />
      </Contents>
    </Container>
  );
}
