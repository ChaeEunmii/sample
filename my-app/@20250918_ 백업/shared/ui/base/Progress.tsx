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
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max: number;
  /** 프로그래스 필 색상 */
  color?: 'gray' | 'green';
  /** 퍼센트 텍스트 노출 여부 */
  showPercent?: boolean;
  /** 추가 클래스명 */
  className?: string;
}
export const Progress = ({
  label,
  value,
  min,
  max,
  color,
  showPercent = true,
  className,
}: ProgressProps) => {
  const minValue = min ?? 0;
  const percentage = Math.round(((value - minValue) / (max - minValue)) * 100);
  const progressId = `progress-${useId()}`;

  return (
    <div className={clsx(styles.root, color && styles[color], className)}>
      {label && <strong className={styles.label}>{label}</strong>}
      <div
        className={styles.bar}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={minValue}
        aria-valuemax={max}
        aria-labelledby={progressId}
      >
        <div className={styles.value} style={{ width: `${percentage}%` }} />
      </div>
      {showPercent && (
        <span id={progressId} className={styles.percent}>
          {percentage}%
        </span>
      )}
    </div>
  );
};

Progress.displayName = 'Progress';
