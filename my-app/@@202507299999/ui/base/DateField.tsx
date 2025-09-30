'use client';

import { useEffect, useState } from 'react';
import { useDraggableScroll } from '@shared/hooks';
import { Drawer, Input, Icon, Button } from '@shared/ui';
import styles from './DateField.module.scss';
import clsx from 'clsx';

export interface DateFieldProps {
  /** Input 및 Drawer에 표시될 제목 */
  title?: string;
  /** 날짜 선택 모드: 전체(ymd) 또는 연월만(ym) */
  mode?: 'ymd' | 'ym';
  /** 선택 가능한 최소 날짜 */
  minDate?: Date;
  /** 선택 가능한 최대 날짜 */
  maxDate?: Date;
  /** 제어 값 */
  value?: Date | null;
  /** 날짜가 선택되었을 때 호출되는 콜백 */
  onChange?: (date: Date | null) => void;
}

const getDaysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

const getFilteredYears = (min?: Date, max?: Date) => {
  const start = min ? min.getFullYear() : 1970;
  const end = max ? max.getFullYear() : 2069;
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const getFilteredMonths = (year: number, min?: Date, max?: Date) => {
  return Array.from({ length: 12 }, (_, i) => i + 1).filter((month) => {
    const date = new Date(year, month - 1, 1);
    if (min && date < new Date(min.getFullYear(), min.getMonth(), 1)) return false;
    if (max && date > new Date(max.getFullYear(), max.getMonth(), 1)) return false;
    return true;
  });
};

const getFilteredDays = (year: number, month: number, min?: Date, max?: Date) => {
  const total = getDaysInMonth(year, month);
  return Array.from({ length: total }, (_, i) => i + 1).filter((day) => {
    const date = new Date(year, month - 1, day);
    if (min && date < min) return false;
    if (max && date > max) return false;
    return true;
  });
};

export const DateField = ({
  title = '날짜 선택',
  mode = 'ymd',
  minDate,
  maxDate,
  value,
  onChange,
}: DateFieldProps) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const yearScroll = useDraggableScroll();
  const monthScroll = useDraggableScroll();
  const dayScroll = useDraggableScroll();

  const years = getFilteredYears(minDate, maxDate);
  const months = getFilteredMonths(year, minDate, maxDate);
  const days = mode === 'ymd' ? getFilteredDays(year, month, minDate, maxDate) : [];

  const scrollToIndex = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    if (ref.current) {
      ref.current.scrollTo({
        top: index * 30,
        behavior: 'instant',
      });
    }
  };

  // 날짜 초기화
  const resetToToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDay(today.getDate());
  };

  const openDrawer = () => {
    if (!selectedDate) {
      resetToToday();
    } else {
      setYear(selectedDate.getFullYear());
      setMonth(selectedDate.getMonth() + 1);
      setDay(selectedDate.getDate());
    }
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      const cleanups = [yearScroll.bindEvents(), monthScroll.bindEvents()];
      if (mode === 'ymd') cleanups.push(dayScroll.bindEvents());

      scrollToIndex(yearScroll.ref, years.indexOf(year));
      scrollToIndex(monthScroll.ref, months.indexOf(month));
      if (mode === 'ymd') scrollToIndex(dayScroll.ref, days.indexOf(day));

      return () => {
        cleanups.forEach((off) => off && off());
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedDate && onChange) {
      onChange(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
      setYear(value.getFullYear());
      setMonth(value.getMonth() + 1);
      setDay(value.getDate());
    } else {
      setSelectedDate(null);
      resetToToday();
    }
  }, [value]);

  const handleSelect = () => {
    const date = new Date(year, month - 1, mode === 'ymd' ? day : 1);
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return mode === 'ym' ? `${yyyy}.${mm}` : `${yyyy}.${mm}.${dd}`;
  };

  const handleScroll = (
    e: React.UIEvent<HTMLDivElement, UIEvent>,
    list: number[],
    setter: (value: number) => void
  ) => {
    const scrollTop = e.currentTarget.scrollTop;
    const index = Math.round(scrollTop / 30);
    setter(list[index]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSelectedDate(null);
      resetToToday();
      onChange?.(null);
    }
  };

  const renderColumn = (
    scroll: ReturnType<typeof useDraggableScroll>,
    list: number[],
    selected: number,
    setter: (value: number) => void,
    unit: string
  ) => (
    <div className={styles.column}>
      <div
        ref={scroll.ref}
        onScroll={(e) => handleScroll(e, list, setter)}
        className={clsx(styles.scroll, {
          [styles.dragging]: scroll.isDragging,
        })}
      >
        {list.map((item, idx) => (
          <div
            key={item}
            className={clsx(styles.item, {
              [styles.active]: item === selected,
            })}
            onClick={() => {
              scrollToIndex(scroll.ref, idx);
            }}
          >
            {item}
            {unit}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Input
        title={title}
        suffix={<Icon name="subscribe" />}
        value={selectedDate ? formatDate(selectedDate) : ''}
        onClick={openDrawer}
        onChange={handleInputChange}
        clearable={false}
      />
      <Drawer
        title={title}
        footer={
          <Button variant="primary" size="large" onClick={handleSelect}>
            선택완료
          </Button>
        }
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showBack
      >
        <div className={styles.picker}>
          {renderColumn(yearScroll, years, year, setYear, '년')}
          {renderColumn(monthScroll, months, month, setMonth, '월')}
          {mode === 'ymd' && renderColumn(dayScroll, days, day, setDay, '일')}
        </div>
      </Drawer>
    </>
  );
};

DateField.displayName = 'DateField';
