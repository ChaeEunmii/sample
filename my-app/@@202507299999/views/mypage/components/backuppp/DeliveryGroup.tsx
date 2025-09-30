'use client';

import { useState } from 'react';
import { Heading, Text, Stepper, Input, Stack } from '@shared/ui';
import { OrderItem, OrderStatusFlag } from '@widgets/product';
import { formatPrice } from '@/shared/utils/ui';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { DeliveryType } from '@/widgets/product/OrderList';
import { OrderStatusBtns } from '@/widgets/product/OrderStatusBtns';
import { OrderItemsInfoBox } from '@views/mypage/order/components/OrderItemsInfoBox';
import clsx from 'clsx';
import styles from './DeliveryGroup.module.scss';

/**
 * 배송 유형 기준으로 셀러별 주문 상품을 그룹화하여 노출하는 컴포넌트
 * @description 배송타입 타이틀 + 셀러별 상품 리스트 + 상태 플래그/버튼/슬롯 포함
 */

// 판매자(셀러)별 주문 상품 목록 타입 정의
export interface Seller {
  id: string;
  seller: string;
  arrival?: string;
  rental?: string;
  /** 목록에 표시할 상품 아이템 배열 */
  items: OrderItemType[];
}

// 전체 주문 배송 데이터 타입 정의
export interface OrderDeliveryData {
  /** 고유 ID */
  id: string;
  /** 배송 타입 */
  deliveryType?: DeliveryType;
  /** 목록에 표시할 판매자(셀러)별 상품 배열 */
  sellers: Seller[];
  // ... 기타 필드
}

interface DeliveryGroupProps {
  /** 주문 배송 데이터 */
  data: OrderDeliveryData;
  /** 표시 방식: 'list'는 목록형(셀러명/배송비 미노출), 'detail'은 상세형(노출) */
  viewType?: 'list' | 'detail';
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 배송타입 영역 하단 삽입될 상단 추가 슬롯 */
  topSlot?: React.ReactNode;
  /** 체크박스 선택 상태 Map (item.id 기준) */
  checkedItems?: Record<string, boolean>;
  /** 아이템 선택 변경 시 호출될 콜백 (itemId, selected 여부) */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 체크박스 사용 여부 */
  useCheckbox?: boolean;
  /** 주문상태 플래그 숨김 여부 */
  hideStatusFlag?: boolean;
  /** 주문상태 버튼 숨김 여부 */
  hideStatusBtns?: boolean;
  /** 수량 조절/컨트롤 영역 표시 여부 */
  showControlArea?: boolean;
  /** 카테고리 영역 숨기기 여부 */
  hideCategory?: boolean;
  /** 단순 텍스트 타이틀 (기본 배송 타입명이 대체됨) */
  categoryLabel?: string;
  /** 커스텀 타이틀 UI 노출 시 사용 */
  categorySlot?: React.ReactNode;
}

