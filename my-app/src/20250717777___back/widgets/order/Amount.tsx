'use client';

import React, { useState } from 'react';
import { Text, Heading, InfoList, InfoItem, Icon } from '@shared/ui';
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
  title: string;
  items: PaymentItem[];
}

interface AmountProps {
  /** 결제내역 데이터 */
  data?: PaymentGroup[];
}

export const Amount = ({ data }: AmountProps) => {
  // 상태 관리
  const [isActive, setIsActive] = useState(false);

  // 할인금액 > 상품 쿠폰 토글
  const toggleCoupon = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <Section
        title="결제금액"
        suffix={
          <Text as="span" size="7" weight="bold">
            117,000원
          </Text>
        }
        variant="collapse"
        defaultSuffix
      >
        {data?.map((group) => {
          // 결제금액 영역별(상품금액, 배송비, 할인금액 등) 총합 계산
          const totalSectionPrice = group.items.reduce((sum, item) => sum + (item.price ?? 0), 0);

          // 영역별 총합이 0이고 group.id !== 'shipping'이면 아예 숨김
          if (totalSectionPrice === 0 && group.id !== 'shipping') {
            return null;
          }

          return (
            <div key={group.id} className={styles.box}>
              <Heading as="h3" size="3" weight="semibold" indent>
                {group.title}
              </Heading>
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
                                  (coupon) => coupon.discount !== undefined && coupon.discount !== 0
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

        <div className={styles.totalPrice}>
          <InfoList variant="between" className={styles.totalList}>
            <InfoItem title="총 결제 금액" content="111,700원" />
          </InfoList>
        </div>
      </Section>
    </>
  );
};
Amount.displayName = 'Amount';
