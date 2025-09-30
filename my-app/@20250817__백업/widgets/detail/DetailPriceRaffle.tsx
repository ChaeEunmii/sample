'use client';

import { useEffect, useState } from 'react';
import {
  formatDate,
  formatDateWithDay,
  formatNumber,
  formatPrice,
  formatRemainTime,
  formatTime,
} from '@/shared/utils/ui';
import { Box, Text } from '@shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import clsx from 'clsx';
import styles from './DetailPrice.module.scss';

// ---------- 래플 관련 데이터 관리 : START
interface RafflePhaseResult {
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

export function useRafflePhase(item: any): RafflePhaseResult {
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

export const DetailPriceRaffle = () => {
  const { item } = useProdDetail();
  const { price, stock, schedule, purchasePeriod, appliedCount } = item;

  /** 구매 가능한 경로로 진입했는지 여부 */
  const isPerchaseURL = item.isPerchaseURL;
  /** 당첨된 유저인지 여부 */
  const isContractUser = item.isContractUser;
  const userName = item.userName;

  const { isPurchasePeriod, isBidOngoing, isBidEnded } = useRafflePhase(item);

  /** 남은 시간 계산 */
  const [remainEndTime, setRemainEndTime] = useState<string>('00:00:00');
  useEffect(() => {
    if (schedule.end) {
      const updateRemain = () => {
        setRemainEndTime(formatRemainTime(schedule.end, true));
      };
      updateRemain();
      const timer = setInterval(updateRemain, 1000);
      return () => clearInterval(timer);
    } else {
      setRemainEndTime('00:00:00');
    }
  }, [schedule.end]);

  return (
    <>
      <div className={clsx(styles.root, styles.auction)}>
        {isBidOngoing && !isBidEnded && (
          <Text weight="bold" color="point" className={styles.remainEndTime}>
            {remainEndTime}
          </Text>
        )}
        {/* 판매가 */}
        {price && (
          <Text as="strong" size="8" className={styles.rafflePrice}>
            <span>판매가</span>
            {formatPrice(price)}
          </Text>
        )}
        {isBidOngoing && !isPerchaseURL && (
          <Box size="2" className={styles.biddingBox}>
            <div className={styles.title}>
              <Text weight="semibold" color="gray1">
                래플 응모현황
              </Text>
              <Text weight="medium" color="point">
                총 {formatNumber(appliedCount, 'user')} 참여
              </Text>
            </div>
            <dl>
              <div className={styles.row}>
                <dt>총 수량</dt>
                <dd>{formatNumber(stock, 'count')}</dd>
              </div>
              <div className={styles.row}>
                <dt>당첨자 발표</dt>
                <dd>{formatDate(schedule.result)}</dd>
              </div>
              <div className={styles.row}>
                <dt>구매 기간</dt>
                <dd>
                  {formatDateWithDay(purchasePeriod.start)}&nbsp;
                  {formatTime(purchasePeriod.start, { usePad: false })}
                  &nbsp;~
                  <br />
                  {formatDateWithDay(purchasePeriod.end)}&nbsp;
                  {formatTime(purchasePeriod.end, { usePad: false })} 까지
                </dd>
              </div>
            </dl>
          </Box>
        )}
        {isPurchasePeriod && isPerchaseURL && isContractUser && (
          <Box size="2" color="point" className={styles.winnerBox}>
            <Text color="point" size="7" weight="semibold">
              {userName}님! 축하합니다! 🎉🎉
              <br />
              래플 응모에 당첨 되셨습니다.
            </Text>
            <Text size="4" weight="medium">
              구매 가능 시간 내 결제를 완료 해 주세요.
            </Text>
          </Box>
        )}
        <div className={clsx(styles.schedule, isPerchaseURL && styles.perchase)}>
          <Text as="span" size="4" color="gray1" weight="medium" className={styles.label}>
            {!isPerchaseURL ? '진행기간' : '구매 가능 시간'}
          </Text>
          <Text as="span" size="4" color="point">
            {!isPerchaseURL ? (
              <>
                {formatDateWithDay(schedule.start, 'dot')}&nbsp;
                {formatTime(schedule.start, { format: 'colon', is24Hour: true })}&nbsp;~&nbsp;
                {formatDateWithDay(schedule.end, 'dot')}&nbsp;
                {formatTime(schedule.end, { format: 'colon', is24Hour: true })}
              </>
            ) : (
              <>
                {formatDateWithDay(purchasePeriod.start, 'dot')}&nbsp;
                {formatTime(purchasePeriod.start, { format: 'colon', is24Hour: true })}&nbsp;~&nbsp;
                {formatDateWithDay(purchasePeriod.end, 'dot')}&nbsp;
                {formatTime(purchasePeriod.end, { format: 'colon', is24Hour: true })}
              </>
            )}
          </Text>
        </div>
      </div>
    </>
  );
};

DetailPriceRaffle.displayName = 'DetailPriceRaffle';
