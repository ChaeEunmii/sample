import { OrderInfoTopBar } from '@views/mypage/components/OrderInfoTopBar';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import clsx from 'clsx';
import styles from './GiftBoxTopInfo.module.scss';

/** 상단 주문 정보 데이터 타입 */
export interface OrderTopInfoData {
  date: string;
  orderNumber?: string;
}

interface GiftBoxTopInfoProps {
  /** 주문 정보 */
  info: OrderTopInfoData;
  /** 우측영역 슬롯 */
  sideAreaSlot?: React.ReactNode;
  /** OrderInfoBox 내부에 우측 sideSlot 요소 */
  sideSlot?: React.ReactNode;
  /** 컨텐츠 하단 slot */
  bottomSlot?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
}

export const GiftBoxTopInfo = ({
  info,
  sideAreaSlot,
  sideSlot,
  bottomSlot,
  className,
}: GiftBoxTopInfoProps) => {
  const { date, orderNumber } = info;

  return (
    <div className={clsx(styles.topInfo, className)}>
      <OrderInfoTopBar variant="small" date={date} sideAreaSlot={sideAreaSlot} />
      <OrderInfoBox title="주문번호" content={orderNumber} sideSlot={sideSlot} />
      {bottomSlot && <div className={styles.bottomSlot}>{bottomSlot}</div>}
    </div>
  );
};
