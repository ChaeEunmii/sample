'use client';

import { Text, Flag, Icon } from '@shared/ui';
import type { OrderItemType } from '@widgets/product/OrderItem';
import styles from './SubscriptionSummary.module.scss';

/**
 *
 * 구독 일정 요약 정보 구성 박스
 *
 */

type SubscriptionSummaryProps = {
  data?: OrderItemType;
  onClick?: (item: OrderItemType) => void;
};

export function SubscriptionSummary({ data, onClick }: SubscriptionSummaryProps) {
  // OrderItem 의 subscription.summary 데이터 추출
  const summary = data?.orderStatus?.subscription?.summary;
  if (!summary) return null;

  // 종료또는 해지일 경우 하단안내글 보임
  const viewInfoText =
    data?.orderStatus?.status === 'subscription_ended' ||
    data?.orderStatus?.status === 'subscription_canceled';

  return (
    <>
      <div className={styles.root}>
        <button type="button" onClick={() => data && onClick?.(data)} className={styles.btn}>
          <div className={styles.wrap}>
            <div className={styles.tit}>
              <Flag data={{ label: `${summary?.currentRound}회차`, color: 'green3' }} />
              <div className={styles.info}>
                <Text as="span" size="4" weight="semibold" className={styles.period}>
                  {summary?.period}
                </Text>
                <Text as="span" size="4" weight="regular" align="left">
                  {summary?.deliveryCycle}
                </Text>
              </div>
            </div>
            <Icon name="arrowRight" size="xsmall" className={styles.icon} />
          </div>
        </button>
        {viewInfoText && (
          <Text as="span" size="3" color="gray3">
            같은 신청 정보로 다시 구독 하실 수 있어요.
          </Text>
        )}
      </div>
    </>
  );
}
