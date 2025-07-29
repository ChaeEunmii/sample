'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { DateField, Stack, Icon, Chip } from '@shared/ui';

export interface DateRange {
  from: Date | null;
  to: Date | null;
}

export interface DateRangePickerProps {
  /** 연/월 또는 연/월/일 모드 */
  mode?: 'ym' | 'ymd';
  /** 선택된 날짜 범위 */
  value: DateRange;
  /** 날짜 범위가 변경될 때 호출 */
  onChange: (range: DateRange) => void;
  /** 선택 가능한 최소 날짜 */
  minDate?: Date;
  /** 선택 가능한 최대 날짜 */
  maxDate?: Date;
}

// 날짜 비교 함수
const isSameDate = (date1: Date | null, date2: Date | null): boolean => {
  if (date1 === null && date2 === null) return true;
  if (date1 === null || date2 === null) return false;
  return date1.getTime() === date2.getTime();
};

export const DateRangePicker = ({
  mode = 'ym',
  value,
  onChange,
  minDate,
  maxDate,
}: DateRangePickerProps) => {
  const [chipValue, setChipValue] = useState<string | null>(null);
  const isUpdatingRef = useRef(false);

  useEffect(() => {
    console.log('chipValue changed:', chipValue);
  }, [chipValue]);

  const handleFromChange = useCallback(
    (date: Date | null) => {
      if (isUpdatingRef.current) return;

      // 날짜가 실제로 변경된 경우에만 업데이트
      if (!isSameDate(date, value.from)) {
        setChipValue(null);
        isUpdatingRef.current = true;
        onChange({ from: date, to: value.to });
        setTimeout(() => {
          isUpdatingRef.current = false;
        }, 0);
      }
    },
    [value.from, value.to, onChange]
  );

  const handleToChange = useCallback(
    (date: Date | null) => {
      if (isUpdatingRef.current) return;

      // 날짜가 실제로 변경된 경우에만 업데이트
      if (!isSameDate(date, value.to)) {
        setChipValue(null);
        isUpdatingRef.current = true;
        onChange({ from: value.from, to: date });
        setTimeout(() => {
          isUpdatingRef.current = false;
        }, 0);
      }
    },
    [value.from, value.to, onChange]
  );

  const handleChipChange = useCallback(
    (selectedValue: string) => {
      if (isUpdatingRef.current) return;

      const today = new Date();
      const newTo = new Date(today);
      const newFrom = new Date(today);

      switch (selectedValue) {
        case '1': // 최근 3개월
          newFrom.setMonth(today.getMonth() - 3);
          break;
        case '2': // 최근 6개월
          newFrom.setMonth(today.getMonth() - 6);
          break;
        case '3': // 최근 1년
          newFrom.setFullYear(today.getFullYear() - 1);
          break;
      }

      // 실제로 값이 변경되는 경우에만 업데이트
      if (!isSameDate(newFrom, value.from) || !isSameDate(newTo, value.to)) {
        setChipValue(selectedValue);
        isUpdatingRef.current = true;
        onChange({ from: newFrom, to: newTo });
        setTimeout(() => {
          isUpdatingRef.current = false;
        }, 0);
      }
    },
    [value.from, value.to, onChange]
  );

  return (
    <>
      <Chip
        variant="filled"
        name="period-chips"
        data={[
          { value: '1', label: '최근 3개월' },
          { value: '2', label: '최근 6개월' },
          { value: '3', label: '최근 1년' },
        ]}
        columns="auto"
        size="small"
        selected={chipValue ? [chipValue] : []}
        onChange={handleChipChange}
      />
      <Stack type="field" className="ncp-mt-x6">
        <DateField
          mode={mode}
          value={value.from}
          onChange={handleFromChange}
          minDate={minDate}
          maxDate={maxDate}
          title="시작일"
        />
        <Icon name="dash" className="ncp-symbol" />
        <DateField
          mode={mode}
          value={value.to}
          onChange={handleToChange}
          minDate={minDate}
          maxDate={maxDate}
          title="종료일"
        />
      </Stack>
    </>
  );
};

DateRangePicker.displayName = 'DateRangePicker';
