import { FreeText } from './FreeText';

import clsx from 'clsx';
import styles from './FreeHeading.module.scss';

type FreeHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';

type FreeHeadingProps<T extends FreeHeadingTag = 'strong'> = FreeText & {
  /** 용도에 따른 HTML 태그 지정 */
  as?: T;
  /** 부모로부터 내려오는 style이 있는 경우 */
  style?: React.CSSProperties;
  /** 텍스트 줄임 여부 */
  ellipsis?: number;
  /** 헤딩 내용 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'style'>;

export const FreeHeading = <T extends FreeHeadingTag = 'strong'>({
  as,
  weight,
  size,
  color,
  style,
  children,
  className,
  ...props
}: FreeHeadingProps<T>) => {
  const Tag = (as || 'strong') as React.ElementType;

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

FreeHeading.displayName = 'FreeHeading';
