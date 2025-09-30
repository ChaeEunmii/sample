import clsx from 'clsx';
import styles from './Box.module.scss';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 스타일 변형 */
  variant?: 'default' | string;
  /** maring(기본 16px)
   * (0px) */
  margin?: '0';
  /** 여백 크기: $padding-styles */
  size?: '1' | '2' | '3' | '4';
  /** Box 내용 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

export const Box: React.FC<BoxProps> = ({
  variant = 'default',
  children,
  size = '1',
  margin,
  className,
  ...props
}) => {
  return (
    <>
      <div
        className={clsx(
          styles.root,
          variant && styles[variant],
          margin && styles[`margin${margin}`],
          size && styles[`padding${size}`],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

Box.displayName = 'Box';
