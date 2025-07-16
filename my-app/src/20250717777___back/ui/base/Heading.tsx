import clsx from 'clsx';
import styles from './Heading.module.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML 태그 지정 (용도에 따라 지정) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';
  /** 헤딩 유형 (특정 역할이 있는 경우 사용) */
  variant?: string;
  /** 헤딩 크기 (12, 13, 14, 15, 16, 18, 22, 24, 32) */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  /** 텍스트 굵기 */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  /** 텍스트 정렬 */
  align?: 'left' | 'center' | 'right';
  /** 텍스트 줄임 여부 */
  ellipsis?: boolean | number;
  /** 헤딩 내용 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
  /** 좌우 들여쓰기 */
  indent?: boolean;
}

export const Heading = ({
  as = 'strong',
  variant,
  size,
  weight = 'bold',
  align = 'left',
  ellipsis,
  children,
  className,
  indent = false,
  ...props
}: HeadingProps) => {
  const Tag = as as React.ElementType;

  return (
    <Tag
      role="heading"
      className={clsx(
        styles.root,
        variant && styles[variant],
        size && styles[`size${size}`],
        weight && weight !== 'bold' && `ncp-weight-${weight}`,
        align && align !== 'left' && `ncp-text-${align}`,
        indent && styles.indent,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

Heading.displayName = 'Heading';
