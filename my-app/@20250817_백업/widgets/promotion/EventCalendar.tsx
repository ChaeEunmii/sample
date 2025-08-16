import React from 'react';

import styles from './EventCalendar.module.scss';
import clsx from 'clsx';

/** 요일 한글 */
const korWeek = ['일', '월', '화', '수', '목', '금', '토'];

interface EventCalendarProps {
  /** 출석한 날짜 */
  checkedDays: number[];
  /** 더블데이 날짜 */
  doubleDays: number[];
}

/** 달력 생성 */
function getMonthMatrix(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const firstWeekDay = firstDay.getDay();
  const lastDate = lastDay.getDate();

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = [];

  for (let i = 0; i < firstWeekDay; i++) week.push(null);

  for (let day = 1; day <= lastDate; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  // 마지막 주 빈칸
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

export default function EventCalendar({ checkedDays, doubleDays }: EventCalendarProps) {
  /** 오늘 날짜 정보 (루프 밖에서 한 번만 계산) */
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  /** 오늘 날짜 (00:00 기준 비교용) */
  const todayDate = new Date(currentYear, currentMonth, currentDay);
  todayDate.setHours(0, 0, 0, 0);

  /** 달력 테이블 행렬 */
  const weeks = getMonthMatrix(currentYear, currentMonth);

  return (
    <div className={styles.root}>
      <table>
        <thead>
          <tr>
            {korWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, rowIdx) => (
            <tr key={rowIdx}>
              {week.map((date, colIdx) => {
                if (!date) return <td key={colIdx}></td>;

                /** 셀 날짜 객체 */
                const cellDate = new Date(currentYear, currentMonth, date);

                /** 오늘 날짜 여부 */
                const isToday =
                  cellDate.getFullYear() === currentYear &&
                  cellDate.getMonth() === currentMonth &&
                  cellDate.getDate() === currentDay;

                /** 출석 여부 */
                const isChecked = checkedDays.includes(date);

                /** 더블데이 여부 */
                const isDoubleDay = doubleDays.includes(date);

                /** 과거 날짜(오늘 이전) */
                const isPast = cellDate.getTime() < todayDate.getTime();

                return (
                  <td key={colIdx}>
                    <div
                      className={clsx(
                        styles.date,
                        isToday && styles.isToday,
                        isPast && styles.isPast
                      )}
                    >
                      {date}
                      {/* 더블 데이 */}
                      {isDoubleDay && (
                        <div className={styles.doubleDay} aria-label="더블 데이">
                          2배
                        </div>
                      )}
                      {/* 출석 도장 */}
                      {isChecked && (
                        <div className={styles.checked} aria-label="출석 도장">
                          10P
                        </div>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
