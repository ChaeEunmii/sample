'use client';

import clsx from 'clsx';
import { useState } from 'react';
import {
  Checkbox,
  Link,
  Radio,
  Image,
  Text,
  Button,
  IconButton,
  InfoList,
  InfoItem,
  TextButton,
  Flag,
} from '@/shared/ui';
import { formatDate } from '@/shared/utils/ui';
import type { OrderStatusInfo } from '@widgets/product/OrderStatus';
import { ProdPrice, ProdTitle } from '@widgets/product';
import { OptionChangeDrawer, ProdOptionType } from '@/views/shop/cart/OptionChangeDrawer';
import { BenefitDrawer } from '@/views/shop/cart/BenefitDrawer';
// import { useAlert } from '@/shared/contexts/AlertContext';
import styles from './OrderItem.module.scss';

/** 배송 상태(근거리, 오늘배송, 퀵배송, 배송 불가) */
type DeliveryStatus = 'local' | 'today' | 'quick' | null | undefined | (string & {});
/** 상품 판매 상태(일시중단, 영구중단) */
type ProductStatus = 'temp' | 'end' | null | undefined | (string & {});
/** 배송비 정책 (무조건 무료배송, 무조건 유료배송) */
type DeliveryFeePolicy = 'freeOnly' | 'paidOnly' | null | undefined | (string & {});
/** 배송 관련 날짜의 타입(예약상품 배송일, 배송희망일, 픽업일) */
type DeliveryDateType = 'reserve' | 'hope' | 'pickup' | null | undefined | (string & {});
/** 프로모션 타입 (N+N, 수량할인, 묶음할인) */
type PromotionType = 'plus' | 'quantity' | 'bundle' | null | undefined | (string & {});
/** 프로모션 케이스 (미적용, 상품 수량 적용, 여러 상품으로 적용, 적용+미적용, 정액케이스) */
type PromotionCase =
  | 'none'
  | 'single'
  | 'multi'
  | 'mixed'
  | 'fixed'
  | null
  | undefined
  | (string & {});

// order 아이템
export interface OrderItemType {
  /** 상품 ID */
  id: string;
  /** 상품 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
  /** 브랜드명 */
  brand?: string;
  /** 상품명 */
  title: string;
  /** 상품 정보(무게, 사이즈, 날짜, 시간 등) */
  info?: {
    /** 상품 무게 */
    weight?: string;
    /** 상품 사이즈 */
    size?: string;
    /** 상품 예약 날짜 */
    date?: string;
    /** 상품 예약 시간 */
    time?: string;
    /** 상품 픽업 장소 */
    place?: string;
    /** 상품 구매일 */
    buyDate?: string;
  };
  /** 주문옵션 등 기타 옵션들 */
  orderOptions?: string[];
  /** 상품 옵션 */
  options?: ProdOptionType[];
  /** 상품 입력형 옵션 */
  fieldOption?: string[];
  /** 옵션변경 여부 */
  optionChange?: boolean;
  /** 사은품 */
  gift?: string;
  /** 가격 정보 */
  price?: {
    current?: number;
    original?: number;
    discount?: number;
  };
  /** 상품 재고 수량 */
  stock?: number;
  /** 상품 재입고 여부(재입고 사용: true, 재입고 미사용: fasle) */
  restock?: boolean;
  /** 상품 주문 수량 */
  quantity?: number;
  /** 주문 상태 */
  orderStatus?: OrderStatusInfo;
  /** 주문 추가정보 */
  orderAddInfo?: { label: string; value: string }[];
  /** 배송 관련 */
  delivery?: {
    /** 배송 상태(근거리, 오늘배송, 퀵배송, 배송 불가) */
    status?: DeliveryStatus;
    /** 배송비 */
    deliveryFee?: number;
    /** 배송비 정책 (무조건 무료배송, 무조건 유료배송) */
    feePolicy?: DeliveryFeePolicy;
    /** 배송 희망일, 예약 배송일, 픽업일 등 날짜 */
    date?: string;
    /** 배송 관련 날짜의 타입(예약상품 배송일, 배송희망일, 픽업일) */
    dateType?: DeliveryDateType;
  };
  /** 추가혜택 */
  benefit?: boolean;
  /** 설치 상품 여부 */
  install?: boolean;
  /** 상품 판매 상태(일시중단, 영구중단) */
  status?: ProductStatus;
  /** 프로모션 */
  promotion?: {
    /** 프로모션 타입 (N+N, 수량할인, 묶음할인) */
    type?: PromotionType;
    /** 프로모션 케이스 (미적용, 상품 수량 적용, 여러 상품으로 적용, 적용+미적용, 정액케이스) */
    case?: PromotionCase;
    /** 프로모션 수량 관련 */
    count?: {
      /** BO 구매수량 */
      boQty?: number;
      /** BO 할인율 */
      boRate?: number;
      /** BO 할인액 */
      boAmount?: number;
      /** 증정수량 */
      freeQty?: number;
      /** 구매수량 */
      buyQty?: number;
      /** 할인 적용가 */
      discounted?: number;
      /** 할인 적용된 묶음 수 */
      bundleCount?: number;
    };
  };
  /** 추가 클래스 */
  className?: string;
  selectable?: boolean;
  /** 묶음 상품인지 체크 */
  isBundle?: boolean;
  /** 묶음 상품 id */
  bundleId?: string;
  /** 하단 border 여부 체크 */
  isBorder?: boolean;
  /** 방문 신청(이용 장소, 예약 기간, 이용 기간, 사용 기간, 예약 일시) */
  visitInfo?: {
    /** 이용 장소 */
    venue?: string;
    /** 예약 기간 */
    booking?: string;
    /** 이용 기간 */
    service?: string;
    /** 사용 기간 */
    available?: string;
    /** 예약 일시 */
    bookingTime?: string;
  };
  /** rsvp 여부 */
  rsvp?: boolean;
  /** n+n 여부 */
  nplus?: boolean;
  /** 선택 불가 여부 */
  unselectable?: boolean;
  /** 픽업 완료 여부 */
  pickupDone?: boolean;
  /** 렌탈 정보 (월 렌탈료, 약정 개월 수, 별도약정 여부) */
  rentalInfo?: {
    monthlyFee?: number;
    period?: number;
    separateContract?: boolean;
  };
  /** 라이브 플래그 */
  liveFlag?: 'comingSoon' | 'live' | 'replay';
}

