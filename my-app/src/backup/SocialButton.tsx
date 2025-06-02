import { forwardRef } from 'react';
import { Icon, IconSize } from '@shared/ui';
import clsx from 'clsx';
import styles from './SocialButton.module.scss';

type ButtonSize = 'large' | 'medium' | 'small' | 'xsmall';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼 스타일 */
  variant?: 'primary' | 'secondary' | 'kakao' | 'naver' | 'phone' | 'toss' | 'apple' | 'facebook';
  /** 버튼 크기 (30px, 36px, 44px, 52px) */
  size?: ButtonSize;
  /** 세로 정렬 여부 */
  vertical?: boolean;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID 값 연결 */
  errorMessageBy?: string;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// 버튼과 아이콘 크기 매핑
const iconSizeMap: Record<ButtonSize, { default: IconSize; iconOnly: IconSize }> = {
  large: { default: 'medium', iconOnly: 'large' },
  medium: { default: 'small', iconOnly: 'medium' },
  small: { default: 'small', iconOnly: 'medium' },
  xsmall: { default: 'small', iconOnly: 'medium' },
};

// 버튼 아이콘종류별로 넣기
const renderChildren = () => {
  return <>버튼아이콘렌더</>;
};

export const SocialButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'kakao',
      size = 'medium',
      vertical = false,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    // 아이콘 크기 설정
    const iconSize = iconSizeMap[size].default;

    return (
      <button
        type="button"
        ref={ref}
        disabled={disabled}
        className={clsx(
          styles.root,
          variant && styles[variant],
          size && size !== 'medium' && styles[size],
          vertical && styles.vertical,
          className
        )}
        // aria-invalid={invalid}
        // aria-errormessage={errorMessageBy}
        onClick={onClick}
        {...props}
      >
        <>
          {variant === 'kakao' ? (
            <Icon name={variant} size={iconSize} />
          ) : (
            <Icon name={'cart'} size={iconSize} />
          )}

          {renderChildren()}
          {/* {prefixIcon && <Icon name={prefixIcon} size={iconSize} />} */}
          {children}
          {/* {suffixIcon && <Icon name={suffixIcon} size={iconSize} />} */}
        </>
      </button>
    );
  }
);

SocialButton.displayName = 'SocialButton';
