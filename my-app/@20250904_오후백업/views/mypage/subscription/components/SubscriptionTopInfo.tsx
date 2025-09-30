import { OrderStatusFlag } from '@/widgets/product';
import type { OrderStatusCode } from '@widgets/product/OrderStatus';

import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import clsx from 'clsx';
import styles from './SubscriptionTopInfo.module.scss';

/** 상단 주문 정보 데이터 타입 */
export interface OrderTopInfoData {
  date: string;
  orderNumber?: string;
  orderStatus?: OrderStatusCode;
}

interface SubscriptionTopInfoProps {
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
}

export const SubscriptionTopInfo = ({
  info,
  onCopy,
  sideSlot,
  bottomSlot,
  className,
}: SubscriptionTopInfoProps) => {
  const { date, orderNumber, orderStatus } = info;

  return (
    <div className={clsx(styles.topInfo, className)}>
      <OrderInfoTopBar
        date={date}
        titleSlot={orderStatus ? <OrderStatusFlag status={orderStatus} /> : null}
      />
      <OrderInfoBox
        title="정기구독번호"
        content={orderNumber}
        isCopy
        onCopy={onCopy}
        sideSlot={sideSlot}
      />
      {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
    </div>
  );
};
