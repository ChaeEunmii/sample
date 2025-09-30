'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import { Text, Heading, InfoList, InfoItem, Icon, Line } from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { formatPrice } from '@/shared/utils/ui';
import styles from './Amount.module.scss';

// 상품쿠폰 아이템
interface CouponItem {
  id: string;
  title: string;
  discount?: number;
}

// 결제내역 아이템
interface PaymentItem {
  id: string;
  title: string;
  price?: number;
  coupons?: CouponItem[];
}

// 결제내역 그룹
interface PaymentGroup {
  id: string;
  title?: string;
  items: PaymentItem[];
}

interface AmountProps {
  /** 타이틀(기본: 결제금액) */
  title?: string;
  /** 결제내역 데이터 */
  data?: PaymentGroup[];
  flush?: boolean;
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** suffix 숨김 여부(기본: false) */
  hideSuffix?: boolean;
  /** 총 결제 금액 상단 border 컬러 #EFEFEF로 변경 여부 () */
  border?: boolean;
  /** 선물픽 페이지인지 체크(기본: false) */
  isPresentPick?: boolean;
}

export const Amount = ({
  title,
  data,
  flush = false,
  hideCollapse = false,
  hideSuffix = false,
  border = false,
  defaultOpen = false,
  isPresentPick = false,
}: AmountProps) => {
  // 상태 관리
  const [isActive, setIsActive] = useState(false);

  // 할인금액 > 상품 쿠폰 토글
  const toggleCoupon = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <Section
        title={title ? title : '결제금액'}
        suffix={
          !hideSuffix && (
            <Text as="span" size="7" weight="bold">
              {isPresentPick ? '0원' : '117,000원'}
            </Text>
          )
        }
        variant={hideCollapse ? 'normal' : 'collapse'}
        defaultSuffix
        defaultOpen={defaultOpen}
        className={clsx(styles.root, flush && styles.flush)}
      >
        {isPresentPick ? (
          <Text align="center" size="4" color="gray3">
            선물 받는 분이 원하는 상품을 선택 후 결제하여 주세요.
          </Text>
        ) : (
          <>
            {data?.map((group) => {
              // 결제금액 영역별(상품금액, 배송비, 할인금액 등) 총합 계산
              const totalSectionPrice = group.items.reduce(
                (sum, item) => sum + (item.price ?? 0),
                0
              );

              // 영역별 총합이 0이고 group.id !== 'shipping'이면 아예 숨김
              if (totalSectionPrice === 0 && group.id !== 'shipping') {
                return null;
              }

              return (
                <div key={group.id} className={styles.box}>
                  {group.title && (
                    <Heading as="h3" size="3" weight="semibold" indent>
                      {group.title}
                    </Heading>
                  )}
                  <InfoList variant="between" className={styles.payList}>
                    {group.items.map((item) => (
                      <React.Fragment key={item.id}>
                        {item.coupons ? (
                          <>
                            {(() => {
                              // 쿠폰 총합 계산
                              const totalCouponPrice = item.coupons.reduce(
                                (acc, coupon) => acc + (coupon.discount ?? 0),
                                0
                              );

                              return (
                                <>
                                  <dt>
                                    <button
                                      type="button"
                                      onClick={toggleCoupon}
                                      className={styles.control}
                                    >
                                      상품쿠폰
                                      <Icon
                                        size="small"
                                        name={isActive ? 'arrowUp' : 'arrowDown'}
                                        label={isActive ? '닫기' : '열기'}
                                        className={styles.arrow}
                                      />
                                    </button>
                                  </dt>
                                  <dd onClick={toggleCoupon}>{formatPrice(totalCouponPrice)}</dd>
                                  {item.coupons
                                    .filter(
                                      (coupon) =>
                                        coupon.discount !== undefined && coupon.discount !== 0
                                    )
                                    .map((coupon) => (
                                      <React.Fragment key={coupon.id}>
                                        <dt
                                          data-state={isActive ? 'show' : 'hide'}
                                          className={styles.couponDt}
                                        >
                                          {coupon.title}
                                        </dt>
                                        <dd
                                          data-state={isActive ? 'show' : 'hide'}
                                          className={styles.couponDd}
                                        >
                                          {formatPrice(coupon.discount ?? 0)}
                                        </dd>
                                      </React.Fragment>
                                    ))}
                                </>
                              );
                            })()}
                          </>
                        ) : (
                          (group.id === 'shipping' ||
                            group.id === 'paymentInfo' ||
                            (item.price !== undefined && item.price !== 0)) && (
                            <InfoItem title={item.title} content={formatPrice(item.price ?? 0)} />
                          )
                        )}
                      </React.Fragment>
                    ))}
                  </InfoList>
                </div>
              );
            })}
            <Line margin="6" color={border ? 'bg2' : 'black'} />
            <InfoList variant="between">
              <InfoItem
                title={
                  <Text color="gray1" weight="semibold">
                    총 결제 금액
                  </Text>
                }
                content={
                  <Text size="7" weight="bold">
                    111,700원
                  </Text>
                }
              />
            </InfoList>
          </>
        )}
      </Section>
    </>
  );
};
Amount.displayName = 'Amount';
