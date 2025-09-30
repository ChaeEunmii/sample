'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, Empty, Button } from '@shared/ui';
import { CollectionControl } from '@views/gem/components/index';
import { CollectionHeader } from './components/CollectionHeader';
import { AllCardList, AllCardItem } from '@views/gem/mycollection/components/AllCardList';
import { ProdCardList } from '@widgets/product';
import { BrandCardList } from '@widgets/brand';
import { mockCollectionDetail } from '@mocks/mycollection';
import styles from './DetailMyCollection.module.scss';

export default function DetailMyCollection() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const isMyData = searchParams.has('case1'); // 내 컬렉션 화면보기용 (isMine: true처리)
  const isOthersData = searchParams.has('case2'); //타인 컬렉션 화면보기용
  const isLock = searchParams.has('lock');

  // mock 데이터를 변수에 할당
  // 상단 정보
  const collectionMetaData =
    //타인 컬렉션 일때
    isOthersData
      ? mockCollectionDetail.meta
      : //데이터 없을때 (샘플)
        isNoData
        ? {
            ...mockCollectionDetail.meta,
            title: '여름 샌들 위시리스트',
            isMine: true,
            isLock: true,
            stats: [
              { type: 'gem' as const, value: '0' },
              { type: 'update' as const, value: '0분 전' },
            ],
          }
        : // 내 컬랙션 + 비공개상태
          isLock
          ? {
              ...mockCollectionDetail.meta,
              title: '귀여운거 옆에 귀여운거',
              isMine: true,
              isLock: true,
            }
          : //내 컬렉션 + 공개상태
            isMyData
            ? { ...mockCollectionDetail.meta, title: '귀여운거 옆에 귀여운거', isMine: true }
            : { ...mockCollectionDetail.meta, title: '귀여운거 옆에 귀여운거', isMine: true };
  // 상품 목록
  const productCardData = isNoData ? [] : mockCollectionDetail.products;
  // 브랜드 목록
  const brandCardData = isNoData ? [] : mockCollectionDetail.brands;

  // 상품 카드 리스트에 'cardtype: product' 추가
  const productItems: AllCardItem[] = productCardData.map((item) => ({
    ...item,
    cardtype: 'product',
    id: item.id,
  }));
  // 브랜드 카드 리스트에 'cardtype: brand' 추가
  const brandItems: AllCardItem[] = brandCardData.map((item) => ({
    ...item,
    cardtype: 'brand',
    id: item.id,
  }));

  // 탭 종류별 갯수 카운팅
  const AllCount = productCardData.length + brandCardData.length;
  const ProductCount = productCardData.length;
  const BrandCount = brandCardData.length;
  const noData = AllCount === 0; //데이터없음여부

  // 탭
  const [clickedTab, setClickedTab] = useState(0);

  // 탭 클릭시 스크롤상단이동
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [clickedTab]);

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([
    'collection-prod-1',
    'collection-prod-2',
    'collection-prod-3',
    'collection-prod-4',
    'collection-prod-5',
    'collection-brand-1',
    'collection-brand-2',
    'collection-brand-3',
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

  // 두 배열을 번갈아가며 정렬(샘플) - (설계 조건에 따라 배열정렬 적용)
  function interleaveArrays<T>(arr1: T[], arr2: T[]): T[] {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result: T[] = [];

    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) result.push(arr1[i]);
      if (i < arr2.length) result.push(arr2[i]);
    }

    return result;
  }
  const combinedList: AllCardItem[] = interleaveArrays(productItems, brandItems);

  return (
    <Container
      mode="gray"
      showBack
      actions={[
        { type: 'icon', name: 'share', label: '공유', onClick: () => console.log('share!!') },
        //내 컬렉션일때 등장
        ...(!isOthersData
          ? [
              {
                type: 'custom' as const,
                component: (
                  <CollectionControl
                    menuItems={[
                      { label: '항목 추가', onClick: () => console.log('항목 추가') },
                      { label: '항목 삭제', onClick: () => console.log('항목 삭제') },
                      ...(!noData && isLock
                        ? [{ label: '공개로 전환', onClick: () => console.log('공개로 전환') }]
                        : []),
                      ...(!noData && !isLock
                        ? [{ label: '비공개로 전환', onClick: () => console.log('비공개로 전환') }]
                        : []),
                      { label: '컬렉션명 편집', onClick: () => console.log('컬렉션명 편집') },
                      { label: '컬렉션 삭제', onClick: () => console.log('컬렉션 삭제') },
                    ]}
                  />
                ),
              },
            ]
          : []),
      ]}
    >
      <Contents className={styles.layout}>
        <CollectionHeader
          meta={collectionMetaData}
          wishlist={{
            activeIds: wishlistIds,
            onToggle: handleWishlistToggle,
          }}
        />
        {!noData && (
          <div className={styles.sticky}>
            <Tabs
              data={[
                { label: `ALL ${AllCount}` },
                { label: `PRODUCT ${ProductCount}` },
                { label: `BRAND ${BrandCount}` },
              ]}
              activeTab={clickedTab}
              onTabChange={setClickedTab}
              variant="buttons"
              className={styles.tabs}
            />
          </div>
        )}
        {!noData ? (
          <>
            {clickedTab === 0 && (
              <AllCardList
                data={combinedList}
                wishlist={{
                  activeIds: wishlistIds,
                  onToggle: handleWishlistToggle,
                }}
              />
            )}
            {clickedTab === 1 && (
              <ProdCardList
                data={productCardData}
                variant="grid"
                columns={2}
                gutter="6px"
                cardVariant="boxed"
                wishlist={{
                  activeIds: wishlistIds,
                  onToggle: handleWishlistToggle,
                }}
              />
            )}
            {clickedTab === 2 && (
              <BrandCardList
                data={brandCardData}
                wishlist={{
                  activeIds: wishlistIds,
                  onToggle: handleWishlistToggle,
                }}
              />
            )}
          </>
        ) : (
          <Empty
            title="비공개 컬렉션이에요."
            desc={
              <>
                추가된 항목이 없어 비공개로 설정되었어요.
                <br />
                상품/브랜드를 추가해 컬렉션을 공개해 보세요.
              </>
            }
            buttons={
              <>
                <Button variant="primary">GEM하러 가기</Button>
              </>
            }
          ></Empty>
        )}
      </Contents>
    </Container>
  );
}
