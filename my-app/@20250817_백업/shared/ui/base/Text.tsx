import clsx from 'clsx';
import styles from './Text.module.scss';

// div로 설정하는 경우 margin-top:24px, reading 자간 처리
type TextTag = 'p' | 'span' | 'strong' | 'em' | 'label' | 'del' | 'li' | 'div' | 'time';

type TextProps<T extends TextTag = 'p'> = {
  /** 용도에 따른 HTML 태그 지정 */
  as?: T;
  /** 텍스트 크기 (10, 11, 12, 13, 14, 15, 16, 18) */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
  /** 텍스트 굵기 */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  /** 텍스트 컬러 */
  color?: 'gray1' | 'gray2' | 'gray3' | 'point' | 'alert' | 'white' | 'primary';
  /** 텍스트 정렬 */
  align?: 'left' | 'center' | 'right';
  /** 특정 고정스타일인 경우에만 사용 */
  variant?: 'error' | 'desc';
  /** 텍스트 내용 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
  /** 문단 좌우 들여쓰기 */
  indent?: boolean;
  /** 자간 옵션 */
  reading?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export const Text = <T extends TextTag = 'p'>({
  as,
  size,
  weight,
  align,
  color,
  variant,
  children,
  className,
  indent = false,
  reading = false,
  ...props
}: TextProps<T>) => {
  const Tag = (as || 'p') as React.ElementType;

  return (
    <Tag
      className={clsx(
        styles.root,
        size && styles[`size${size}`],
        weight && `ncp-weight-${weight}`,
        align && `ncp-text-${align}`,
        color && `ncp-color-${color}`,
        variant && styles[variant],
        indent && styles.indent,
        reading && styles.reading,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';
