import { forwardRef } from 'react';
import { Link } from './Link';
import { Icon, IconName, IconSize } from '@shared/ui';
import clsx from 'clsx';
import styles from './TextButton.module.scss';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// ButtonProps에서 'type' 속성을 제외
type CommonProps = Omit<ButtonProps, 'type'> & Omit<AnchorProps, 'type'>;

export interface TextButtonProps extends CommonProps {
  /** 링크 경로 */
  href?: string;
  /** 스타일 */
  variant?: 'underline' | 'bold' | 'block';
  /** 텍스트 사이즈 (13px, 14px, 16px, 상속) */
  size?: '1' | '2' | '3' | 'inherit';
  /** 텍스트 컬러 (#22, #57, #8c) */
  color?: 'gray1' | 'gray2' | 'gray3' | 'point' | 'alert' | 'inherit';
  /** prefix 아이콘 설정 */
  prefixIcon?: IconName;
  /** suffix 아이콘 설정 */
  suffixIcon?: IconName;
  /** 아이콘 사이즈 */
  iconSize?: IconSize;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export const TextButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, TextButtonProps>(
  (
    {
      href,
      onClick,
      children,
      variant,
      size = '2',
      color = 'gray1',
      prefixIcon,
      suffixIcon,
      iconSize,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const style = clsx(
      styles.root,
      variant && styles[variant],
      size !== 'inherit' && styles[`size${size}`],
      color && color !== 'inherit' && `ncp-color-${color}`,
      className
    );

    const content = (
      <>
        {prefixIcon && <Icon name={prefixIcon} size={iconSize ?? 'small'} />}
        {(prefixIcon || suffixIcon) && ['medium', 'large'].includes(iconSize ?? '') ? (
          <span className={styles.text}>{children}</span>
        ) : (
          children
        )}
        {suffixIcon && <Icon name={suffixIcon} size={iconSize ?? 'small'} />}
      </>
    );

    // 클릭만 있는 경우 button 렌더링
    if (!href && onClick) {
      return (
        <button
          type="button"
          disabled={disabled}
          className={style}
          onClick={onClick}
          ref={ref as any}
          {...props}
        >
          {content}
        </button>
      );
    }

    // href가 있는 경우 Link 컴포넌트 사용
    return (
      <Link
        href={href || '#'}
        type="inline"
        onClick={onClick as any}
        className={style}
        ref={ref as any}
        {...props}
      >
        {content}
      </Link>
    );
  }
);

TextButton.displayName = 'TextButton';
