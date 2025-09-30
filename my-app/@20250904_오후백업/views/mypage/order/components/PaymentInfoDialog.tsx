'use client';

import React, { useState } from 'react';
import { Dialog, InfoList, InfoItem, Heading, Text, Icon } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import { paymentInfoGroups } from '@mocks/myorder';
import styles from './PaymentInfo.module.scss';

interface PaymentInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// (Amount.tsx 참조)
export default function PaymentInfoDialog({ isOpen, onClose }: PaymentInfoDialogProps) {
  const [isActive, setIsActive] = useState(false);
  const toggleCoupon = () => setIsActive((prev) => !prev);

  // 샘플데이터 할당
  const paymentInfoData = paymentInfoGroups;

  return (
    <Dialog title="결제정보 상세" isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles.wrap}>
        <div className={styles.list}>
          {paymentInfoData?.map((group) => {
            // 결제금액 영역별(상품금액, 배송비, 할인금액 등) 총합 계산
            const totalSectionPrice = group.items.reduce((sum, item) => sum + (item.price ?? 0), 0);

            // 영역별 총합이 0이고 group.id !== 'shipping'이면 아예 숨김
            if (totalSectionPrice === 0 && group.id !== 'shipping') {
              return null;
            }

            return (
              <div key={group.id} className={styles.box}>
                {group.title && (
                  <Heading as="strong" className={styles.tit}>
                    {group.title}
                  </Heading>
                )}
                <InfoList variant="between" margin="0" className={styles.infoList}>
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
        </div>

        <div className={styles.total}>
          <InfoList variant="between">
            <InfoItem
              title={<strong className={styles.totalTit}>총 결제 금액</strong>}
              content={<strong className={styles.totalPrice}>111,700원</strong>}
            />
          </InfoList>
        </div>
      </div>

      <Text as="span" size="3" color="gray3" indent>
        할인은 각 혜택별로 최대 한도가 정해져있어, 제공되는 한도를 넘어선 할인이 적용되지 않을 수
        있는 점 유의해 주세요.
      </Text>
    </Dialog>
  );
}
