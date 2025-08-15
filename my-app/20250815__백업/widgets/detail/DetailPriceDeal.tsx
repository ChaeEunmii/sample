'use client';

import { useEffect, useState } from 'react';
import { formatNumber, formatPrice, formatRemainTime } from '@/shared/utils/ui';
import { Text } from '@shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import clsx from 'clsx';
import styles from './DetailPrice.module.scss';

// ---------- 래플 관련 데이터 관리 : START
interface DealPhaseResult {
  /** 시작까지 남은 시간 */
  remainToStart: string;
  /** 종료까지 남은 시간 */
  remainToEnd: string;
  /** 결제 시작까지 남은 시간 */
  remainToPurchaseStart: string;
  /** 결제 종료까지 남은 시간 */
  remainToPurchaseEnd: string;
  /** 응모 종료 후 구매 가능 기간인지 여부 */
  isPurchasePeriod: boolean;
  /** 응모 진행중 */
  isBidOngoing: boolean;
  /** 응모 종료 */
  isBidEnded: boolean;
}

export function useDealPhase(item: any): DealPhaseResult {
  const remainToStart = formatRemainTime(item.schedule.start);
  const remainToEnd = formatRemainTime(item.schedule.end);
  const remainToPurchaseStart = formatRemainTime(item.purchasePeriod?.start);
  const remainToPurchaseEnd = formatRemainTime(item.purchasePeriod?.end);
  const isPurchasePeriod =
    remainToPurchaseStart === '00:00:00' && remainToPurchaseEnd !== '00:00:00';
  const isBidOngoing = remainToStart === '00:00:00' && remainToEnd !== '00:00:00';
  const isBidEnded = remainToEnd === '00:00:00';

  return {
    remainToStart,
    remainToEnd,
    remainToPurchaseStart,
    remainToPurchaseEnd,
    isPurchasePeriod,
    isBidOngoing,
    isBidEnded,
  };
}
// ---------- 래플 관련 데이터 관리 : END

export const DetailPriceDeal = () => {
  const { item } = useProdDetail();
  const { RepresentativePrice, schedule, stock, soldNumber } = item;

  /** 남은 시간 계산 */
  const [remainEndTime, setRemainEndTime] = useState<string>('00:00:00');
  useEffect(() => {
    if (schedule.end) {
      const updateRemain = () => {
        setRemainEndTime(formatRemainTime(schedule.end));
      };
      updateRemain();
      const timer = setInterval(updateRemain, 1000);
      return () => clearInterval(timer);
    } else {
      setRemainEndTime('00:00:00');
    }
  }, [schedule.end]);

  /** 딜 상품 구매 progress */
  const progress = stock > 0 ? Math.min((soldNumber / stock) * 100, 100) : 0;

  return (
    <>
      <div className={clsx(styles.root, styles.deal)}>
        <div className={styles.dealInfo}>
          <Text weight="bold" size="7" color="gray1" className={clsx(styles.dealEndTime)}>
            종료까지 <span>{remainEndTime}</span> 남음
          </Text>
          <Text weight="medium" color="gray3" size="3">
            {formatNumber(soldNumber, 'count')} 구매 중
          </Text>
        </div>
        <div className={styles.progress}>
          <span className={styles.progressFill} style={{ width: `${progress}%` }}></span>
        </div>
        {/* 판매가 */}
        {RepresentativePrice && (
          <Text as="strong" size="8" className={styles.DealPrice}>
            {formatPrice(RepresentativePrice)} 外
          </Text>
        )}
      </div>
    </>
  );
};

DetailPriceDeal.displayName = 'DetailPriceDeal';
