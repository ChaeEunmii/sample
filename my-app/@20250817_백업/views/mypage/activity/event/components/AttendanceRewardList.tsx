'use client';

import { Box, Text, Heading } from '@/shared/ui';
import styles from './AttendanceRewardList.module.scss';
import clsx from 'clsx';

interface StatusItem {
  /** ID */
  id?: string;
  /** 타이틀 */
  title: string;
  /** 서브타이틀 */
  subtitle: string;
  /** 상태 */
  status: string;
}

interface AttendanceRewardListProps {
  /** 누적 출석 경품 달성 목록 데이터*/
  data: StatusItem[];
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const AttendanceRewardList = ({ data, className }: AttendanceRewardListProps) => {
  return (
    <Box className={clsx(styles.wrap, className)}>
      <ul className={styles.list}>
        {data.map((item, idx) => {
          return (
            <li key={idx} className={styles.item}>
              <div className={styles.title}>
                <Text as="span" size="3">
                  {item.title}
                </Text>
                <Heading weight="medium" className={styles.head}>
                  {item.subtitle}
                </Heading>
              </div>
              <Text as="strong" color="point" weight="semibold">
                {item.status}
              </Text>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
