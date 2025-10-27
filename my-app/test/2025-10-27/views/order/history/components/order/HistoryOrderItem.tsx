'use client';

import clsx from 'clsx';
import { Link, Image, Text, InfoList, InfoItem } from '@/shared/ui';
import type { OrderStatusInfo } from '@/views/mypage/order/history/components/order/HistoryOrderStatus';
import { ProdPrice, ProdTitle } from '@widgets/product';
import styles from './HistoryOrderItem.module.scss';

/**
 * '과거주문내역조회' 주문아이템
 * (@widgets/product/OrderItem.tsx 에서 필요한 부분 가져옴)
 */

/** 배송비 정책 (무조건 무료배송, 무조건 유료배송) */
type DeliveryFeePolicy = 'freeOnly' | 'paidOnly' | null | undefined | (string & {});

export interface OrderItemType {
  /** 상품 ID */
  id: string;
  /** 상품 링크 */
  href?: string;
  /** 이미지 정보 */
  image?: {
    src: string;
    alt?: string;
  };
  /** 브랜드명 */
  brand?: string;
  /** 상품명 */
  title?: string;
  /** 주문옵션 등 기타 옵션들 */
  orderOptions?: string[];
  /** 상품 입력형 옵션 */
  fieldOption?: string[];
  /** 사은품 */
  gift?: string;
  /** 가격 정보 */
  price?: {
    current?: number;
    original?: number;
    discount?: number;
    discountRate?: number;
  };
  /** 상품 주문 수량 */
  quantity?: number;
  /** 주문 상태 */
  orderStatus?: OrderStatusInfo;
  /** 주문 추가정보 */
  orderAddInfo?: { label: string; value: string }[];
  /** 배송 관련 */
  delivery?: {
    /** 배송비 */
    deliveryFee?: number;
    /** 배송비 정책 (무조건 무료배송, 무조건 유료배송) */
    feePolicy?: DeliveryFeePolicy;
  };
  /** 설치 상품 여부 */
  install?: boolean;
  /** 추가 클래스 */
  className?: string;
  /** 렌탈 정보 (월 렌탈료, 약정 개월 수, 별도약정 여부) */
  rentalInfo?: {
    monthlyFee?: number;
    period?: number;
    separateContract?: boolean;
  };
}

// order 목록
interface OrderItemListProps<T extends OrderItemType = OrderItemType> {
  /** 목록에 표시할 상품 아이템 배열 */
  items: T[];
  /** 상품의 최상단 정보 노출 시 렌더링하는 함수(.wrap 상단에 위치) */
  orderTopData?: (item: T, index: number) => React.ReactNode;
  /** 상품의 기타 상세 정보를 렌더링 하는 함수(.right > .detail > 가격 상단에 위치) */
  orderDetailData?: (item: T) => React.ReactNode;
  /** 상품의 정보를 렌더링 하는 함수(.right > .detail 하단에 위치) */
  orderData?: (item: T) => React.ReactNode;
  /** 아이템 내에 추가적인 콘텐츠를 렌더링하는 함수(.itemWrap > .itemInfo 하단에 위치) */
  orderSlot?: (item: T) => React.ReactNode;
  /** 상품의 우측 상단 추가적인 콘텐츠를 렌더링 */
  orderTopSlot?: (item: T) => React.ReactNode;
  /** 타이틀 상단 추가적인 콘텐츠를 렌더링 */
  titleSlot?: (item: T) => React.ReactNode;
  /** 추가적인 CSS 클래스명 */
  className?: string;
  /** 장바구니 페이지인지 체크 */
  isCart?: boolean;
  /** 가격 옆 주문 개수 노출 여부 체크 */
  showOrderCount?: boolean;
  /** 상품 이미지 사이즈(small - 64px, medium - 74px, nomal - 90px) */
  thumbSize?: 'small' | 'medium' | 'normal';
  /** 텍스트 가운데 정렬 여부 */
  isVerticalCenter?: boolean;
  /** 가격 숨김 여부 */
  hidePrice?: boolean;
  /** 상품 이미지, 브랜드명, 상품명, 할인가, 판매가, 수량 노출만 되게 */
  isDefault?: boolean;
  /** 상품간(li) 간격(24px, 32px(default), 40px) */
  gap?: '24' | '32' | '40';
  /** itemWrap 내부 간격(16px, 24px(default))*/
  itemWrapGap?: '0' | '16' | '24';
  /** 라인으로 구분되는 스타일 */
  lineDivider?: boolean;
  /** 상품명 옵션 */
  titleProps?: {
    line?: number;
  };
}

