"use client";

import { useMemo, useState } from "react";
import {
  Calendar,
  Chip,
  Empty,
  FormArea,
  FormItem,
  Text,
  TextButton,
} from "@/shared/ui";
import clsx from "clsx";
import styles from "./ReserveCalendar.module.scss";

// 달력 범위(임시)
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const minDate = new Date(today);
const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 1);

// 시간 label
const renderTimeLabel = (time: string, qty: number) => (
  <div className={clsx(styles.timeLabel)}>
    {time}
    {qty < 5 && (
      <Text as="span" size="3" color={qty > 0 ? "point" : "gray3"} weight="medium">
        {qty > 0 ? `잔여 ${qty}` : "예약마감"}
      </Text>
    )}
  </div>
);

// 임시 시간 데이터
const timeData = [
  { value: "time1", time: "11:00", qty: 1 },
  { value: "time2", time: "11:00", qty: 10 },
  { value: "time3", time: "11:00", qty: 0 },
  { value: "time4", time: "11:00", qty: 2 },
  { value: "time5", time: "11:00", qty: 30 },
  { value: "time6", time: "11:00", qty: 3 },
  { value: "time7", time: "11:00", qty: 4 },
  { value: "time8", time: "11:00", qty: 5 },
  { value: "time9", time: "11:00", qty: 6 },
  { value: "time10", time: "11:00", qty: 7 },
  { value: "time11", time: "11:00", qty: 8 },
  { value: "time12", time: "11:00", qty: 9 },
  { value: "time13", time: "11:00", qty: 0 },
  { value: "time14", time: "11:00", qty: 12 },
  { value: "time15", time: "11:00", qty: 13 },
  { value: "time16", time: "11:00", qty: 14 },
];

const visitAlwaysData = [{ value: "time", time: "상시", qty: 4 }];

interface ReserveCalendarProps {
  lang?: "ko" | "en" | "cn";
  variant: "visit" | "o4o";
  isEmpty?: boolean;
  /** 예약 가능 날짜 목록 (넘기면 해당 날짜만 선택 가능, 미지정 시 제한 없음) */
  availableDates?: Date[];
}

export default function ReserveCalendar({
  lang = "ko",
  variant,
  isEmpty = false,
  availableDates = [],
}: ReserveCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const isVisit = variant === "visit";
  const isO4O = variant === "o4o";

  const handleTimeChange = (value: string) => setSelectedTime(value);

  // 퍼블 확인용 시간 데이터
  const timeOptions = useMemo(() => {
    if (isO4O && isEmpty) return [];
    return timeData.map((d) => ({
      value: d.value,
      disabled: d.qty <= 0,
      label: renderTimeLabel(d.time, d.qty),
    }));
  }, [selectedTime, isO4O, isEmpty]);

  const [open, setOpen] = useState(false);
  const visibleTimes = open ? timeOptions : timeOptions.slice(0, 8);

  const calendarData = {
    empty: {
      ko: "당일 예약은 불가한 매장입니다.",
      en: "This store does not accept same-day reservations.",
      cn: "本店不接受当日预订。",
    },
  };

  // ✅ 예약 가능 목록이 있으면: 목록 밖 날짜는 비활성화 / 없으면: 제한 없음
  const tileDisabled =
    availableDates.length === 0
      ? undefined
      : ({ date }: { date: Date }) =>
          !availableDates.some(
            (d) =>
              d.getFullYear() === date.getFullYear() &&
              d.getMonth() === date.getMonth() &&
              d.getDate() === date.getDate()
          );

  return (
    <FormArea type="vertical">
      <FormItem>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={minDate}
          maxDate={maxDate}
          tileDisabled={tileDisabled}
        />
      </FormItem>

      {isVisit && (
        <FormItem label="시간&잔여 수량">
          <Chip
            className={styles.chip}
            name="timeAlways"
            type="grid"
            columns={4}
            selected={selectedTime}
            data={[
              {
                value: "99:99",
                label: renderTimeLabel(visitAlwaysData[0].time, visitAlwaysData[0].qty),
              },
            ]}
            onChange={handleTimeChange}
            variant="outlined"
          />
        </FormItem>
      )}

      {isVisit || (isO4O && timeOptions.length > 0) ? (
        <FormItem label={isVisit ? "시간&잔여 수량" : undefined}>
          <Chip
            className={styles.chip}
            name="time"
            type="grid"
            columns={4}
            selected={selectedTime}
            data={visibleTimes}
            onChange={handleTimeChange}
            variant="outlined"
          />
          {timeOptions.length > 8 && !open && (
            <TextButton
              variant="block"
              size="1"
              suffixIcon={"arrowDown"}
              className={styles.timeMore}
              onClick={() => setOpen(true)}
            >
              더보기
            </TextButton>
          )}
        </FormItem>
      ) : (
        <Empty title={calendarData.empty[lang]} style={{ marginBlock: "40px" }} />
      )}
    </FormArea>
  );
}