'use client';
import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import {
  Button,
  Collapse,
  FormArea,
  FormItem,
  Heading,
  InfoItem,
  InfoList,
  Input,
  Line,
  Switch,
  Text,
  TextButton,
} from '@/shared/ui';
import { formatDateWithDay, formatPrice } from '@/shared/utils/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { AddressInfoBox, DiscountSwitchBox } from '@/widgets/form';
import { OrderItem } from '@widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';
import { StorepickGiftDrawer } from './StorepickGiftDrawer';
import { LocationDialog } from './LocationDialog';
import { MessageCardDialog } from './MessageCardDialog';
import styles from './ProductInfo.module.scss';

interface ProductItemType extends OrderItemType {
  /** 쿠폰 */
  coupons?: {
    /** 상품 쿠폰 */
    product?: {
      /** 쿠폰 금액 */
      price?: number;
      /** 쿠폰 사용 여부 */
      use?: boolean;
    };
    /** 장바구니 쿠폰 */
    cart?: {
      /** 쿠폰 금액 */
      price?: number;
      /** 쿠폰 사용 여부 */
      use?: boolean;
    };
  };
}

// 주문상품 아이템
interface Seller {
  id: string;
  seller: string;
  arrival?: string;
  /** 스토어픽 주소 */
  address?: string;
  /** 스토어픽 전화번호 */
  tel?: string;
  /** 선물 정보 */
  giftInfo?: {
    /** 선물 받는 분 */
    name: string;
    /** 휴대폰번호 */
    phone: string;
    /** 선물메세지 */
    msg: string;
  };
  /** 목록에 표시할 상품 아이템 배열 */
  items: ProductItemType[];
}

// 주문상품 그룹
interface Order {
  id: string;
  deliveryType: string;
  /** 목록에 표시할 장바구니 중분류 배열 */
  sellers: Seller[];
}

interface ProductInfoProps {
  /** 주문상품 데이터 */
  data: Order[];
  /** 배송지 멀티인지 체크 */
  isMulti?: boolean;
  /** 선물 배송지 멀티인지 체크 */
  isPresentMulti?: boolean;
}

