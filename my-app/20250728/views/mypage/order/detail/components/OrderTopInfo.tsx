// OrderTopInfo.tsx
import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import clsx from 'clsx';
import styles from './OrderTopInfo.module.scss';

/** 상단 주문 정보 데이터 타입 */
export interface OrderTopInfoData {
  date: string;
  orderNumber: string;
}

interface OrderTopInfoProps {
  /** 주문 정보 */
  info: OrderTopInfoData;
  /** 복사 이벤트 */
  onCopy?: (text: string) => void;
  /** 우측 sideSlot 요소 */
  sideSlot?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
}

export const OrderTopInfo = ({ info, onCopy, sideSlot, className }: OrderTopInfoProps) => {
  const { date, orderNumber } = info;

  return (
    <div className={clsx(styles.topInfo, className)}>
      <OrderInfoTopBar date={date} variant="small" />
      <OrderInfoBox
        title="주문번호"
        content={orderNumber}
        isCopy
        onCopy={onCopy}
        sideSlot={sideSlot}
      />
    </div>
  );
};
