'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tabs, Stack, Empty, Button } from '@shared/ui';
import { GemNav, TotalCount, SelectDrawer } from '@views/gem/components/index';
import { ProdCardList } from '@widgets/product';
import BrandProdList from '@views/gem/gem/brand/BrandProdList';
import CollectionList from '@views/gem/gem/collection/CollectionList';
import PeopleList from '@views/gem/gem/people/PeopleList';
import { mockBrandList, mockPeopleList, mockCollectionList, mockProductList } from '@mocks/gem';
import styles from './GemList.module.scss';

// 탭
export const tabItems = [
  { label: 'PRODUCT' },
  { label: 'BRAND' },
  { label: 'COLLECTION' },
  { label: 'PEOPLE' },
];

// 정렬 옵션
const sortOptions = [
  {
    label: '최신순',
    value: 'option1',
  },
  {
    label: 'GEM한순',
    value: 'option2',
  },
];

export default function GemList() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const productData = isNoData ? [] : mockProductList;
  const brandData = isNoData ? [] : mockBrandList;
  const collectionData = isNoData ? [] : mockCollectionList;
  const peopleData = isNoData ? [] : mockPeopleList;

  // 화면상태
  const tab = searchParams.get('tab');
  const isProduct = tab === 'product' || !tab;
  const isBrand = tab === 'brand';
  const isCollection = tab === 'collection';
  const isPeople = tab === 'people';
  const initialTab = isProduct ? 0 : isBrand ? 1 : isCollection ? 2 : isPeople ? 3 : 0;

  // 탭
  const [clickedTab, setClickedTab] = useState(initialTab);
  // 정렬 값
  const [sortProdValue, setSortProdValue] = useState('option1');
  const [sortBrandValue, setSortBrandValue] = useState('option1');
  const [sortCollectionValue, setSortCollectionValue] = useState('option1');
  const [sortPeopleValue, setSortPeopleValue] = useState('option1');

  // 탭 클릭시 스크롤상단이동
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [clickedTab]);

  // 브랜드잼 상태 관리
  const [gemBrandIds, setGemBrandIds] = useState<(string | number)[]>([
    'diptyque',
    'atkinsons',
    'ralphlauren',
  ]);
  // 브랜드잼 토글 핸들러
  const handleBrandGemToggle = (brandId: string | number, isActive: boolean) => {
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
    'prod-1',
    'prod-2',
    'prod-3',
    'prod-4',
    'diptyque-prod-1',
    'atkinsons-prod-1',
    'collection-1',
    'collection-2',
    'collection-3',
    'people-1',
    'people-2',
    'people-3',
    'people-4',
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

  // ==================== 팁 ===================== //
  return (
    <div className={styles.layout}>
      <div className={styles.sticky}>
        <GemNav activeKey="gem" />
        <Tabs
          data={tabItems}
          variant="buttons"
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          className={styles.tabs}
        />
      </div>
      <div className={styles.content}>
        {/* PRODUCT */}
        {clickedTab === 0 && (
          <div className={styles.product}>
            <Stack type="between" className={styles.top}>
              <TotalCount
                type="product"
                count={productData.length}
                tip={<>최대 {productData.length}개까지 GEM할 수 있어요.</>}
              />
              <SelectDrawer
                title="정렬"
                options={sortOptions}
                value={sortProdValue}
                onChange={setSortProdValue}
                variant="filter"
              />
            </Stack>
            {/* 상품 목록 */}
            {productData.length > 0 ? (
              <ProdCardList
                data={productData}
                variant="grid"
                columns={2}
                cardType="vertical"
                wishlist={{
                  activeIds: wishlistIds,
                  onToggle: handleWishlistToggle,
                }}
                autofit
              />
            ) : (
              <Empty
                title="GEM한 상품이 없어요."
                desc="관심있는 상품을 GEM해 보세요."
                buttons={
                  <>
                    <Button variant="primary">GEM하러 가기</Button>
                  </>
                }
              ></Empty>
            )}
          </div>
        )}
        {/* BRAND */}
        {clickedTab === 1 && (
          <div className={styles.brand}>
            <Stack type="between" className={styles.top}>
              <TotalCount
                type="brand"
                count={brandData.length}
                tip={<>최대 {brandData.length}개까지 GEM할 수 있어요.</>}
              />
              <SelectDrawer
                title="정렬"
                options={sortOptions}
                value={sortBrandValue}
                onChange={setSortBrandValue}
                variant="filter"
              />
            </Stack>
            {/* 브랜드 목록 */}
            {brandData.length > 0 ? (
              <BrandProdList
                brandData={brandData}
                wishlist={{
                  activeIds: wishlistIds,
                  onToggle: handleWishlistToggle,
                }}
                brandGem={{
                  activeIds: gemBrandIds,
                  onToggle: handleBrandGemToggle,
                }}
              />
            ) : (
              <Empty
                title="GEM한 브랜드가 없어요."
                desc="관심있는 브랜드를 GEM해 보세요."
                buttons={
                  <>
                    <Button variant="primary">GEM하러 가기</Button>
                  </>
                }
              />
            )}
          </div>
        )}
        {/* COLLECTION */}
        {clickedTab === 2 && (
          <div className={styles.collection}>
            <Stack type="between" className={styles.top}>
              <TotalCount
                type="collection"
                count={collectionData.length}
                tip={<>최대 {collectionData.length}개까지 GEM할 수 있어요.</>}
              />
              <SelectDrawer
                title="정렬"
                options={sortOptions}
                value={sortCollectionValue}
                onChange={setSortCollectionValue}
                variant="filter"
              />
            </Stack>
            {/* 컬렉션 목록 */}
            {collectionData.length > 0 ? (
              <CollectionList
                data={collectionData}
                wishlist={{
                  activeIds: wishlistIds,
                  onToggle: handleWishlistToggle,
                }}
              />
            ) : (
              <Empty
                title="GEM한 컬렉션이 없어요."
                desc="관심있는 컬렉션을 GEM해 보세요."
                buttons={
                  <>
                    <Button variant="primary">GEM하러 가기</Button>
                  </>
                }
              />
            )}
          </div>
        )}
        {/* PEOPLE */}
        {clickedTab === 3 && (
          <div className={styles.people}>
            <Stack type="between" className={styles.top}>
              <TotalCount
                type="people"
                count={peopleData.length}
                tip={<>최대 {peopleData.length}개까지 GEM할 수 있어요.</>}
              />
              <SelectDrawer
                title="정렬"
                options={sortOptions}
                value={sortPeopleValue}
                onChange={setSortPeopleValue}
                variant="filter"
              />
            </Stack>
            {/* 피플 목록 */}
            {peopleData.length > 0 ? (
              <PeopleList
                data={peopleData}
                wishlist={{
                  activeIds: wishlistIds,
                  onToggle: handleWishlistToggle,
                }}
              />
            ) : (
              <Empty
                title="GEM한 유저가 없어요."
                desc="관심있는 유저를 GEM해 보세요."
                buttons={
                  <>
                    <Button variant="primary">GEM하러 가기</Button>
                  </>
                }
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
