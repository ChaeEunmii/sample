import { Text, TextButton } from '@shared/ui';
import { formatNumber, formatDateWithDay, formatTime } from '@/shared/utils/ui';
import styles from './HistoryItem.module.scss';

// 상태 타입 : '결제' |  '환불'
export type StatusType = 'payment' | 'refund';
export const StatusTypeLabelMap: Record<StatusType, string> = {
  payment: '결제',
  refund: '환불',
};
//  결제수단 타입 : '현대백화점카드' | '일반카드' | '은행계좌'
export type MethodType = 'hyundai' | 'card' | 'bank';
export const MethodTypeLabelMap: Record<MethodType, string> = {
  hyundai: '현대백화점 카드 전표',
  card: '신용 · 체크카드 매출전표',
  bank: '현금영수증',
};

export interface HistoryData {
  /** 고유 ID */
  id: string;
  /** 사용일 */
  useDate: string;
  /** 사용시간 */
  useTime: string;
  /** 상태 */
  status?: StatusType;
  /** 결제수단 타입 */
  methodType?: MethodType;
  /** 결제수단명 */
  method?: string;
  /** 결제금액 */
  amount: number;
}

interface HistoryItemProps {
  /** 데이터 */
  data: HistoryData;
  /** '영수증 호출' 버튼 클릭 핸들러 */
  onReceiptClick?: (item: HistoryData) => void;
}

export function HistoryItem({ data, onReceiptClick }: HistoryItemProps) {
  // 구조분해
  const { useDate, useTime, status, methodType, method, amount } = data;

  // 영수증 호출 버튼 클릭 시 실행되는 핸들러
  const handleClickDetail = () => {
    onReceiptClick?.(data);
  };

  return (
    <div className={styles.history}>
      <div className={styles.top}>
        <Text as="span" size="5" weight="medium">
          {formatDateWithDay(useDate, 'dot')}{' '}
          {formatTime(useTime, { format: 'colon', is24Hour: true })}
        </Text>
        <em className={styles.state}>{status ? StatusTypeLabelMap[status] : ''}</em>
      </div>
      <div className={styles.cont}>
        <Text as="span" size="5" color="gray2">
          {method}
        </Text>
        <Text as="strong" size="7" weight="medium">
          {formatNumber(amount)} 원
        </Text>
      </div>
      {methodType && (
        <div className={styles.btns}>
          <TextButton variant="underline" size="1" color="gray3" onClick={handleClickDetail}>
            {methodType ? MethodTypeLabelMap[methodType] : ''}
          </TextButton>
        </div>
      )}
    </div>
  );
}
