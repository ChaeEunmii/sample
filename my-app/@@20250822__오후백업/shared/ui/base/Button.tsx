import { forwardRef } from 'react';
import { Icon, IconName, IconSize } from '@shared/ui';
import clsx from 'clsx';
import styles from './Button.module.scss';

/** 52, 44, 36, 32, 28, 20 */
type ButtonSize = 'large' | 'medium' | 'small' | 'smaller' | 'xsmall' | 'tiny';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼 스타일 */
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'neutral'
    | 'point'
    | 'kakao'
    | 'highfive'
    | 'ghost';
  /** 버튼 크기 (28px, 36px, 44px, 52px) */
  size?: ButtonSize;
  /** prefix 아이콘 설정 */
  prefixIcon?: IconName;
  /** suffix 아이콘 설정 */
  suffixIcon?: IconName;
  /** 아이콘 단독 설정 */
  iconOnly?: IconName;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID 값 연결 */
  errorMessageBy?: string;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 라운드 옵션 */
  round?: boolean;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// 버튼과 아이콘 크기 매핑
const iconSizeMap: Record<ButtonSize, { default: IconSize; iconOnly: IconSize }> = {
  large: { default: 'medium', iconOnly: 'large' },
  medium: { default: 'small', iconOnly: 'medium' },
  small: { default: 'small', iconOnly: 'medium' },
  smaller: { default: 'small', iconOnly: 'medium' },
  xsmall: { default: 'small', iconOnly: 'small' },
  // xxsmall: { default: 'xsmall', iconOnly: 'small' },
  tiny: { default: 'xsmall', iconOnly: 'small' }, // 임의 처리 (아직 케이스 없음)
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'secondary',
      round,
      size = 'medium',
      prefixIcon,
      suffixIcon,
      iconOnly,
      disabled,
      invalid,
      errorMessageBy,
      onClick,
      ...props
    },
    ref
  ) => {
    // 아이콘 크기 설정
    const iconSize = iconOnly ? iconSizeMap[size].iconOnly : iconSizeMap[size].default;

    return (
      <button
        type="button"
        ref={ref}
        disabled={disabled}
        className={clsx(
          styles.root,
          variant && styles[variant],
          size && size !== 'medium' && styles[size],
          round && styles.round,
          className
        )}
        aria-invalid={invalid}
        aria-errormessage={errorMessageBy}
        onClick={onClick}
        {...props}
      >
        {iconOnly ? (
          <>
            <Icon name={iconOnly} size={iconSize} />
            <span className="ncp-blind">{children}</span>
          </>
        ) : (
          <>
            {prefixIcon && <Icon name={prefixIcon} size={iconSize} />}
            {children}
            {suffixIcon && <Icon name={suffixIcon} size={size !== 'large' ? 'xsmall' : iconSize} />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
