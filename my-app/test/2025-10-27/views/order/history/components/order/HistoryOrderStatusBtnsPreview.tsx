'use client';

import { useState } from 'react';
import { Tabs, Heading } from '@shared/ui';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
/** 과거주문내역용 재구성 */
import type {
  OrderStatusCode,
  OrderCase,
} from '@/views/mypage/order/history/components/order/HistoryOrderStatus';
import styles from './HistoryOrderStatusBtnsPreview.module.scss';

/** '과거주문내역조회' 주문상태별 하단 버튼구조 보기용 컴퍼넌트 입니다
 *  실제 화면에서 사용하지 않습니다. (case 보기용)
 */

interface StatusItem {
  label: string;
  status: OrderStatusCode;
  date?: string | null;
  dateNote?: string | null; // 날짜 옆에 정보 텍스트 넣는경우
  note?: string; // 날짜말고 텍스트 넣는경우
  detailNote?: string | null; // 날짜말고 텍스트 넣는경우 : detail에서만 보임
  orderCase?: OrderCase;
  noReview?: boolean; // 리뷰없음 여부
}

interface Props {
  baseData: OrderDeliveryData;
  statusItems: StatusItem[];
}

const overrideOrderStatus = (
  base: OrderDeliveryData,
  status: OrderStatusCode,
  date?: string | null,
  dateNote?: string | null,
  note?: string | null,
  detailNote?: string | null,
  orderCase?: OrderCase,
  noReview?: boolean,
  deliveryTypeOverride?: OrderDeliveryData['deliveryType']
): OrderDeliveryData => {
  const baseItem = base.sellers[0].items[0];

  return {
    ...base,
    deliveryType: deliveryTypeOverride ?? base.deliveryType ?? undefined,
    sellers: [
      {
        ...base.sellers[0],
        items: [
          {
            ...baseItem,
            orderStatus: {
              ...baseItem.orderStatus,
              status,
              ...(date !== undefined ? { date: date ?? undefined } : {}),
              ...(dateNote !== undefined ? { dateNote: dateNote ?? undefined } : {}),
              ...(note !== undefined ? { note: note ?? undefined } : {}),
              ...(detailNote !== undefined ? { detailNote: detailNote ?? undefined } : {}),
              ...(orderCase ? { orderCase } : {}),
              ...(noReview ? { noReview } : {}),
            },
          },
        ],
      },
    ],
  };
};

export const HistoryOrderStatusBtnsPreview = ({ baseData, statusItems }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItems = (viewType: 'detail' | 'list') =>
    statusItems.map(
      ({ label, status, date, dateNote, note, detailNote, orderCase, noReview }, idx) => {
        const data = overrideOrderStatus(
          baseData,
          status,
          date,
          dateNote,
          note,
          detailNote,
          orderCase,
          noReview
        );
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
              <HistoryDeliveryGroup
                data={[data]}
                viewType={viewType}
                onButtonClick={(action, clickedItem) => {
                  console.log(action, clickedItem);
                }}
              />
            </div>
          </div>
        );
      }
    );

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
