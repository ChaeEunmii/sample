'use client';

import { forwardRef, useState } from 'react';
import { Checkbox, CheckboxSize } from './Checkbox';
import clsx from 'clsx';
import styles from './CheckboxGroup.module.scss';

interface CheckboxGroupProps {
  /** 체크박스 그룹 이름 */
  name?: string;
  /** 체크박스 옵션 목록 */
  options: Array<{ label: React.ReactNode; value: string; disabled?: boolean }>;
  /** 현재 선택된 값들 (제어 컴포넌트) */
  value?: string[];
  /** 초기 선택 값들 (비제어 컴포넌트) */
  defaultValue?: string[];
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID 값 연결 */
  errorMessageBy?: string;
  /** 체크박스 크기 */
  size?: CheckboxSize;
  /** 세로 정렬 여부 */
  vertical?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** label 연결이 필요한 경우 사용 */
  id?: string;
  /** 값 변경 핸들러 */
  onChange?: (selectedValues: string[]) => void;
  /** 체크박스에 추가할 props */
  checkboxProps?: Partial<React.ComponentProps<typeof Checkbox>>;
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      name,
      options,
      value,
      defaultValue = [],
      disabled,
      invalid,
      errorMessageBy,
      size = 'medium',
      vertical,
      className,
      id,
      onChange,
      checkboxProps,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);

    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (optionValue: string, checked: boolean) => {
      const newValues = checked
        ? [...currentValue, optionValue]
        : currentValue.filter((v) => v !== optionValue);

      if (value === undefined) {
        setInternalValue(newValues);
      }
      onChange?.(newValues);
    };

    const isSelected = (optionValue: string) => {
      return currentValue.includes(optionValue);
    };

    return (
      <div
        ref={ref}
        role="group"
        aria-describedby={errorMessageBy}
        className={clsx(styles.root, vertical && 'ncp-align-vertical', className)}
        {...props}
      >
        {options.map((option, index) => (
          <Checkbox
            key={option.value}
            size={size}
            name={name}
            value={option.value}
            label={option.label}
            checked={isSelected(option.value)}
            disabled={disabled || option.disabled}
            invalid={invalid}
            onChange={(e) => handleChange(option.value, e.target.checked)}
            id={index === 0 ? id : undefined}
            {...checkboxProps}
          />
        ))}
      </div>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';
