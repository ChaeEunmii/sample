import { ScheduleBox, ScheduleBoxData } from '@views/mypage/subscription/components/ScheduleBox';
import styles from './ScheduleBoxList.module.scss';
import clsx from 'clsx';

export type ScheduleBoxListProps = {
  /** 데이터배열 (ScheduleBox.tsx) */
  data: ScheduleBoxData[];
  /** 추가적인 클래스 */
  className?: string;
};

export function ScheduleBoxList({ data, className }: ScheduleBoxListProps) {
  return (
    <div className={clsx(styles.root, className)}>
      {data.map((item) => (
        <ScheduleBox key={item.id} data={item} />
      ))}
    </div>
  );
}
