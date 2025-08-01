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
 * '배송 유형' 기준으로 (배송유형 + OrderItem 상품들)을 그룹화하여 노출하는 컴포넌트 (배열 데이터)
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

// 주문 배송 데이터 타입 정의
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
  /** 주문 배송 데이터 리스트 (배열) */
  data: OrderDeliveryData[];
  /** 표시 방식: 'list'는 목록형(셀러명/배송비 미노출), 'detail'은 상세형(노출) */
  viewType?: 'list' | 'detail';
  /** 하단 추가 슬롯 */
  bottomSlot?: React.ReactNode;
  /** 주문상태 플래그 숨김 여부 */
  hideStatusFlag?: boolean;
  /** 주문상태 버튼 숨김 여부 */
  hideStatusBtns?: boolean;
  /** 수량 조절/컨트롤 영역 표시 여부 */
  showControlArea?: boolean;
  /** 카테고리 영역 숨기기 여부 */
  hideCategory?: boolean;
  /** 상단상세(셀러, 배송비) 영역 숨기기 여부 */
  hideTopDatail?: boolean;
  /** 체크박스 사용 여부 */
  useCheckbox?: boolean;
  /** 체크박스 선택 상태 Map (item.id 기준) */
  checkedItems?: Record<string, boolean>;
  /** 아이템 선택 변경 시 호출될 콜백 (itemId, selected 여부) */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function DeliveryGroup({
  data,
  viewType,
  bottomSlot,
  hideStatusFlag,
  hideStatusBtns,
  showControlArea,
  hideCategory,
  hideTopDatail,
  useCheckbox,
  checkedItems,
  onSelectItem,
  onButtonClick,
  className,
}: DeliveryGroupProps) {
  // count (Stepper)
  const [valueCount, setValueCount] = useState(1);

  return (
    <>
      <div className={clsx(styles.root, className)}>
        {data.map((deliveryData) => (
          <div key={deliveryData.id} className={styles.wrap}>
            {/* 배송유형 타이틀 영역 출력 */}
            {!hideCategory && (
              <div className={styles.category}>
                <Heading as="h2" size="5" weight="bold" className={styles.title}>
                  {deliveryData.deliveryType as DeliveryType}
                </Heading>
              </div>
            )}
            {/* 해당 배송타입의 주문목록 */}
            <div className={styles.cont}>
              {deliveryData.sellers.map((seller) => {
                const freeDelivery =
                  seller.items.length > 0 &&
                  seller.items.every((item) => item.delivery?.feePolicy === 'freeOnly');
                const deliveryFee = !freeDelivery
                  ? (seller.items.find((item) => item.delivery?.deliveryFee !== undefined)?.delivery
                      ?.deliveryFee ?? 0)
                  : 0;
                const hasInstall = seller.items.some((item) => item.install === true);
                const isGlobal = seller.items.some((item) =>
                  ['globalExport', 'globalImport'].includes(item.orderStatus?.orderCase ?? '')
                );
                const showTopDetail =
                  (deliveryFee > 0 || !!seller.seller) && viewType === 'detail' && !hideTopDatail;
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
                        {seller.seller && (
                          <Text size="5" weight="semibold" indent className={styles.seller}>
                            {seller.seller}
                          </Text>
                        )}
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
                    {seller.arrival && !hideTopDatail && (
                      <div className={styles.arrival}>
                        <Text size="4" weight="semibold" color="point">
                          {seller.arrival}
                        </Text>
                      </div>
                    )}
                    {/* 목록 노출 : OrderItem에 slot으로 구성 */}
                    <OrderItem
                      items={seller.items} // 셀러 상품 목록
                      showOrderCount // 주문 수량 표시 옵션
                      isCart // 장바구니와 동일한 구조 사용
                      hidePrice={isHidePriceShowCount ? true : false} // 가격 숨김 조건
                      lineDivider // 리스트 라인으로 구분되는 스타일
                      selectable={useCheckbox} // 체크박스 노출
                      checkedItems={checkedItems} // 현재 체크된 상태
                      onSelectItem={onSelectItem} // 체크 시 호출될 핸들러
                      orderData={(item) =>
                        isHidePriceShowCount ? (
                          <span className={styles.experienceCount}>{item.quantity}개</span>
                        ) : null
                      }
                      // 주문 오른쪽 상단 슬롯
                      orderTopSlot={(item) =>
                        item.orderStatus && !hideStatusFlag ? (
                          <>
                            {/* 주문플래그 */}
                            <div className={styles.flags}>
                              <OrderStatusFlag
                                status={item.orderStatus.status}
                                date={viewType === 'detail' ? item.orderStatus.date : undefined}
                              />
                            </div>
                          </>
                        ) : null
                      }
                      // 주문 하단 슬롯
                      orderSlot={(item) => (
                        <>
                          {/* 추가정보 */}
                          {item.orderAddInfo && <OrderItemsInfoBox data={item.orderAddInfo} />}
                          {/* 주문상태 버튼들 */}
                          {!hideStatusBtns && (
                            <OrderStatusBtns
                              item={item}
                              viewType={viewType ?? 'list'}
                              onButtonClick={(action, clickedItem) =>
                                onButtonClick?.(action, clickedItem)
                              }
                            />
                          )}
                          {/* 컨트롤영역 */}
                          {showControlArea && (
                            <div className={styles.control}>
                              <Stack type="field">
                                <Stepper
                                  value={valueCount}
                                  onChange={setValueCount}
                                  min={1}
                                  max={99}
                                  className={styles.stepper}
                                  disabled={item.unselectable}
                                />
                                <Input
                                  name="case"
                                  value="23,456,780 원"
                                  readOnly
                                  className={styles.text}
                                />
                              </Stack>
                            </div>
                          )}
                        </>
                      )}
                    />
                    {/* 하단 영역슬롯 */}
                    {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
