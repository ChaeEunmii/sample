// OrderTopInfo.tsx
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import clsx from 'clsx';
import styles from './OrderTopInfo.module.scss';

/** 상단 주문 정보 데이터 타입 */
export interface OrderTopInfoData {
  date: string;
  orderNumber?: string; // 주문번호
  subscriptionNumber?: string; // 정기구독번호
}

interface OrderTopInfoProps {
  /** 주문 정보 */
  info: OrderTopInfoData;
  /** 복사 이벤트 */
  onCopy?: (text: string) => void;
  /** OrderInfoBox 내부에 우측 sideSlot 요소 */
  sideSlot?: React.ReactNode;
  /** 컨텐츠 하단 slot */
  bottomSlot?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
  /** 정기 구독 여부 */
  isSubscription?: boolean;
}

export const OrderTopInfo = ({
  info,
  onCopy,
  sideSlot,
  bottomSlot,
  className,
  isSubscription,
}: OrderTopInfoProps) => {
  const { date, orderNumber, subscriptionNumber } = info;

  return (
    <div className={clsx(styles.topInfo, className)}>
      <OrderInfoTopBar date={date} variant="small" />
      <OrderInfoBox
        title={isSubscription ? '정기구독번호' : '주문번호'}
        content={orderNumber ?? subscriptionNumber}
        isCopy
        onCopy={onCopy}
        sideSlot={sideSlot}
      />
      {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
    </div>
  );
};
