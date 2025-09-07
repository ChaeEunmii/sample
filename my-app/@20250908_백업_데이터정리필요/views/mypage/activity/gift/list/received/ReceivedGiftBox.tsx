'use client';

import React from 'react';
import { Line, TextButton, Empty } from '@shared/ui';
import { OrderItemType } from '@/widgets/product/OrderItem';
import { GiftGroup, GroupedOrderData } from '@/views/mypage/components/GiftGroup';
import styles from './ReceivedGiftBox.module.scss';

interface ReceivedGiftBoxProps {
  data?: GroupedOrderData[];
  /** 총 건수 노출 여부 */
  showTotalCount?: boolean;
  /** 상세 버튼 */
  onOrderDetail?: (order: GroupedOrderData) => void;
  /** 주문아이템 하단 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
}

export function ReceivedGiftBox({
  data,
  showTotalCount,
  onOrderDetail,
  onButtonClick,
}: ReceivedGiftBoxProps) {
  const hasData = data && data.length > 0;

  return (
    <>
      {/* 주문번호에 대한 상품목록 구성 반복 */}
      {hasData ? (
        <>
          {showTotalCount && (
            <div className={styles.total}>
              총 <strong>{data.length}</strong>건
            </div>
          )}
          {data.map((orderGroup, index) => (
            <React.Fragment key={`${orderGroup.orderNumber}-${index}`}>
              {index !== 0 && <Line variant="bold" margin="5" />}
              <GiftGroup
                data={orderGroup}
                hideOrderInfoBox
                hideDetailButton
                hidePrice
                onDetailClick={onOrderDetail}
                onButtonClick={onButtonClick}
              />
            </React.Fragment>
          ))}
          <div className="ncp-text-center ncp-mt-l">
            <TextButton suffixIcon="arrowDown" iconSize="xsmall" size="1">
              더보기
            </TextButton>
          </div>
        </>
      ) : (
        <Empty title="받은 선물이 없습니다." />
      )}
    </>
  );
}
