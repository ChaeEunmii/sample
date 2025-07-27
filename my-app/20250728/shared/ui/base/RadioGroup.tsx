import { forwardRef, Fragment } from 'react';
import { Radio } from './Radio';
import clsx from 'clsx';
import styles from './RadioGroup.module.scss';

interface RadioGroupProps {
  /** 라디오 그룹명 */
  name: string;
  /** 라디오 옵션 목록 */
  options: Array<{
    label: React.ReactNode;
    value: string | number;
    disabled?: boolean;
    hidelabel?: boolean;
    /** 라디오 내에 추가적인 콘텐츠를 렌더링하는 함수 */
    radioSlot?: React.ReactNode;
  }>;
  /** 그룹의 제목(접근성을 위한 aria-label) */
  label?: string;
  /** 현재 선택된 값 (제어 컴포넌트) */
  value?: string | number;
  /** 초기 선택 값 (비제어 컴포넌트) */
  defaultValue?: string | number;
  /** 전체 비활성화 여부 */
  disabled?: boolean;
  /** 라벨 숨김 여부 */
  hidelabel?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID값 연결 */
  errorMessageBy?: string;
  /** 세로 정렬 여부 */
  vertical?: boolean;
  /** 컬럼 수 */
  columns?: number | 'auto';
  /** 추가 클래스명 */
  className?: string;
  /** label 연결이 필요한 경우 사용 */
  id?: string;
  /** 선택 값 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** 라디오에 추가할 props */
  radioProps?: Partial<React.ComponentProps<typeof Radio>>;
  /** 라디오 스타일 */
  variant?: 'box';
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      label,
      name,
      options,
      value,
      defaultValue,
      disabled,
      hidelabel,
      invalid,
      errorMessageBy,
      vertical,
      columns = 'auto',
      className,
      id,
      onChange,
      radioProps,
      variant,
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    // colummns type에 따른 css변수 추가
    const fixedColumn =
      typeof columns === 'number' ? ({ '--group-columns': columns } as React.CSSProperties) : {};
    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={label}
        aria-invalid={invalid}
        aria-errormessage={errorMessageBy}
        className={clsx(
          styles.root,
          vertical && 'ncp-align-vertical',
          columns !== 'auto' && styles.grid,
          variant === 'box' && styles.radioBox,
          className
        )}
        style={fixedColumn}
        {...props}
      >
        {options.map((option, index) => (
          <Fragment key={option.value}>
            <Radio
              key={option.value}
              name={name}
              value={option.value}
              label={option.label}
              {...(isControlled
                ? { checked: value === option.value }
                : { defaultChecked: defaultValue === option.value })}
              disabled={disabled || option.disabled}
              hideLabel={hidelabel || option.hidelabel}
              invalid={invalid}
              errorMessageBy={errorMessageBy}
              onChange={onChange}
              id={index === 0 ? id : undefined}
              className={clsx(variant === 'box' && styles.radio)}
              {...radioProps}
            />
            {option.radioSlot}
          </Fragment>
        ))}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
