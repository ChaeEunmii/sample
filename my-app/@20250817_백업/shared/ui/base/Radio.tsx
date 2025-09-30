import { forwardRef, useId } from 'react';
import clsx from 'clsx';
import styles from './Radio.module.scss';

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 라벨 텍스트 */
  label?: React.ReactNode;
  /** 라디오 버튼의 고유 식별자 (자동 생성) */
  id?: string;
  /** 라디오 그룹명 */
  name: string;
  /** 라디오 버튼의 값 */
  value: string | number;
  /** 선택 상태 (제어 컴포넌트) */
  checked?: boolean;
  /** 초기 선택 상태 (비제어 컴포넌트) */
  defaultChecked?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 라벨 숨김 여부 */
  hideLabel?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID값 연결 */
  errorMessageBy?: string;
  /** 추가 클래스명 */
  className?: string;
  /** 선택 상태 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      id,
      name,
      value,
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
    const radioId = id || `radio-${useId()}`;

    return (
      <span className={clsx(styles.root, className)}>
        <input
          ref={ref}
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={invalid}
          aria-errormessage={errorMessageBy}
          className={styles.input}
          {...props}
        />
        {label && (
          <label htmlFor={radioId} className={styles.label}>
            <span className={styles.icon} />
            {hideLabel ? <span className="ncp-blind">{label}</span> : label}
          </label>
        )}
      </span>
    );
  }
);

Radio.displayName = 'Radio';
