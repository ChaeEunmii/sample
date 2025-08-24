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

  return (
    <button type="button" className={styles.root} onClick={() => data && onClick?.(data)}>
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
  );
}
