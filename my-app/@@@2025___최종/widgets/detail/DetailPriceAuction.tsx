'use client';

import { useEffect, useState } from 'react';
import {
  formatDate,
  formatDateWithDay,
  formatPrice,
  formatRemainTime,
  formatTime,
  maskText,
} from '@/shared/utils/ui';
import { Box, Table, Text, TextButton } from '@shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import clsx from 'clsx';
import styles from './DetailPrice.module.scss';

interface BiddersType {
  id: string;
  value: number;
  date: string;
}

// ---------- 옥션 관련 데이터 관리 : START
interface AuctionPhaseResult {
  /** 시작까지 남은 시간 */
  remainToStart: string;
  /** 종료까지 남은 시간 */
  remainToEnd: string;
  /** 결제 시작까지 남은 시간 */
  remainToPurchaseStart: string;
  /** 결제 종료까지 남은 시간 */
  remainToPurchaseEnd: string;
  /** 입찰 종료 후 구매 가능 기간인지 여부 */
  isPurchasePeriod: boolean;
  /** 입찰 진행중 */
  isBidOngoing: boolean;
  /** 입찰 종료 */
  isBidEnded: boolean;
}

export function useAuctionPhase(item: any): AuctionPhaseResult {
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
// ---------- 옥션 관련 데이터 관리 : END

export const DetailPriceAuction = () => {
  const { item } = useProdDetail();
  const { price, schedule, purchasePeriod, bidders } = item;

  /** 구매 가능한 경로로 진입했는지 여부 */
  const isPerchaseURL = item.isPerchaseURL;
  /** 낙찰된 유저인지 여부 */
  const isContractUser = item.isContractUser;
  const userName = item.userName;

  const { isPurchasePeriod, isBidEnded } = useAuctionPhase(item);

  /** Bidder 업데이트 */
  const useNowDate = () => {
    const [now, setNow] = useState<Date | null>(null);
    useEffect(() => {
      setNow(new Date());
    }, []);
    const pad = (num: number) => num.toString().padStart(2, '0');
    let formatNowDate = '--.--.-- / --:--:-- 현재'; // SSR placeholder
    if (now) {
      const y = now.getFullYear() % 100;
      const mo = pad(now.getMonth() + 1);
      const d = pad(now.getDate());
      const h = pad(now.getHours());
      const m = pad(now.getMinutes());
      const s = pad(now.getSeconds());
      formatNowDate = `${pad(y)}.${mo}.${d} / ${h}:${m}:${s} 현재`;
    }
    return { formatNowDate, refresh: () => setNow(new Date()) };
  };
  const BidderUpdate = () => {
    const { formatNowDate, refresh } = useNowDate();
    return (
      <div className={styles.nowUpate}>
        <Text size="3" color="gray3" className={styles.nowDate}>
          {formatNowDate}
        </Text>
        <TextButton suffixIcon="refresh" size="1" onClick={refresh}>
          업데이트
        </TextButton>
      </div>
    );
  };

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

  /** 입찰자 중 상위 5명, 최고가 입찰자 추출 */
  const sortedBidders = [...bidders].sort((a, b) => b.value - a.value).slice(0, 5);
  const maxValue = sortedBidders.length > 0 ? sortedBidders[0].value : null;

  /** 시작가 대비 증가액,증가율 추출 */
  const currentPrice = price.first ?? price.start; // first가 없으면 start 사용
  const increase = currentPrice - price.start;
  const percent = price.start > 0 ? (increase / price.start) * 100 : 0;

  return (
    <>
      <div className={clsx(styles.root, styles.auction)}>
        {!isBidEnded && (
          <Text weight="bold" color="point" className={styles.remainEndTime}>
            {remainEndTime}
          </Text>
        )}
        <div className={clsx(styles.auctionPrices)}>
          {/* 옥션 시작가 */}
          {price.start && !isPerchaseURL && (
            <Text as="span" size="4" className={styles.subtext}>
              옥션 시작가 : {formatPrice(price.start)}
            </Text>
          )}
          <div className={styles.increaseWrap}>
            {/* 현재가 */}
            {price.start && (
              <Text as="strong" size="8" className={styles.current}>
                <span>{!isPerchaseURL ? '현재가' : '낙찰가'}</span>
                {formatPrice(price.first ?? price.start)}
              </Text>
            )}
            {/* 상승률 */}
            {price.start && increase > 0 && !isPerchaseURL && (
              <Text as="span" size="3" color="alert">
                ▲ {formatPrice(increase)} ({percent.toFixed(1)}%)
              </Text>
            )}
          </div>
        </div>
        {!isPerchaseURL && (
          <div className={styles.bidders}>
            <div className={styles.tableHeading}>
              <Text weight="semibold" color="gray1">
                옥션 참여현황
              </Text>
              {BidderUpdate()}
            </div>
            <Table variant="borderless">
              <Table.Caption>
                입찰자 정보를 담은 테이블로 아이디,입찰가,입찰일시 등을 나타냅니다.
              </Table.Caption>
              <Table.ColGroup>
                <col style={{ width: '158px' }} />
                <col style={{ width: '105px' }} />
                <col style={{ width: '80px' }} />
              </Table.ColGroup>
              <Table.Head>
                <Table.Row>
                  <Table.Cell colHeader>아이디</Table.Cell>
                  <Table.Cell colHeader>입찰가</Table.Cell>
                  <Table.Cell colHeader>입찰일시</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body className={styles.tbodyOverlay}>
                {bidders.length === 0 ? (
                  <Table.Row className={isBidEnded ? styles.tableBlur : undefined}>
                    <Table.Cell colSpan={3} className={styles.empty}>
                      아직 입찰 참여 내역이 없어요.
                    </Table.Cell>
                  </Table.Row>
                ) : (
                  sortedBidders.map((row: BiddersType, idx: number) => (
                    <Table.Row
                      key={idx}
                      className={clsx(
                        row.value === maxValue && styles.first,
                        isBidEnded && styles.tableBlur
                      )}
                    >
                      <Table.Cell className={styles['cell-id']}>{maskText(row.id)}</Table.Cell>
                      <Table.Cell>{formatPrice(row.value)}</Table.Cell>
                      <Table.Cell className={styles['cell-time']}>
                        {formatDate(row.date, 'dot')}
                      </Table.Cell>
                    </Table.Row>
                  ))
                )}
                {isBidEnded && (
                  <Table.Row className={styles.overlayRow}>
                    <Table.Cell colSpan={3} className={styles.endOverlayCell}>
                      <div className={styles.endOverlayLayer}></div>
                      <div className={styles.endOverlayContent}>
                        <Text size="4" color="gray1" weight="medium">
                          입찰이 종료 되었습니다.
                        </Text>
                        <Text size="4" color="gray3" weight="regular">
                          낙찰 내역은 마이페이지 또는 SMS를 확인해 주세요.
                        </Text>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
            <Text size="3" color="gray3" className="ncp-mt-xs">
              입찰 전 업데이트 버튼을 클릭 하여 현재가를 재 확인 후 입찰하시기 바랍니다.
            </Text>
          </div>
        )}
        {isPurchasePeriod && isPerchaseURL && isContractUser && (
          <Box size="2" color="point" className={styles.winnerBox}>
            <Text color="point" size="7" weight="semibold">
              {userName}님! 축하합니다! 🎉🎉
              <br />
              옥션에 낙찰 되셨습니다.
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

DetailPriceAuction.displayName = 'DetailPriceAuction';