// order 목록
interface OrderItemListProps<T extends OrderItemType = OrderItemType> {
  /** 목록에 표시할 상품 아이템 배열 */
  items: T[];
  /** 상품의 프로모션 정보를 렌더링하는 함수(.wrap 상단에 위치) */
  promotionData?: (item: T, index: number) => React.ReactNode;
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
  /** 상품 링크 비활성화 옵션 */
  disableLink?: boolean;
  /** 추가적인 CSS 클래스명 */
  className?: string;
  /** 목록 내 아이템 선택 가능 여부 */
  selectable?: boolean;
  /** 선택 모드 설정 */
  selectMode?: 'single' | 'multiple';
  /** 개별 아이템 선택 시 호출되는 콜백 함수 */
  onSelectItem?: (itemId: string, selected: boolean) => void;
  /** 현재 선택된 아이템 ID (단일 선택 모드) */
  selectedItem?: string;
  /** 현재 선택된 아이템 ID 목록 (다중 선택 모드) */
  // selectedItems?: string[];
  // selectedItems?: Record<string, boolean>;
  checkedItems?: Record<string, boolean>;
  /** 품절 상품 선택 불가 여부 */
  disableSoldout?: boolean;
  /** 여러곳으로 배송지 설정 페이지인지 체크 */
  isMultiDelivery?: boolean;
  /** 장바구니 페이지인지 체크 */
  isCart?: boolean;
  /** 삭제 버튼 사용 여부 */
  isDelete?: boolean;
  /** 묶음 상품인지 체크 */
  isBundle?: boolean;
  /** 가격 옆 주문 개수 노출 여부 체크 */
  showOrderCount?: boolean;
  /** 주문서 페이지 > 사은품인지 체크 */
  isOrderGift?: boolean;
  /** 상품 이미지 사이즈(small - 64px, nomal - 90px) */
  thumbSize?: 'small' | 'normal';
  /** 텍스트 가운데 정렬 여부 */
  isVerticalCenter?: boolean;
  /** 가격 숨김 여부 */
  hidePrice?: boolean;
  /** 상품 이미지, 브랜드명, 상품명, 할인가, 판매가, 수량 노출만 되게 */
  isDefault?: boolean;
  /** 상품간(li) 간격(32px(default), 40px) */
  gap?: '32' | '40';
  /** currentPrice 가격 스타일 secondary(13px, #8c8c8c, semibold)로 변경 여부 */
  priceVariant?: boolean;
  /** 라인으로 구분되는 스타일 */
  lineDivider?: boolean;
  /** 썸네일 라벨 숨김 여부 */
  hideThumbLabel?: boolean;
}

