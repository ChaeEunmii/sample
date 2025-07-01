'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ButtonArea, Button, Empty, Tabs, Text } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import ProductCardList from '@views/gem/mycollection/components/ProductCardList';
import BrandCardList from '@views/gem/mycollection/components/BrandCardList';
import { mockProductCardList, mockBrandCardList } from '@mocks/mycollection';
import styles from './CreateStep2.module.scss';
import clsx from 'clsx';

export default function CreateStep2() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const nodata = searchParams.get('nodata');
  const isNodataAll = nodata === 'all'; //전체 데이터 없음
  const isNodataProd = nodata === 'product'; //상품 데이터 없음
  const isNodataBrand = nodata === 'brand'; //브랜드 데이터 없음

  // mock 데이터 변수에 할당
  const AddProductData = isNodataAll || isNodataProd ? [] : mockProductCardList;
  const AddBrandData = isNodataAll || isNodataBrand ? [] : mockBrandCardList;
  const allNoData = AddProductData.length + AddBrandData.length === 0;

  // 탭
  const [clickedTab, setClickedTab] = useState(0);
  const tabItems = [
    { label: `PRODUCT ${AddProductData.length}` },
    { label: `BRAND ${AddBrandData.length}` },
  ];

  // 탭 클릭시 스크롤상단이동
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [clickedTab]);

  // 체크 상태 관리
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  // 체크 토글 핸들러
  const handleSelectToggle = (productId: string | number, isSelected: boolean) => {
    setSelectedIds((prev) => {
      let next = prev;
      // 선택된 상태면, 목록에 없을 때만 추가
      if (isSelected) {
        if (!prev.includes(productId)) {
          next = [...prev, productId];
        }
      } else {
        // 선택 해제면, 목록에서 제거
        next = prev.filter((id) => id !== productId);
      }

      console.log('업데이트된 상품 체크목록:', next);
      console.log(`상품 체크리스트 ${isSelected ? '추가' : '제거'}:`, productId);

      return next;
    });
  };

  // 브랜드 체크 상태 관리
  const [selectedBrandIds, setSelectedBrandIds] = useState<(string | number)[]>([]);

  // 브랜드 체크 토글 핸들러
  const handleSelectBrandToggle = (productId: string | number, isSelected: boolean) => {
    setSelectedBrandIds((prev) => {
      let next = prev;
      // 선택된 상태면, 목록에 없을 때만 추가
      if (isSelected) {
        if (!prev.includes(productId)) {
          next = [...prev, productId];
        }
      } else {
        // 선택 해제면, 목록에서 제거
        next = prev.filter((id) => id !== productId);
      }

      console.log('업데이트된 브랜드 체크목록:', next);
      console.log(`브랜드 체크리스트 ${isSelected ? '추가' : '제거'}:`, productId);

      return next;
    });
  };

  // 선택없음 여부 (상품, 브랜드 총합에서 선택된것 없을때)
  const noSelected = selectedIds.length === 0 && selectedBrandIds.length === 0;

  return (
    <Container title="항목 추가" showBack mode="gray">
      <div className={styles.stickyTop}>
        <Tabs
          data={tabItems}
          defaultActive={0}
          variant="buttons"
          activeTab={clickedTab}
          onTabChange={setClickedTab}
        />
      </div>
      <Contents className={styles.contents}>
        {/* PRODUCT */}
        {clickedTab === 0 && (
          <div className={styles.product}>
            {/* 상품 목록 */}
            {AddProductData.length > 0 ? (
              <ProductCardList
                data={AddProductData}
                mode="select"
                selection={{
                  selectedIds: selectedIds,
                  onChange: handleSelectToggle,
                }}
              />
            ) : (
              <>
                <Empty
                  title="GEM한 상품이 없어요."
                  desc={
                    allNoData && (
                      <>
                        아래 ‘건너뛰기’ 버튼을 눌러
                        <br />
                        항목이 없는 비공개 컬렉션 생성만 가능해요.
                      </>
                    )
                  }
                />
              </>
            )}
          </div>
        )}
        {/* BRAND */}
        {clickedTab === 1 && (
          <div className={styles.brand}>
            {/* 브랜드 목록 */}
            {AddBrandData.length > 0 ? (
              <BrandCardList
                data={AddBrandData}
                mode="select"
                selection={{
                  selectedIds: selectedBrandIds,
                  onChange: handleSelectBrandToggle,
                }}
              />
            ) : (
              <>
                <Empty
                  title="GEM한 브랜드가 없어요."
                  desc={
                    allNoData && (
                      <>
                        아래 ‘건너뛰기’ 버튼을 눌러
                        <br />
                        항목이 없는 비공개 컬렉션 생성만 가능해요.
                      </>
                    )
                  }
                />
              </>
            )}
          </div>
        )}
      </Contents>
      <ButtonArea vertical type="sticky">
        <Text as="strong" className={clsx(styles.count, noSelected && styles.noSelected)}>
          선택 항목
          <em>
            ({selectedIds.length + selectedBrandIds.length}/
            {AddProductData.length + AddBrandData.length})
          </em>
        </Text>
        <div className={styles.btns}>
          <Button size="large">건너뛰기</Button>
          <Button variant="primary" size="large" disabled={noSelected ? true : false}>
            항목 추가
          </Button>
        </div>
      </ButtonArea>
    </Container>
  );
}
