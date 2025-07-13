import { Text, Heading } from '@shared/ui';
import { formatNumber, formatDate } from '@/shared/utils/ui';
import styles from './HPointHPointExpiringItem.module.scss';

interface HPointHPointExpiringItemProps {
  data: {
    /** 타이틀 */
    title: string;
    /** 포인트 */
    amount: number;
    /** 종료일 */
    endDate: string;
    /** 남은 기간 */
    remainingDays: number;
  };
}

export function HPointHPointExpiringItem({ data }: HPointHPointExpiringItemProps) {
  const { title, amount, endDate, remainingDays } = data;

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
        <Text as="strong" className={styles.point} color={'point'}>
          +{formatNumber(amount)}P
        </Text>
      </div>
      <div className={styles.bottom}>
        <span className={styles.end}>~{formatDate(endDate, 'dot')}</span>
        <strong className={styles.remain}>({remainingDays}일남음)</strong>
      </div>
    </li>
  );
}