export const ProductInfo = ({
  data,
  isMulti = false,
  isPresentMulti = false,
}: ProductInfoProps) => {
  // 상태 관리
  const [discountChecked, setDiscountChecked] = useState(true); // 최대 할인 적용 SwitchBox
  const [isLocationOpen, setIsLocationOpen] = useState(false); // 위치보기 (L)
  const [isStorepickGiftDrawerOpen, setIsStorepickGiftDrawerOpen] = useState(false); // 스토어픽 선물하기 (D)
  const [isCouponChangeDialogOpen, setIsCouponChangeDialogOpen] = useState(false); // 쿠폰 변경 (L)
  const [isMessageCardDialogOpen, setIsMessageCardDialogOpen] = useState(false); // 메세지 카드 보기 (L)

  return (
    <>
      <Section
        title="주문 상품"
        side={isMulti ? '3개의 배송지' : isPresentMulti ? '8개' : '23'}
        suffix={
          <>
            {isPresentMulti && (
              <Text weight="semibold" color="point">
                선물 받는 분 - 2명
              </Text>
            )}
          </>
        }
        variant="normal"
      >
        <div className={styles.contentArea}>
          {/* 최대 할인 적용 여부 */}
          <DiscountSwitchBox checked={discountChecked} onChange={setDiscountChecked} />

          {/* 주문 상품 목록 */}
          {data.map((order, index) => (
            <Collapse key={order.id} variant="line" defaultSummary className={styles.prodSection}>
              <Collapse.Control
                suffix={
                  <>
                    {(isMulti || isPresentMulti) && (
                      <div className={clsx(styles.prodTitle, styles.multiTitle)}>
                        <Text className={styles.ellipsis}>{order.sellers[0].items[0].title}</Text>
                        <Text className={styles.count}>외 2개</Text>
                      </div>
                    )}
                  </>
                }
                slot={
                  <>
                    {isMulti || isPresentMulti ? (
                      <>
                        <AddressInfoBox
                          hideAddress={isPresentMulti}
                          changeButtonText={isPresentMulti ? '메세지카드 보기' : undefined}
                          onClick={() => setIsMessageCardDialogOpen(true)}
                          className={styles.multiAddr}
                        />
                      </>
                    ) : (
                      <>
                        {order.sellers[0].arrival && (
                          <Text size="4" weight="semibold" color="point" className={styles.time}>
                            {order.sellers[0].arrival}
                          </Text>
                        )}
                        <div className={styles.prodTitle}>
                          <Text className={styles.ellipsis}>{order.sellers[0].items[0].title}</Text>
                          <Text className={styles.count}>외 2개</Text>
                        </div>
                      </>
                    )}
                  </>
                }
              >
                <Heading as="h2" size="5" weight="bold" indent className={styles.title}>
                  {isMulti
                    ? `배송지 ${index + 1}`
                    : isPresentMulti
                      ? `선물 받는 분 ${index + 1}`
                      : order.deliveryType}
                </Heading>
              </Collapse.Control>
              <Collapse.Content>
                {isPresentMulti && (
                  <Text size="4" color="gray3" indent className={styles.presentDesc}>
                    주문이 완료되면 받는 분에게 선물 메세지가 발송됩니다.
                  </Text>
                )}
                {order.sellers.map((seller) => {
                  // 배송비 체크
                  const deliveryFee =
                    seller.items.find((item) => item.delivery?.deliveryFee !== undefined)?.delivery
                      ?.deliveryFee ?? 0;
                  // 설치배송비 체크
                  const hasInstall = seller.items.some((item) => item.install === true);

                  return (
                    <React.Fragment key={seller.id}>
                      <div
                        className={clsx(
                          styles.sellerArea,
                          (isMulti || isPresentMulti) && styles.multiSeller
                        )}
                      >
                        <Text weight="bold">{seller.seller}</Text>
                        {deliveryFee > 0 && (
                          <Text
                            size="3"
                            color="gray2"
                            weight="semibold"
                            align="right"
                            className={styles.fee}
                          >
                            배송비 {formatPrice(deliveryFee)}
                            {hasInstall && (
                              <Text
                                as="span"
                                weight="regular"
                                color="gray3"
                                className={styles.desc}
                              >
                                설치배송비 별도
                              </Text>
                            )}
                          </Text>
                        )}
                        {order.deliveryType === '스토어픽' && (
                          <div className={styles.sellerButton}>
                            {seller.address && (
                              <Button
                                iconOnly="map"
                                round
                                size="xsmall"
                                variant="tertiary"
                                onClick={() => setIsLocationOpen(true)}
                              >
                                위치보기
                              </Button>
                            )}
                            {seller.tel && (
                              <Button
                                iconOnly="callFill"
                                round
                                size="xsmall"
                                variant="tertiary"
                                onClick={() =>
                                  (window.location.href = `tel:${seller.tel?.replace(/-/g, '')}`)
                                }
                              >
                                전화걸기
                              </Button>
                            )}
                          </div>
                        )}
                        {(seller.arrival || order.deliveryType === '새벽/당일배송') && (
                          <div className={styles.sellerInfo}>
                            {seller.arrival && (
                              <Text size="4" weight="medium" color="point" className={styles.point}>
                                {seller.arrival}
                              </Text>
                            )}
                            {order.deliveryType === '새벽/당일배송' && (
                              <TextButton
                                color="gray3"
                                size="1"
                                suffixIcon="arrowRight"
                                variant="bold"
                                onClick={() => {}}
                                className={styles.changeButton}
                              >
                                배송정보 변경
                              </TextButton>
                            )}
                          </div>
                        )}
                        {order.deliveryType === '스토어픽' && (
                          <div className={styles.storeInfo}>
                            <Text size="4" weight="medium" indent>
                              2025년 10월 09일 목요일 10:30 ~ 20:00
                            </Text>
                            <Text color="gray3" indent>
                              해당 픽업일은 내부사항에 의해 변경될 수 있습니다.
                            </Text>
                          </div>
                        )}
                        {seller.giftInfo && (
                          <div className={styles.giftInfoBox}>
                            <div className={styles.topBox}>
                              <Text size="4" weight="semibold">
                                선물정보
                              </Text>
                              <TextButton
                                color="gray3"
                                size="1"
                                suffixIcon="arrowRight"
                                variant="bold"
                                onClick={() => setIsStorepickGiftDrawerOpen(true)}
                              >
                                선물정보 변경
                              </TextButton>
                            </div>
                            <InfoList variant="line" gridColumns="auto" className={styles.giftInfo}>
                              <InfoItem title="선물 받는 분" content={seller.giftInfo.name} />
                              <InfoItem title="휴대폰번호" content={seller.giftInfo.phone} />
                              <InfoItem title="선물메세지" content={seller.giftInfo.msg} />
                            </InfoList>
                          </div>
                        )}
                      </div>

                      <OrderItem
                        items={seller.items}
                        showOrderCount
                        orderData={(item) => {
                          const product = (item as ProductItemType).coupons?.product;
                          const cart = (item as ProductItemType).coupons?.cart;

                          return (
                            <>
                              {!isPresentMulti && (
                                <Collapse className={styles.couponPrice}>
                                  <Collapse.Control>
                                    <div className={styles.priceTitle}>
                                      <Text as="span" size="6" weight="bold">
                                        36,000,200원
                                      </Text>
                                      <Text as="span" size="2" weight="medium" color="point">
                                        쿠폰적용가
                                      </Text>
                                    </div>
                                  </Collapse.Control>
                                  <Collapse.Content>
                                    <InfoList variant="between" className={styles.couponInfo}>
                                      <InfoItem
                                        title="상품쿠폰"
                                        content={
                                          <Text
                                            size="4"
                                            color={
                                              product?.use === true || product?.price
                                                ? 'gray2'
                                                : 'gray3'
                                            }
                                            weight={
                                              product?.use === true || product?.price
                                                ? 'medium'
                                                : 'regular'
                                            }
                                          >
                                            {product?.use === true
                                              ? '선택안함'
                                              : product?.price
                                                ? formatPrice(product.price)
                                                : '사용 가능한 쿠폰이 없음'}
                                          </Text>
                                        }
                                      />
                                      <InfoItem
                                        title="장바구니쿠폰"
                                        content={
                                          <Text
                                            size="4"
                                            color={
                                              cart?.use === true || cart?.price ? 'gray2' : 'gray3'
                                            }
                                            weight={
                                              cart?.use === true || cart?.price
                                                ? 'medium'
                                                : 'regular'
                                            }
                                          >
                                            {cart?.use === true
                                              ? '선택안함'
                                              : cart?.price
                                                ? formatPrice(cart.price)
                                                : '사용 가능한 쿠폰이 없음'}
                                          </Text>
                                        }
                                      />
                                    </InfoList>
                                  </Collapse.Content>
                                </Collapse>
                              )}
                            </>
                          );
                        }}
                        orderSlot={(item) => (
                          <>
                            {(item.gift ||
                              item.delivery?.date ||
                              !isPresentMulti ||
                              order.deliveryType === '스토어픽') && (
                              <>
                                <div className={styles.slotBox}>
                                  {(item.gift || item.delivery?.date) && (
                                    <div className={styles.grayBox}>
                                      <InfoList variant="line" gridColumns="auto">
                                        {item.gift && (
                                          <InfoItem
                                            title="사은품"
                                            content={
                                              <Text size="4" className={styles.giftTitle}>
                                                <span className={styles.ellipsis}>{item.gift}</span>{' '}
                                                {isMulti ? <>&nbsp;</> : '외'}
                                                1개
                                              </Text>
                                            }
                                          />
                                        )}
                                        {item.delivery?.date && (
                                          <InfoItem
                                            title="배송희망일"
                                            content={
                                              <Text size="4">
                                                {formatDateWithDay(item.delivery?.date)}
                                              </Text>
                                            }
                                          />
                                        )}
                                      </InfoList>
                                    </div>
                                  )}
                                  {!isPresentMulti && (
                                    <FormArea type="vertical" className={styles.formBox}>
                                      <FormItem>
                                        <Input
                                          title="요청사항"
                                          placeholder="요청사항 입력(30자 이내)"
                                          size="large"
                                        />
                                      </FormItem>
                                    </FormArea>
                                  )}
                                </div>

                                {order.deliveryType === '스토어픽' && (
                                  <Button
                                    variant="tertiary"
                                    onClick={() => setIsStorepickGiftDrawerOpen(true)}
                                  >
                                    선물하기
                                  </Button>
                                )}
                              </>
                            )}
                          </>
                        )}
                        className={styles.orderItemList}
                      />

                      {/* s: 주문 사은품 영역 */}
                      {(isMulti || isPresentMulti) && (
                        <>
                          <Line className="" margin="3" />
                          <Heading indent>주문 사은품</Heading>
                          <Text className={styles.giftDesc}>
                            주문 사은품 프로모션 이름이 들어갑니다. 주문 사은품 프로모션 이름이
                            들어갑니다. 주문 사은품 프로모션 이름이 들어갑니다. 주문 사은품 프로모션
                            이름이 들어갑니다. 주문 사은품 프로모션 이름이 들어갑니다.{' '}
                          </Text>
                          <OrderItem
                            items={seller.items}
                            showOrderCount
                            isOrderGift
                            className={styles.giftItemList}
                          />
                        </>
                      )}
                      {/* e: 주문 사은품 영역 */}
                    </React.Fragment>
                  );
                })}
              </Collapse.Content>
            </Collapse>
          ))}
        </div>

        <Button size="medium" variant="secondary" onClick={() => setIsCouponChangeDialogOpen(true)}>
          쿠폰 변경
        </Button>

        {/* 위치보기 (L) */}
        <LocationDialog isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
        {/* 선물하기 (D) */}
        <StorepickGiftDrawer
          isOpen={isStorepickGiftDrawerOpen}
          onClose={() => setIsStorepickGiftDrawerOpen(false)}
        />
        {/* 메세지 카드 보기 (L) */}
        <MessageCardDialog
          isOpen={isMessageCardDialogOpen}
          onClose={() => setIsMessageCardDialogOpen(false)}
        />
      </Section>
    </>
  );
};
ProductInfo.displayName = 'ProductInfo';
