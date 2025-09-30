'use client';

import React from 'react';
import { useState } from 'react';
import {
  Button,
  ButtonArea,
  Checkbox,
  Flag,
  Icon,
  InfoItem,
  InfoList,
  Line,
  Select,
  Stepper,
  Text,
  TextButton,
} from '@/shared/ui';
import { formatPrice, formatDate } from '@/shared/utils/ui';
import { OrderItem } from '@widgets/product';
import { OrderItemType } from './OrderItem';
import clsx from 'clsx';
import styles from './OrderList.module.scss';

// 더미 데이터
import { mockOrderList } from '@/mocks/cart';

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

interface OrderListProps {
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

export function OrderList({
  data,
  className,
  checkedItems,
  setCheckedItems,
  hideDeliveryType = false,
  hideArrival = false,
  isPresent = false,
}: OrderListProps) {
  // 임시데이터
  const order = mockOrderList;
  // 상태 관리
  const [selectValues, setSelectValues] = useState<Record<string, string>>({}); // 날짜 변경 셀렉트
  const [pinnedItems, setPinnedItems] = useState<{ [id: string]: boolean }>({}); // 고정 버튼 클릭 상태 체크
  const [quantities, setQuantities] = useState<{ [id: string]: number }>(() => {
    const allItems = order.flatMap((order) =>
      order.sellers.flatMap((seller) => seller.items.map((item) => item as OrderItemType))
    );

    return allItems.reduce<{ [id: string]: number }>((acc, item) => {
      acc[item.id] = item.quantity ?? 1;
      return acc;
    }, {});
  }); // 수량 변경 stepper

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

  // 날짜 변경 셀렉트 핸들러
  const handleSelectChange = (itemId: string, newValue: string) => {
    setSelectValues((prev) => ({
      ...prev,
      [itemId]: newValue,
    }));
  };

  // 상품 수량 변경 핸들러
  const handleChange = (id: string, newValue: number) => {
    setQuantities((prev) => ({ ...prev, [id]: newValue }));
  };

  return (
    <>
      {data.map((order) =>
        order.sellers.map((seller) => {
          const id = deliveryTypeIdMap[order.deliveryType as DeliveryType] ?? null;

          const enabledItemIds = seller.items
            .filter(
              (i) =>
                (i.stock ?? 0) > 0 &&
                (i.restock === undefined || i.restock === true) &&
                i.delivery?.status !== null
            )
            .map((i) => i.id);

          const isSellerChecked =
            enabledItemIds.length > 0 && enabledItemIds.every((id) => checkedItems[id]);

          const handleSellerCheck = (checked: boolean) => {
            const updates = Object.fromEntries(enabledItemIds.map((id) => [id, checked]));
            setCheckedItems((prev) => {
              const newState = { ...prev, ...updates };
              return newState;
            });
          };

          const handleItemCheck = (itemId: string, checked: boolean) => {
            setCheckedItems((prev) => ({ ...prev, [itemId]: checked }));
          };

          return (
            <div key={seller.id} id={id} className={clsx(styles.root, className)}>
              {!hideDeliveryType && (
                <div className={styles.category}>
                  <Checkbox
                    label={order.deliveryType}
                    size="medium"
                    value={seller.id}
                    checked={isSellerChecked}
                    onChange={(e) => handleSellerCheck(e.target.checked)}
                    className={styles.categoryCheck}
                  />
                </div>
              )}
              {hideDeliveryType && <Line className="" color="black" margin="0" />}
              <React.Fragment key={seller.id}>
                <div className={styles.subCategory}>
                  <Text size="7" weight="semibold" indent className={styles.subCategoryCheck}>
                    {seller.seller}
                  </Text>
                </div>

                {!hideArrival && (
                  <>
                    {/* 도착 예정 시간 안내 */}
                    <div className={styles.arrival}>
                      <Text size="4" weight="medium">
                        지금 주문하면
                      </Text>
                      <Text size="4" weight="semibold" color="point">
                        오늘(수) 15:00 ~ 17:00 도착 가능
                      </Text>
                    </div>
                  </>
                )}

                <OrderItem
                  items={seller.items}
                  checkedItems={checkedItems}
                  onSelectItem={handleItemCheck}
                  selectable
                  isCart
                  isDelete
                  promotionData={(item, index) => {
                    // bundleId 체크
                    const currentBundleId = item.bundleId;

                    // bundleId가 있는 경우, 같은 bundleId면 제일 상단에만 프로모션 노출
                    const isFirstInBundle = currentBundleId
                      ? seller.items.findIndex((i) => i.bundleId === currentBundleId) === index
                      : true; // bundleId 없으면 항상 true

                    return (
                      <>
                        {item.promotion && isFirstInBundle && (
                          <div className={styles.promotion}>
                            <div className={styles.grayBox}>
                              <div className={styles.topBox}>
                                <div className={styles.leftBox}>
                                  <Flag
                                    data={{
                                      color: 'black',
                                      label:
                                        item.promotion?.type === 'plus'
                                          ? '1+1 할인'
                                          : item.promotion?.type === 'quantity'
                                            ? '수량할인'
                                            : item.promotion?.type === 'bundle'
                                              ? '묶음 할인'
                                              : null,
                                    }}
                                    radius="all"
                                    size="large"
                                    className={styles.flag}
                                  />
                                  <Text
                                    size="4"
                                    weight="semibold"
                                    color={item.promotion?.case === 'none' ? 'gray1' : 'point'}
                                    className={clsx(styles.text)}
                                  >
                                    {item.promotion?.case === 'none' ? (
                                      <>미적용</>
                                    ) : (
                                      <>
                                        {item.promotion?.type === 'plus' &&
                                          `${item.promotion?.count?.freeQty}개 무료 적용`}
                                        {item.promotion?.type === 'quantity' && (
                                          <>
                                            {item.promotion?.count?.boRate &&
                                              `${item.promotion?.count?.boRate}%`}
                                            {item.promotion?.count?.boAmount &&
                                              formatPrice(item.promotion?.count?.boAmount)}{' '}
                                            할인 적용
                                          </>
                                        )}
                                        {item.promotion?.type === 'bundle' &&
                                          `${item.promotion?.count?.freeQty}묶음 할인 적용`}
                                      </>
                                    )}

                                    {item.promotion?.type === 'plus' ? (
                                      <Text as="span" size="3" weight="medium" color="gray1">
                                        &#40;{item.promotion?.count?.boQty}개 구매 시 그 중{' '}
                                        {item.promotion?.count?.freeQty}개 무료&#41;
                                      </Text>
                                    ) : item.promotion?.type === 'quantity' ? (
                                      <Text as="span" size="3" weight="medium" color="gray1">
                                        &#40;
                                        {item.promotion?.count?.boQty}개 이상 구매 시{' '}
                                        {item.promotion?.count?.boRate &&
                                          `${item.promotion?.count?.boRate}%`}
                                        {item.promotion?.count?.boAmount &&
                                          formatPrice(item.promotion?.count?.boAmount)}{' '}
                                        할인&#41;
                                      </Text>
                                    ) : null}
                                  </Text>
                                </div>

                                {item.promotion?.type !== 'quantity' && (
                                  <TextButton
                                    color="gray3"
                                    size="1"
                                    suffixIcon="arrowRight"
                                    variant="bold"
                                    onClick={() => {}}
                                  >
                                    골라담기
                                  </TextButton>
                                )}
                              </div>

                              <Line margin="1" className={styles.promotionLine} />

                              {item.promotion?.case === 'none' ? (
                                <Text
                                  size="3"
                                  color="gray2"
                                  weight="medium"
                                  align="center"
                                  className={styles.promotionDesc}
                                >
                                  상품을 더 담고 할인 받아보세요!
                                </Text>
                              ) : (
                                <>
                                  <div className={styles.priceBox}>
                                    <Text as="del" size="3" color="gray3">
                                      {formatPrice(item.price?.original ?? 0)}
                                    </Text>
                                    <Icon
                                      name="arrowRight"
                                      size="small"
                                      className={styles.priceArrow}
                                    />
                                    <Text size="3" weight="medium">
                                      {formatPrice(item.promotion?.count?.discounted ?? 0)}
                                    </Text>
                                  </div>
                                </>
                              )}
                            </div>
                            {item.promotion.case === 'mixed' && (
                              <Text size="3" color="gray2" indent>
                                일부 할인 미적용 상품이 있습니다. 상품을 더 담고 할인 받아보세요.
                              </Text>
                            )}
                          </div>
                        )}
                      </>
                    );
                  }}
                  orderSlot={(item) => (
                    <>
                      <div className={styles.solotBox}>
                        {/*  배송 관련 지정일 */}
                        {item.delivery?.date && (
                          <div className={(styles.pickup, styles.selectBox)}>
                            {item.delivery.dateType === 'pickup' && (
                              <InfoList variant="stacked" margin="0">
                                <InfoItem
                                  title={
                                    <Text as="span" size="4" color="gray3" className={styles.place}>
                                      <Icon name="map" size="medium" />
                                      픽업장소
                                    </Text>
                                  }
                                  content={
                                    <Text size="4" weight="medium">
                                      본점 매장
                                    </Text>
                                  }
                                />
                              </InfoList>
                            )}

                            <Select
                              label={(() => {
                                switch (item.delivery?.dateType) {
                                  case 'reserve':
                                    return '예약상품 배송일';
                                  case 'hope':
                                    return '배송희망일';
                                  case 'pickup':
                                    return '픽업일';
                                  default:
                                    return '';
                                }
                              })()}
                              options={[
                                {
                                  label: formatDate(item.delivery?.date),
                                  value: 'option1',
                                },
                                {
                                  label: '2030.09.13(토)',
                                  value: 'option2',
                                },
                                {
                                  label: '2030.09.14(일)',
                                  value: 'option3',
                                },
                                {
                                  label: '2030.09.15(월)',
                                  value: 'option4',
                                },
                              ]}
                              value={selectValues[item.id] ?? 'option1'}
                              onChange={(newValue) => handleSelectChange(item.id, newValue)}
                              expired={
                                (selectValues[item.id] ?? 'option1') === 'option1' &&
                                !!item.delivery.date &&
                                (() => {
                                  const pickupDate = new Date(
                                    `${item.delivery.date.slice(0, 4)}-${item.delivery.date.slice(4, 6)}-${item.delivery.date.slice(6, 8)}`
                                  );
                                  const today = new Date();
                                  pickupDate.setHours(0, 0, 0, 0);
                                  today.setHours(0, 0, 0, 0);
                                  return pickupDate < today;
                                })()
                              }
                              disabled={item.stock === 0}
                              className={styles.dateSelect}
                            />
                          </div>
                        )}
                        {/* 하단 버튼 영역 */}
                        <ButtonArea className={styles.buttonArea}>
                          <Button
                            size="medium"
                            iconOnly={pinnedItems[item.id] ? 'pinFilled' : 'pin'}
                            variant={pinnedItems[item.id] ? 'secondary' : 'tertiary'}
                            onClick={() =>
                              setPinnedItems((prev) => ({
                                ...prev,
                                [item.id]: !prev[item.id],
                              }))
                            }
                            className={clsx(styles.pinButton)}
                          >
                            고정
                          </Button>

                          {/* [일시품절] 재입고 알림 버튼 / [품절임박, 재고가 1개라도 있으면] 수량 조절 + 바로선물 버튼 / [현배송지 구매불가, 품절, 판매중단, 판매 종료] 바로구매 비활성화 버튼 */}
                          {item.stock === 0 && item.restock === true ? (
                            <Button prefixIcon="bell" variant="secondary">
                              재입고 알림
                            </Button>
                          ) : (
                            <>
                              {(item.stock ?? 0) > 0 && item.delivery?.status !== null && (
                                <Stepper
                                  value={quantities[String(item.id)] ?? 1}
                                  onChange={(value) => handleChange(String(item.id), value)}
                                  min={1}
                                  max={item.stock}
                                  className={styles.stepper}
                                  disabled={
                                    item.stock === 0 ||
                                    item.delivery?.status === null ||
                                    item.status != null
                                  }
                                />
                              )}
                              <Button
                                variant="primary"
                                disabled={
                                  item.stock === 0 ||
                                  item.delivery?.status === null ||
                                  item.status != null
                                }
                              >
                                {
                                  // item.delivery?.status === null
                                  //   ? '구매불가'
                                  //   : : item.stock === 0 || item.status != null
                                  //       ? '품절'
                                  isPresent ? '바로선물' : '바로구매'
                                }
                              </Button>
                            </>
                          )}
                        </ButtonArea>
                      </div>

                      {/* 배송비 영역 */}
                      {(item.delivery?.deliveryFee || item.delivery?.feePolicy) && (
                        <div className={styles.feeBox}>
                          <Text>
                            {formatPrice(item.price?.current ?? 0)} +
                            {item.delivery.feePolicy === 'freeOnly' ? (
                              <>무료배송 </>
                            ) : (
                              <>배송비 {formatPrice(item.delivery.deliveryFee ?? 0)} </>
                            )}
                            ={' '}
                            <Text as="strong">
                              {formatPrice(
                                (item.price?.current ?? 0) +
                                  (item.delivery.feePolicy === 'freeOnly'
                                    ? 0
                                    : (item.delivery.deliveryFee ?? 0))
                              )}
                            </Text>
                          </Text>
                          {!item.delivery.feePolicy && (
                            <>
                              <Text size="4" className={styles.feeDesc}>
                                50,000원 이상 무료배송
                              </Text>

                              <TextButton
                                color="gray1"
                                size="2"
                                variant="underline"
                                onClick={() => {}}
                                className={styles.saverButton}
                              >
                                배송비 절약 상품 보러가기
                              </TextButton>
                            </>
                          )}
                        </div>
                      )}
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

OrderList.displayName = 'OrderList';
