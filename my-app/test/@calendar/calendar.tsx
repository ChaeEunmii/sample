"use client";

import { useState } from "react";
import { Icon } from "@shared/ui";
import ReactCalendar from "react-calendar";
import type { TileArgs as CalendarTileProperties } from "react-calendar";
import styles from "./Calendar.module.scss";
import clsx from "clsx";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// 단일 날짜 선택용 인터페이스
interface SingleCalendarProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
  dateRange?: false;
  allowChange?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  tileDisabled?: (args: CalendarTileProperties) => boolean;
}

// 날짜 범위 선택용 인터페이스 (임시로 정의)
interface RangeCalendarProps {
  value: [Date | null, Date | null];
  onChange: (value: [Date | null, Date | null]) => void;
  dateRange: true;
  allowChange?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  tileDisabled?: (args: CalendarTileProperties) => boolean;
}

type CalendarProps = SingleCalendarProps | RangeCalendarProps;

export const Calendar = (props: CalendarProps) => {
  const {
    value,
    onChange,
    dateRange = false,
    allowChange = false,
    minDate,
    maxDate,
    className,
    tileDisabled,
  } = props;

  const [view, setView] = useState<"month" | "year" | "decade" | "century">(
    "month"
  );

  const handleChange = (newValue: Value) => {
    if (dateRange) {
      (onChange as RangeCalendarProps["onChange"])(
        newValue as [Date | null, Date | null]
      );
    } else {
      if (Array.isArray(newValue)) {
        (onChange as SingleCalendarProps["onChange"])(newValue[0]);
      } else {
        (onChange as SingleCalendarProps["onChange"])(newValue);
      }
    }
  };

  // 네비게이션 영역 날짜 포맷팅
  const formatNavigationLabel = ({ date }: { date: Date }) => {
    if (view === "month") {
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      return `${date.getFullYear()}.${month}`;
    }
    if (view === "year") return `${date.getFullYear()}`;
    if (view === "decade") {
      const startYear = Math.floor(date.getFullYear() / 10) * 10;
      return `${startYear}~${startYear + 9}`;
    }
    if (view === "century") {
      const startYear = Math.floor(date.getFullYear() / 100) * 100;
      return `${startYear}~${startYear + 99}`;
    }
    return "";
  };

  // 날짜(일) 포맷팅
  const formatDay = (_locale: string | undefined, date: Date) => {
    return date.getDate().toString();
  };

  return (
    <ReactCalendar
      className={clsx(styles.root, !allowChange && styles.lockView, className)}
      value={value}
      onChange={handleChange}
      selectRange={dateRange}
      locale="ko-KR"
      nextLabel={<Icon name="arrowRight" size="xsmall" />}
      prevLabel={<Icon name="arrowLeft" size="xsmall" />}
      next2Label={null}
      prev2Label={null}
      showNeighboringMonth={false}
      view={view}
      onViewChange={allowChange ? ({ view }) => setView(view) : undefined}
      navigationLabel={formatNavigationLabel}
      formatDay={formatDay}
      maxDetail="month"
      minDetail="decade"
      maxDate={maxDate}
      minDate={minDate}
      tileDisabled={tileDisabled}
    />
  );
};
