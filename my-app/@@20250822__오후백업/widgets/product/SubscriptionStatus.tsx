import { Text } from '@shared/ui';
import { OrderStatusInfo } from '@widgets/product/OrderStatus';
import { formatDate } from '@/shared/utils/ui';
import styles from './SubscriptionStatus.module.scss';

interface SubscriptionStatusProps {
  orderStatus?: OrderStatusInfo;
}

export const SubscriptionStatus = ({ orderStatus }: SubscriptionStatusProps) => {
  if (!orderStatus) return null;

  const { status, subscription } = orderStatus;

  // arrivalLabel 그대로 렌더
  if (subscription?.arrivalLabel) {
    return (
      <Text as="span" size="4" weight="medium" color="point" className={styles.info}>
        <em className={styles.tit}>정기구독</em> {subscription.arrivalLabel}
      </Text>
    );
  }

  switch (status) {
    case 'subscription_active':
      return (
        <Text as="span" size="4" weight="medium" color="point">
          배송 2일 전 자동 결제
        </Text>
      );
    case 'subscription_ended':
      return (
        <Text as="span" size="4" weight="medium" color="point">
          {formatDate(subscription?.endDate, 'dot', true)} 종료
        </Text>
      );
    case 'subscription_canceled':
      return (
        <Text as="span" size="4" weight="medium" color="point">
          {formatDate(subscription?.cancelDate, 'dot', true)} 해지
        </Text>
      );
    default:
      return null;
  }
};

SubscriptionStatus.displayName = 'SubscriptionStatus';
