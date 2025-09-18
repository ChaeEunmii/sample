'use client';
// 라이브러리
import { useState, useEffect } from 'react';
// 유틸
import { toDate } from '@shared/utils/ui';
import { Text } from './Text';
import { Progress } from './Progress';
// 스타일
import styles from './Countdown.module.scss';
import clsx from 'clsx';

export type CountdownType = 'display1' | 'display2' | 'inline' | 'progress';
interface CountdownProps {
  /** 시작일 (progress 타입 사용 시) */
  startDate?: Date | string;
  /** 종료일 */
  endDate: Date | string;
  /** 남은 시간 표시 여부 */
  showCount?: boolean;
  /** 디데이 표시 여부 */
  showDday?: boolean;
  /** 라벨(시, 분, 초) 표시여부 */
  showLabel?: boolean;
  /** 카운트다운 스타일 */
  variant?: CountdownType;
  /** 추가 클래스명 */
  className?: string;
}

export const Countdown = ({
  startDate,
  endDate,
  showCount = true,
  showDday = false,
  showLabel = false,
  variant = 'display1',
  className,
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    totalDays: 0,
    isExpired: false,
  });

  const expiredState = {
    hour: 0,
    minute: 0,
    second: 0,
    totalDays: 0,
    isExpired: true,
  };

  const calculateTimeLeft = () => {
    const targetDate = toDate(endDate);
    if (!targetDate || isNaN(targetDate.getTime())) {
      return expiredState;
    }

    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
      return expiredState;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hour: showDday || variant === 'progress' ? hour : days * 24 + hour, // showDday가 true면 24시간 단위, false면 총 시간
      minute,
      second,
      totalDays: days,
      isExpired: false,
    };
  };

  useEffect(() => {
    // 초기 계산
    setTimeLeft(calculateTimeLeft());

    // 1초마다 업데이트
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0');
  };

  const getDdayText = (suffix: string = ''): string => {
    if (timeLeft.totalDays === 0) return 'D-DAY';
    return `D-${timeLeft.totalDays} ${suffix}`;
  };

  const renderUnit = (label: string, number: number) => (
    <div className={styles.unit}>
      <Text as="span" size="3" className={clsx(!showLabel && 'ncp-blind')}>
        {label}
      </Text>
      <em className={styles.number}>{formatTime(number)}</em>
    </div>
  );

  const rootClass = clsx(styles.root, variant && styles[variant], className);
  const timeString = `${formatTime(timeLeft.hour)}:${formatTime(timeLeft.minute)}:${formatTime(timeLeft.second)}`;

  if (!endDate) return null;

  if (variant === 'progress') {
    const [elapsed, setElapsed] = useState(0);
    const start = startDate ? toDate(startDate).getTime() : elapsed;
    const end = toDate(endDate).getTime();
    const total = Math.max(end - start, 0);

    useEffect(() => {
      const now = Date.now();
      const newElapsed = Math.min(Math.max(now - start, 0), total);
      setElapsed(newElapsed);
    }, [start]);

    return (
      <div className={rootClass}>
        <Text weight="bold">
          종료까지{' '}
          <mark className={styles.accent}>
            {timeLeft.totalDays}일 {timeString}
          </mark>{' '}
          남음
        </Text>
        <Progress value={elapsed} max={total} color="green" showPercent={false} />
      </div>
    );
  }

  if (variant === 'inline')
    return (
      <div className={rootClass}>
        {showDday && (
          <Text as="strong" size="3" weight="semibold">
            {getDdayText()}
          </Text>
        )}
        {showCount && (
          <Text as="span" className={styles.number}>
            {timeString}
          </Text>
        )}
      </div>
    );

  return (
    <div className={rootClass}>
      {showDday && !timeLeft.isExpired && (
        <Text as="strong" size="5" weight="semibold">
          {getDdayText('DAY')}
        </Text>
      )}

      {showCount && (
        <div
          className={styles.time}
          aria-label={`종료까지 ${timeLeft.hour}시간 ${timeLeft.minute}분 ${timeLeft.second}초`}
        >
          {/* 시 */}
          {renderUnit('HOUR', timeLeft.hour)}
          <span className={styles.separator}>:</span>
          {/* 분 */}
          {renderUnit('MIN', timeLeft.minute)}
          <span className={styles.separator}>:</span>
          {/* 초 */}
          {renderUnit('SEC', timeLeft.second)}
        </div>
      )}
    </div>
  );
};

Countdown.displayName = 'Countdown';
