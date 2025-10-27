'use client';

import { Heading, Text } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import { OrderItemsInfoBox } from '@views/mypage/order/components/OrderItemsInfoBox';
/** 과거주문내역용 재구성 */
import { HistoryOrderItem } from '@/views/mypage/order/history/components';
import type { OrderItemType } from '@/views/mypage/order/history/components/order/HistoryOrderItem';
import { HistoryOrderStatusFlag } from '@/views/mypage/order/history/components/order/HistoryOrderStatusFlag';
import { HistoryOrderStatusBtns } from '@/views/mypage/order/history/components/order/HistoryOrderStatusBtns';
import clsx from 'clsx';
import styles from './HistoryDeliveryGroup.module.scss';

type DeliveryType =
  | '택배배송'
  | '새벽배송'
  | '명절배송'
  | '선물배송'
  | '스토어픽'
  | '방문픽업'
  | '테이블오더'
  | '명절선물';

/**
 * '과거주문내역조회'
 * '배송 유형' 기준으로 (배송유형 + OrderItem 상품들)을 그룹화하여 노출하는 컴포넌트 (배열 데이터)
 * @description 배송타입 타이틀 + 셀러별 상품 리스트 + 상태 플래그/버튼/슬롯 포함
 */

export interface HistoryOrderItemType extends OrderItemType {
  /** 테이블오더 정보 */
  tOrderDetail?: {
    label?: string;
    quantity?: number;
    price?: {
      current?: number;
      original?: number;
    };
  }[];
  /** 기프티콘 여부 */
  isGifticon?: boolean;
}

