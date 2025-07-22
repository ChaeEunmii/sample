// 라이브러리
import { useId } from 'react';
// 스타일
import styles from './Progress.module.scss';
import clsx from 'clsx';

interface ProgressProps {
  /** 프로그레스바 제목 */
  label?: string;
  /** 현재 값 */
  value: number;
  /** 최대값 */
  max: number;
  /** 프로그래스 필 색상 */
  color?: 'gray';
  /** 추가 클래스명 */
  className?: string;
}
export const Progress = ({ label, value, max, color, className }: ProgressProps) => {
  const percentage = Math.round((value / max) * 100);
  const progressId = `progress-${useId()}`;

  return (
    <div className={clsx(styles.root, color && styles[color], className)}>
      {label && <strong className={styles.label}>{label}</strong>}
      <div
        className={styles.bar}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-labelledby={progressId}
      >
        <div className={styles.value} style={{ width: `${percentage}%` }} />
      </div>
      <span id={progressId} className={styles.percent}>
        {percentage}%
      </span>
    </div>
  );
};

Progress.displayName = 'Progress';
