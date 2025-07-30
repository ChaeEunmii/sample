import clsx from 'clsx';
import styles from './Box.module.scss';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 스타일 변형 */
  variant?: 'default' | string;
  /** maring(기본 16px)
   * (0px) */
  margin?: '0';
  /** 여백 크기: $padding-styles (y,x)
   * 1: (16, 16), 2: (24, 16), 3: (20, 16), 4: (24, 24)
   */
  size?: '1' | '2' | '3' | '4';
  /** Box 내용 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
  /** 박스 배경색 */
  color?: 'point';
}

export const Box: React.FC<BoxProps> = ({
  variant = 'default',
  children,
  size = '1',
  margin,
  className,
  color,
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
          color && styles[`bg-${color}`],
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
