'use client';

import { useState } from 'react';
import { formatDateMonthDateDay, formatPrice } from '@/shared/utils/ui';
import { Button, Icon, Text } from '@shared/ui';
import CouponDialog from '../coupon/CouponDialog';

import clsx from 'clsx';
import styles from './DetailPrice.module.scss';

interface DetailPriceProps {
  /** 가격 정보 */
  price: {
    /** 판매가 */
    current: number;
    /** 소비자가 */
    original?: number;
    /** 직전 판매가 */
    prevSale?: {
      value: number;
      startDate: string;
    };
    /** 할인율 */
    discountRate?: number;
  };
  /** 단위 정보 */
  unit?: {
    /** 단위 */
    label: string;
    /** 단위별 가격 */
    price: number;
  };
  /** 수량 */
  qty?: number;
  /** 세일 기간 정보 */
  salePeriod?: {
    start: string;
    end: string;
  };
}

export const DetailPrice = ({ price, unit, qty, salePeriod }: DetailPriceProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 직전 판매가 시작일 포맷
  const formatPrevStartDate = (dateString: string) => {
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `(${month}.${day}~)`;
  };

  return (
    <>
      <div className={clsx(styles.root)}>
        {/* 세일 기간 */}
        {salePeriod && (
          <div className={styles.salePeriod}>
            <Icon name="time" size="small" />
            <Text as="span" color="point" size="4" weight="medium">
              세일기간&nbsp;{formatDateMonthDateDay(salePeriod.start)}&nbsp;~&nbsp;
              {formatDateMonthDateDay(salePeriod.end)}
            </Text>
          </div>
        )}

        {/* 소비자가 + 직전판매가 */}
        {price.original && price.prevSale && (
          <div className={styles.smallPrices}>
            <Text as="del" size="4" className={styles.original}>
              {formatPrice(price.original)}
            </Text>
            <Text as="span" size="4" className={styles.prevSale}>
              {formatPrice(price.prevSale.value)} {formatPrevStartDate(price.prevSale.startDate)}
            </Text>
          </div>
        )}

        {/* 직전판매가가 있는 경우 텍스트 출력 */}
        {price.prevSale && (
          <Text as="span" size="3" className={styles.prevSaleNotice}>
            할인가는 직전 판매가 대비 인하한 가격입니다.
          </Text>
        )}

        {/* 할인율,판매가,쿠폰받기 영역 */}
        <div className={styles.priceCouponWrap}>
          <div className={clsx(styles.prices, price.original && styles.hasOriginal)}>
            {/* 직전판매가 없이 소비자가만 있는 경우 */}
            {price.original && !price.prevSale && (
              <Text as="del" size="4" className={styles.original}>
                {formatPrice(price.original)}
              </Text>
            )}
            {/* 할인율 */}
            {price.discountRate !== undefined && (
              <Text as="strong" size="8" className={styles.discount}>
                {price.discountRate}%
              </Text>
            )}
            {/* 판매가 */}
            <Text as="strong" size="8" className={styles.current}>
              {formatPrice(price.current)}
            </Text>
          </div>
          {/* 쿠폰받기 버튼 */}
          <Button
            variant="primary"
            size="xsmall"
            suffixIcon="download"
            className={styles.couponButton}
            onClick={() => setIsDialogOpen(true)}
          >
            쿠폰전체받기
          </Button>
        </div>
        {/* 단위 가격과 수량 */}
        {unit && qty && (
          <Text as="span" size="3" className={styles.unitPrice}>
            {unit.label} 당 {formatPrice(unit.price)} / 남은수량 {qty}개
          </Text>
        )}
      </div>

      {/* 함께 구매 가능한 상품 보기 팝업 */}
      <CouponDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};

DetailPrice.displayName = 'DetailPrice';
