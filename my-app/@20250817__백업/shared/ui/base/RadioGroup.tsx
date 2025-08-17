import { forwardRef, Fragment } from 'react';
import { Radio } from './Radio';
import { Image } from './Image';
import { Text } from './Text';
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
    /** 이미지형인 경우 */
    image?: { src: string; alt?: string };
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
  /** 라디오 스타일
   * box : radio버튼과 텍스트가 박스로 감싸진 형태
   * image : 텍스트 label없이 이미지와 radio 버튼만 있는 형태
   * imageText : 이미지 아래 radio버튼과 텍스트가 있는 형태
   */
  variant?: 'box' | 'image' | 'imageText';
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

    // variant에 따른 label 가공
    const formattedOptions = options.map((option) => {
      if ((variant === 'image' || variant === 'imageText') && option.image) {
        return {
          ...option,
          label: (
            <>
              <Image
                src={option.image.src}
                alt={option.image.alt || ''}
                className={styles.labelImage}
                aria-hidden={variant === 'image' ? 'true' : undefined}
              />
              <Text className={variant === 'image' ? 'ncp-blind' : styles.text}>
                {option.label || option.image.alt}
              </Text>
            </>
          ),
        };
      }
      // box, 기본: label 그대로
      return option;
    });

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
          variant && styles[`group-${variant}`],
          className
        )}
        style={fixedColumn}
        {...props}
      >
        {formattedOptions.map((option, index) => (
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
              className={styles.radio}
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
