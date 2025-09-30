import clsx from 'clsx';
import styles from './Text.module.scss';

// div로 설정하는 경우 margin-top:24px, reading 자간 처리
type TextTag = 'p' | 'span' | 'strong' | 'em' | 'label' | 'del' | 'li' | 'div' | 'time';
/** regular:400, medium:500, semibold:600, bold:700 */
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type CustomText = {
  /** 텍스트 두께 */
  weight?: TextWeight;
  /** 텍스트 사이즈 */
  size?: number;
  /** 텍스트, 불릿 컬러 */
  color?: string;
};

type TextProps<T extends TextTag = 'p'> = CustomText & {
  /** 용도에 따른 HTML 태그 지정 */
  as?: T;
  /** 부모로부터 내려오는 style이 있는 경우 */
  style?: React.CSSProperties;
  /** 텍스트(내용) */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'style'>;

export const Text = <T extends TextTag = 'p'>({
  as,
  size,
  weight,
  color,
  children,
  className,
  style,
  ...props
}: TextProps<T>) => {
  const Tag = (as || 'p') as React.ElementType;

  // 내부 스타일 계산
  const computedStyle: React.CSSProperties = {
    ...(weight && { fontWeight: `var(--ncp-font-weight-${weight})` }),
    ...(size && { fontSize: `${size / 16}rem` }),
    ...(color && { color }),
  };

  return (
    <Tag className={clsx(styles.root, className)} style={{ ...computedStyle, ...style }} {...props}>
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';
