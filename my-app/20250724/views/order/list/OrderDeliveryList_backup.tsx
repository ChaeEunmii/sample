'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Tabs, Loading, Empty, TextButton, IconButton } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@views/mypage/order/list/components/MyOrderItems';
import { MyOrderItemsList } from '@views/mypage/order/list/components/MyOrderItemsList';
import SearchSettingDrawer from '@views/mypage/order/components/SearchSettingDrawer';
import { GoToHomeBox } from '@views/mypage/order/components/GoToHomeBox';
import styles from './OrderDeliveryList.module.scss';
import { mockOrderList } from '@mocks/myorder';

export const tabItems = [
  { label: `전체 ${'10'}` },
  { label: `주문완료 ${'2'}` },
  { label: `결제완료 ${'3'}` },
  { label: `상품준비 ${'5'}` },
  {
    label: `렌탈`,
    labelSuffix: <IconButton name="close" size="xsmall" />,
  },
];

export default function OrderDeliveryList() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const orders = isNoData ? [] : (mockOrderList as OrderDeliveryData[]);

  const [isSearchSettingDrawer, setIsSearchSettingDrawer] = useState(false); // 검색 Drawer
  const [clickedTab, setClickedTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 예: 3초 후 로딩 완료
    const timer = setTimeout(() => {
      // setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container showBack title="주문/배송" type="myorder">
      <Contents className={styles.layout}>
        <Tabs
          data={tabItems}
          variant="filter"
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
        {/* 주문 상품 목록 */}
        {orders.length > 0 ? (
          <>
            <MyOrderItemsList
              data={orders}
              onButtonClick={(action, item) => {
                console.log('버튼 클릭:', action, item);
              }}
            />
            {/* 로딩 예시 */}
            {isLoading ? (
              <Loading isLoading variant="spinner" className={styles.loading} />
            ) : (
              <p style={{ fontSize: '16px' }}>로딩 완료!</p>
            )}
            {/* 투홈 박스 */}
            <GoToHomeBox />
          </>
        ) : (
          <Empty
            title={'최근에 주문/배송된 정보가 없어요.\n이제 쇼핑을 시작해 보실까요?'}
            buttons={
              <>
                <Button variant="primary">쇼핑하러 가기</Button>
              </>
            }
          >
            <div className="ncp-text-center ncp-mt-s">
              <TextButton size="1" variant="underline">
                과거 주문 내역 조회
              </TextButton>
            </div>
          </Empty>
        )}
      </Contents>
      {/* 검색설정 (D)*/}
      <SearchSettingDrawer
        isOpen={isSearchSettingDrawer}
        onClose={() => setIsSearchSettingDrawer(false)}
      />
    </Container>
  );
}
