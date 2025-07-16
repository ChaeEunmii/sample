import { useMemo } from 'react';
import styles from './LiveDateTabs.module.scss';
import clsx from 'clsx';

interface LiveDateTabsProps {
  /** 날짜 문자열 배열 (예: ['2025-07-01', '2025-07-02', ...]) */
  data: string[];
  /** 선택된 날짜 */
  value: string;
  /** 날짜 선택 */
  onSelect: (date: string) => void;
}

export const LiveDateTabs = ({ data, value, onSelect }: LiveDateTabsProps) => {
  // 현재일 기준 필터링
  const filteredDates = useMemo(() => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // YYYY-MM-DD 형식

    // 날짜 순으로 정렬
    const sortedData = [...data].sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    // 오늘 기준으로 이전/이후 날짜 분리
    const before = sortedData.filter((date) => new Date(date) < new Date(todayString));
    const after = sortedData.filter((date) => new Date(date) > new Date(todayString));
    const isToday = sortedData.find((date) => date === todayString);

    let result = [];

    const prevDates = before.slice(-1);
    const nextDates = isToday ? after.slice(0, 5) : after.slice(0, 6);
    result = isToday ? [...prevDates, isToday, ...nextDates] : [...prevDates, ...nextDates];

    return result;
  }, [data]);

  // 요일과 일자로 변환
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const week = weekdays[date.getDay()];
    const day = date.getDate();

    return { week, day };
  };

  const isToday = (dateString: string) => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    return dateString === todayString;
  };

  return (
    <div className={styles.root}>
      {filteredDates.map((date) => {
        const { week, day } = formatDate(date);
        const isSelected = value === date;
        const isTodayDate = isToday(date);

        return (
          <button
            key={date}
            type="button"
            className={clsx(styles.item, isSelected && styles.active, isTodayDate && styles.today)}
            onClick={() => onSelect(date)}
          >
            <span className={styles.week}>{isTodayDate ? '오늘' : week}</span>
            <span className={styles.day}>{day}</span>
          </button>
        );
      })}
    </div>
  );
};
