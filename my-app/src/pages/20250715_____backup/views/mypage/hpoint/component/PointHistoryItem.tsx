import { Text, Heading } from '@shared/ui';
import { formatNumber, formatDate } from '@/shared/utils/ui';
import styles from './PointHistoryItem.module.scss';

//'적립' | '적립예정' | '사용' | '소멸'
export type HistoryType = 'earn' | 'expected' | 'use' | 'expire';
export const historyTypeLabelMap: Record<HistoryType, string> = {
  earn: '적립',
  expected: '적립예정',
  use: '사용',
  expire: '소멸',
};

interface PointHistoryItemProps {
  data: {
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
    /** 적립예정일 */
    expectedDate?: string;
  };
}

export function PointHistoryItem({ data }: PointHistoryItemProps) {
  const { title, amount, date, orderId, type, expectedDate } = data;
  // '적립' 혹은 '적립예정' 여부
  const isEarnedOrPending = type === 'earn' || type === 'expected';
  const isUsedOrExpired = type === 'use' || type === 'expire';

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
        <Text as="strong" className={styles.point} color={isEarnedOrPending ? 'point' : undefined}>
          {isEarnedOrPending && '+'}
          {isUsedOrExpired && '-'}
          {formatNumber(amount)}P
        </Text>
      </div>
      <div className={styles.infos}>
        <div className={styles.left}>
          <ul className={styles.list}>
            <li>{formatDate(date, 'dot')}</li>
            <li>{orderId}</li>
          </ul>
          {expectedDate && (
            <div className={styles.expected}>
              <p className={styles.txt}>적립예정일 {expectedDate}</p>
            </div>
          )}
        </div>
        <Text as="strong" size="3" weight="regular" color={isEarnedOrPending ? 'point' : undefined}>
          {type ? historyTypeLabelMap[type] : ''}
        </Text>
      </div>
    </li>
  );
}
