'use client';

import React from 'react';
import { Line, TextButton, Empty, Button } from '@shared/ui';
import { OrderItemType } from '@/widgets/product/OrderItem';
import { GiftBoxGroup, GroupedOrderData } from '@/views/mypage/components/GiftBoxGroup';
import clsx from 'clsx';
import styles from './SentGiftBox.module.scss';

interface SentGiftBoxProps {
  /** 데이터 */
  data?: GroupedOrderData[];
  /** 사용 타입 */
  mode?: 'sent' | 'pick';
  /** 총 건수 노출 숨김여부 */
  hideTotalCount?: boolean;
  /** 노출 개수 제한 사용 여부 */
  useItemLimit?: boolean;
  /** 상세 버튼 */
  onOrderDetail?: (order: GroupedOrderData) => void;
  /** 주문아이템 하단 버튼 클릭 핸들러 */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** GiftGroup 추가적인 클래스 이름 */
  className?: string;
  /** 데이터 없을 때 보여줄 슬롯 (기본 Empty) */
  emptySlot?: React.ReactNode;
}

export function SentGiftBox({
  data,
  mode = 'sent',
  hideTotalCount,
  useItemLimit,
  onOrderDetail,
  onButtonClick,
  className,
  emptySlot,
}: SentGiftBoxProps) {
  const hasData = data && data.length > 0;

  const isModeGiftSent = mode === 'sent'; //보낸선물함모드
  const isModeGiftPick = mode === 'pick'; //선물픽모드

  return (
    <>
      {/* 주문번호에 대한 상품목록 구성 반복 */}
      {hasData ? (
        <>
          {!hideTotalCount && (
            <div className={styles.total}>
              총 <strong>{data.length}</strong>건
            </div>
          )}
          {data.map((orderGroup, index) => (
            <React.Fragment key={`${orderGroup.orderNumber}-${index}`}>
              {index !== 0 && <Line variant="bold" margin="5" />}
              <GiftBoxGroup
                data={orderGroup}
                onDetailClick={onOrderDetail}
                onButtonClick={onButtonClick}
                hideStatusBtns
                useItemLimit={useItemLimit}
                hideOrderInfoBox={isModeGiftPick}
                detailLabel={isModeGiftSent ? '주문상세' : '선물픽 상세'}
                className={clsx(className)}
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
        (emptySlot ?? (
          <Empty
            title={`보낸 선물이 없습니다.\n고마운 사람이 있다면 감사의 마음을 전달하세요.`}
            buttons={<Button variant="primary">선물하러 가기</Button>}
          />
        ))
      )}
    </>
  );
}
