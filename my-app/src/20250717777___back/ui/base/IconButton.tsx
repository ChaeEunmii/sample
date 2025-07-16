import { forwardRef } from 'react';
import { Icon, IconName, IconSize } from './Icon';
import clsx from 'clsx';
import styles from './IconButton.module.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 아이콘 버튼명 (접근성 준수를 위해 의미 있는 이름을 사용해야 함) */
  children?: string;
  /** 아이콘 종류 */
  name: IconName;
  /** 아이콘 크기 */
  size?: IconSize;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** aria-pressed 상태 (toggle 버튼에 사용) */
  'aria-pressed'?: boolean;
  /** 아이콘 배지 */
  badge?: React.ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ name, size = 'medium', disabled, className, children, badge, ...props }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        className={clsx(styles.root, size && styles[size], disabled && styles.disabled, className)}
        disabled={disabled}
        aria-label={children}
        {...props}
      >
        <Icon size={size} name={name} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
