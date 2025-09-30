'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import { GemNav } from '@views/gem/components/index';
import { ProductGemList } from '@views/gem/gem/product/ProductGemList';
import { BrandGemList } from '@views/gem/gem/brand/BrandGemList';
import { PeopleGemList } from '@views/gem/gem/people/PeopleGemList';
import { CollectionGemList } from '@views/gem/gem/collection/CollectionGemList';
import { mockBrandList, mockPeopleList, mockCollectionList, mockProductList } from '@mocks/gem';
import styles from './GemList.module.scss';

// 탭
export const tabItems = [
  { label: 'PRODUCT' },
  { label: 'BRAND' },
  { label: 'COLLECTION' },
  { label: 'PEOPLE' },
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

  // 탭 클릭시 스크롤상단이동
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [clickedTab]);

  return (
    <Container mode="gray" type="gem">
      <Contents className={styles.layout}>
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
        {/* PRODUCT */}
        {clickedTab === 0 && <ProductGemList data={productData} />}
        {/* BRAND */}
        {clickedTab === 1 && <BrandGemList data={brandData} />}
        {/* COLLECTION */}
        {clickedTab === 2 && <CollectionGemList data={collectionData} />}
        {/* PEOPLE */}
        {clickedTab === 3 && <PeopleGemList data={peopleData} />}
      </Contents>
    </Container>
  );
}
