'use client';
import { forwardRef, useId, useState } from 'react';
import { Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './Textarea.module.scss';

type BorderStyleType = 'none' | 'default';

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** 텍스트영역의 높이 설정, 텍스트 줄 수를 입력. */
  rows?: number;
  /** 현재 입력 값 (제어 컴포넌트) */
  value?: string;
  /** 기본 값 (비제어 컴포넌트) */
  defaultValue?: string;
  /** 라벨 텍스트 */
  label?: string;
  /** 텍스트영역의 고유 식별자 (자동 생성) */
  id?: string;
  /** 텍스트영역 이름 */
  name?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID값 연결 */
  errorMessageBy?: string;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 설명 메시지의 ID 값 연결 */
  describedBy?: string;
  /** maxlength 넣으면 글자수 카운트 */
  maxLength?: number;
  /** border 관련 스타일 */
  border?: BorderStyleType;
  /** 추가 클래스명 */
  className?: string;
  /** 값 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      rows = 5,
      value,
      defaultValue,
      id,
      name,
      disabled,
      invalid,
      errorMessageBy,
      placeholder,
      describedBy,
      maxLength,
      border = 'default',
      className,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id ?? `textarea-${generatedId}`;
    const [countValue, setCountValue] = useState(''); // 글자수 체크

    // 글자수 체크 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCountValue(e.target.value);
    };

    return (
      <div
        className={clsx(
          styles.root,
          {
            [styles.disabled]: disabled,
            [styles.invalid]: invalid,
            [styles[`${border}Border`]]: border !== 'default',
          },
          className
        )}
      >
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          value={value || countValue}
          defaultValue={defaultValue}
          disabled={disabled}
          aria-invalid={invalid}
          aria-errormessage={errorMessageBy}
          aria-describedby={describedBy}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          onChange={onChange || handleChange}
          className={clsx(styles.field, maxLength && styles.maxLength)}
          {...props}
        />
        {maxLength !== undefined && (
          <div className={styles.count}>
            <Text as="strong">{(value ?? countValue).length}</Text>
            <Text as="span" color="gray3">
              / {maxLength}
            </Text>
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
