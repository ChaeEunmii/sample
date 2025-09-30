'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Tabs, Loading, Empty, TextButton, IconButton } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@views/mypage/order/list/components/MyOrderItems';
import { MyOrderItemsList } from '@views/mypage/order/list/components/MyOrderItemsList';
import SearchSettingDrawer from '@views/mypage/order/components/SearchSettingDrawer';
import { GoToHomeBox } from '@views/mypage/order/components/GoToHomeBox';
import styles from './OrderDeliveryList.module.scss';
import { mockOrderList } from '@mocks/myorder';

// 초기 전체 검색 결과
const tabMainItems = [
  { label: `전체 ${'10'}` },
  { label: `주문완료 ${'2'}` },
  { label: `결제완료 ${'3'}` },
  { label: `상품준비 ${'5'}` },
];

export default function OrderDeliveryList() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const orders = isNoData ? [] : (mockOrderList as OrderDeliveryData[]);

  const [isSearchSettingDrawer, setIsSearchSettingDrawer] = useState(false);
  // 현재 활성화된 탭 인덱스 상태 (기본탭 또는 필터 탭에서 선택된 탭)
  const [clickedTab, setClickedTab] = useState(0);
  // 필터 탭 목록 상태 (필터가 적용되면 탭으로 표시할 필터 라벨)
  const [tabItems, setTabItems] = useState<{ label: string }[]>([]);
  // 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(false);

  // 필터 적용 버튼 눌렀을 때 실행되는 함수 (임시 예시)
  const handleApplyFilterDummy = () => {
    // 필터 탭 예시 데이터 (실제 필터 라벨들)
    const newFilters = [
      '2020.12.26~2025.12.25',
      '렌탈',
      '택배배송',
      '새벽/당일배송',
      '가나다라마바사',
    ];

    // tabItems에 필터 라벨 객체로 세팅
    const items = newFilters.map((label) => ({ label }));

    setTabItems(items); // 필터 탭 데이터 업데이트
    setIsFiltered(true); // 필터 모드 활성화
    setClickedTab(0); // 탭 선택 초기화 (첫 탭 선택)
    setIsSearchSettingDrawer(false); // Drawer 닫기
  };

  // 필터 탭 아이템에 삭제 아이콘 추가
  const tabsWithSuffix = tabItems.map((tab, idx) => ({
    ...tab,
    labelSuffix: (
      <IconButton
        name="close"
        size="xsmall"
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveTab(idx);
        }}
      >
        삭제
      </IconButton>
    ),
  }));

  // 특정 필터 탭 제거 함수
  const handleRemoveTab = (index: number) => {
    // 해당 인덱스 필터 제거
    const updated = tabItems.filter((_, i) => i !== index);
    setTabItems(updated);

    // 클릭된 탭 인덱스 조정
    setClickedTab((prev) => {
      // 삭제한 탭이 선택된 탭이면 기본 0으로 초기화
      if (prev === index) return 0;
      // 삭제한 탭 앞쪽이면 인덱스 하나 당김
      if (prev > index) return prev - 1;
      // 그 외는 유지
      return prev;
    });
    // 필터 탭 모두 제거되면 기본 탭 모드로 복귀
    if (updated.length === 0) {
      setIsFiltered(false);
    }
  };

  return (
    <Container showBack title="주문/배송" type="myorder">
      <Contents className={styles.layout}>
        {isFiltered ? (
          //필터 탭
          <Tabs
            data={tabsWithSuffix}
            variant="filter"
            className={styles.tabs}
            sideSlot={
              <Button
                iconOnly="filter"
                size="smaller"
                setIconSize="small"
                variant="primary"
                round
                onClick={() => setIsSearchSettingDrawer(true)}
              >
                주문 상세 검색
              </Button>
            }
          />
        ) : (
          //기본 탭
          <Tabs
            data={tabMainItems}
            variant="buttons"
            activeTab={clickedTab}
            onTabChange={setClickedTab}
            className={styles.tabs}
            sideSlot={
              <Button
                iconOnly="filter"
                size="smaller"
                setIconSize="small"
                variant="tertiary"
                round
                onClick={() => setIsSearchSettingDrawer(true)}
              >
                주문 상세 검색
              </Button>
            }
          />
        )}
        {/* 주문/배송 목록 */}
        {orders.length > 0 ? (
          <>
            <MyOrderItemsList
              data={orders}
              onButtonClick={(action, item) => {
                console.log('버튼 클릭:', action, item);
              }}
            />
            <Loading isLoading variant="spinner" className={styles.loading} />
            <GoToHomeBox />
          </>
        ) : (
          <Empty
            title={
              isFiltered
                ? '입력하신 조건에 맞는 주문이 없어요.\n다시한번 검색을 해 주세요.'
                : '최근에 주문/배송된 정보가 없어요.\n이제 쇼핑을 시작해 보실까요?'
            }
            buttons={
              <Button variant="primary">{isFiltered ? '검색 초기화' : '쇼핑하러 가기'}</Button>
            }
          >
            <div className="ncp-text-center ncp-mt-m">
              <TextButton size="1" variant="underline">
                과거 주문 내역 조회
              </TextButton>
            </div>
          </Empty>
        )}
      </Contents>
      {/* 검색설정 (D) */}
      <SearchSettingDrawer
        isOpen={isSearchSettingDrawer}
        onClose={() => setIsSearchSettingDrawer(false)}
        onApplyFilters={handleApplyFilterDummy}
      />
    </Container>
  );
}
