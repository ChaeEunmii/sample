'use client';

import { useState } from 'react';
import { Text, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { ProdCardList } from '@widgets/product';
import AttagProdFilterDrawer from '@views/shop/concept/attag/AttagProdFilterDrawer';
import styles from './AttagProducts.module.scss';

// 임시 데이터
import { mockProdSimpleCase } from '@mocks/product';

export default function AttagProducts() {
  const [isDrawer1, setIsDrawer1] = useState(false); // 필터드러워

  //위시리스트
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };

  // mock 데이터가져오기
  const attagProdList = mockProdSimpleCase;

  return (
    <Container title="Attag 상품" showBack>
      <Contents>
        <div className={styles.sticky}>맞나요</div>
        <Button onClick={() => setIsDrawer1(true)}>Attag 필터 샘플 (D)</Button>
        <Text>sdfsdf</Text>
        <ProdCardList
          data={attagProdList}
          columns={2}
          wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
        />
      </Contents>

      {/* Attag 필터 샘플 (D)*/}
      <AttagProdFilterDrawer isOpen={isDrawer1} onClose={() => setIsDrawer1(false)} />
    </Container>
  );
}
