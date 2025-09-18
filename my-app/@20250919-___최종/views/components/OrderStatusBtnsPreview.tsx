'use client';

import { useState } from 'react';
import { Tabs, Heading } from '@shared/ui';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { OrderItem, OrderStatusFlag } from '@widgets/product';
import type { OrderStatusCode, OrderCase } from '@/widgets/product/OrderStatus';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import type { OrderStatusInfo } from '@widgets/product/OrderStatus';
import styles from './OrderStatusBtnsPreview.module.scss';

/** 주문상태별 하단 버튼구조 보기용 컴퍼넌트 입니다
 *  실제 화면에서 사용하지 않습니다. (case 보기용)
 */

interface StatusItem {
  label: string;
  status: OrderStatusCode;
  date?: string | null;
  orderCase?: OrderCase;
  subscription?: OrderStatusInfo['subscription'];
}

interface Props {
  baseData: OrderDeliveryData;
  statusItems: StatusItem[];
}

const overrideOrderStatus = (
  base: OrderDeliveryData,
  status: OrderStatusCode,
  date?: string | null,
  orderCase?: OrderCase,
  subscription?: OrderStatusInfo['subscription']
): OrderDeliveryData => {
  const baseItem = base.sellers[0].items[0];

  return {
    ...base,
    sellers: [
      {
        ...base.sellers[0],
        items: [
          {
            ...baseItem,
            orderStatus: {
              ...baseItem.orderStatus,
              status,
              ...(orderCase ? { orderCase } : {}),
              ...(subscription ? { subscription } : {}),
              ...(date !== undefined ? { date: date ?? undefined } : {}),
            },
          },
        ],
      },
    ],
  };
};

export const OrderStatusBtnsPreview = ({ baseData, statusItems }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItems = (viewType: 'detail' | 'list') =>
    statusItems.map(({ label, status, date, orderCase, subscription }, idx) => {
      const data = overrideOrderStatus(baseData, status, date, orderCase, subscription);
      return (
        <div key={`${status}-${orderCase ?? 'none'}-${idx}`} className={styles.item}>
          <Heading as="strong" className={styles.title}>
            {label}
            <span className={styles.code}>
              ({status}
              {orderCase ? ` / ${orderCase}` : ''})
            </span>
          </Heading>
          <div className={styles.example}>
            {/* <DeliveryGroup data={data} viewType={viewType} /> */}
            <OrderItem
              items={[data.sellers[0].items[0]]}
              orderTopSlot={(item) =>
                item.orderStatus ? (
                  <OrderStatusFlag status={item.orderStatus.status} date={item.orderStatus.date} />
                ) : null
              }
              orderSlot={(item) => (
                <OrderStatusBtns
                  item={item}
                  viewType={viewType}
                  onButtonClick={(action, clickedItem) => {
                    console.log(action, clickedItem);
                  }}
                />
              )}
            />
          </div>
        </div>
      );
    });

  return (
    <>
      <div className={styles.sticky}>
        <Tabs
          defaultActive={0}
          activeTab={activeIndex}
          onTabChange={(i) => setActiveIndex(i)}
          data={[{ label: '목록' }, { label: '상세' }]}
          className={styles.tabs}
        />
      </div>
      {/* 탭 콘텐츠는 외부에서 조건부 렌더링 */}
      <div className={styles.wrap}>
        {activeIndex === 0 && renderItems('list')}
        {activeIndex === 1 && renderItems('detail')}
      </div>
    </>
  );
};
