import { ScheduleBox, ScheduleBoxData } from '@views/mypage/subscription/components/ScheduleBox';
import styles from './ScheduleBoxList.module.scss';
import clsx from 'clsx';

export type ScheduleBoxListProps = {
  /** 데이터배열 (ScheduleBox.tsx) */
  data: ScheduleBoxData[];
  /** 추가적인 클래스 */
  className?: string;
  /** 주문상세 버튼 핸들러 */
  onViewOrder?: (id: string) => void;
  /** 배송조회 버튼 핸들러 */
  onTrackDelivery?: (id: string) => void;
};

export function ScheduleBoxList({
  data,
  className,
  onViewOrder,
  onTrackDelivery,
}: ScheduleBoxListProps) {
  return (
    <div className={clsx(styles.root, className)}>
      {data.map((item) => (
        <ScheduleBox
          key={item.id}
          data={item}
          onViewOrder={onViewOrder}
          onTrackDelivery={onTrackDelivery}
        />
      ))}
    </div>
  );
}