export const OrderItem = ({
  items,
  promotionData,
  orderTopData,
  orderDetailData,
  orderData,
  orderSlot,
  orderTopSlot,
  disableLink,
  className,
  selectable = false,
  selectMode = 'multiple',
  onSelectItem,
  selectedItem,
  checkedItems,
  disableSoldout = false,
  isMultiDelivery = false,
  isCart = false,
  isDelete = false,
  isBundle = false,
  showOrderCount = false,
  isOrderGift = false,
  thumbSize = 'normal',
  isVerticalCenter = false,
  hidePrice = false,
  isDefault = false,
  gap,
  priceVariant = false,
  lineDivider = false,
  hideThumbLabel = false,
}: OrderItemListProps) => {
  // 상태 관리
  const [isOptionOpen, setIsOptionOpen] = useState(false); // 옵션 변경 drawer
  const [isBenefitOpen, setIsBenefitOpen] = useState(false); // 추가혜택 drawer
  // const { showAlert } = useAlert();

  // radio, checkbox 활성화(품절, 일시품절, 판매중단, 판매종료, 현배송지구매불가 상태면 비활성화)
  const isSelectable = (item: OrderItemType) => {
    // 기본적으로 item.status가 판매중단(temp), 판매종료(end) 상태이거나 상품 재고가 0이면 선택 불가
    const baseSelectability = item.status === null || item.stock !== 0;

    // 품절, 현배송지구매불가 상태면 선택 불가
    if (item.restock === false || item.delivery?.status === null || item.unselectable) {
      return false;
    }

    return baseSelectability;
  };

  return (
    <>
      <ul
        className={clsx(
          styles.root,
          isCart && styles.isCart,
          isMultiDelivery && styles.isMultiDelivery,
          isOrderGift && styles.isOrderGift,
          isVerticalCenter && styles.isVerticalCenter,
          gap && styles[`gap${gap}`],
          lineDivider && styles.lineDivider,
          className
        )}
      >
        {items.map((item, index) => {
          // 여러개 사은품인 경우 > 동일한 bundleId 중 마지막 항목 찾기
          const isLastBundleItem =
            item.bundleId && items.findLastIndex((i) => i.bundleId === item.bundleId) === index;

          // 여러곳으로 배송지 설정 > 여러개 사은품인 경우 > 동일한 bundleId 중 첫번째 항목 찾기(상단 라인 추가)
          const isFirstBundleItem =
            item.bundleId && items.findIndex((i) => i.bundleId === item.bundleId) === index;

          // 여러곳으로 배송지 설정 > 여러개 사은품인 경우 > 동일한 bundleId면 첫번째 항목만 selectable 노출
          const hideCheckbox = item.bundleId && !isFirstBundleItem;

          // 데이터가 info값을 가지고 있는지 체크
          const hasInfo = item.info && Object.values(item.info).some((val) => !!val);
          // 데이터가 orderOption값을 가지고 있는지 체크
          const hasOrderOptions = item.orderOptions?.some((val) => !!val);
          // 데이터가 fieldOption 있는지 체크
          const hasFieldOption = !!item.fieldOption;
          // info, orderOption, fieldOption 중에 하나라도 있고, 선물 주문서 아니면 실행
          const shouldRender = (hasInfo || hasFieldOption || hasOrderOptions) && !isOrderGift;
          //썸네일 좌측 상단 플래그 설정
          const getThumbFlag = (item: OrderItemType) => {
            const flags = [];
            // rsvp 플래그
            if (item.rsvp) flags.push({ color: 'black' as const, label: 'RSVP' });
            // 라이브 플래그
            if (item.liveFlag === 'live') {
              flags.push({ color: 'red' as const, label: 'LIVE' });
            } else if (item.liveFlag === 'replay') {
              flags.push({ color: 'dark' as const, label: 'REPLAY' });
            } else if (item.liveFlag === 'comingSoon') {
              flags.push({ color: 'dark' as const, label: 'COMING SOON' });
            }

            return flags.length ? flags : undefined;
          };

          // 썸네일 플래그
          const thumbFlags = getThumbFlag(item);

          //썸네일 좌측 하단 플래그 설정
          const getThumbLeftFlag = (item: OrderItemType) => {
            if (!item.nplus) return;
            const baseLeftFlags = [];
            if (item.nplus)
              baseLeftFlags.push({
                color: 'black' as const,
                label: 'N+N',
              });
            return baseLeftFlags;
          };
          // 썸네일 좌측 하단 플래그
          const thumbLeftFlags = getThumbLeftFlag(item);

          // 상품 이미지에 dimed 적용되는 조건
          const dimed =
            item.restock === false ||
            item.stock === 0 ||
            (item.unselectable && !isOrderGift && selectable);

          // 문화센터의 경우 갯수 '명'으로 들어가는 조건
          const caseValue = item.orderStatus?.orderCase;
          const isCultureCenter = Array.isArray(caseValue)
            ? caseValue.some((v) => v.includes('culture_') || v === 'cultureCenter')
            : caseValue?.includes('culture_') || caseValue === 'cultureCenter';

          // 기본 썸네일 라벨 숨김 조건
          const shouldHideThumbLabel = hideThumbLabel || item.unselectable || item.pickupDone;
          // 추가 썸네일 라벨 설정
          const labelDefs = [
            { label: '선택불가', show: item.unselectable && !isOrderGift && selectable },
            { label: '픽업완료', show: item.pickupDone },
          ] as const;

          const addThumbLabels = labelDefs
            .filter(({ show }) => show)
            .map(({ label }) => (
              <div key={label} className={styles.thumbLabelAdd}>
                <Text as="span" size="3">
                  {label}
                </Text>
              </div>
            ));

          return (
            <li
              key={item.id}
              className={clsx(
                styles.item,
                ((isFirstBundleItem && isMultiDelivery) || item.isBorder) && styles.bundleLine,
                hideCheckbox && isMultiDelivery && styles.selectable,
                item.bundleId && isCart && styles.bundle,
                item.bundleId && isCart && !isFirstBundleItem && styles.bundleOverlap,
                item.promotion && isCart && styles.promotionBg,
                isLastBundleItem && isCart && styles.borderRadius
              )}
            >
              {promotionData && promotionData(item, index)}
              {/* 최상단(왼쪽+오른쪽) 슬롯 */}
              {orderTopData && (
                <div className={styles.orderTopData}>{orderTopData(item, index)}</div>
              )}
              <div className={clsx(styles.wrap)}>
                {selectable && !(hideCheckbox && isMultiDelivery) && (
                  <>
                    {selectMode === 'single' ? (
                      <Radio
                        name="selectProdItem"
                        label={`${item.title} 선택`}
                        hideLabel
                        value={item.id}
                        checked={selectedItem === item.id}
                        onChange={() => onSelectItem?.(item.id, true)}
                        className={styles.selector}
                        disabled={!isSelectable(item)}
                      />
                    ) : (
                      <Checkbox
                        label={`${item.title} 선택`}
                        hideLabel
                        size="medium"
                        checked={!!checkedItems?.[item.id]}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onSelectItem?.(item.id, e.target.checked)
                        }
                        className={styles.selector}
                        disabled={!isSelectable(item)}
                      />
                    )}
                  </>
                )}
                <div className={clsx(styles.itemWrap)}>
                  <div className={styles.itemInfo}>
                    {/* 왼쪽: 이미지 + 옵션변경 버튼 */}
                    <div
                      className={clsx(
                        styles.left,
                        thumbSize && thumbSize !== 'normal' && styles[`${thumbSize}Thumb`]
                      )}
                    >
                      {/* 판매중단, 판매종료 - 상품상세 진입 불가 */}
                      {item.status != null || !item.href ? (
                        <div className={clsx(styles.thumb, dimed && styles.opacity)}>
                          {/* 썸네일 좌상단 플래그 */}
                          {thumbFlags && (
                            <Flag data={thumbFlags} className={styles.thumbflag} radius="br" />
                          )}
                          {/* 썸네일 좌하단 플래그 */}
                          {thumbLeftFlags && (
                            <Flag
                              data={thumbLeftFlags}
                              className={styles.thumbLeftflag}
                              radius="tr"
                            />
                          )}
                          <Image src={item.image.src} alt={item.image.alt} />
                          {!shouldHideThumbLabel && (
                            <>
                              {item.status === 'temp' ? (
                                <div className={styles.thumbLabel}>
                                  <Text as="span" size="3">
                                    판매중단
                                  </Text>
                                </div>
                              ) : item.status === 'end' ? (
                                <div className={styles.thumbLabel}>
                                  <Text as="span" size="3">
                                    판매종료
                                  </Text>
                                </div>
                              ) : null}
                            </>
                          )}
                          {/* 추가 썸네일 라벨 */}
                          {addThumbLabels}
                        </div>
                      ) : (
                        <Link
                          as="route"
                          href={item.href ?? '#'}
                          type="block"
                          className={clsx(styles.thumb, dimed && styles.opacity)}
                        >
                          {/* 썸네일 좌상단 플래그 */}
                          {thumbFlags && (
                            <Flag data={thumbFlags} className={styles.thumbflag} radius="br" />
                          )}
                          {/* 썸네일 좌하단 플래그 */}
                          {thumbLeftFlags && (
                            <Flag
                              data={thumbLeftFlags}
                              className={styles.thumbLeftflag}
                              radius="tr"
                            />
                          )}
                          <Image src={item.image.src} alt={item.image.alt} />
                          {!shouldHideThumbLabel && (
                            <>
                              {item.delivery?.status === null ? (
                                <div className={clsx(styles.thumbLabel, styles.delivery)}>
                                  <Text as="span" size="3">
                                    현배송지
                                    <br />
                                    구매불가
                                  </Text>
                                </div>
                              ) : item.restock === false ? (
                                <div className={clsx(styles.thumbLabel, styles.soldout)}>
                                  <Text as="span" size="1">
                                    SOLD OUT
                                  </Text>
                                </div>
                              ) : item.stock === 0 ? (
                                <div className={styles.thumbLabel}>
                                  <Text as="span" size="3">
                                    일시품절
                                  </Text>
                                </div>
                              ) : (item.stock ?? 0) <= 5 && !isMultiDelivery ? (
                                <div className={styles.thumbLabel}>
                                  <Text as="span" size="3">
                                    품절임박{' '}
                                    <Text as="span" weight="semibold" size="3">
                                      {item.stock}개
                                    </Text>
                                  </Text>
                                </div>
                              ) : null}
                            </>
                          )}
                          {/* 추가 썸네일 라벨 */}
                          {addThumbLabels}
                        </Link>
                      )}

                      {(item.stock ?? 0) > 0 &&
                        item.options &&
                        item.delivery?.status !== null &&
                        !isMultiDelivery && (
                          <TextButton
                            size="1"
                            variant="underline"
                            onClick={() => setIsOptionOpen(true)}
                            className={styles.optionButton}
                          >
                            옵션변경
                          </TextButton>
                        )}
                    </div>

                    {/* 오른쪽: 상품 상세 내용 등 */}
                    <div className={clsx(styles.right, priceVariant && styles.gap4)}>
                      <div className={styles.detail}>
                        {/* 상단 슬롯 (주문플래그 등 렌더링) */}
                        {orderTopSlot && orderTopSlot(item) && (
                          <div className={styles.topSlot}>{orderTopSlot(item)}</div>
                        )}
                        {item.status != null || !item.href ? (
                          <div className={styles.prodTitle}>
                            <ProdTitle brand={item.brand} title={item.title} />
                          </div>
                        ) : (
                          <Link
                            as="route"
                            href={item.href ?? '#'}
                            type="block"
                            className={styles.prodTitle}
                          >
                            <ProdTitle brand={item.brand} title={item.title} />
                          </Link>
                        )}

                        {item.gift && !isMultiDelivery && isCart && (
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
                          <ul
                            className={clsx(
                              styles.optionInfo,
                              item.optionChange && styles.optionChange
                            )}
                          >
                            {(item.info || item.fieldOption || item.orderOptions) &&
                              !isOrderGift && (
                                <li className={styles.size}>
                                  {item.info?.weight && (
                                    <Text as="span" size="4">
                                      {item.info.weight}
                                    </Text>
                                  )}
                                  {!isMultiDelivery && (
                                    <>
                                      {item.info?.size && (
                                        <Text as="span" size="4">
                                          {item.info.size}
                                        </Text>
                                      )}
                                      {item.info?.date && (
                                        <Text as="span" size="4">
                                          {formatDate(item.info.date).split(' ')[0]}
                                        </Text>
                                      )}
                                      {item.info?.time && (
                                        <Text as="span" size="4">
                                          {item.info.time}
                                        </Text>
                                      )}
                                    </>
                                  )}
                                  {/* 옵션변경 여부에 따른 텍스트 노출 */}
                                  {item.optionChange && (
                                    <em className={styles.changeMark}>옵션변경</em>
                                  )}
                                  {item.orderOptions &&
                                    item.orderOptions.map((option, index) => (
                                      <Text key={index} as="span" size="4">
                                        {option}
                                      </Text>
                                    ))}
                                </li>
                              )}

                            {!isMultiDelivery && !isDefault && (
                              <>
                                {item.info?.place && (
                                  <li>
                                    <InfoList variant="stacked" className={styles.place}>
                                      <InfoItem title="픽업장소" content={item.info?.place} />
                                    </InfoList>
                                  </li>
                                )}
                                {item.fieldOption &&
                                  item.fieldOption.map((desc, index) => (
                                    <li key={index} className={styles.fieldOption}>
                                      <Text as="span" size="4">
                                        {desc}
                                      </Text>
                                    </li>
                                  ))}
                                {item.info?.buyDate && (
                                  <li>
                                    <InfoList variant="stacked" className={styles.place}>
                                      <InfoItem
                                        title={
                                          <Text as="span" size="4" color="gray3">
                                            상품 구매일
                                          </Text>
                                        }
                                        content={
                                          <Text
                                            as="span"
                                            size="4"
                                            color="gray3"
                                            className={styles.buyDate}
                                          >
                                            {item.info?.buyDate}
                                          </Text>
                                        }
                                      />
                                    </InfoList>
                                  </li>
                                )}
                              </>
                            )}
                          </ul>
                        )}
                      </div>

                      {orderDetailData && orderDetailData(item)}

                      {!isMultiDelivery && !isVerticalCenter && !hidePrice && (
                        <>
                          <div className={clsx(showOrderCount && styles.pricebox)}>
                            {!isOrderGift &&
                              !isVerticalCenter &&
                              !hidePrice &&
                              item.price &&
                              item.price?.current !== undefined && (
                                <ProdPrice
                                  className={styles.price}
                                  discount={!item.promotion ? item.price.discount : undefined}
                                  currentPrice={item.price.current}
                                  variant={priceVariant ? 'secondary' : 'order'}
                                  originalPrice={!item.promotion ? item.price.original : undefined}
                                />
                              )}

                            {showOrderCount && item.quantity && (
                              <Text as="span" size="4" color="gray3" className={styles.quantity}>
                                {item.quantity}
                                {isCultureCenter ? '명' : '개'}
                              </Text>
                            )}

                            {item.benefit && isCart && (
                              <Button
                                size="xsmall"
                                suffixIcon="arrowRight"
                                variant="tertiary"
                                onClick={() => setIsBenefitOpen(true)}
                                className={styles.benefitButton}
                              >
                                추가혜택
                              </Button>
                            )}
                          </div>

                          {item.install && isCart && (
                            <Text size="4" className={styles.install}>
                              설치 배송비 별도 부과
                            </Text>
                          )}
                        </>
                      )}

                      {orderData && orderData(item)}
                    </div>
                  </div>
                  {orderSlot && orderSlot(item)}
                </div>
                {!isMultiDelivery && isDelete && (
                  <IconButton
                    name="close"
                    className={styles.closeButton}
                    // onClick={() => {
                    //   showAlert({
                    //     message: '상품을 삭제하시겠습니까?',
                    //     onConfirm: () => console.log('확인 클릭'),
                    //     showCancel: true,
                    //     labelProps: { confirm: '확인', cancel: '취소' },
                    //   });
                    // }}
                  >
                    삭제
                  </IconButton>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {/* 옵션변경 */}
      <OptionChangeDrawer isOpen={isOptionOpen} onClose={() => setIsOptionOpen(false)} />
      {/* 추가혜택 */}
      <BenefitDrawer isOpen={isBenefitOpen} onClose={() => setIsBenefitOpen(false)} />
    </>
  );
};

OrderItem.displayName = 'OrderItem';
