'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, Button, TextButton, Checkbox, Empty } from '@shared/ui';
import { OrderItem } from '@/widgets/product';
import styles from './RecentViewProd.module.scss';

// 상품 임시데이터
const productData = {
  id: 'product-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: '탈리다쿰',
  title: '에이치엠베리어 시그니어처 화이트 단델리온 에센스 화장수 100ml',
  price: {
    current: 129000,
    original: 189000,
  },
};
const productDataList = [
  { ...productData },
  { ...productData, id: 'product-2' },
  { ...productData, id: 'product-3' },
  { ...productData, id: 'product-4' },
  { ...productData, id: 'product-5' },
];

export default function RecentViewProd() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 가져오기
  const recentProdData = isNoData ? [] : productDataList;

  // 편집모드 여부
  const [isEditMode, setIsEditMode] = useState(false);

  // 체크박스 상태 관리
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // 개별 아이템 선택 변경
  const handleSelectItem = (itemId: string, selected: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: selected }));
  };

  // 전체 선택 상태 여부
  const isAllSelected =
    recentProdData.length > 0 && recentProdData.every((item) => checkedItems[item.id]);

  // 전체 선택 처리
  const handleSelectAll = (checked: boolean) => {
    const updated = Object.fromEntries(recentProdData.map((item) => [item.id, checked]));
    setCheckedItems(updated);
  };

  // 선택된 갯수
  const selectedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <Container showBack title="최근 본 상품">
      <Contents className={styles.layout}>
        {/* 상단  */}
        {recentProdData.length !== 0 && (
          <div className={styles.top}>
            <div className={styles.left}>
              {isEditMode ? (
                <Checkbox
                  label="전체선택"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              ) : (
                <Text as="span" color="gray2" size="4" indent>
                  총 {recentProdData.length}개
                </Text>
              )}
            </div>
            <div className={styles.right}>
              {isEditMode ? (
                <ul className={styles.list}>
                  <li>
                    <TextButton color="gray3">선택삭제 </TextButton>{' '}
                    <Text as="em" color="point" weight="regular">
                      {selectedCount}
                    </Text>
                  </li>
                  <li>
                    <TextButton color="gray3" onClick={() => setIsEditMode(false)}>
                      취소
                    </TextButton>
                  </li>
                </ul>
              ) : (
                <TextButton variant="underline" size="1" onClick={() => setIsEditMode(true)}>
                  편집
                </TextButton>
              )}
            </div>
          </div>
        )}
        {/* 목록 */}
        {recentProdData.length > 0 ? (
          <>
            <OrderItem
              items={recentProdData}
              isDelete={!isEditMode}
              hideThumbLabel
              selectable={isEditMode}
              checkedItems={checkedItems}
              onSelectItem={handleSelectItem}
            />
            <div className={styles.btns}>
              <Button size="small" suffixIcon="arrowDown" variant="tertiary" round>
                더보기
              </Button>
            </div>
          </>
        ) : (
          <Empty
            title="최근 본 상품이 없어요."
            buttons={<Button variant="primary">샵메인 바로가기</Button>}
          />
        )}
      </Contents>
    </Container>
  );
}
