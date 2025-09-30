import clsx from 'clsx';
import { Stack, Heading, IconButton, Text } from '@shared/ui';
import styles from './Box.module.scss';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 스타일 변형 */
  variant?: 'default';
  /** maring(기본 16px)
   * (0px) */
  margin?: '0';
  /** 여백 크기: $padding-styles (y,x)
   * 1: (16, 16), 2: (24, 16), 3: (20, 16), 4: (24, 24), 5: (0, 16), 6: (12, 16)
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6';
  /** Box 제목 */
  title?: string;
  /** Box 서브문구 */
  description?: string;
  /** 닫기 버튼 클릭 핸들러 */
  onClose?: () => void;
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
  title,
  description,
  onClose,
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
          color && styles[`color-${color}`],
          className
        )}
        {...props}
      >
        {/* 제목과 닫기(삭제)가 있는 경우 */}
        {(title || onClose) && (
          <div className={styles.title}>
            <Heading color="black">{title}</Heading>
            {description && (
              <Text size="3" color="gray3">
                {description}
              </Text>
            )}
            {onClose && (
              <IconButton name="close" size="small" onClick={onClose} className={styles.close}>
                닫기
              </IconButton>
            )}
          </div>
        )}
        {children}
      </div>
    </>
  );
};

Box.displayName = 'Box';
