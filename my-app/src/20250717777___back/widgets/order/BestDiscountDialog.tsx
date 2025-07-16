import clsx from 'clsx';
import React, { useState } from 'react';
import { mockPaymentHistory } from '@/mocks/order';
import { formatPrice } from '@/shared/utils/ui';
import {
  Heading,
  Text,
  Dialog,
  TitleArea,
  TextList,
  Line,
  InfoItem,
  InfoList,
  Icon,
} from '@shared/ui';
import styles from './Amount.module.scss';

interface BestDiscountDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const BestDiscountDialog = ({
  isOpen = false,
  onClose,
  className,
}: BestDiscountDialogProps) => {
  // 임시데이터
  const paymentHistory = mockPaymentHistory; // 결제내역
  // 상태 관리
  const [isActive, setIsActive] = useState(false);

  // 할인금액 > 상품 쿠폰 토글
  const toggleCoupon = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Dialog
      title="최적할인 적용"
      isOpen={isOpen}
      onClose={onClose}
      className={clsx(className)}
      maximize
      showClose
    >
      <TitleArea
        title={
          <>
            사용 가능한 최적 쿠폰, 카드할인, 프로모션
            <br />
            자동 적용 됩니다.
          </>
        }
      />
      <TextList
        data={[
          'H.point 사용 시 할인 금액이 재계산됩니다.',
          '다른 카드할인 프로모션을 원하시면, 결제수단을 변경해 주세요.',
        ]}
      />
      <Line className="" margin="3" />
      <InfoList variant="between">
        <InfoItem title="판매가" content={<Text color="gray2">220,000원</Text>} />
        <InfoItem title="배송비" content={<Text color="gray2">10,000원</Text>} />
        <InfoItem title="총 할인금액" content={<Text color="gray2">-50,000원</Text>} />
      </InfoList>
      <Line className="" margin="3" />
      {paymentHistory?.map((group) => {
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
                    (group.id === 'shipping' || (item.price !== undefined && item.price !== 0)) && (
                      <InfoItem title={item.title} content={formatPrice(item.price ?? 0)} />
                    )
                  )}
                </React.Fragment>
              ))}
            </InfoList>
          </div>
        );
      })}

      <div className={clsx(styles.totalDiscount)}>
        <Text weight="semibold" indent className={styles.totalTitle}>
          결제 금액{' '}
          <Text as="span" size="2" weight="medium" color="point">
            최적할인가
          </Text>
        </Text>
        <Text size="7" weight="bold" indent>
          111,700원
        </Text>
      </div>
    </Dialog>
  );
};

BestDiscountDialog.displayName = 'BestDiscountDialog';
