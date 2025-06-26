'use client';

import { useState } from 'react';
import { Tabs } from '@shared/ui';
import styles from './GemList.module.scss';
import { GemNav } from '@views/gem/components/GemNav';
import BrandProductSection from '@/views/gem/gem/brand/BrandProdItem';
import { mockBrandList } from '@mocks/gem'; // 너의 파일 위치에 따라 다를 수 있음

export const tabItems = [
  { label: 'PRODUCT' },
  { label: 'BRAND' },
  { label: 'COLLECTION' },
  { label: 'PEOPLE' },
];

/**
   1. container props에 배경색 주는것 
   2. 디자인에 하단 nav잇는경우 layout.tsx에 추가하면되는것인가
   3. header type 추가된경우 직접추가?
*/
export default function GemList() {
  // 탭
  const [clickedTab, setClickedTab] = useState('0');
  const tabsWithClick = tabItems.map((tab, index) => ({
    ...tab,
    onClick: () => setClickedTab(`${index}`),
  }));

  //test

  // gemBrandIds: 현재 활성화된 브랜드 ID 배열 상태
  const [gemBrandIds, setGemBrandIds] = useState<(string | number)[]>(['diptyque']);
  /**
   * 브랜드 젬(GEM) 토글 핸들러
   * @param brandId - 토글할 브랜드의 ID
   * @param isActive - 토글 상태 (true: 활성화, false: 비활성화)
   *
   * 기능:
   * - isActive가 true일 때는 해당 brandId를 배열에 추가 (중복 가능성 있음)
   * - isActive가 false일 때는 해당 brandId를 배열에서 제거
   */
  // 브랜드잼 토글 핸들러
  const handleBrandGemToggle = (brandId: string | number, isActive: boolean) => {
    //setGemBrandIds((prev) => (isActive ? [...prev, brandId] : prev.filter((id) => id !== brandId)));
    setGemBrandIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(brandId) ? prev : [...prev, brandId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== brandId);
      }
    });

    console.log(`브랜드젬 ${isActive ? '추가' : '제거'}:`, brandId);
  };

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'diptyque-prod-2',
    'atkinsons-prod-1',
  ]);

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

  // 모든 브랜드의 모든 상품을 다 합친 배열 (flat)
  const allProducts = mockBrandList.flatMap((section) => section.products);
  // 위시리스트에 담긴 상품만 필터링
  const wishlistProducts = allProducts.filter((product) => wishlistIds.includes(product.id));
  // 활성화된 브랜드 객체 배열
  const activeGemBrands = mockBrandList.filter(({ brand }) => gemBrandIds.includes(brand.id));

  return (
    <div className={styles.layout}>
      <div className={styles.sticky}>
        <GemNav activeKey="gem" />
        <Tabs data={tabsWithClick} defaultActive={0} variant="buttons" className={styles.tabs} />
      </div>

      <div className={styles.content}>
        <div>clickedTab: {clickedTab}</div>
      </div>
      <p>전체 상품 목록:</p>
      <ul>
        {allProducts.map((prod) => (
          <li key={prod.id}>
            {prod.id} - {prod.title}
          </li>
        ))}
      </ul>
      <br />
      <p>위시리스트 상품:</p>
      <ul>
        {wishlistProducts.map((prod) => (
          <li key={prod.id}>
            {prod.id} - {prod.title}
          </li>
        ))}
      </ul>
      <br />
      <p>활성화된 브랜드 젬 목록:</p>
      <ul>
        {activeGemBrands.map(({ brand }) => (
          <li key={brand.id}>
            {brand.id} - {brand.name}
          </li>
        ))}
      </ul>

      {mockBrandList.map(({ brand, products }) => (
        <BrandProductSection
          key={brand.id}
          brand={brand}
          products={products}
          brandGem={{
            isActive: gemBrandIds.includes(brand.id),
            onChange: (val) => handleBrandGemToggle(brand.id, val),
          }}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
        />
      ))}
    </div>
  );
}
