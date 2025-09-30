'use client';

import React from 'react';
import { forwardRef, useState, useId, useRef } from 'react';
import { Icon, IconName } from './Icon';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsx from 'clsx';
import styles from './Chip.module.scss';

interface ChipItem {
  value: string;
  label: string | React.ReactNode;
  disabled?: boolean;
  slot?: React.ReactNode;
  prefixIcon?: IconName | [IconName, IconName];
}
// Types
interface ChipItemProps {
  item: ChipItem;
  name: string;
  type: 'checkbox' | 'radio';
  checked: boolean;
  onChange: () => void;
  className?: string;
  lineBreak: boolean;
}

export const ChipItem = ({
  item,
  name,
  type,
  checked,
  onChange,
  className,
  lineBreak,
  ...props
}: ChipItemProps) => {
  const inputId = `${name}-${useId()}`;

  const renderPrefixIcon = () => {
    if (!item.prefixIcon) return null;

    let iconName: IconName;

    if (Array.isArray(item.prefixIcon)) {
      // [off상태, on상태] 배열인 경우
      iconName = checked ? item.prefixIcon[1] : item.prefixIcon[0];
    } else {
      // 단일 아이콘 이름인 경우
      iconName = item.prefixIcon;
    }

    return <Icon name={iconName} size="small" />;
  };

  const renderLabel = (label: string | React.ReactNode) => {
    if (typeof label !== 'string') return label;
    // lineBreak 가 true일때만 변환
    if (lineBreak) {
      return label.split('\n').map((line, index, arr) => (
        <React.Fragment key={index}>
          {line}
          {index < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return label;
  };

  return (
    <div className={clsx(styles.chip, className)} {...props}>
      <input
        type={type}
        id={inputId}
        name={name}
        value={item.value}
        checked={checked}
        onChange={onChange}
        disabled={item.disabled}
        className={styles.input}
      />
      <label htmlFor={inputId} className={clsx(styles.label, item.disabled && styles.disabled)}>
        {renderPrefixIcon()}
        {renderLabel(item.label)}
      </label>
      {item.slot}
    </div>
  );
};

// Types
interface ChipProps {
  label?: string;
  /** variant
   * 'outlined' : 상품상세 Drawer에서 disabled에 색상이 있고, 여백 각 칩 내부 여백 12px 8px 기준으로 사용되는 형태
   */
  variant?: 'outlined' | 'filter' | 'filled' | 'buttons' | string;
  type?: 'grid' | 'swiper';
  data: ChipItem[];
  name: string;
  multiple?: boolean;
  max?: number;
  onChange?: (selectedValues: any) => void;
  selected?: string | string[];
  size?: 'large' | 'small';
  className?: string;
  columns?: number | 'auto';
  /** 라운드 옵션 */
  round?: boolean;
  /** 줄바꿈 옵션 */
  lineBreak?: boolean;
}

// Chip 컴포넌트
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      variant,
      type = 'grid',
      data,
      name,
      multiple = false,
      max,
      selected,
      size,
      round,
      onChange,
      className,
      columns,
      lineBreak = false,
      ...props
    },
    ref
  ) => {
    // 내부 상태 관리(비제어)
    const [localValues, setLocalValues] = useState<string[]>([]);
    const swiperRef = useRef<SwiperType | null>(null);

    // 초기 선택값
    const selectedValues =
      selected !== undefined ? (Array.isArray(selected) ? selected : [selected]) : localValues;

    // 선택된 칩으로 스크롤하는 함수
    const scrollToActiveChip = (value: string) => {
      if (!swiperRef.current) return;

      const slideIndex = data.findIndex((item) => item.value === value);
      if (slideIndex !== -1) {
        // slideTo 메서드로 해당 슬라이드로 이동
        swiperRef.current.slideTo(slideIndex, 300);
      }
    };

    const handleChange = (value: string) => {
      let newSelected: string[];

      if (multiple) {
        if (selectedValues.includes(value)) {
          newSelected = selectedValues.filter((item) => item !== value); // 선택 해제
        } else {
          newSelected = [...selectedValues, value];
          scrollToActiveChip(value);
        }
      } else {
        newSelected = [value];
        scrollToActiveChip(value);
      }

      if (selected === undefined) setLocalValues(newSelected);

      const changeVal = multiple ? newSelected : newSelected[0];
      onChange?.(changeVal);
    };

    const inputType = multiple ? 'checkbox' : 'radio';

    const renderChipItem = (item: ChipItem) => (
      <ChipItem
        key={item.value}
        item={item}
        name={name}
        lineBreak={lineBreak}
        type={inputType}
        checked={selectedValues.includes(item.value)}
        onChange={() => handleChange(item.value)}
      />
    );

    // colummns type에 따른 css변수 추가
    const fixedColumn =
      typeof columns === 'number'
        ? ({ '--chip-grid-columns': columns } as React.CSSProperties)
        : {};
    return (
      <div
        ref={ref}
        role="group"
        aria-label={label}
        className={clsx(
          styles.root,
          variant && styles[variant],
          size && styles[size],
          round && styles.round,
          className
        )}
        {...props}
      >
        {type === 'swiper' ? (
          <Swiper
            slidesPerView="auto"
            freeMode={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={styles.swiper}
          >
            {data.map((item) => (
              <SwiperSlide key={item.value} className={styles.swiperColumns}>
                {renderChipItem(item)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className={clsx(styles.container, columns !== 'auto' && styles.gridColumns)}
            style={fixedColumn}
          >
            {data.map(renderChipItem)}
          </div>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
