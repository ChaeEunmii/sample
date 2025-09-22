import { useMemo, useState } from 'react';
import { Calendar, Chip, Empty, FormArea, FormItem, Text, TextButton } from '@/shared/ui';

import clsx from 'clsx';
import styles from './ReserveCalendar.module.scss';

// 달력 설정(임시)
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const minDate = new Date(today);
const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 1);

// 시간 label 렌더
const renderTimeLabel = (time: string, qty: number) => {
  return (
    <div className={clsx(styles.timeLabel)}>
      {time}
      {qty < 5 && (
        <Text as="span" size="3" color={qty > 0 ? 'point' : 'gray3'} weight="medium">
          {qty > 0 ? `잔여 ${qty}` : '예약마감'}
        </Text>
      )}
    </div>
  );
};

// 임시 시간 데이터
const timeData = [
  { value: 'time1', time: '11:00', qty: 1 },
  { value: 'time2', time: '11:00', qty: 10 },
  { value: 'time3', time: '11:00', qty: 0 },
  { value: 'time4', time: '11:00', qty: 2 },
  { value: 'time5', time: '11:00', qty: 30 },
  { value: 'time6', time: '11:00', qty: 3 },
  { value: 'time7', time: '11:00', qty: 4 },
  { value: 'time8', time: '11:00', qty: 5 },
  { value: 'time9', time: '11:00', qty: 6 },
  { value: 'time10', time: '11:00', qty: 7 },
  { value: 'time11', time: '11:00', qty: 8 },
  { value: 'time12', time: '11:00', qty: 9 },
  { value: 'time13', time: '11:00', qty: 0 },
  { value: 'time14', time: '11:00', qty: 12 },
  { value: 'time15', time: '11:00', qty: 13 },
  { value: 'time16', time: '11:00', qty: 14 },
];

const visitAlwaysData = [{ value: 'time', time: '상시', qty: 4 }];

interface ReserveCalendarProps {
  /** 언어 */
  lang?: 'ko' | 'en' | 'cn';
  variant: 'visit' | 'o4o';
  /** 퍼블 화면 확인을 위한 임시 시간 데이터 삭제 여부(개발시 삭제) */
  isEmpty?: boolean;
}

export default function ReserveCalendar({
  lang = 'ko',
  variant,
  isEmpty = false,
}: ReserveCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const isVisit = variant === 'visit';
  const isO4O = variant === 'o4o';

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
  };

  // ========== s: 실제 개발시 해당 영역 주석 해제 후 사용 ==========
  // const timeOptions = useMemo(() => {
  //   return timeData.map((d) => ({
  //     value: d.value,
  //     disabled: d.qty <= 0,
  //     label: renderTimeLabel(d.time, d.qty),
  //   }));
  // }, [selectedTime]);
  // ========== e: 실제 개발시 해당 영역 주석 해제 후 사용 ==========

  // [임시] 퍼블 화면 확인을 위한 시간 데이터 삭제 (개발시 삭제 후 상단 주석 처리 사용)
  const timeOptions = useMemo(() => {
    // isO4O 이면서 isEmpty이면 빈 배열
    if (isO4O && isEmpty) return [];

    // 그 외에는 정상적으로 timeData 매핑
    return timeData.map((d) => ({
      value: d.value,
      disabled: d.qty <= 0,
      label: renderTimeLabel(d.time, d.qty),
    }));
  }, [selectedTime, isO4O, isEmpty]);

  /** 더보기 버튼 상태 */
  const [open, setOpen] = useState(false);
  const visibleTimes = open ? timeOptions : timeOptions.slice(0, 8);

  // 언어별 데이터
  const calendarData = {
    // 더보기
    more: {},
    // 당일 예약 불가
    empty: {
      ko: '당일 예약은 불가한 매장입니다.',
      en: 'This store does not accept same-day reservations.',
      cn: '本店不接受当日预订。',
    },
  };

  // 예약 가능 날짜 목록 지정(샘플)
  const availableDates = [
    new Date(2025, 8, 25), // 2025-09-25
    new Date(2025, 8, 27), // 2025-09-27
    new Date(2025, 8, 30), // 2025-09-30
  ];

  // 날짜 비교용 헬퍼 (YYYY-MM-DD 문자열로 변환)
  const toKey = (d: Date) => d.toISOString().slice(0, 10);
  const availableSet = new Set(availableDates.map(toKey));

  return (
    <FormArea type="vertical">
      <FormItem>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={minDate}
          maxDate={maxDate}
          // 예약 가능한 날짜만 선택되도록 설정
          tileDisabled={({ date, view }) => view === 'month' && !availableSet.has(toKey(date))}
        />
      </FormItem>
      {isVisit && (
        /* 상시인 경우 */
        <FormItem label="시간&잔여 수량">
          <Chip
            className={styles.chip}
            name="timeAlways"
            type="grid"
            columns={4}
            selected={selectedTime}
            data={[
              {
                value: '99:99',
                label: renderTimeLabel(visitAlwaysData[0].time, visitAlwaysData[0].qty),
              },
            ]}
            onChange={handleTimeChange}
            variant="outlined"
          />
        </FormItem>
      )}
      {isVisit || (isO4O && timeOptions.length > 0) ? (
        <FormItem label={isVisit ? '시간&잔여 수량' : undefined}>
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
              suffixIcon={'arrowDown'}
              className={styles.timeMore}
              onClick={() => setOpen(true)}
            >
              더보기
            </TextButton>
          )}
        </FormItem>
      ) : (
        <Empty title={calendarData.empty[lang]} style={{ marginBlock: '40px' }} />
      )}
    </FormArea>
  );
}
