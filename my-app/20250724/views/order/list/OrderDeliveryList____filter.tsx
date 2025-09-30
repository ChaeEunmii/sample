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

export default function OrderDeliveryList() {
  const searchParams = useSearchParams();
  const isNoData = searchParams.has('nodata');
  const orders = isNoData ? [] : (mockOrderList as OrderDeliveryData[]);

  const [isSearchSettingDrawer, setIsSearchSettingDrawer] = useState(false);
  const [clickedTab, setClickedTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [tabItems, setTabItems] = useState([
    { label: `가나다라마바사아자차카` },
    { label: `렌탈2222` },
    { label: `렌탈` },
  ]);

  const handleRemoveTab = (index: number) => {
    setTabItems((prev) => prev.filter((_, i) => i !== index));

    setClickedTab((prevClicked) => {
      if (prevClicked === index) return 0;
      if (prevClicked > index) return prevClicked - 1;
      return prevClicked;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
      />
    ),
  }));

  return (
    <Container showBack title="주문/배송" type="myorder">
      <Contents className={styles.layout}>
        <Tabs
          data={tabsWithSuffix}
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

        {orders.length > 0 ? (
          <>
            <MyOrderItemsList
              data={orders}
              onButtonClick={(action, item) => {
                console.log('버튼 클릭:', action, item);
              }}
            />
            {isLoading ? (
              <Loading isLoading variant="spinner" className={styles.loading} />
            ) : (
              <p style={{ fontSize: '16px' }}>로딩 완료!</p>
            )}
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
      <SearchSettingDrawer
        isOpen={isSearchSettingDrawer}
        onClose={() => setIsSearchSettingDrawer(false)}
      />
    </Container>
  );
}
