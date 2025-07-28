'use client';

import { Tabs, Heading } from '@shared/ui';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { OrderItem, OrderStatusFlag } from '@widgets/product';
import type { OrderStatusCode, OrderCase } from '@/widgets/product/OrderStatus';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import styles from './OrderStatusBtnsPreview.module.scss';

interface StatusItem {
  label: string;
  status: OrderStatusCode;
  orderCase?: OrderCase;
}

interface Props {
  baseData: OrderDeliveryData;
  statusItems: StatusItem[];
}

const overrideOrderStatus = (
  base: OrderDeliveryData,
  status: OrderStatusCode,
  orderCase?: OrderCase
): OrderDeliveryData => ({
  ...base,
  sellers: [
    {
      ...base.sellers[0],
      items: [
        {
          ...base.sellers[0].items[0],
          orderStatus: {
            ...base.sellers[0].items[0].orderStatus,
            status,
            ...(orderCase ? { orderCase } : {}),
          },
        },
      ],
    },
  ],
});

export const OrderStatusBtnsPreview = ({ baseData, statusItems }: Props) => {
  const renderItems = (viewType: 'detail' | 'list') =>
    statusItems.map(({ label, status, orderCase }) => {
      const data = overrideOrderStatus(baseData, status, orderCase);
      return (
        <div key={`${status}-${orderCase ?? 'none'}`} className={styles.item}>
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
    <Tabs
      defaultActive={0}
      isSticky
      data={[
        {
          label: '목록',
          content: <div className={styles.wrap}>{renderItems('list')}</div>,
        },
        {
          label: '상세',
          content: <div className={styles.wrap}>{renderItems('detail')}</div>,
        },
      ]}
    />
  );
};
