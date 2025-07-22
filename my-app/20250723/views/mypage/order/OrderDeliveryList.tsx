'use client';

import { useState, useEffect } from 'react';
import { Button, Tabs } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@/views/mypage/order/list/OrderDeliveryItems';
import { OrderDeliveryItemsList } from '@/views/mypage/order/list/OrderDeliveryItemsList';
import LoadingSpinner from '@views/mypage/order/list/components/LoadingSpinner';
import styles from './OrderDeliveryList.module.scss';
import { mockOrderList } from '@mocks/myorder';

export const tabItems = [
  { label: `전체 ${'10'}` },
  { label: `주문완료 ${'2'}` },
  { label: `결제완료 ${'3'}` },
  { label: `상품준비 ${'5'}` },
];

export default function OrderDeliveryList() {
  const [clickedTab, setClickedTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 예: 3초 후 로딩 완료
    const timer = setTimeout(() => {
      // setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const orders = mockOrderList as OrderDeliveryData[];

  return (
    <Container showBack title="주문/배송">
      <Contents className={styles.layout}>
        <Tabs
          data={tabItems}
          variant="buttons"
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          className={styles.tabs}
          sideSlot={
            <Button iconOnly="filter" size="smaller" setIconSize="small" variant="tertiary" round>
              주문 상세 검색
            </Button>
          }
        />

        {/* 주문 상품 목록 */}
        {/* {mockOrderList.map((order) => (
          <OrderDeliveryItems
            key={order.id}
            data={order}
            onButtonClick={(action, item) => {
              console.log('버튼 클릭:', action, item);
            }}
          />
        ))} */}
        <OrderDeliveryItemsList
          data={orders}
          onButtonClick={(action, item) => {
            console.log('버튼 클릭:', action, item);
          }}
        />
        {/* 로딩 예시 */}
        {/* <div>{isLoading ? <LoadingSpinner /> : <p style={{ fontSize: '16px' }}>로딩 완료!</p>}</div> */}
      </Contents>
    </Container>
  );
}
