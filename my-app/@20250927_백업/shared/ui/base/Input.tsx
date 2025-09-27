'use client';

import { useState, forwardRef, useRef, useId } from 'react';
import { IconButton } from '@shared/ui';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> {
  /** 입력 필드 타입 */
  type?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'number';
  /** 입력 필드 ID (미입력 시 자동 생성) */
  id?: string;
  /** 입력 필드 name */
  name?: string;
  /** 입력 필드 값 (제어 컴포넌트) */
  value?: string;
  /** 기본 값 (비제어 컴포넌트) */
  defaultValue?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 읽기 전용 여부 */
  readOnly?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID 값 연결 */
  errorMessageBy?: string;
  /** 라벨 텍스트 (필드 내부에 label이 있는 스타일인 경우 사용) */
  label?: string;
  /** 제목 텍스트 (접근성 준수 사항으로 label 연결이 없는 경우 title 추가 필요) */
  title?: string;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 설명 메시지의 ID 값 연결 */
  describedBy?: string;
  /** 지우기 버튼을 표시 여부 설정 */
  clearable?: boolean;
  /** 비밀번호 보기 버튼 표시 여부 설정 (type이 password일 때만 적용) */
  reveal?: boolean;
  /** 입력 요소의 앞에 표시할 요소 */
  prefix?: React.ReactNode;
  /** 입력 요소의 뒤에 표시할 요소 */
  suffix?: React.ReactNode;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 값 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** 클릭 이벤트 핸들러 */
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  /** 추가 스타일 */
  variant?: 'default' | 'plain' | 'filled';
  /** 입력필드 사이즈 */
  size?: 'small' | 'medium' | 'large';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      id,
      name,
      value,
      defaultValue,
      label,
      title,
      placeholder,
      describedBy,
      disabled,
      readOnly,
      invalid,
      errorMessageBy,
      clearable = true,
      reveal = false,
      prefix,
      suffix,
      className,
      onChange,
      onFocus,
      onBlur,
      onClick,
      variant = 'default',
      size = 'medium',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || `input-${useId()}`;
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value;

      if (type === 'number') {
        inputValue = inputValue.replace(/[^0-9]/g, '');
        e.target.value = inputValue;
      }

      if (value === undefined) {
        setInternalValue(inputValue);
      }
      onChange?.(e);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();

      if (value === undefined) {
        setInternalValue('');
      } else {
        // 제어 컴포넌트인 경우, 빈 값으로 onChange 이벤트 발생시킴
        const event = {
          target: {
            value: '',
            name,
          },
        } as React.ChangeEvent<HTMLInputElement>;

        onChange?.(event);
      }
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const focusInput = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target instanceof HTMLElement) {
        const closestButton = event.target.closest('button, a');

        if (!closestButton || !event.currentTarget.contains(closestButton)) {
          inputRef.current?.focus();
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;

      const closestInteractive = target.closest('input, button, a');
      if (closestInteractive && e.currentTarget.contains(closestInteractive)) {
        return;
      }

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (onClick) {
          onClick(e as unknown as React.MouseEvent<HTMLInputElement>);
        } else {
          focusInput(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
      }
    };

    // 현재 표시되는 값
    const currentValue = value !== undefined ? value : internalValue;
    // clearable 버튼 표시 여부 (clearable 옵션이 true이고 값이 있을 때)
    const showClearButton = clearable && currentValue !== '';
    // reveal 버튼 표시 여부 (type이 password이고 reveal 옵션이 true일 때)
    const showPasswordToggle = type === 'password' && reveal;

    return (
      <div
        className={clsx(
          styles.root,
          {
            [styles.focused]: isFocused,
            [styles.disabled]: disabled,
            [styles.invalid]: invalid,
            [styles.readonly]: readOnly,
            [styles[variant]]: variant !== 'default',
            [styles[size]]: size !== 'medium',
            [styles.clickable]: onClick,
          },
          className
        )}
        onClick={onClick || focusInput}
        onKeyDown={handleKeyDown}
        tabIndex={onClick ? 0 : undefined}
      >
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        {prefix && prefix}
        <input
          ref={(element) => {
            if (typeof ref === 'function') {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
            inputRef.current = element;
          }}
          type={
            type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : type === 'number'
                ? 'text'
                : type
          }
          inputMode={type === 'number' ? 'numeric' : undefined}
          pattern={type === 'number' ? '[0-9]*' : undefined}
          id={inputId}
          name={name}
          value={value !== undefined ? value : internalValue}
          placeholder={placeholder ? placeholder : title}
          title={title}
          disabled={disabled}
          readOnly={onClick ? true : readOnly}
          aria-invalid={invalid}
          aria-errormessage={errorMessageBy}
          aria-describedby={describedBy}
          className={clsx(styles.field)}
          onChange={handleChange}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          tabIndex={onClick ? -1 : undefined}
          {...props}
        />
        {!disabled && !readOnly && (showClearButton || showPasswordToggle) && (
          <>
            {showClearButton && (
              <IconButton name="delete" className={styles.clear} onClick={handleClear}>
                지우기
              </IconButton>
            )}
            {showPasswordToggle && (
              <IconButton
                name={showPassword ? 'eyeOff' : 'eyeOn'}
                className={styles.reveal}
                onClick={toggleShowPassword}
              >
                {showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
              </IconButton>
            )}
          </>
        )}
        {suffix && suffix}
      </div>
    );
  }
);

Input.displayName = 'Input';
