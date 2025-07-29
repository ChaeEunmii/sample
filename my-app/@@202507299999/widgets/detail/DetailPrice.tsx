'use client';

import { useEffect, useState } from 'react';
import { formatDateMonthDateDay, formatPrice, formatRemainTime } from '@/shared/utils/ui';
import { Button, Icon, Text } from '@shared/ui';
import CouponDialog from '../coupon/CouponDialog';

import clsx from 'clsx';
import styles from './DetailPrice.module.scss';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

interface DetailPriceType {
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
  stock?: number;
  /** 세일 기간 정보 */
  salePeriod?: {
    /** 세일 시작일 */
    start: string;
    /** 세일 종료일 */
    end: string;
    /** 타임세일 여부 */
    isTimesale?: boolean;
  };
}
export const DetailPrice = () => {
  const { item, prodType } = useProdDetail();
  const { price, unit, stock, salePeriod } = item;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 직전 판매가 시작일 포맷
  const formatPrevStartDate = (dateString: string) => {
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `(${month}.${day}~)`;
  };

  /** 타임세일인 경우 남은 날짜 계산 */
  const [remain, setRemain] = useState<string>('00:00:00');

  useEffect(() => {
    if (salePeriod?.isTimesale && salePeriod.end) {
      const updateRemain = () => {
        setRemain(formatRemainTime(salePeriod.end));
      };
      updateRemain();
      const timer = setInterval(updateRemain, 1000);
      return () => clearInterval(timer);
    } else {
      setRemain('00:00:00');
    }
  }, [salePeriod?.isTimesale, salePeriod?.end]);

  return (
    <>
      <div className={clsx(styles.root)}>
        {/* 세일 기간 */}
        {salePeriod && (
          <div className={styles.salePeriod}>
            <Icon name="time" size="small" />
            {/* 타임세일이 아닌 경우 */}
            {!salePeriod.isTimesale && (
              <Text as="span" color="point" size="4" weight="medium">
                세일기간&nbsp;{formatDateMonthDateDay(salePeriod.start)}&nbsp;~&nbsp;
                {formatDateMonthDateDay(salePeriod.end)}
              </Text>
            )}
            {/* 타임세일인 경우 */}
            {salePeriod.isTimesale && remain && (
              <Text as="span" color="point" size="4" weight="medium">
                타임세일&nbsp;{remain}&nbsp;남음
              </Text>
            )}
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
            {price.current && (
              <Text as="strong" size="8" className={styles.current}>
                {formatPrice(price.current)}
              </Text>
            )}
          </div>
          {/* 쿠폰받기 버튼 */}
          {prodType !== 'showroom' && (
            <Button
              variant="primary"
              size="xsmall"
              suffixIcon="download"
              className={styles.couponButton}
              onClick={() => setIsDialogOpen(true)}
            >
              쿠폰전체받기
            </Button>
          )}
        </div>
        {/* 단위 가격과 수량 */}
        {unit && stock && (
          <Text as="span" size="3" className={styles.unitPrice}>
            {unit.label} 당 {formatPrice(unit.price)} / 남은수량 {stock}개
          </Text>
        )}
      </div>

      {/* 함께 구매 가능한 상품 보기 팝업 */}
      <CouponDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};

DetailPrice.displayName = 'DetailPrice';
