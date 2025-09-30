'use client';

import React from 'react';
// import { useState } from 'react';
import { Heading, Checkbox } from '@/shared/ui';
import { OrderItem } from '@widgets/product';
import { OrderItemType } from '@widgets/product/OrderItem';
import clsx from 'clsx';
import styles from './MyOrderList.module.scss';

export type DeliveryType =
  | '택배배송'
  | '새벽/당일배송'
  | '오늘배송'
  | '내일배송'
  | '명절배송'
  | '퀵배송'
  | '스토어픽'
  | '무형상품';
interface Seller {
  id: string;
  seller: string;
  arrival?: string;
  /** 목록에 표시할 상품 아이템 배열 */
  items: OrderItemType[];
}

interface Order {
  id: string;
  deliveryType: string;
  /** 목록에 표시할 장바구니 중분류 배열 */
  sellers: Seller[];
}

interface MyOrderListProps {
  /** 목록에 표시할 장바구니 대분류 배열 */
  data: Order[];
  /** 추가적인 CSS 클래스명 */
  className?: string;
  /** 추가적인 CSS 클래스명 */
  checkedItems: Record<string, boolean>;
  setCheckedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  /** 장바구니 대분류(deliveryType: 택배배송, 새벽/당일배송 등) 숨기기(기본: false) */
  hideDeliveryType?: boolean;
  /** 상품 도착 시간 숨기기(기본: false) */
  hideArrival?: boolean;
  /** 선물 관련 페이지인지 체크(기본: false) */
  isPresent?: boolean;
}

export function MyOrderList({ data, className, checkedItems, setCheckedItems }: MyOrderListProps) {
  // 대분류 목록
  const deliveryTypeIdMap: Record<DeliveryType, string> = {
    택배배송: 'standard',
    '새벽/당일배송': 'express',
    오늘배송: 'today',
    내일배송: 'tomorrow',
    명절배송: 'holiday',
    퀵배송: 'quick',
    스토어픽: 'store',
    무형상품: 'digital',
  };

  return (
    <>
      {data.map((order) =>
        order.sellers.map((seller) => {
          const id = deliveryTypeIdMap[order.deliveryType as DeliveryType] ?? null;

          const handleItemCheck = (itemId: string, checked: boolean) => {
            setCheckedItems((prev) => ({ ...prev, [itemId]: checked }));
          };

          return (
            <div key={seller.id} id={id} className={clsx(styles.root, className)}>
              <React.Fragment key={seller.id}>
                {/* 상단 타이틀영역 */}
                <div className={styles.title}>
                  <Heading indent className={styles.heading}>
                    취소할 상품을 선택해주세요
                  </Heading>
                </div>
                {/* 중간 전체선택 영역 */}
                <div className={styles.top}>
                  <Checkbox label="전체선택" />
                </div>
                {/* 주문목록 영역 */}
                <OrderItem
                  items={seller.items}
                  checkedItems={checkedItems}
                  onSelectItem={handleItemCheck}
                  selectable // 선택가능여부
                  isCart
                  orderSlot={(item) => (
                    <>
                      <div className={styles.solotBox}>{item.stock}예시</div>
                    </>
                  )}
                />
              </React.Fragment>
            </div>
          );
        })
      )}
    </>
  );
}
