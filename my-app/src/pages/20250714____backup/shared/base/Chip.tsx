'use client';

import { forwardRef, useState, useId } from 'react';
import clsx from 'clsx';
import styles from './Chip.module.scss';

interface ChipItem {
  value: string;
  label: string | React.ReactNode;
  disabled?: boolean;
  slot?: React.ReactNode;
}
// Types
interface ChipItemProps {
  item: ChipItem;
  name: string;
  type: 'checkbox' | 'radio';
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export const ChipItem = ({
  item,
  name,
  type,
  checked,
  onChange,
  className,
  ...props
}: ChipItemProps) => {
  const inputId = `${name}-${useId()}`;

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
        {item.label}
      </label>
      {item.slot}
    </div>
  );
};

// Types
interface ChipProps {
  label?: string;
  variant?: 'outlined' | 'filter' | 'filled' | string;
  data: ChipItem[];
  name: string;
  multiple?: boolean;
  max?: number;
  onChange?: (selectedValues: any) => void;
  selected?: string | string[];
  size?: 'large' | 'small';
  className?: string;
  columns?: number | 'auto';
}

// Chip 컴포넌트
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      variant,
      data,
      name,
      multiple = false,
      max,
      selected,
      size,
      onChange,
      className,
      columns,
      ...props
    },
    ref
  ) => {
    // 내부 상태 관리(비제어)
    const [localValues, setLocalValues] = useState<string[]>([]);

    // 초기 선택값
    const selectedValues =
      selected !== undefined ? (Array.isArray(selected) ? selected : [selected]) : localValues;

    const handleChange = (value: string) => {
      let newSelected: string[];

      if (multiple) {
        if (selectedValues.includes(value)) {
          newSelected = selectedValues.filter((item) => item !== value); // 선택 해제
        } else {
          newSelected = [...selectedValues, value];
        }
      } else {
        newSelected = [value];
      }

      if (selected === undefined) setLocalValues(newSelected);

      const changeVal = multiple ? newSelected : newSelected[0];
      onChange?.(changeVal);
    };
    const inputType = multiple ? 'checkbox' : 'radio';

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
        className={clsx(styles.root, variant && styles[variant], size && styles[size], className)}
        {...props}
      >
        <div
          className={clsx(styles.container, columns !== 'auto' && styles.gridColumns)}
          style={fixedColumn}
        >
          {data.map((item, idx) => (
            <ChipItem
              key={item.value}
              item={item}
              name={name}
              type={inputType}
              checked={selectedValues.includes(item.value)}
              onChange={() => handleChange(item.value)}
            />
          ))}
        </div>
      </div>
    );
  }
);

Chip.displayName = 'Chip';
