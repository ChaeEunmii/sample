'use client';

import { IconButton, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './CalendarNav.module.scss';

type YM = { year: number; month: number };

type CalendarNavProps = {
  /** 기준 월 (해당 달의 아무 날짜여도 OK) */
  value: Date;
  /** value 기준 -1/+1개월로 이동한 Date와 {year, month}를 반환 */
  onChange: (next: Date, ym: YM) => void;
  /** 이동 하한(포함). 예: 2024-01-01 이면 2024.01 까지 가능 */
  minMonth?: Date;
  /** 이동 상한(포함). 예: 2025-12-01 이면 2025.12 까지 가능 */
  maxMonth?: Date;
  /** 추가 클래스 */
  className?: string;
};

export default function CalendarNav({
  value,
  onChange,
  minMonth,
  maxMonth,
  className,
}: CalendarNavProps) {
  const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
  const addMonths = (date: Date, diff: number) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + diff);
    return startOfMonth(d);
  };
  const monthKey = (d: Date) => d.getFullYear() * 12 + d.getMonth();
  const cmpMonth = (a: Date, b: Date) => monthKey(a) - monthKey(b);
  const makeYM = (d: Date): YM => ({ year: d.getFullYear(), month: d.getMonth() + 1 });

  // 경계를 월 첫날로 정규화
  const minM = minMonth ? startOfMonth(minMonth) : undefined;
  const maxM = maxMonth ? startOfMonth(maxMonth) : undefined;
  const cur = startOfMonth(value);

  // 이동 가능 여부
  const canGoPrev = !minM || cmpMonth(addMonths(cur, -1), minM) >= 0;
  const canGoNext = !maxM || cmpMonth(addMonths(cur, +1), maxM) <= 0;

  const goPrev = () => {
    if (!canGoPrev) return;
    const next = addMonths(cur, -1);
    onChange(next, makeYM(next));
  };
  const goNext = () => {
    if (!canGoNext) return;
    const next = addMonths(cur, +1);
    onChange(next, makeYM(next));
  };

  // 기본 포맷: YYYY.MM
  const ym = `${cur.getFullYear()}.${String(cur.getMonth() + 1).padStart(2, '0')}`;

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div
      className={clsx(styles.root, className)}
      role="group"
      aria-label="월 선택"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <IconButton
        name="arrowLeft"
        size="xsmall"
        className={styles.ctrl}
        onClick={goPrev}
        disabled={!canGoPrev}
        aria-disabled={!canGoPrev}
      >
        이전 달
      </IconButton>
      <Text as="strong" className={styles.txt}>
        {ym}
      </Text>
      <IconButton
        name="arrowRight"
        size="xsmall"
        className={styles.ctrl}
        onClick={goNext}
        disabled={!canGoNext}
        aria-disabled={!canGoNext}
      >
        다음 달
      </IconButton>
    </div>
  );
}
