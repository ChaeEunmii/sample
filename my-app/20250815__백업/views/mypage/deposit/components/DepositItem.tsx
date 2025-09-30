import { Text, Heading } from '@shared/ui';
import { formatNumber, formatDate } from '@/shared/utils/ui';
import styles from './DepositItem.module.scss';

// '예치' | '사용' | '환불' | '주문취소'
export type HistoryType = 'deposit' | 'use' | 'refund' | 'cancel';
export const historyTypeLabelMap: Record<HistoryType, string> = {
  deposit: '예치',
  use: '사용',
  refund: '환불',
  cancel: '주문취소',
};

interface DepositItemProps {
  data: {
    /** 고유 ID */
    id: string;
    /** 타이틀 */
    title: string;
    /** 포인트 */
    amount: number;
    /** 발생일 */
    date: string;
    /** 주문번호 */
    orderId?: string;
    /** 타입 */
    type?: HistoryType;
  };
}

export function DepositItem({ data }: DepositItemProps) {
  const { title, amount, date, orderId, type } = data;
  // '예치, 주문취소' 혹은 '사용, 환불' 여부
  const isDepositOrCancel = type === 'deposit' || type === 'cancel';
  const isUsedOrRefund = type === 'use' || type === 'refund';

  // 주문번호 노출이 필요한 경우 (사용, 주문취소)
  const showOrderNumber = type === 'use' || type === 'cancel';

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
        <Text as="strong" className={styles.point} color={isDepositOrCancel ? 'point' : undefined}>
          {isDepositOrCancel && '+'}
          {isUsedOrRefund && '-'}
          {formatNumber(amount)}P
        </Text>
      </div>
      <div className={styles.infos}>
        <div className={styles.left}>
          <ul className={styles.list}>
            {/* 발생일 */}
            <li>{formatDate(date, 'dot')}</li>
            {/* 주문번호 */}
            {showOrderNumber && <li>{orderId}</li>}
          </ul>
        </div>
        <Text as="strong" size="3" weight="regular" color={isDepositOrCancel ? 'point' : undefined}>
          {type ? historyTypeLabelMap[type] : ''}
        </Text>
      </div>
    </li>
  );
}