export const HistoryOrderItem = ({
  items,
  orderTopData,
  orderDetailData,
  orderData,
  orderSlot,
  orderTopSlot,
  titleSlot,
  className,
  isCart = false,
  showOrderCount = false,
  thumbSize = 'normal',
  isVerticalCenter = false,
  hidePrice = false,
  isDefault = false,
  gap,
  itemWrapGap,
  lineDivider = false,
  titleProps,
}: OrderItemListProps) => {
  return (
    <>
      <ul
        className={clsx(
          styles.root,
          isCart && styles.isCart,
          isVerticalCenter && styles.isVerticalCenter,
          gap && styles[`gap${gap}`],
          lineDivider && styles.lineDivider,
          className
        )}
      >
        {items.map((item, index) => {
          // 데이터가 orderOption값을 가지고 있는지 체크
          const hasOrderOptions = item.orderOptions?.some((val) => !!val);
          // 데이터가 fieldOption 있는지 체크
          const hasFieldOption = !!item.fieldOption;
          // orderOption, fieldOption 중에 하나라도 있으면 실행
          const shouldRender = hasFieldOption || hasOrderOptions;

          // 상품 이미지에 dimed 적용되는 조건
          const dimed = null;

          return (
            <li key={item.id} className={clsx(styles.item)}>
              {/* 최상단(왼쪽+오른쪽) 슬롯 */}
              {orderTopData?.(item, index) && (
                <div className={styles.orderTopData}>{orderTopData(item, index)}</div>
              )}
              <div className={clsx(styles.wrap)}>
                <div className={clsx(styles.itemWrap, itemWrapGap && styles[`gap${itemWrapGap}`])}>
                  <div className={styles.itemInfo}>
                    {/* 왼쪽: 이미지 */}
                    {item.image && (
                      <div
                        className={clsx(
                          styles.left,
                          thumbSize && thumbSize !== 'normal' && styles[`${thumbSize}Thumb`]
                        )}
                      >
                        {/* 링크여부에 따른 태그설정 */}
                        {!item.href ? (
                          <div className={clsx(styles.thumb, dimed && styles.opacity)}>
                            <Image src={item.image.src} alt={item.image.alt} />
                          </div>
                        ) : (
                          <Link
                            as="route"
                            href={item.href ?? '#'}
                            type="block"
                            className={clsx(styles.thumb, dimed && styles.opacity)}
                          >
                            <Image src={item.image.src} alt={item.image.alt} />
                          </Link>
                        )}
                      </div>
                    )}
                    {/* 오른쪽: 상품 상세 내용 등 */}
                    <div className={clsx(styles.right)}>
                      <div className={styles.detail}>
                        {/* 상단 슬롯 (주문플래그 등 렌더링) */}
                        {orderTopSlot && orderTopSlot(item) && (
                          <div className={styles.topSlot}>{orderTopSlot(item)}</div>
                        )}
                        {item.title && (
                          <>
                            {!item.href ? (
                              <div
                                className={clsx(
                                  styles.prodTitle,
                                  titleProps?.line && styles[`titleLine${titleProps.line}`]
                                )}
                              >
                                {titleSlot && titleSlot(item)}
                                <ProdTitle brand={item.brand} title={item.title} />
                              </div>
                            ) : (
                              <Link
                                as="route"
                                href={item.href ?? '#'}
                                type="block"
                                className={clsx(
                                  styles.prodTitle,
                                  titleProps?.line && styles[`titleLine${titleProps.line}`]
                                )}
                              >
                                {titleSlot && titleSlot(item)}
                                <ProdTitle brand={item.brand} title={item.title} />
                              </Link>
                            )}
                          </>
                        )}
                        {item.gift && isCart && (
                          <InfoList variant="line" className={styles.gift}>
                            <InfoItem
                              title={
                                <Text color="gray1" weight="regular">
                                  사은품
                                </Text>
                              }
                              content={<Text color="gray1">{item.gift}</Text>}
                            />
                          </InfoList>
                        )}

                        {shouldRender && (
                          <ul className={clsx(styles.optionInfo)}>
                            {(item.fieldOption || item.orderOptions) && (
                              <li className={styles.size}>
                                {item.orderOptions &&
                                  item.orderOptions.map((option, index) => (
                                    <Text key={index} as="span" size="4">
                                      {option}
                                    </Text>
                                  ))}
                              </li>
                            )}

                            {!isDefault && (
                              <>
                                {item.fieldOption &&
                                  item.fieldOption.map((desc, index) => (
                                    <li key={index} className={styles.fieldOption}>
                                      <Text as="span" size="4">
                                        {desc}
                                      </Text>
                                    </li>
                                  ))}
                              </>
                            )}
                          </ul>
                        )}
                      </div>

                      {(orderDetailData || item.orderStatus) && <>{orderDetailData?.(item)}</>}

                      {!isVerticalCenter && !hidePrice && (
                        <>
                          <div className={clsx(showOrderCount && styles.pricebox)}>
                            {!isVerticalCenter &&
                              !hidePrice &&
                              item.price &&
                              item.price?.current !== undefined && (
                                <ProdPrice
                                  className={clsx(!item.price.discountRate && styles.price)}
                                  discount={item.price.discount ?? undefined}
                                  discountRate={item.price.discountRate}
                                  currentPrice={item.price.current}
                                  variant="order"
                                  originalPrice={item.price.original ?? undefined}
                                />
                              )}

                            {showOrderCount && item.quantity && (
                              <Text as="span" size="4" color="gray3" className={styles.quantity}>
                                {item.quantity}개
                              </Text>
                            )}
                          </div>
                        </>
                      )}
                      {orderData && orderData(item)}
                    </div>
                  </div>
                  {orderSlot && orderSlot(item)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

HistoryOrderItem.displayName = 'HistoryOrderItem';