export function DeliveryGroup({
  data,
  viewType,
  onButtonClick,
  className,
  topSlot,
  checkedItems,
  onSelectItem,
  useCheckbox,
  hideStatusFlag,
  hideStatusBtns,
  showControlArea,
  hideCategory,
  categoryLabel,
  categorySlot,
}: DeliveryGroupProps) {
  // count (Stepper)
  const [valueCount, setValueCount] = useState(1);

  return (
    <div key={data.id} className={clsx(styles.wrap, className)}>
      {/* 타이틀 영역 출력 (우선순위: slot > label > deliveryType) */}
      {!hideCategory && (
        <div className={styles.category}>
          {categorySlot ? (
            categorySlot
          ) : (
            <Heading as="h2" size="5" weight="bold" className={styles.title}>
              {categoryLabel || (data.deliveryType as DeliveryType)}
            </Heading>
          )}
        </div>
      )}
      {/* 상단 영역슬롯 */}
      {topSlot && <div className={styles.topSlot}>{topSlot}</div>}
      {/* 해당 배송타입의 주문목록 */}
      <div className={styles.cont}>
        {data.sellers.map((seller) => {
          // 무료배송 체크
          const freeDelivery =
            seller.items.length > 0 &&
            seller.items.every((item) => item.delivery?.feePolicy === 'freeOnly');
          // 배송비 체크
          const deliveryFee = !freeDelivery
            ? (seller.items.find((item) => item.delivery?.deliveryFee !== undefined)?.delivery
                ?.deliveryFee ?? 0)
            : 0;
          // 설치배송비 체크
          const hasInstall = seller.items.some((item) => item.install === true);
          // 글로벌 배송 여부 체크
          const isGlobal = seller.items.some((item) =>
            ['globalExport', 'globalImport'].includes(item.orderStatus?.orderCase ?? '')
          );
          // 상단 배송정보 노출 조건
          const showTopDetail = (deliveryFee > 0 || !!seller.seller) && viewType === 'detail';
          // 상품 가격 지우고 갯수만 노출하는 조건 (체험단, 사은품, 가격이 0일떄)
          const isHidePriceShowCount = seller.items.some(
            (item) =>
              ['experience', 'purchaseGift'].includes(item.orderStatus?.orderCase ?? '') ||
              item.price?.current === 0
          );

          return (
            <div key={seller.id} className={styles.item}>
              {/* 최상단 셀러 + 배송비 노출 */}
              {showTopDetail && (
                <div className={styles.topDetail}>
                  {/* 셀러명이 존재할 경우에 노출 */}
                  {seller.seller && (
                    <Text size="5" weight="semibold" indent className={styles.seller}>
                      {seller.seller}
                    </Text>
                  )}
                  {/* 배송비 or 무료배송 노출 */}
                  {freeDelivery ? (
                    <Text
                      size="3"
                      color="gray2"
                      weight="semibold"
                      align="right"
                      indent
                      className={styles.fee}
                    >
                      무료배송
                    </Text>
                  ) : deliveryFee > 0 ? (
                    <Text
                      size="3"
                      color="gray2"
                      weight="semibold"
                      align="right"
                      indent
                      className={styles.fee}
                    >
                      {isGlobal && <>해외 </>}배송비 {formatPrice(deliveryFee)}
                      {hasInstall && (
                        <Text
                          as="span"
                          weight="regular"
                          color="gray3"
                          indent
                          className={styles.desc}
                        >
                          설치배송비 별도
                        </Text>
                      )}
                    </Text>
                  ) : null}
                </div>
              )}
              {/* 도착예정 노출 */}
              {seller.arrival && (
                <div className={styles.arrival}>
                  <Text size="4" weight="semibold" color="point">
                    {seller.arrival}
                  </Text>
                </div>
              )}
              {/* 목록 노출 : OrderItem에 slot으로 구성*/}
              <OrderItem
                items={seller.items} // 셀러 상품 목록
                showOrderCount // 주문 수량 표시 옵션
                isCart
                hidePrice={isHidePriceShowCount ? true : false}
                selectable={useCheckbox} // 체크박스 노출
                checkedItems={checkedItems} // 현재 체크된 상태
                onSelectItem={onSelectItem} // 체크 시 호출될 핸들러
                orderData={(item) => (
                  <>
                    {/* OrderItem hidePrice시키고 orderData슬롯에 quantity 노출 */}
                    {isHidePriceShowCount && (
                      <span className={styles.experienceCount}>{item.quantity}개</span>
                    )}
                  </>
                )}
                // 주문 위쪽에 주문 상태 표시 플래그 렌더링
                orderTopSlot={(item) => {
                  return (
                    <>
                      {/* 플래그 영역 */}
                      {item.orderStatus && !hideStatusFlag ? (
                        <div className={styles.flags}>
                          <OrderStatusFlag
                            status={item.orderStatus.status}
                            date={viewType === 'detail' ? item.orderStatus.date : undefined}
                          />
                        </div>
                      ) : null}
                    </>
                  );
                }}
                orderSlot={(item) => (
                  <>
                    {/* 추가 정보 데이터가 있으면 노출 */}
                    {item.orderAddInfo && <OrderItemsInfoBox />}
                    {/* 주문상태별 버튼 렌더링 */}
                    {!hideStatusBtns && (
                      <OrderStatusBtns
                        item={item} // 해당 상품 아이템
                        viewType={viewType ?? 'list'} // 버튼구조 뷰타입
                        onButtonClick={(action, clickedItem) => {
                          // 버튼 클릭 시 부모 컴포넌트 콜백 호출 (존재 시)
                          onButtonClick?.(action, clickedItem);
                        }}
                      />
                    )}
                    {/* 컨트롤 영역 렌더링*/}
                    {showControlArea && (
                      <div className={styles.control}>
                        <Stack type="field">
                          <Stepper
                            value={valueCount}
                            onChange={setValueCount}
                            min={1}
                            max={99}
                            className={styles.stepper}
                            disabled={item.status === 'unselectable'}
                          />
                          <Input
                            name="case2"
                            value="23,456,780 원"
                            readOnly
                            className={styles.text}
                          />
                        </Stack>
                      </div>
                    )}
                  </>
                )}
                className={styles.myOrder}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
