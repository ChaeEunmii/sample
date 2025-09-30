'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Flag, SelectDrawer, Empty, Button, TextButton } from '@shared/ui';
import { ProdCardList } from '@widgets/product/ProdCardList';
import styles from './FavoriteProduct.module.scss';
import { mockFavoriteProdList } from '@mocks/myactivity';

// 정렬 옵션
const sortOptions = [
  {
    label: '자주 구매 순',
    value: 'option1',
  },
  {
    label: '최근 구매 순',
    value: 'option2',
  },
];

const PAGE_SIZE = 10;

export default function FavoriteProduct() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 가져오기
  const favoriteListData = isNoData ? [] : mockFavoriteProdList;

  // 처음엔 10개만 보여주기
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // 보여줄 상품 리스트만 잘라서 ProdCardList에 전달
  const flatProds = favoriteListData.slice(0, visibleCount).map((row) => row.product);

  // 기간 정렬
  const [sortProdValue, setSortProdValue] = useState('option1');

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...prev, productId] : prev.filter((id) => id !== productId)
    );
  };

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    setVisibleCount((prev) => {
      const next = prev + PAGE_SIZE;
      return next;
    });
  };

  return (
    <Container showBack title="자주 구매하는 상품">
      <Contents className={styles.layout}>
        {/* 자주 구매하는 상품 목록 */}
        {flatProds.length > 0 ? (
          <>
            <div className={styles.top}>
              <SelectDrawer
                title="정렬"
                options={sortOptions}
                value={sortProdValue}
                onChange={setSortProdValue}
                variant="filter"
              />
            </div>
            <ProdCardList
              data={flatProds}
              cardType="horizontal"
              wishlist={{
                activeIds: wishlistIds,
                onToggle: handleWishlistToggle,
              }}
              gutter={'32px'}
              caption={(_, i) => (
                <Flag
                  data={{ color: 'gray3', label: <>{favoriteListData[i].purchaseCount}회 구매</> }}
                />
              )}
            />
            {visibleCount < favoriteListData.length && (
              <div className="ncp-text-center ncp-mt-l">
                <TextButton
                  suffixIcon="arrowDown"
                  iconSize="xsmall"
                  size="1"
                  onClick={handleLoadMore}
                >
                  더보기
                </TextButton>
              </div>
            )}
          </>
        ) : (
          <Empty
            title={`주문한 상품이 없습니다.\n마음에 드는 상품을 찾으러 가볼까요?`}
            buttons={<Button variant="primary">쇼핑하러 가기</Button>}
          />
        )}
      </Contents>
    </Container>
  );
}
