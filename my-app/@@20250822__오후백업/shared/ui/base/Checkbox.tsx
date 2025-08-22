'use client';

import { forwardRef, useEffect, useId, useState } from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.scss';

export type CheckboxSize = 'small' | 'medium';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 스타일 변형 */
  variant?: 'default' | 'boxed' | 'filter';
  /** 체크박스의 크기 */
  size?: CheckboxSize;
  /** 라벨 내용 */
  label?: React.ReactNode;
  /** 체크박스의 고유 식별자 (자동 생성) */
  id?: string;
  /** 체크박스 이름 */
  name?: string;
  /** 체크박스의 값 */
  value?: string | number;
  /** 선택 상태 (제어 컴포넌트) */
  checked?: boolean;
  /** 초기 선택 상태 (비제어 컴포넌트) */
  defaultChecked?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID값 연결 */
  errorMessageBy?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 라벨 숨김 여부 */
  hideLabel?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 선택 상태 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      variant = 'default',
      size = 'medium',
      label,
      id,
      name,
      checked,
      defaultChecked,
      disabled,
      invalid,
      errorMessageBy,
      hideLabel,
      className,
      onChange,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${useId()}`;

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;

      // 비제어 컴포넌트일 경우 내부 상태 업데이트
      if (!isControlled) {
        setInternalChecked(isChecked);
      }

      // 외부 onChange 호출
      onChange?.(e);
    };

    return (
      <span
        className={clsx(
          styles.root,
          variant && variant !== 'default' && styles[variant],
          size && size !== 'medium' && styles[size],
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={isControlled ? checked : internalChecked}
          disabled={disabled}
          onChange={handleChange}
          aria-invalid={invalid}
          aria-errormessage={errorMessageBy}
          className={styles.input}
          {...props}
        />
        {label && (
          <label htmlFor={checkboxId} className={styles.label}>
            <span className={styles.icon} />
            {hideLabel ? <span className="ncp-blind">{label}</span> : label}
          </label>
        )}
      </span>
    );
  }
);

Checkbox.displayName = 'Checkbox';
