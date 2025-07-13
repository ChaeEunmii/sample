import clsx from 'clsx';
import styles from './Box.module.scss';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 스타일 변형 */
  variant?: 'default' | string;
  /** Box 내용 */
  children: React.ReactNode;
  /** 여백 크기: $padding-styles*/
  size?: '1' | '2' | '3';
  /** 추가 클래스명 */
  className?: string;
}

export const Box: React.FC<BoxProps> = ({
  variant = 'default',
  children,
  size = '1',
  className,
  ...props
}) => {
  return (
    <>
      <div
        className={clsx(
          styles.root,
          variant && styles[variant],
          size && styles[`paddingSize${size}`],
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