// 판매자(셀러)별 주문 상품 목록 타입 정의
export interface Seller {
  id: string;
  seller: string;
  sellerLabel?: string;
  arrival?: string;
  rental?: string;
  /** 목록에 표시할 상품 아이템 배열 */
  items: HistoryOrderItemType[];
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

interface HistoryDeliveryGroupProps {
  /** 주문 배송 데이터 리스트 (배열) */
  data: OrderDeliveryData[];
  /** 표시 방식: 'list'는 목록형(셀러명/배송비 미노출), 'detail'은 상세형(노출) */
  viewType?: 'list' | 'detail';
  /** 모드 : 구분 필요한 경우 사용 */
  mode?: 'default' | 'tohome';
  /** 하단 추가 슬롯 */
  bottomSlot?: React.ReactNode;
  /** 주문상태 플래그 숨김 여부 */
  hideStatusFlag?: boolean;
  /** 주문상태 버튼 숨김 여부 */
  hideStatusBtns?: boolean;
  /** 카테고리 영역 숨기기 여부 */
  hideCategory?: boolean;
  /** 상단상세(셀러, 배송비) 영역 숨기기 여부 */
  hideTopDatail?: boolean;
  /** 체크박스 사용 여부 */
  useCheckbox?: boolean;
  /** 체크박스 선택 상태 Map (item.id 기준) */
  checkedItems?: Record<string, boolean>;
  /** 첫번째 item 상단 보더 여부 (default : false) */
  itemTopLine?: boolean;
  /** 아이템 선택 변경 시 호출될 콜백 (itemId, selected 여부) */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 버튼 클릭 시 호출되는 콜백 함수 (action 종류, 클릭된 아이템 정보 전달) */
  onButtonClick?: (action: string, item: OrderItemType) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function HistoryDeliveryGroup({
  data,
  viewType,
  mode,
  bottomSlot,
  hideStatusFlag,
  hideStatusBtns,
  hideCategory,
  hideTopDatail,
  itemTopLine = false,
  onButtonClick,
  className,
}: HistoryDeliveryGroupProps) {
  return (
    <>
      <div className={clsx(styles.root, className)}>
        {data.map((deliveryData) => {
          // 표시할 상품이 없는 배송 그룹은 렌더링 생략
          const hasValidItems = deliveryData.sellers.some((seller) => seller.items.length > 0);
          if (!hasValidItems) return null;

          return (
            <div key={deliveryData.id} className={styles.wrap}>
              {/* 배송유형 타이틀 영역 출력 */}
              {!hideCategory && deliveryData.deliveryType && (
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
                    ? (seller.items.find((item) => item.delivery?.deliveryFee !== undefined)
                        ?.delivery?.deliveryFee ?? 0)
                    : 0;
                  const hasInstall = seller.items.some((item) => item.install === true);
                  const isGlobal = seller.items.some((item) =>
                    ['globalExport', 'globalImport'].includes(item.orderStatus?.orderCase ?? '')
                  );
                  const showTopDetail =
                    (deliveryFee > 0 || !!seller.seller) && viewType === 'detail' && !hideTopDatail;
                  // 가격 숨김 후 수량 orderData로 추가됨
                  const isHidePriceShowCount = seller.items.some(
                    (item) =>
                      ['experience', 'purchaseGift'].includes(item.orderStatus?.orderCase ?? '') ||
                      (!item.isGifticon && item.price?.current === 0)
                  );
                  // 설치상품 여부
                  const isRental = seller.items.some((item) => !!item.rentalInfo);
                  // 가격 영역 숨김 조건
                  const isHidePrice = isRental || isHidePriceShowCount;

                  return (
                    <div
                      key={seller.id}
                      className={clsx(styles.item, itemTopLine && styles.itemTopLine)}
                    >
                      {/* 최상단 셀러 + 배송비 노출 */}
                      {showTopDetail && (
                        <div className={styles.topDetail}>
                          {seller.seller && (
                            <Text size="5" weight="semibold" indent className={styles.seller}>
                              {seller.seller}
                            </Text>
                          )}
                          {/* 이용권 & e쿠폰 '쿠폰' 정보표시 */}
                          {seller.sellerLabel && (
                            <Text
                              size="3"
                              color="gray2"
                              weight="semibold"
                              align="right"
                              indent
                              className={styles.label}
                            >
                              {seller.sellerLabel}
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
                      <HistoryOrderItem
                        items={seller.items} // 셀러 상품 목록
                        showOrderCount // 주문 수량 표시 옵션
                        isCart // 장바구니와 동일한 구조 사용
                        hidePrice={isHidePrice ? true : false} // 가격 숨김 조건
                        lineDivider // 리스트 라인으로 구분되는 스타일
                        orderDetailData={(item) => {
                          const rental = item.rentalInfo;
                          return (
                            <>
                              {/* 렌탈 */}
                              {rental && (
                                <div className={styles.rentalInfo}>
                                  <ul className={styles.retalList}>
                                    {rental.monthlyFee && rental.monthlyFee > 0 && (
                                      <li>
                                        <strong className={styles.field}>월렌탈료</strong>
                                        <span>{formatPrice(rental.monthlyFee)}</span>
                                      </li>
                                    )}
                                    {rental.period && rental.period > 0 && (
                                      <li>
                                        <strong className={styles.field}>약정개월수</strong>
                                        <span>{rental.period}개월</span>
                                      </li>
                                    )}
                                  </ul>
                                  <div className={styles.rentalBottom}>
                                    {rental.separateContract && (
                                      <strong className={styles.separate}>별도약정</strong>
                                    )}
                                    <span>{item.quantity}개</span>
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        }}
                        orderData={(item: HistoryOrderItemType) => (
                          <>
                            {isHidePriceShowCount ? (
                              <span className={styles.experienceCount}>{item.quantity}개</span>
                            ) : null}
                            {/* 테이블오더 데이터의 경우 표시 */}
                            {item.tOrderDetail && (
                              <ul className={styles.infos}>
                                {item.tOrderDetail?.map((row, idx) => (
                                  <li key={row.label ?? idx}>
                                    {row.label && (
                                      <Text as="span" size="4" color="gray3">
                                        - {row.label}
                                      </Text>
                                    )}
                                    {row.quantity != null && (
                                      <Text as="span" size="4" color="gray3">
                                        {row.quantity}개
                                      </Text>
                                    )}
                                    <div className={styles.group}>
                                      {row.price?.current != null && (
                                        <Text as="span" size="4" color="gray1">
                                          {formatPrice(row.price.current)}
                                        </Text>
                                      )}
                                      {row.price?.original != null && (
                                        <Text as="del" size="3" color="gray3">
                                          {formatPrice(row.price.original)}
                                        </Text>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                        // 주문 오른쪽 상단 슬롯
                        orderTopSlot={(item) =>
                          item.orderStatus && !hideStatusFlag ? (
                            <>
                              {/* 주문플래그 */}
                              <div className={styles.flags}>
                                <HistoryOrderStatusFlag
                                  status={item.orderStatus.status}
                                  date={viewType === 'detail' ? item.orderStatus.date : undefined}
                                  dateNote={
                                    viewType === 'detail' ? item.orderStatus.dateNote : undefined
                                  }
                                  note={item.orderStatus.note ?? undefined}
                                  detailNote={
                                    viewType === 'detail' ? item.orderStatus.detailNote : undefined
                                  }
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
                              <HistoryOrderStatusBtns
                                item={item}
                                viewType={viewType ?? 'list'}
                                mode={mode ?? 'default'}
                                onButtonClick={(action, clickedItem) =>
                                  onButtonClick?.(action, clickedItem)
                                }
                              />
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
          );
        })}
      </div>
    </>
  );
}
